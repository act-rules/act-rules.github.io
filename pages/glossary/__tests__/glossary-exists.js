const getMarkdownData = require('../../../utils/get-markdown-data')
const glossariesInRules = require('../../../_data/glossaries-in-rules.json')

const glossariesMarkdownData = getMarkdownData(config.markdown.glossary)
const glossaryKeys = glossariesMarkdownData.map(({ frontmatter }) => `#${frontmatter.key}`)

describe('glossary terms used should exist', () => {

	keysOfGlossariesInRules = Object.keys(glossariesInRules)

	
	test.each(keysOfGlossariesInRules)
		('has glossary term `%s`', key => {
			const fileExists = glossaryKeys.includes(key)
			if (!fileExists) {
				console.log(`glossary missing for ${key}, usages below:`)
				console.table(glossariesInRules[key])
			}
			expect(fileExists).toBe(true)
		})
})
