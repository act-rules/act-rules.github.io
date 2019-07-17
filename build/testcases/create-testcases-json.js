const {
	www: { url },
	author,
	description,
} = require('./../../package.json')
const createFile = require('../../utils/create-file')

/**
 * Create `testcases.json`
 */
const createTestcasesJson = async testcases => {
	const AllTestcasesData = {
		name: `${author} test cases`,
		website: url,
		license: `${url}/pages/license/`,
		description,
		count: testcases.length,
		testcases,
	}

	await createFile(
		`_data/rules-testcases/testcases.json`,
		JSON.stringify(AllTestcasesData, undefined, 2)
	)
}

module.exports = createTestcasesJson
