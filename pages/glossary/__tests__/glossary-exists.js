const { config } = require('../../../package.json')
const getMarkdownData = require('../../../utils/get-markdown-data')
const glossariesInRules = require('../../../_data/glossaries-in-rules.json')
const glossariesInGlossaries = require('../../../_data/glossaries-in-glossaries.json')

const glossariesMarkdownData = getMarkdownData(config.markdown.glossary)
const glossaryKeys = glossariesMarkdownData.map(({ frontmatter }) => `#${frontmatter.key}`)

/**
 * Helper fn to run `test.each` on a given iteraable object
 * @param {Array<String>} glossaries keys of glossary terms
 */
const glossariesExists = (glossaries) => {
	test.each(glossaries)
		('has glossary term `%s`', key => {
			const fileExists = glossaryKeys.includes(key)
			expect(
				fileExists,
				`${key} glossary definition missing`
			).toBe(true)
		})
}

describe('Glossary terms should exist', () => {

	describe(`Terms used in rules`, () => {
		keysOfGlossariesInRules = Object.keys(glossariesInRules)
		glossariesExists(keysOfGlossariesInRules)
	})

	describe(`Terms used in glossaries`, () => {
		keysOfGlossariesInGlossaries = Object.values(glossariesInGlossaries).reduce((out, values) => {
			for (const { key }  of values) {
				if (!out.includes(key)) {
					out.push(key)
				}
			}
			return out
		}, [])
		glossariesExists(keysOfGlossariesInGlossaries)
	})
})
