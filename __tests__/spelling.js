const retext = require('retext')
const spell = require('retext-spell')
const dictionary = require('dictionary-en-us')
const yaml = require('js-yaml')
const fs = require('fs')
const gfmCodeBlocks = require('gfm-code-blocks')
const markdownLinkExtractor = require('markdown-link-extractor')
const reporter = require('vfile-reporter')

const describeRule = require('../test-utils/describe-rule')

const ignore = yaml.safeLoad(fs.readFileSync('./__tests__/spelling-ignore.yml', 'utf8'))
const spellOptions = {
	dictionary,
	ignore,
}

/**
 * Helper function to curate a given text of code blocks and hyperlink url
 * @param {String} body body of markdown
 * @param {Object} options options
 * @returns {String}
 */
const getCuratedMarkdownBody = (body, options) => {
	const { stripCodeBlocks = false, stripHyperlinks = false } = options
	if (stripCodeBlocks) {
		const codeBlocks = gfmCodeBlocks(body)
		body = codeBlocks.reduce((out, { block }) => out.replace(block, ''), body)
	}

	if (stripHyperlinks) {
		const hyperlinks = markdownLinkExtractor(body)
		body = hyperlinks.reduce((out, hyperlink) => out.replace(hyperlink, ''), body)
	}

	return body
}

/**
 * Wraps a retext-spell callback into a promise
 * @param {String} text text
 * @returns {Promise}
 */
const checkSpelling = text => {
	return new Promise((resolve, reject) => {
		retext()
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
 * Assert given data
 * @param {data} data parsed markdown content
 */
const validateMarkdownBody = ({ body }) => {
	const curatedBody = getCuratedMarkdownBody(body, { stripCodeBlocks: true, stripHyperlinks: true })
	test(`has no spelling mistakes in file`, async () => {
		const { passed, report } = await checkSpelling(curatedBody)
		expect(passed, 'Error processing spell check').toBe(true)
		expect(report.messages, reporter(report)).toBeArrayOfSize(0)
	})
}

/**
 * Validate `Rules` and `Pages` for spelling/ typos.
 */
describe('Validate body for spelling mistakes', () => {
	describeRule('spellcheck rules', ruleData => validateMarkdownBody(ruleData))
})
