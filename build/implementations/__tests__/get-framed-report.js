const getFramedReport = require('../get-framed-report')

describe(`getFramedReport`, () => {
	it('throws when no argument is specified', async () => expect(getFramedReport(null)).rejects.toBeInstanceOf(Error))

	it('returns framed report from given URL (1 report)', async () => {
		const framedReport = await getFramedReport(
			`https://raw.githubusercontent.com/act-rules/act-rules-implementation-alfa/master/report.json`
		)
		assertFramedReport(framedReport)
	})

	it('returns framed report from files GLOB (multiple reports)', async () => {
		const framedReports = await getFramedReport(`./node_modules/act-rules-implementation-rgaa/reports/*.json`)
		expect(framedReports.length).toBeGreaterThan(1)
		framedReports.forEach(report => assertFramedReport(report))
	})
})

const assertFramedReport = report => {
	expect(report).toBeDefined()
	const keys = Object.keys(report)
	;['@context', '@graph'].forEach(key => {
		expect(keys.includes(key)).toBe(true)
	})
	expect(report['@graph'].length).toBeGreaterThan(0)
}
