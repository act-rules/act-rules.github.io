def append_last_modified_timestamp(item)
	# get the current last modified time
	timestamp = File.mtime(item.path)
	# inject modification_time to front matter
	item.data['last-modified-timestamp'] = timestamp
end

# Reference to all hooks
# https://jekyllrb.com/docs/plugins/#hooks

# Hook for all the documents
Jekyll::Hooks.register :documents, :pre_render do |item|
	append_last_modified_timestamp(item)
end

# Hook for all the pages
Jekyll::Hooks.register :pages, :pre_render do |item|
	append_last_modified_timestamp(item)
end

# Hook for all the posts
Jekyll::Hooks.register :posts, :pre_render do |item|
	append_last_modified_timestamp(item)
end