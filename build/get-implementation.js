const assert = require('assert')
const program = require('commander')
const { version } = require('../package.json')
const createFile = require('../utils/create-file')
const getFramedReport = require('./implementations/get-framed-report')
const getImplementationForReport = require('./implementations/get-implementation-for-report')

/**
 * Init
 * @param {Object} program program
 */
const init = async (program) => {
  const { org, tool, path } = program;

  /**
   * assert `args` 
   */
  assert(org, '`Organisation` is required');
  assert(tool, '`tool` is required');
  assert(path, '`path` is required')

  console.info(`\nGet implementation of ${tool} by ${org}\n`)

  /**
   * fetch `report` & `frame` as required
   */
  const framedReport = await getFramedReport(path)

  /**
   * Get `implementation`
   */
  const data = await getImplementationForReport(framedReport)

  /**
   * create report
   */
  const report = {
    organisation: org,
    tool,
    data
  }

  /**
   * Save `implementation` to `_data/implementations`
   */
  const filename = tool
    .split(' ')
    .join('-')
    .toLowerCase()
  await createFile(
    `_data/implementations/${filename}.json`,
    JSON.stringify(report, null, 2)
  )
}

/**
 * Parse `args`
 */
program
  .version(version)
  .option('-o, --org <org>', 'Organisation, which created the EARL report')
  .option('-t, --tool <tool>', 'Tool used by EARL report')
  .option('-p, --path <path>', 'Path to EARL report')
  .parse(process.argv);

/**
 * Init
 */
init(program)
  .then(() => console.info(`\nImplementations data generated.\n`))
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
