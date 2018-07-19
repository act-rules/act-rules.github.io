require 'json'

module Jekyll
	class TestcasesGenerator < Generator
		
		safe true
		priority :lowest # so the generator can run after other frame_embed_generator

		GENERATED_TESTCASE_EMBEDS_DIR =  JSON.parse(File.read('package.json'))['testcases-embeds-dir']

		def initialize(config)
			puts 'TestcasesGenerator Invoked'
			super(config)
		end

		def generate(site)
			# hook to liten to site post_write event 
			Hooks.register :site, :post_write do |site|
				make_exportable_testcases()
			end
		end

		def	make_exportable_testcases()
			# placeholder method to generate test cases
			# believe this can happen only after an agreement on unique test case ids
			# as id generation is essential for meeting format requirements
			# https://www.w3.org/WAI/GL/task-forces/conformance-testing/wiki/Testing_Resources
		end
	end
end