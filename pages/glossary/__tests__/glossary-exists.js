const globby = require('globby')
const getMarkdownData = require('../../../utils/get-markdown-data')
const glossaryUsages = require('../../../_data/glossary-usages.json')

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
	test.each(Object.keys(glossaryUsages))('has glossary file `%s`', glossaryKey => {
		const fileExists = glossaryKeys.includes(glossaryKey)
		if (!fileExists) {
			console.log(`glossary missing for ${glossaryKey}, usages below:`)
			console.table(glossaryUsages[glossaryKey])
		}
		expect(fileExists).toBe(true)
	})
})
