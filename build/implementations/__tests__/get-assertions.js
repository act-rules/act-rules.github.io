const getFramedReport = require('../get-framed-report')
const getAssertions = require('../get-assertions')

describe(`getAssertions`, () => {
	it('throws when no argument is specified', () => expect(() => getAssertions(null)).toThrow())

	it('returns assertions from framed reports', async () => {
		const framedReport = await getFramedReport(
			`https://raw.githubusercontent.com/w3c/earl/master/earl-reports/alfa-report.json`
		)
		const assertions = getAssertions(framedReport)
		expect(assertions.length).toBeGreaterThan(0)
	})
})
