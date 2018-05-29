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
          process_posts(site, hash)
				end
			end

			def process_posts(site, glossary_hash)
				site.documents.each do |doc|
					if (doc.url['/drafts'] || doc.url['/rules'])
						glossary_data = get_glossary_for_document(site, doc, glossary_hash)
						
						file_url = site.dest + doc.url
						append_glossary(file_url, glossary_data)
						doc.content = doc.content << glossary_data
						doc.content
          end
        end
			end

			private 
		
			def append_glossary(url, data)
				text = File.read(url)
				new_contents = text.gsub(/<!--INSERT-GLOSSARY-HERE-->/, data)
				File.open(url, "w") {|file| file.puts new_contents }
			end

			def get_glossary_for_document(s, d, gh)
				out = ""
				d.content.each_line.with_index do |line, index|
					gh.each do |k, v|
						gk = '#' + k
						if(line[gk])
							g_out = "<div class='glossary-item'>"\
								"<a id='#{v["key"]}' href='#'></a>"\
								"<h3 class='title'>#{ v['title']}</h3>"\
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