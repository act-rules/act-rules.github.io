const context = require('./auto-mapping/context')
const { mappingReport } = require('./auto-mapping/mapping-report')
const { bestMatchingRules } = require('./auto-mapping/best-matching-rules')
const { getMappingState } = require('./auto-mapping/get-mapping-state')
const { getRuleMapping } = require('./auto-mapping/get-rule-mapping')

module.exports = {
  context,
  mappingReport,
  getRuleMapping,
  getMappingState,
  bestMatchingRules
}
