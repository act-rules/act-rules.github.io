require 'fileutils'
require 'json'
require 'zip'

module Jekyll
	class CodeSnippetFrameAndTestCasesGenerator < Generator

		safe true
		priority :lowest

		PKG = JSON.parse(File.read('package.json'))
		KEY_MATCH_CODE_TAG_BACKTICK = '```'
		KEYWORD_NO_FRAME_IN_MARKDOWN = '(no-iframe)'
		MESSAGES = {
			'ODD_TAG_COUNT' => 'Expects even pairs of' + KEY_MATCH_CODE_TAG_BACKTICK + ' and ' + KEY_MATCH_CODE_TAG_BACKTICK + '. Odd number of tags identified in page '
		}
		SC_DATA = JSON.parse(File.read('_data/sc-urls.json'))
		
		# Export all rule ids
		# this will be essential for generating a mapping between rules from auto-wcag to respective test engines/ tools
		EXPORTABLE_RULES = {}
		# Exportable Test-Cases
		EXPORTABLE_TESTS = []
		
		def initialize(config)
			puts 'FrameEmbedGenerator Invoked'
			@markdown = Converters::Markdown.new
			super(config)
		end

		def generate(site)
			# Clean and create testcase embeds directory
			testcases_base_dir = site.source + '/' + PKG['config']['testcases-embeds-dir']
			FileUtils.rm_f Dir.glob("#{testcases_base_dir}/*") unless File.directory?(testcases_base_dir)
			Dir.mkdir(testcases_base_dir) unless File.directory?(testcases_base_dir)

			# Clean and create testcase export directory
			exports_base_dir = site.source + '/' + PKG['config']['testcases-export-dir']
			FileUtils.rm_f Dir.glob("#{exports_base_dir}/*") unless File.directory?(exports_base_dir)
			Dir.mkdir(exports_base_dir) unless File.directory?(exports_base_dir)
			
			# Loop documents and create test case embeds
			site.documents.each do |doc|
				if (doc.url['.html'])
					create_frame_embed_content(doc, site)
				end
			end

			# Hook after post_write and then copy across generated frame embed documents
			Hooks.register :site, :post_write do |site|
				# Copy files from _testcases-embeds to generated site directory
				# this is used for iframe src url generation
				FileUtils.copy_entry PKG['config']['testcases-embeds-dir'], site.dest + '/' + PKG['config']['testcases-embeds-dir']
				# create json and files for exportable test cases
				create_testcases(site)
			end
		end
		
		def create_testcases(site)
			# create directory if not exists
			FileUtils.mkdir_p(PKG['config']['testcases-export-dir']) unless File.directory?(PKG['config']['testcases-export-dir'])

			# write rules json
			rules_result = JSON.pretty_generate({
				name: "#{PKG['name']} rules",
				website: "#{PKG['config']['site-url-prefix']}/rules.html",
				description: "List of rules in auto wcag which can be mapped against testing engine via test runner",
				"a11y-rules": EXPORTABLE_RULES
			})
			write_file("#{PKG['config']['testcases-export-dir']}/#{PKG['config']['rules-export-filename']}", rules_result)

			# write testcases json 
			testcases_result = JSON.pretty_generate({
				"@context": PKG['config']['@context'],
				name: "#{PKG['name']} test cases",
				website: PKG['config']['site-url-prefix'],
				license: PKG['license'],
				description: "Test Cases of #{PKG['name']} rules",
				"a11y-testcases": EXPORTABLE_TESTS
			});
			write_file("#{PKG['config']['testcases-export-dir']}/#{PKG['config']['testcases-export-filename']}", testcases_result)

			# copy test case files
			FileUtils.copy_entry PKG['config']['testcases-embeds-dir'], PKG['config']['testcases-export-dir'] + '/assets'
			# copy test case assets
			FileUtils.copy_entry PKG['config']['testcases-assets-dir'], PKG['config']['testcases-export-dir'] + '/' + PKG['config']['testcases-assets-dir']
			# copy to site directory
			FileUtils.copy_entry PKG['config']['testcases-export-dir'], site.dest + '/' + PKG['config']['testcases-export-dir']
		end

		def get_code_tag_line_indices(document)
			indices = []
			spread_indices = []
			is_odd = false
			document.content.each_line.with_index do |line, index|
				if line[KEY_MATCH_CODE_TAG_BACKTICK]
					if is_odd
						spread_indices.push(index)
					end
					is_odd ^= true
					indices.push(index)
				end
				if is_odd
					spread_indices.push(index)
				end
			end
			return indices, spread_indices
		end

		def get_testcase_type(index, document)
			last_index = 0
			found_type = nil
			while (found_type == nil)
				line_content = document.content.lines[index]
				if(line_content['#### Passed example'])
					found_type = 'passed'
				end
				if(line_content['#### Failed example'])
					found_type = 'failed'
				end
				if(line_content['#### Inapplicable example'])
					found_type = 'inapplicable'
				end
				index -= 1
			end
			found_type
		end

		def create_frame_embed_content(document, site)  
			doc_name_with_type = document.url.split('/').reverse[0]
			doc_name = doc_name_with_type.gsub('.html', '').gsub('.svg', '')
		
			all_indices = get_code_tag_line_indices(document)
			indices =  all_indices[0]
			spread_indices = all_indices[1]

			embedded_testcases_hash = Hash.new
			testcases = {
				'passed' => [],
				'failed' => [],
				'inapplicable' => []
			}

			# iterate through each index and construct content
			# ensure that indices exists in pair, if there is a start, there be an end :)
			if(indices.length % 2 == 0)
				
				$i = 0
				while $i < indices.length do

					# get content with in markdown backticks (including)
					content_including_tags = document.content.lines[indices[$i]..indices[$i+1]]
					# read markdown declaration and look for any keywords to skip iframe generation (if specified)
					should_not_render_frame = content_including_tags[0][KEYWORD_NO_FRAME_IN_MARKDOWN]
					test_case_type = get_testcase_type(indices[$i], document)
				
					# construct file name
					test_index = testcases[test_case_type.to_s].length + 1

					# puts test_count[test_case_type]
					file_type = get_highlight_lang(content_including_tags[0]).gsub(/[[:space:]]/, '')
					file_name = "#{doc_name}_#{test_case_type}_example_#{test_index}.#{file_type}"
					# construct file path
					file_path = site.source + '/' + PKG['config']['testcases-embeds-dir'] + file_name
					# construct file url
					file_url = '../' + PKG['config']['testcases-embeds-dir'] + file_name
					# construct file content
					file_content = get_file_content(content_including_tags)

					# constuct a hash which contains all the 
					# code-snippet and iframe embedded
					embedded_testcases_hash[indices[$i].to_s] = render_code_and_frame(file_content, file_url, should_not_render_frame)
					testcase_url = file_url.gsub('../_testcases-embeds/', 'assets/')
				
					tc_meta = {}
					tc_meta["url"] = testcase_url
					testcases[test_case_type.to_s].push(tc_meta)

					# write iframe content to file
					write_file(file_path, file_content)

					# jump to next index
					$i += 2
				end
			else 
				fail MESSAGES['ODD_TAG_COUNT'] + document.url
			end

			# construct exportable testcases hash
			process_testcases(doc_name.to_s, testcases)

			# construt exportable rules  hash
			process_rules(doc_name.to_s)

			# generate document content and re-write with changes
			doc_content = get_md_content(document.content, spread_indices, embedded_testcases_hash)
			document.content = doc_content
		end

		def process_testcases(rule_id, testcases)
			testcases.each do |tc_type, tc_meta|
				tc_meta.each do |meta|
					# create test-case object
					t = {}
					t['url'] = "#{PKG['config']['site-url-prefix']}/#{PKG['config']['testcases-export-dir']}#{meta["url"]}" 
					t['expected'] = tc_type.to_s
					t['ruleId'] = rule_id
					t['rulePage'] = "#{PKG['config']['site-url-prefix']}/rules/#{rule_id}.html"
					# push to export tests
					EXPORTABLE_TESTS.push(t)
				end
			end
		end

		def process_rules(rule_id)
			EXPORTABLE_RULES[rule_id] = ['List of rules to be mapped to test engine']
		end
		
		def get_highlight_lang(opening_tag)
			lang = 'html'
			language_tag = opening_tag.gsub(KEY_MATCH_CODE_TAG_BACKTICK, '').gsub(KEYWORD_NO_FRAME_IN_MARKDOWN, '')
			lang = language_tag.length <= 0 ? lang : language_tag.downcase
			lang
		end

		def render_code_and_frame(snippet, url, no_frame)
			title_code_snippet = "<span>Code Snippet: </span>"
			titie_example_output = "<span>Example Output: </span>"
			open_new_window_anchor = "<a style='float:right' target='_blank' href='#{url}'>Open in a new tab/ window</a>"
			title_figcaption = no_frame ? "#{title_code_snippet} #{open_new_window_anchor}" : "#{title_code_snippet}"
			code = "<div class='code-wrapper'> <figcaption style='clear:both'>#{title_figcaption}</figcaption> {% highlight html %} #{snippet} {% endhighlight %} </div>"
			frame = no_frame ? "" : "<div class='frame-container'> <header>#{titie_example_output} #{open_new_window_anchor} </header> <iframe src='#{url}'></iframe> </div>"
			out = "<div class='embed-wrapper'>"\
					"#{code}"\
					"#{frame}"\
				'</div>'
			out
		end

		def get_md_content(c, s_i, h)
			out = []
			c.each_line.with_index do |line, index|
				if(s_i.include? index)
					if(h[index.to_s] != nil)
						val =  h[index.to_s]
						out.push(val)
					end
				elsif
					out.push(line)
				end
			end
			out.join
		end

		def get_file_content(c)
			# NOTE: assumption here that only html is present
			out = []
			c.each.with_index do |line, index|
				if(line[KEY_MATCH_CODE_TAG_BACKTICK])
					# ignore
				elsif
					out.push(line)
				end
			end
			out.join
		end

		private
		
		def write_file(file_path, file_content)
			File.open(file_path, 'w+') do |f|
				f.write(file_content)
			end
		end
	
		def fail(msg)
			Jekyll.logger.error 'Fatal (Frame Embed):', msg
			raise LoadError, msg
		end
		
	end
end