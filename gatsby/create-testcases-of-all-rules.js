/**
 * Create test case files & meta data
 * -> create test cases files into `./public/testcases/`
 * -> copy `./test-assets/*` into `./public`
 * -> create `testcases.json` into `./public`
 */
const fs = require('fs')
const objectHash = require('object-hash')
const codeBlocks = require('gfm-code-blocks')
const fastmatter = require('fastmatter')
const {
	www: { url, baseDir },
} = require('./../package.json')
const createFile = require('../build/create-file')
const getAllMatchesForRegex = require('./get-all-matches-for-regex')
const queries = require('./queries')
const regexps = require('./reg-exps')
const copyTestcasesAssets = require('./copy-testcases-assets')
const createTestcasesJson = require('./create-testcases-json')
const createTestcasesOfRuleOfEmReportTool = require('./create-testcases-of-rule-of-em-report-tool')

const createTestcasesOfAllRules = options => {
	const { graphql } = options

	return graphql(queries.getAllRules).then(async ({ errors, data }) => {
		if (errors) {
			Promise.reject(errors)
		}

		let allRulesTestcases = []

		/**
		 * iterate all rule pages
		 * -> get code snippets
		 * -> and their relevant titles
		 */
		const allRulePages = data.allMarkdownRemark.edges

		allRulePages.forEach(markdownPage => {
			const { node } = markdownPage
			const { rawMarkdownBody, frontmatter, fields } = node
			const { fastmatterAttributes } = fields
			const {
				accessibility_requirements: ruleAccessibilityRequirements,
			} = JSON.parse(fastmatterAttributes)
			const { name: ruleName } = frontmatter
			const { slug } = fields
			const ruleId = slug.replace('rules/', '')
			const codeTitles = getAllMatchesForRegex(
				regexps.testcaseTitle,
				rawMarkdownBody
			)
			const codeSnippets = codeBlocks(rawMarkdownBody)

			if (codeTitles.length !== codeSnippets.length) {
				throw new Error(
					`Number of matching titles for code snippets is wrong. Check markdown '${ruleName}' for irregularities. Slug: '${slug}'`
				)
			}

			/**
			 * iterate each code snippet
			 * -> create a testcase file
			 * -> and add meta of testcase to `testcases.json`
			 */
			const ruleTestcases = codeSnippets.reduce((out, codeBlock, index) => {
				const title = codeTitles[index]
				if (!title) {
					throw new Error('No title found for code snippet.')
				}

				const { code, block } = codeBlock
				let { type = 'html' } = codeBlock

				if (regexps.testcaseCodeSnippetTypeIsSvg.test(block.substring(0, 15))) {
					type = 'svg'
				}

				const codeId = objectHash({
					block,
					type,
					ruleId,
				})

				const titleCurated = title.value.split(' ').map(t => t.toLowerCase())

				const testcaseFileName = `${ruleId}/${codeId}.${type}`
				const testcasePath = `testcases/${testcaseFileName}`
				/**
				 * Create testcase file
				 */
				createFile(`${baseDir}/${testcasePath}`, code)

				/**
				 * Create meta data for testcase(s)
				 */
				const testcase = {
					testcaseId: codeId,
					url: `${url}/${testcasePath}`,
					expected: titleCurated[0],
					ruleId,
					ruleName,
					rulePage: `${url}/${slug}`,
					ruleAccessibilityRequirements,
					requirementsMapping: Object.keys(ruleAccessibilityRequirements || {}),
				}

				out.push(testcase)
				return out
			}, [])

			// add rule testcases to all testcases
			allRulesTestcases = allRulesTestcases.concat(ruleTestcases)

			/**
			 * Create test cases of rule for use with `em report tool`
			 */
			createTestcasesOfRuleOfEmReportTool({
				ruleId,
				ruleName,
				ruleTestcases,
				ruleAccessibilityRequirements,
			})
		})

		/**
		 * Copy `test-assets` that are used by `testcases`
		 */
		await copyTestcasesAssets()

		/**
		 * Generate `testcases.json`
		 */
		await createTestcasesJson(allRulesTestcases)

		console.info(`\nDONE!!! Generated Test Cases.\n`)
	})
}

module.exports = createTestcasesOfAllRules
