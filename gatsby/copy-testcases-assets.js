const { ncp } = require('ncp')

/**
 * Copy test-assets directory
 */
const copyTestcasesAssets = () => {
	return new Promise((resolve, reject) => {
		ncp('./test-assets', './public/test-assets', err => {
			console.info(`\nDONE!!! Copied Test Assets Directory.\n`)
			if (err) {
				reject(err)
			}
			resolve()
		})
	})
}

module.exports = copyTestcasesAssets
