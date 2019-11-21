const retext = require('retext')
const removeMd = require('remove-markdown')
const spell = require('retext-spell')
const dictionary = require('dictionary-en-us')
const yaml = require('js-yaml')
const fs = require('fs')
const gfmCodeBlocks = require('gfm-code-blocks')
const reporter = require('vfile-reporter')

const describeRule = require('../test-utils/describe-rule')

const ignoreWords = yaml.safeLoad(fs.readFileSync('./__tests__/spelling-ignore.yml', 'utf8'))
// https://www.w3.org/WAI/WCAG21/Techniques
const ignoreTechniques = [`ARIA`, `C`, `F`, `G`, `H`].reduce((out, techniquePrefix) => {
	let i = 1
	while (i < 500) {
		// Arbitrarily chosen number
		const technique = `${techniquePrefix}${i}`
		out.push(technique)
		i++
	}
	return out
}, [])
const spellOptions = {
	dictionary,
	ignore: [...ignoreWords, ...ignoreTechniques],
}

/**
 * Helper function to curate a given text of code blocks and hyperlink url
 * @param {String} body body of markdown
 * @param {Object} options options
 * @property {Boolean} options.stripCodeBlocks boolean denoting if code blocks should be removed from content
 * @returns {String}
 */
const getCuratedMarkdownBody = (body, options = {}) => {
	const { stripCodeBlocks = true } = options

	if (stripCodeBlocks) {
		const codeBlocks = gfmCodeBlocks(body)
		body = codeBlocks.reduce((out, { block }) => out.replace(block, ''), body)
	}

	return removeMd(body)
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
	test(`has no spelling mistakes`, async () => {
		const curatedBody = getCuratedMarkdownBody(body)
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
