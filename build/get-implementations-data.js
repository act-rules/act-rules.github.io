const {
	config: { implementations },
} = require('./../package.json')
const getFramedReport = require('./implementations/get-framed-report')
const getImplementation = require('./implementations/get-implementation')
const createFile = require('./../utils/create-file')

/**
 * Create implementation metrics, that can be used in the site,
 * for each `implementation` provided as configuration in `package.json`.
 */
const init = async () => {
	if (!implementations || !Object.keys(implementations).length) {
		throw new Error(
			'No implementations are specified in `config` of `package.json`'
		)
	}

	/**
	 * Collect all implementations from various vendors
	 */
	const implementationReports = {}

	for (let item of implementations) {
		const { provider, tool, path } = item

		console.info(`Get implementation of ${tool} by ${provider}\n`)

		/**
		 * fetch report & frame as required
		 */
		const framedReport = await getFramedReport(path)

		/**
		 * get implementation metrics from report
		 */
		const implementationStats = await getImplementation(framedReport)

		/**
		 * create rule based metric
		 */
		const report = {
			tool,
			provider,
			path,
			implementationStats,
		}
		implementationReports[tool] = report

		/**
		 * Note:
		 * These files are only generated for debugging
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
	 * transform data, to be grouped by rule id.
	 */
	const groupedMetricByRuleId = {}

	Object.values(implementationReports).forEach(report => {
		const { tool, provider, path, implementationStats } = report

		implementationStats.forEach(({ ruleId, implementation }) => {
			if (!implementation) {
				return
			}

			/**
			 * Note:
			 * only build metrics for implementations that are `complete`
			 */
			const { complete = false } = implementation
			if (complete) {
				return
			}

			if (!groupedMetricByRuleId[ruleId]) {
				groupedMetricByRuleId[ruleId] = []
			}

			groupedMetricByRuleId[ruleId].push({
				tool,
				provider,
				path,
				implementation,
			})
		})
	})

	/**
	 * Create metrics in `_data` for usage in `site`
	 */
	await createFile(
		`_data/implementations-metrics.json`,
		JSON.stringify(groupedMetricByRuleId, null, 2)
	)
}

init()
	.then(() => console.info(`Implementations data generated.`))
	.catch(err => {
		console.error(err)
		process.exit(1)
	})
