module Jekyll
	module GlossaryEmbed

		class GlossaryGenerator < Generator
			
			safe true
			priority :highest

			# read list of all algorithm keys -> make an object/ hash
			# parse each draft/ rule and find usage of algorithm keys -> make an object/ hash
			# overwrite respective md files with definitions yml & list of key terms at the bottom
			def initialize()
			end

		end

	end
end