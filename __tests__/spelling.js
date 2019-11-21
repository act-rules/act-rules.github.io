const retext = require('retext')
const removeMd = require('remove-markdown')
const spell = require('retext-spell')
const indefiniteArticle = require('retext-indefinite-article')
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

const describeRule = require('../test-utils/describe-rule')

const ignore = yaml.safeLoad(fs.readFileSync('./__tests__/spelling-ignore.yml', 'utf8'))
const spellOptions = {
	dictionary,
	ignore,
}

/**
 * Validate `Rules` and `Pages` for spelling/ typos.
 */
describe('Validate body for spelling mistakes', () => {
	/**
	 * Rule pages
	 */
	describeRule('spellcheck rules', ruleData => {
		const text = getCuratedMarkdownBody(ruleData.body)
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
			.use(indefiniteArticle)
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
