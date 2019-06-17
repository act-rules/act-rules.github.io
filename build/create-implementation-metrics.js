const globby = require('globby')
const readFile = require('../utils/read-file')
const createFile = require('../utils/create-file')

/**
 * Init
 */
const init = async () => {
  /**
   * Get all implementation reports
   */
  const reports = globby.sync([`./_data/implementations/*.json`])
    .map(reportPath => {
      const fileContent = readFile(reportPath)
      return JSON.parse(fileContent)
    })

  /**
  * transform data, to be grouped by rule id.
  */
  const implementationsGroupedByRuleId = {}

  reports.forEach(report => {
    const { tool, organisation, data } = report

    data.forEach(({ ruleId, implementation }) => {
      if (!implementation) {
        return
      }

      /**
       * Note:
       * only build `metrics` for implementations that are `complete`
       */
      const { complete = false } = implementation
      if (complete) {
        return
      }

      if (!implementationsGroupedByRuleId[ruleId]) {
        implementationsGroupedByRuleId[ruleId] = []
      }

      implementationsGroupedByRuleId[ruleId].push({
        organisation,
        tool,
        implementation,
      })
    })
  })

  /**
   * Create metrics in `_data` for usage in `site`
   */
  await createFile(
    `_data/implementation-metrics.json`,
    JSON.stringify(implementationsGroupedByRuleId, null, 2)
  )
}

init()
  .then(() => console.info(`\nImplementation metrics generated.\n`))
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
