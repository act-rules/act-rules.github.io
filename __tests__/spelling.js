const retext = require('retext')
const spell = require('retext-spell')
const dictionary = require('dictionary-en-gb')
const gfmCodeBlocks = require('gfm-code-blocks')
const markdownLinkExtractor = require('markdown-link-extractor')
const reporter = require('vfile-reporter')

const describeRule = require('../test-utils/describe-rule')
// const describePage = require('../test-utils/describe-page')

const ignoreSpellcheckList = [
	'SVG', 'DOM',
	'href', 'html', 'iframe', 'iframes', 'img', 'url', 'src', 'frameset', 'URI', 'UA/AT', 'WCAG2', 'CSS3', 'UA', 'RGAA',
	'http', 'https', 'github.com', 'testrunner', 'wcag-em-report-tool', 'www.w3.org', 'eval', 'APIs', 'html52',
	'h1', 'h1-h6',
	'WCAG', 'WAI', 'MDN', 'BCP', 'HTML5', 'JSON', 'JSON-LD', 'PDFs',
	'Focusable', 'focusable', 'unfocusable', 'tabindex', 'whitespace', 'namespaces', 'UI', 'webpage', 'Autocomplete', 'color',
	'aria-labelledby', 'autofill-field',
	'combobox', 'spinbutton', 'gridcell', 'menuitem', 'menuitemcheckbox', 'menuitemradio', 'searchbox', 'treeitem', 'listbox', 'textbox', 'autocomplete', 'textarea', 'autoplay', 'tristate', 'scrollbar', 'viewport',
	'figcaption',
	'aria-errormessage', 'aria-rowindex', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-dropeffect',
	'lang', 'xml:lang', 'subtag', 'subtags',
	'voiceover',
	'http-equiv',
	'ARIA1', 'ARIA5', 'ARIA6', 'ARIA7', 'ARIA8', 'ARIA10', 'ARIA12', 'ARIA14', 'ARIA16',
	'F10', 'F30', 'F38', 'F40', 'F41', 'F65', 'F89',
	'G8', 'G21', 'G78', 'G87', 'G88', 'G93', 'G95', 'G108', 'G130', 'G131', 'G158', 'G159', 'G162', 'G166', 'G173', 'G203',
	'H25', 'H36', 'H37', 'H42', 'H44', 'H67', 'H93', 'H94', 'H95', 'H96',
	'ozplayer', 'level2-frame1', 'level1-frame2', 'level1-frame1', 'XYZ',
	/**
	 * Looks like `dictionary-en-gb` does not support below words, so ignoring them as well
	 */
	'Programmatically', 'programmatically', 'personalisation'
]

const spellOptions = {
	dictionary,
	ignore: ignoreSpellcheckList,
}

/**
 * Helper function to curate a given text of code blocks and hyperlink url
 * @param {String} body body of markdown
 * @param {Object} options options
 * @returns {String}
 */
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

/**
 * Wraps a retext-spell callback into a promise
 * @param {String} text text
 * @returns {Promise}
 */
const checkSpelling = (text) => {
	return new Promise((resolve, reject) => {
		retext()
			.use(spell, spellOptions)
			.process(text, (err, file) => {
				if (err) {
					reject({
						passed: false
					})
				}
				resolve({
					passed: true,
					report: file
				})
			})
	})
}


/**
 * Assert given data
 * @param {data} data parsed markdown content
 */
const validateMarkdownBody = ({ body }) => {
	const curatedBody = getCurateMarkdownBody(body, { stripCodeBlocks: true, stripHyperlinks: true })
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
	// describePage('spellcheck pages', pageData => validateMarkdownBody(pageData))
})
