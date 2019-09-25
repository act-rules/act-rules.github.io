const getFramedReport = require('../get-framed-report')
const getAssertions = require('../get-assertions')

describe(`getAssertions`, () => {
	it('throws when no argument is specified', () => expect(() => getAssertions(null)).toThrow())

	it('returns assertions from framed reports', async () => {
		const framedReport = await getFramedReport(
			`https://raw.githubusercontent.com/act-rules/act-rules-implementation-alfa/master/report.json`
		)
		const assertions = getAssertions(framedReport)
		expect(assertions.length).toBeGreaterThan(0)
	})
})
