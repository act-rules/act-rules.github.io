module Jekyll
	module GlossaryEmbed

		class GlossaryGenerator < Generator
			
			safe true
			priority :highest

			# Steps 
			# read list of all algorithm keys -> make an object/ hash
			# parse each draft/ rule and find usage of algorithm keys -> make an object/ hash
			# overwrite respective md files with definitions yml & list of key terms at the bottom

			def initialize(config)
				super(config)
			end

			def generate(site)
				hash = Hash.new
				Hooks.register :pages, :pre_render do |page|
					if (page.url['/algorithms'])
						page_meta = page.data
						page_key = (page_meta['key'] && page_meta['key'].length > 0) ? page_meta["key"] : nil
						if(page_key)
							hash[page_key] = {
								'url' => page.url,
								'title' => page_meta['title'],
								'key' => page_meta['key']
							}
						end
					end
				end
				Hooks.register :site, :post_write do |site|
					update_rules_drafts_with_glossary(site, hash)
					update_algorithm_with_usages(site, hash)
				end
			end

		

			def update_rules_drafts_with_glossary(site, glossary_hash)
				site.documents.each do |doc|
					if (doc.url['/drafts'] || doc.url['/rules'])
						glossary_data = get_glossary_for_document(site, doc, glossary_hash)
						append_glossary(site.dest + doc.url, glossary_data)
          end
        end
			end

			def update_algorithm_with_usages(site, glossary_hash)
				h = Hash.new
				glossary_hash.each do |k, v|
					site.documents.each do |doc|
						if (doc.url['/drafts'] || doc.url['/rules'])
							term_exists_in_docs = glossary_term_exists(site, doc, k)
							if(term_exists_in_docs.length > 0)
								h[k] = h[k] != nil ? h[k] << term_exists_in_docs[0] : term_exists_in_docs
							end
						end
					end				
				end
				site.pages.each do |page|
					if (page.url['/algorithms'])
						append_to_glossary_usage_in_rule(site.dest + page.url, h[page.data['key']])
					end
				end
			end

			private 

			def glossary_term_exists(s, d, term)
				out = []
				d.content.each_line.with_index do |line, index|
					if(line['#' + term])
						anchor_url = s.baseurl + d.url
						anchor = "<a class='glossary-usage-link' href='#{anchor_url}'>#{ d.data['name'] + ' (' + d.data['slug'] + ')' }</a>"
						out.push(anchor)
					end
				end
				out
			end
		
			def append_to_glossary_usage_in_rule(url, data)
				if(data)
					text = File.read(url)
					to_append_data = "<div class='glossary-usages'>"\
						"<h3 class='title'>Usages:</h3>"\
						"#{data.join}"\
					'</div></div>'
					new_contents = text.gsub(/<!--INSERT-GLOSSARY-USAGE-HERE-->/, to_append_data)
					File.open(url, "w") {|file| file.puts new_contents }
				end
			end

			def append_glossary(url, data)
				text = File.read(url)
				new_contents = text.gsub(/<!--INSERT-GLOSSARY-HERE-->/, data)
				File.open(url, "w") {|file| file.puts new_contents }
			end

			def get_glossary_for_document(s, d, gh)
				out = ""
				d.content.each_line.with_index do |line, index|
					gh.each do |k, v|
						if(line['#' + k])
							g_out = "<div class='glossary-item'>"\
								"<a id='#{v["key"]}' href='#{s.baseurl}#{v['url']}'><h3>#{ v['title']}</h3></a>"\
								"#{ get_page_content(s, v['url']) }"\
							'</div></div>'
							out = out << g_out
						end
					end
				end
				out.length > 0 ? "<h2>Definitions</h2><div class='glossary-list'>#{out}</div>" : ""
			end

			def get_page_content(s, url)
				content = nil
				s.pages.each do |p|
					if(p.url == url)
						content = p.content
						break
					end
				end
				content
			end

			def fail(msg)
        Jekyll.logger.error 'Fatal (Frame Embed):', msg
        raise LoadError, msg
      end
      
		end

	end
end