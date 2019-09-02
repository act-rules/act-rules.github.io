const retext = require('retext')
const spell = require('retext-spell')
const dictionary = require('dictionary-en-gb')
const reporter = require('vfile-reporter')
const gfmCodeBlocks = require('gfm-code-blocks')
const markdownLinkExtractor = require('markdown-link-extractor')

const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

const ignoreSpellcheckList = ['SVG', 'DOM', 'href']
const spellOptions = {
	dictionary,
	ignore: ignoreSpellcheckList,
}

const getCurateMarkdownBody = (body, options) => {
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

const checkSpelling = text => {
	return new Promise((resolve, reject) => {
		retext()
			.use(spell, spellOptions)
			.process(text, (err, file) => {
				if (err) {
					reject([false, error])
				}
				resolve([true])
			})
	})
}

const validateMarkdownBody = async ({ body }) => {}

/**
 * Validate `Rules` and `Pages` for spelling/ typos.
 */
describePage('Validate text for spelling mistakes', () => {
	describeRule('spellcheck rules', ruleData => async ({ body }) => {
		const curatedBody = getCurateMarkdownBody(body, { stripCodeBlocks: true, stripHyperlinks: true })
		expect.assertions(1)
		const [result, error] = await checkSpelling(curatedBody)
		expect(result).toEqual(true)
	})
})
