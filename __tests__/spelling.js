const retext = require('retext')
const removeMd = require('remove-markdown')
const spell = require('retext-spell')
const redundantAcronyms = require('retext-redundant-acronyms')
const repeated = require('retext-repeated-words')
const urls = require('retext-syntax-urls')
const english = require('retext-english')
const stringify = require('retext-stringify')
const dictionary = require('dictionary-en-us')
const yaml = require('js-yaml')
const fs = require('fs')
const gfmCodeBlocks = require('gfm-code-blocks')
const reporter = require('vfile-reporter')
const ariaQuery = require('aria-query')

const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

const spellOptions = {
	dictionary,
	ignore: getSpellIgnored(),
}

/**
 * Validate `Rules` and `Pages` for spelling/ typos.
 */
describe('Validate body for spelling mistakes', () => {
	/**
	 * Rule markdown files under `_rules`
	 */
	describeRule('spellcheck rules', ruleData => {
		const text = getCuratedMarkdownBody(ruleData.body)
		validateText(text)
	})
	/**
	 * Other markdown files under `pages` directory, eg: `glossary`, `design` etc.,
	 */
	describePage('spellcheck pages', pageData => {
		const text = getCuratedMarkdownBody(pageData.body)
		validateText(text)
	})
})

/**
 * Assert given data
 * @param {data} data parsed markdown content
 */
function validateText(body) {
	test(`has no spelling mistakes`, async () => {
		const { passed, report } = await checkSpelling(body)
		expect(passed, 'Error processing spell check').toBe(true)
		expect(report.messages, reporter(report)).toBeArrayOfSize(0)
	})
}

/**
 * Wraps a retext-spell callback into a promise
 * @param {String} text text
 * @returns {Promise}
 */
const checkSpelling = text => {
	return new Promise((resolve, reject) => {
		retext()
			.use(english)
			.use(redundantAcronyms)
			.use(repeated)
			.use(urls)
			.use(stringify)
			.use(spell, spellOptions)
			.process(text, (err, file) => {
				if (err) {
					reject({
						passed: false,
					})
				}
				resolve({
					passed: true,
					report: file,
				})
			})
	})
}

/**
 * Helper function to curate a given text of code blocks and hyperlink url
 * @param {String} body body of markdown
 * @param {Object} options options
 * @property {Boolean} options.stripCodeBlocks boolean denoting if code blocks should be removed from content
 * @returns {String}
 */
function getCuratedMarkdownBody(body, options = {}) {
	const { stripCodeBlocks = true } = options

	if (stripCodeBlocks) {
		const codeBlocks = gfmCodeBlocks(body)
		body = codeBlocks.reduce((out, { block }) => out.replace(block, ''), body)
	}

	return removeMd(body)
}

/**
 * Get a list of words for which spelling check should be ignored
 * @returns {String[]}
 */
function getSpellIgnored() {
	const ignoreConfigured = yaml.safeLoad(fs.readFileSync('./__tests__/spelling-ignore.yml', 'utf8'))

	/*
	Building spelling exception in the shape FOOxxx where xxx is a number.
	Mostly used for WCAG techniques that have an ID in this shape.

	- WCAG techniques are used all over the place and have an uppercase ID.
	- Same names with lowercase ID is useful for footnote reference style, eg "[tech g12]: …"
	- Adding the IDs "sc" and "usc" which can be use for footnote reference style for
	  SC and Understanding SC document, eg "[sc131]: (link to SC 1.3.1)", "[usc131]: (link to Understanding 1.3.1)"
 */
	const techniquesPrefixes = [`ARIA`, `C`, `F`, `G`, `H`]
	let ignorePrefixes = [...techniquesPrefixes, ...techniquesPrefixes.map(t => t.toLowerCase()), 'sc', 'usc']
	const ignoreExtra = ignorePrefixes.flatMap(prefix => {
		let ignored = []
		for (let i = 1; i < 500; i++) {
			// 500 is an arbitrarily chosen number, good for current purpose and not harmful
			const ignoreID = `${prefix}${i}`
			ignored.push(ignoreID)
		}
		return ignored
	})

	const ignoreAria = ariaQuery.aria.keys()
	const ignoreDom = ariaQuery.dom.keys()
	const ignoreRoles = ariaQuery.roles.keys()

	return [...ignoreConfigured, ...ignoreExtra, ...ignoreAria, ...ignoreDom, ...ignoreRoles]
}
