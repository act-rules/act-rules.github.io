const getRules = require('./../../test-utils/get-rules')
const getTestcasesGroupedByRule = require('../../../build/implementations/get-testcases-grouped-by-rule')

describe('getTestcasesGroupedByRule', () => {

  it('should have testcases for every rule', () => {
    const rules = getRules()
    const groupedTestcases = getTestcasesGroupedByRule()
    expect(rules.length).toEqual(Object.keys(groupedTestcases).length)
  })

})