require 'securerandom'
require 'fileutils'

module Jekyll
  module FrameEmbed

    class FrameEmbedGenerator < Generator

      safe true
      priority :highest

      KEY_EMBEDS_DIR = '_draft-testcase-embeds/'
      KEY_MATCH_EMBED_START = "<<EMBED_START>>"
      KEY_MATCH_EMBED_END = "<<EMBED_END>>"
      MESSAGES = {
        'WRONG_START' => 'Cannot start with [frame_embed_end]. Please wrap content with ' + KEY_MATCH_EMBED_START + ' and '+ KEY_MATCH_EMBED_END + ' in the right sequence.',
        'WRONG_SEQUENCE' => 'Expects ' + KEY_MATCH_EMBED_START + ' and '+ KEY_MATCH_EMBED_END + ' in the right sequence.',
        'ODD_TAG_COUNT' => 'Expects even pairs of' + KEY_MATCH_EMBED_START + ' and ' + KEY_MATCH_EMBED_END + '. Odd number of tags identified in page '
      }
      INCLUDE_FILE_TYPE = '.html'

      def initialize(p)
        super(p)
      end

      def generate(site)
        # Hooks
        Hooks.register :site, :post_write do |site|
          FileUtils.copy_entry KEY_EMBEDS_DIR, site.dest + '/' + KEY_EMBEDS_DIR
        end
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
      end
  
      def create_frame_embed_content(document, site)  
        doc_name_with_type = document.url.split('/').reverse[0]
        doc_name = doc_name_with_type.gsub(INCLUDE_FILE_TYPE, '')
        doc_path = document.url.sub(doc_name_with_type, '')

        indices = []
        spread_indices = []
        prev_match_line = nil
        is_in_block = false
        hash = Hash.new

        document.content.each_line.with_index do |line, index|
          if line[KEY_MATCH_EMBED_START] || line[KEY_MATCH_EMBED_END] 
            if(prev_match_line === nil && line[KEY_MATCH_EMBED_END])
              fail MESSAGES['WRONG_START']
            elsif(prev_match_line != nil && line[prev_match_line])
              fail MESSAGES['WRONG_SEQUENCE']
            else
              if(line[KEY_MATCH_EMBED_START])
                is_in_block = true
                spread_indices.push(index)
              elsif(line[KEY_MATCH_EMBED_END])
                is_in_block = false
                spread_indices.push(index)
              end
              indices.push(index)
              prev_match_line = line
            end
          elsif 
            if(is_in_block == true)
              spread_indices.push(index)
            end
          end
        end

        if(indices.length % 2 == 0)
          $i = 0
          while $i < indices.length  do
            content_including_tags = document.content.lines[indices[$i]..indices[$i+1]]
            content_excluding_tags = document.content.lines[indices[$i]+1..indices[$i+1]-1]
            file_name = doc_name + '-' + SecureRandom.uuid + INCLUDE_FILE_TYPE
            file_path = site.source + '/' + KEY_EMBEDS_DIR + file_name
            file_url = '../' + KEY_EMBEDS_DIR + file_name
            hash[indices[$i].to_s] = render_block(content_excluding_tags, file_url)
            file_content = get_file_content(content_including_tags)
            make_frame_src_file(file_path, file_content)
            $i += 2
          end
        else 
          fail MESSAGES['ODD_TAG_COUNT'] + document.url
        end

        doc_content = get_md_content(document.content, spread_indices, hash)
        document.content = doc_content
      end

      def render_block(snippet, url)
        out = Liquid::Template.parse('{{code}} <div class="frame-container"> <header><span>Example Output:</span> <a target="_blank" href="{{url}}">Open in a new tab/ window</a> </header> <iframe src="{{url}}"></iframe> </div>').render(
          {
            'code' => snippet,
            'url' => url
          },
          strict_variables: true
        )
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
          if(line[KEY_MATCH_EMBED_START] || line[KEY_MATCH_EMBED_END] || line['```'])
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
    
      def fail(msg)
        Jekyll.logger.error 'Fatal (Frame Embed):', msg
        raise LoadError, msg
      end
      
    end

  end
end
