/**
 * Create rule markdown file to be updated
 */
const { config } = require('../package.json')
const assert = require('assert')
const program = require('commander')
const { format } = require('date-fns')
const getMarkdownData = require('../utils/get-markdown-data')
const createFile = require('../utils/create-file')
const getGitLog = require('../utils/get-git-log')

/**
 * Parse `args`
 */
program
	.option('-r, --ruleFile <ruleFile>', 'filename of the rule to be generated to w3 format')
	.option('-o, --outputDir <outputDir>', 'output directory to create the meta data')
	.parse(process.argv)

/**
 * Invoke
 */
init(program)
	.then(() => console.info('Completed'))
	.catch(e => {
		console.error(e)
		process.exit(1)
	})

/**
 * Init
 */
async function init({ ruleFile, outputDir }) {
	/**
	 * assert `args`
	 */
	assert(ruleFile, '`ruleFile` is required')
	assert(outputDir, '`outputDir` is required')

	/**
	 * Get all rules `markdown` data
	 */
	const [ruleData] = getMarkdownData([ruleFile])
	const { path, filename, frontmatter, body } = ruleData
	const ruleFilename = filename.replace('.md', '')
	const [lastLog] = await getGitLog({ file: path, schema: { date: '%ct' } })
	const inputAspectsUrls = config['rule-format-metadata']['input-aspects']

	const output = `
  ---
  title: ${frontmatter.name}
  permalink: /standards-guidelines/act/rules/${ruleFilename}/
  ref: /standards-guidelines/act/rules/${ruleFilename}/
  lang: en
  github:
    repository: w3c/wcag-act-rules
    path: content/${filename}
  ---


  Rule Type:
  :   ${frontmatter.rule_type}

  Rule ID:
  :   ${frontmatter.id}

  Last modified:
  :   ${format(new Date(lastLog.date * 1000), 'MMM dd, yyyy')}

  Accessibility Requirements Mapping
  --TODO--

  Input Aspects
  ${frontmatter.input_aspects.map(aspect => `: [${aspect}](${inputAspectsUrls[aspect]}) \n`)}

  ## Description

  ${frontmatter.description}
  ${body}

  ## Glossary

  --TODO--

  ## Acknowledgements

  --TODO--


  --TODO:Include definition links--

  `

	await createFile(`${outputDir}/${filename}`, output)
}
