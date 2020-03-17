/**
 * This test checks every link that refers to a glossary term, uses the correct key to reference the glossary term/ definition
 */
const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')
const isUrl = require('is-url')
const getMarkdownAstNodesOfType = require('../utils/get-markdown-ast-nodes-of-type')
const uniqueArray = require('../utils/unique-array')

const whitelist = [
	/^description$/,
	/^#applicability$/,
	/^#expectation(-[1-9][0-9]*)?$/,
	/^#assumptions$/,
	/^#accessibility-support$/,
	/^#background$/,
	/^#test-cases$/,
	/^#passed(-example-[1-9][0-9]*)?$/,
	/^#failed(-example-[1-9][0-9]*)?$/,
	/^#inapplicable(-example-[1-9][0-9]*)?$/,
	/^#glossary$/,
	/^#acknowledgments$/,
]

describe(`Validate glossary references`, () => {
	/**
	 * Rules pages
	 */
	describeRule('Rules', validateGlossaryReferences)

	/**
	 * Other pages
	 * -> in this case we only want to check for glossary terms referenced with glossary pages thyself,
	 *    hence ignoring other pages
	 */
	describePage('Pages', (data, metaData) => {
		const { path } = data
		/**
		 * Only run validation on glossary pages
		 */
		if (!path.includes('/pages/glossary/')) {
			return
		}
		validateGlossaryReferences(data, metaData)
	})
})

function validateGlossaryReferences({ markdownAST }, { glossaryKeys = [] }) {
	/**
	 * get all links
	 * -> eg: [Alpha](https://....) or [Beta](#semantic-role)
	 */
	const pageLinks = getMarkdownAstNodesOfType(markdownAST, 'link').map(({ url }) => url)
	/**
	 * get all definition links
	 * -> eg: [alpha]: https:// 'Link to something' or [beta]: #some-glossary 'Def to some glossary'
	 */
	const definitionLinks = getMarkdownAstNodesOfType(markdownAST, 'definition').map(({ url }) => url)

	/**
	 * get all links that are not a URL (eg: #semantic-role)
	 * -> this test does not cover normal valid URL's (see test - 'link-is-outdated.js')
	 */
	const links = uniqueArray([...pageLinks, ...definitionLinks].filter(link => !isUrl(link)))
		.filter(link => {
			const [firstCharacter] = link.split('')
			return firstCharacter === '#'
		})
		.filter(link => {
			// Ignore internal links that are part of the default rule template
			return whitelist.every(regex => !regex.test(link))
		})

	if (!links || !links.length) {
		return
	}

	test.each(links)('%s', link => {
		const key = link.substr(1)
		const actual = glossaryKeys.includes(key)
		const msg = `Glossary term - [#${key}] does not exist`
		expect(actual, msg).toBe(true)
	})
}
