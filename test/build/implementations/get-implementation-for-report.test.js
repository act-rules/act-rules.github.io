const getFramedReport = require('../../../build/implementations/get-framed-report')
const getImplementationForReport = require('../../../build/implementations/get-implementation-for-report')

describe(`getImplementationForReport`, () => {

  it(`gets implementation report`, async () => {
    const framedReports = await getFramedReport(
      `./node_modules/act-rules-implementation-rgaa/reports/*.json`
    )
    const result = await getImplementationForReport(framedReports)
    expect(result).toBeDefined()
    expect(result.length).toBeGreaterThan(0)
    result.forEach((data) => {
      expect(Object.keys(data)).toEqual(['ruleId', 'ruleName', 'implementation'])
    })
  })
})