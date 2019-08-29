const globby = require('globby')
const getMarkdownData = require('../../../utils/get-markdown-data')
const glossariesInRules = require('../../../_data/glossaries-in-rules.json')

const glossaryKeys = globby
	.sync([`./pages/glossary/*.md`])
	.map(path => getMarkdownData(path))
	.map(data => {
		const {
			frontmatter: { key },
		} = data
		return `#${key}`
	})

describe('all referenced glossary terms exist', () => {
	test.each(Object.keys(glossariesInRules))('has glossary file `%s`', glossaryKey => {
		const fileExists = glossaryKeys.includes(glossaryKey)
		if (!fileExists) {
			console.log(`glossary missing for ${glossaryKey}, usages below:`)
			console.table(glossariesInRules[glossaryKey])
		}
		expect(fileExists).toBe(true)
	})
})
