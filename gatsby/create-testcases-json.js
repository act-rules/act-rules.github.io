const {
	www: { url, baseDir },
	author,
	description,
} = require('./../package.json')
const createFile = require('../build/create-file')

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
		`${baseDir}/testcases.json`,
		JSON.stringify(AllTestcasesData, undefined, 2)
	)
}

module.exports = createTestcasesJson
