
const globby = require('globby')
const makeDir = require('make-dir')
const objectHash = require('object-hash')
const codeBlocks = require('gfm-code-blocks')
const {
	www: { url, baseDir },
} = require('./../package.json')
const getMarkdownData = require('./../utils/get-markdown-data')
const createFile = require('../utils/create-file')
const regexps = require('../utils/reg-exps')
const getAllMatchesForRegex = require('../utils/get-all-matches-for-regex')
const copyTestcasesAssets = require('./testcases/copy-testcases-assets')
const createTestcasesJson = require('./testcases/create-testcases-json')
const createTestcasesOfRuleOfEmReportTool = require('./testcases/create-testcases-of-rule-of-em-report-tool')

/**
 * Create test case files & other meta-data  from test case in each rule.
 * 
 * -> create test cases files into `./public/testcases/`
 * -> copy `./test-assets/*` into `./public`
 * -> create `testcases.json` into `./public`
 */
const init = async () => {
	/**
	 * Create `public` directory
	 */
	await makeDir(`public`)

	/**
	 * Get all rules `markdown` data
	 */
	const rulesData = globby.sync([`./_rules/*.md`])
		.map(rulePath => getMarkdownData(rulePath))


	let allRulesTestcases = []

	/**
	 * iterate all rule pages
	 * -> get code snippets
	 * -> and their relevant titles
	 */
	rulesData.forEach(ruleData => {
		const { frontmatter, body } = ruleData
		const {
			id: ruleId,
			name: ruleName,
			accessibility_requirements: ruleAccessibilityRequirements
		} = frontmatter
		const codeTitles = getAllMatchesForRegex(
			regexps.testcaseTitle,
			body
		)

		/**
		 * get code blocks in markdown body
		 */
		const codeSnippets = codeBlocks(body)

		if (codeTitles.length !== codeSnippets.length) {
			throw new Error(
				`Number of matching titles for code snippets is wrong. Check markdown '${ruleName}' for irregularities.`
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
				rulePage: `${url}/rules/${ruleId}`,
				ruleAccessibilityRequirements,
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

	console.info(`\nGenerated Test Cases.\n`)

}

/**
 * Invoke
 */
init()
	.then(`Created testcases`)
	.catch(e => {
		console.error(e)
		process.write(1)
	})