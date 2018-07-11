# Steps 
# read list of all algorithm keys -> make an object/ hash
# parse each draft/ rule and find usage of algorithm keys -> make an object/ hash
# overwrite respective md files & list of definition at the bottom of the page

module Jekyll
	class DefinitionGenerator < Generator
		
		safe true
		priority :highest

		def initialize(config)
			super(config)
		end

		def generate(site)
			# an objecct which will hold a list of all pages - a page object being it's url, title and key
			hash = Hash.new 

			# hook to listen to page pre_render event
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

			# hook to liten to site post_write event 
			# append definitions to pages
			# append list of usages of definitions in rule pages to definition index page.
			Hooks.register :site, :post_write do |site|
				update_rule_pages_with_definitions(site, hash)
				update_definition_page_with_rule_backlink(site, hash)
			end
		end

		def update_rule_pages_with_definitions(site, hash)
			site.documents.each do |doc|
				if (doc.url['/drafts'] || doc.url['/rules'])
					data = get_definitions_for_document(site, doc, hash)
					append_definition(site.dest + doc.url, data)
				end
			end
		end

		def update_definition_page_with_rule_backlink(site, hash)
			h = Hash.new

			hash.each do |k, v|
				site.documents.each do |doc|
					if (doc.url['/drafts'] || doc.url['/rules'])
						exists = definition_exists(site, doc, k)
						if(exists.length > 0)
							h[k] = h[k] != nil ? h[k] << exists[0] : exists
						end
					end
				end				
			end

			site.pages.each do |page|
				if (page.url['/algorithms'])
					append_backlink_to_rule(site.dest + page.url, h[page.data['key']])
				end
			end
		end



		private 

		def definition_exists(s, d, term)
			out = []
			d.content.each_line.with_index do |line, index|
				if(line['#' + term])
					anchor_url = s.baseurl + d.url
					anchor = "<a class='definition-usage-link' href='#{anchor_url}'>#{ d.data['name'] + ' (' + d.data['slug'] + ')' }</a>"
					out.push(anchor)
				end
			end
			out
		end
	
		def append_backlink_to_rule(url, data)
			if(data)
				to_append_data = "<div class='definition-usages'>"\
					"<h3 class='title'>Usages:</h3>"\
					"#{data}"\
				'</div></div>'
				text = File.read(url)
				new_contents = text.gsub(/<!--PLUGIN::APPEND-BACKLINK-TO-RULE-->/, to_append_data)
				File.open(url, "w") {|file| file.puts new_contents }
			end
		end

		def append_definition(url, data)
			text = File.read(url)
			new_contents = text.gsub(/<!--PLUGIN::APPEND-DEFINITION-->/, data)
			File.open(url, "w") {|file| file.puts new_contents }
		end

		def get_definitions_for_document(site, doc, hash)
			out = []
			doc.content.each_line.with_index do |line, index|
				hash.each do |k, v|
					if(line['#' + k])
						definition = "<div class='definition-item'>"\
							"<a id='#{v["key"]}' href='#{site.baseurl}#{v['url']}'><h3>#{ v['title']}</h3></a>"\
							"#{ get_page_content(site, v['url']) }"\
						'</div></div>'
						# only add if definition does not exist already
						out.push(definition) unless out.include?(definition)
					end
				end
			end

			out.length > 0 ? "<h2>Definitions</h2><div class='definition-list'>#{out.join('\n')}</div>" : ""
		end

		def get_page_content(site, url)
			content = nil
			site.pages.each do |p|
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