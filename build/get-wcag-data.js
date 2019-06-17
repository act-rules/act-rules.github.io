/**
 * Get meta data of all WCAG success criteria
 * -> Output file: -> `./_data/sc-urls.json`
 * -> This is later used for hyperlinking SC of rules to respective specifications
 */
const path = require('path')
const axios = require('axios')
const createFile = require('./../build/create-file')
const pkg = require('./../package.json')
const outputFileScMetaData = path.join(__dirname, '..', '_data', 'sc-urls.json')
const outputFileScEmReportAuditResult = path.join(
	__dirname,
	'..',
	'_data',
	'sc-em-report-audit-result.json'
)

const isScWcag20 = sc => {
	const is20 = !(
		sc.versions &&
		sc.versions.length === 1 &&
		sc.versions.includes('2.1')
	)
	return is20
}

const getMetaData = sc => {
	const urlPrefix = `https://www.w3.org/TR/WCAG`
	const is20 = isScWcag20(sc)
	const wcagSuffix = is20 ? '20' : '21'
	const path = is20 ? sc.alt_id[0] : sc.id.split(':').reverse()[0]
	const url = `${urlPrefix}${wcagSuffix}/#${path}`
	const howToMeetUrl = `${
		is20
			? 'http://www.w3.org/WAI/WCAG20/quickref/#qr-'
			: 'https://www.w3.org/WAI/WCAG21/quickref/#'
		}${path}`
	const understandingUrl = `${
		is20
			? 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/'
			: 'https://www.w3.org/WAI/WCAG21/Understanding/'
		}/${path}.html`
	/**
	 * Construct `test` - used by `wcag em report tool`
	 */
	const testPrefix = sc.id.split(':').shift()
	const testName = sc.alt_id && sc.alt_id.length > 0 ? sc.alt_id : sc.id
	return {
		num: sc.num,
		url,
		scId: sc.id,
		scAltId: sc.alt_id,
		test: `${testPrefix}:${testName}`,
		howToMeetUrl,
		understandingUrl,
		handle: sc.handle,
		level: sc.level,
		wcagType: wcagSuffix.split('').join('.'),
	}
}

const getScMetaData = async url => {
	const { data } = await axios.get(url)
	const scMetaData = {}
	const { principles } = data
	principles.forEach(p =>
		p.guidelines.forEach(g =>
			g.successcriteria.forEach(sc => {
				scMetaData[sc.num] = getMetaData(sc)
			})
		)
	)
	return scMetaData
}

(async () => {
	const wcagReferenceUrl = pkg.config.references.wcag21
	if (!wcagReferenceUrl) {
		throw new Error('No reference URL for WCAG21 is specified in config.')
	}

	/**
	 * Create a list of success criteria meta data
	 */
	const scMetaData = await getScMetaData(wcagReferenceUrl)
	await createFile(
		outputFileScMetaData,
		JSON.stringify(scMetaData, undefined, 2)
	)

	/**
	 * Create wcag em report tool friendly audit result array
	 */
	const scEmReportAuditResult = Object.values(scMetaData).map(data => {
		return {
			type: 'Assertion',
			test: data.test,
			assertedBy: '_:evaluator',
			subject: '_:website',
			result: {
				outcome: 'earl:inapplicable',
				description: '',
				date: '',
			},
			mode: 'earl:manual',
			hasPart: [],
		}
	})
	await createFile(
		outputFileScEmReportAuditResult,
		JSON.stringify(scEmReportAuditResult, undefined, 2)
	)

	console.info('\nDONE!!! Generated WCAG Success Criterion Data.\n')
})()
