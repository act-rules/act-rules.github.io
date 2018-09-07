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
		INCLUDE_FILE_TYPE = '.html'
		MESSAGES = {
			'ODD_TAG_COUNT' => 'Expects even pairs of' + KEY_MATCH_CODE_TAG_BACKTICK + ' and ' + KEY_MATCH_CODE_TAG_BACKTICK + '. Odd number of tags identified in page '
		}
		SC_DATA = JSON.parse(File.read('_data/sc-urls.json'))
		
		# Exportable Test-Cases
		EXPORTABLE_TESTS = []
		
		def initialize(config)
			puts 'FrameEmbedGenerator Invoked'
			@markdown = Converters::Markdown.new
			super(config)
		end

		def generate(site)
			# Clean and create testcase embeds directory
			testcases_base_dir = site.source + '/' + PKG['testcases-embeds-dir']
			FileUtils.rm_f Dir.glob("#{testcases_base_dir}/*") unless File.directory?(testcases_base_dir)
			Dir.mkdir(testcases_base_dir) unless File.directory?(testcases_base_dir)

			# Clean and create testcase export directory
			exports_base_dir = site.source + '/' + PKG['testcases-export-dir']
			FileUtils.rm_f Dir.glob("#{exports_base_dir}/*") unless File.directory?(exports_base_dir)
			Dir.mkdir(exports_base_dir) unless File.directory?(exports_base_dir)
			
			# Loop documents and create test case embeds
			site.documents.each do |doc|
				if (doc.url[INCLUDE_FILE_TYPE])
					create_frame_embed_content(doc, site)
				end
			end

			# Hook after post_write and then copy across generated frame embed documents
			Hooks.register :site, :post_write do |site|
				# Copy files from _testcases-embeds to generated site directory
				# this is used for iframe src url generation
				FileUtils.copy_entry PKG['testcases-embeds-dir'], site.dest + '/' + PKG['testcases-embeds-dir']
				# create json and files for exportable test cases
				create_testcases(site)
			end
		end

		def compress(path)
			path.sub!(%r[/$],'')
			archive = File.join(path,File.basename(path))+'.zip'
			FileUtils.rm archive, :force=>true
		
			Zip::File.open(archive, 'w') do |zipfile|
				Dir["#{path}/**/**"].reject{|f|f==archive}.each do |file|
					zipfile.add(file.sub(path+'/',''),file)
				end
			end
		end
		
		def create_testcases(site)
			
			# construct json of output
			result = JSON.pretty_generate({
				name: PKG['name'],
				website: PKG['site-url-prefix'],
				license: PKG['license'],
				description: "Test Cases for #{PKG['name']} rules",
				"a11y-testcases": EXPORTABLE_TESTS
			});

			# write json 
			json_file_path = "#{PKG['testcases-export-dir']}/#{PKG['testcases-export-filename']}"
			FileUtils.mkdir_p(PKG['testcases-export-dir']) unless File.directory?(PKG['testcases-export-dir'])
			write_file(json_file_path, result)

			# copy test case files
			FileUtils.copy_entry PKG['testcases-embeds-dir'], PKG['testcases-export-dir'] + '/assets'

			# create a zip file of the same
			compress(PKG['testcases-export-dir'])
		end

		def get_code_tag_line_indices(document)
			indices = []
			spread_indices = []
			passed_failed_inapplicable_indices = []
			is_odd = false
			document.content.each_line.with_index do |line, index|
				if(line['# Passed'] || line['# Failed'] || line['# Inapplicable'])
					passed_failed_inapplicable_indices.push(index)
				end
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
			return indices, spread_indices, passed_failed_inapplicable_indices
		end

		def get_test_case_type(current_index, p_f_i_indices)
			pass_index = p_f_i_indices[0].to_i
			fail_index = p_f_i_indices[1].to_i
			inapplicable_index = p_f_i_indices[2].to_i
		
			if(current_index > pass_index && current_index < fail_index)
				return 'passed'
			end
			if(current_index > fail_index && current_index < inapplicable_index)
				return 'failed'
			end
			if(current_index > inapplicable_index)
				return 'inapplicable'
			end
		end

		def create_frame_embed_content(document, site)  
			doc_name_with_type = document.url.split('/').reverse[0]
			doc_name = doc_name_with_type.gsub(INCLUDE_FILE_TYPE, '')
			doc_path = document.url.sub(doc_name_with_type, '')
			doc_scs = document["success_criterion"]
			doc_testcases_sc_meta = []
			if(doc_scs != nil)
				doc_scs.each do |sc|
					doc_testcases_sc_meta.push(SC_DATA[sc]["scId"])
				end
			end
		

			all_indices = get_code_tag_line_indices(document)
			indices =  all_indices[0]
			spread_indices = all_indices[1]
			p_f_i_indices = all_indices[2]

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
					test_case_type = get_test_case_type(indices[$i].to_i, p_f_i_indices)
				
					# construct file name
					test_index = testcases[test_case_type.to_s].length + 1
					random_id = "#{test_case_type}_example_#{test_index}"

					# puts test_count[test_case_type]
					file_name = "#{doc_name}_#{test_case_type}_example_#{test_index}#{INCLUDE_FILE_TYPE}"
					# construct file path
					file_path = site.source + '/' + PKG['testcases-embeds-dir'] + file_name
					# construct file url
					file_url = '../' + PKG['testcases-embeds-dir'] + file_name
					# construct file content
					file_content = get_file_content(content_including_tags)

					# constuct a hash which contains all the 
					# code-snippet and iframe embedded
					embedded_testcases_hash[indices[$i].to_s] = render_code_and_frame(file_content, file_url, should_not_render_frame)
					testcase_url = file_url.gsub('../_testcases-embeds/', 'assets/')
					testcase_selector = ["*"]
					if file_content.include? "data-rule-target"
						testcase_selector = ["*[data-rule-target]"]
					end
				
					tc_meta = {}
					tc_meta["selector"] = testcase_selector
					tc_meta["url"] = testcase_url
					tc_meta["successCriteria"] = doc_testcases_sc_meta

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

			# generate document content and re-write with changes
			doc_content = get_md_content(document.content, spread_indices, embedded_testcases_hash)
			document.content = doc_content
		end

		def process_testcases(rule_id, testcases)
			testcases.each do |tc_type, tc_meta|
				tc_meta.each do |meta|
					# create test-case object
					t = {}
					t['url'] = meta["url"]
					t['raw_url'] = "#{PKG['site-url-prefix']}/#{PKG['testcases-export-dir']}#{meta["url"]}" 
					t['success_criteria'] = meta["successCriteria"]
					t[tc_type.to_s] = meta["selector"]
					t['expected_result'] = tc_type.to_s
					t['rule_id'] = rule_id
					t['rule_page'] = "#{PKG['site-url-prefix']}/rules/#{rule_id}.html"
					# push to exports
					EXPORTABLE_TESTS.push(t)
				end
			end
		end
		
		def get_highlight_lang(opening_tag)
			lang = 'html'
			language_tag = opening_tag.gsub(KEY_MATCH_CODE_TAG_BACKTICK, '')
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