require 'securerandom'
require 'fileutils'
require 'json'

module Jekyll
  module FrameEmbed

    class FrameEmbedGenerator < Generator

      safe true
      priority :highest

      KEY_EMBEDS_DIR =  JSON.parse(File.read('package.json'))['testcases-embeds-dir']
			KEY_MATCH_CODE_TAG_BACKTICK = '```'
			KEYWORD_NO_FRAME_IN_MARKDOWN = 'no-frame'
      INCLUDE_FILE_TYPE = '.html'
      MESSAGES = {
        'ODD_TAG_COUNT' => 'Expects even pairs of' + KEY_MATCH_CODE_TAG_BACKTICK + ' and ' + KEY_MATCH_CODE_TAG_BACKTICK + '. Odd number of tags identified in page '
      }
      
			def initialize(config)
				puts 'FrameEmbedGenerator Invoked'
        @markdown = Converters::Markdown.new
				super(config)
      end

      def generate(site)

        # Clean directory
        base_dir = site.source + '/' + KEY_EMBEDS_DIR
        FileUtils.rm_f Dir.glob("#{base_dir}/*")

        # Create empty directory
        Dir.mkdir(base_dir) unless File.exists?(base_dir)
        # Loop documents and create test case embeds
        site.documents.each do |doc|
          if (doc.url[INCLUDE_FILE_TYPE])
            create_frame_embed_content(doc, site)
          end
        end

        # Hook after post_write and then copy across generated frame embed documents
        Hooks.register :site, :post_write do |site|
          FileUtils.copy_entry KEY_EMBEDS_DIR, site.dest + '/' + KEY_EMBEDS_DIR
        end

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
  
      def create_frame_embed_content(document, site)  
        doc_name_with_type = document.url.split('/').reverse[0]
        doc_name = doc_name_with_type.gsub(INCLUDE_FILE_TYPE, '')
        doc_path = document.url.sub(doc_name_with_type, '')
        all_indices = get_code_tag_line_indices(document)
        indices =  all_indices[0]
        spread_indices = all_indices[1]
        hash = Hash.new

        if(indices.length % 2 == 0)
          $i = 0
          while $i < indices.length do
						content_including_tags = document.content.lines[indices[$i]..indices[$i+1]]
						# read markdown declaration and look for any keywords to skip iframe generation (if specified)
						should_not_render_frame = content_including_tags[0][KEYWORD_NO_FRAME_IN_MARKDOWN]

						file_name = doc_name + '-' + SecureRandom.uuid + INCLUDE_FILE_TYPE
						file_path = site.source + '/' + KEY_EMBEDS_DIR + file_name
						file_url = '../' + KEY_EMBEDS_DIR + file_name
						file_content = get_file_content(content_including_tags)
						hash[indices[$i].to_s] =  render_code_and_frame(file_content, file_url, should_not_render_frame)
						make_frame_src_file(file_path, file_content)

            $i += 2
          end
        else 
          fail MESSAGES['ODD_TAG_COUNT'] + document.url
        end

        doc_content = get_md_content(document.content, spread_indices, hash)
        document.content = doc_content
      end
      
      def get_highlight_lang(opening_tag)
        lang = 'html'
        language_tag = opening_tag.gsub(KEY_MATCH_CODE_TAG_BACKTICK, '')
        lang = language_tag.length <= 0 ? lang : language_tag.downcase
        lang
      end

			def render_code_and_frame(snippet, url, no_frame)
				code = "<div class='code-wrapper'> <figcaption>Code Snippet:</figcaption> {% highlight html %} #{snippet} {% endhighlight %} </div>"
				frame = no_frame ? "<div class='frame-container'> </div>" : "<div class='frame-container'> <header><span>Example Output:</span> <a target='_blank' href='#{url}'>Open in a new tab/ window</a> </header> <iframe src='#{url}'></iframe> </div>"
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

      def make_frame_src_file(
        file_name, 
				file_content) 
				file_mode = 'w+'
				
				File.open(file_name, file_mode) do |f|     
          f.write(file_content) 
        end
      end

      private
    
      def fail(msg)
        Jekyll.logger.error 'Fatal (Frame Embed):', msg
        raise LoadError, msg
      end
      
    end

  end
end
