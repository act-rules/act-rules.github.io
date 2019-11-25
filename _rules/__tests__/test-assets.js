const globby = require('globby')
const gfmCodeBlocks = require('gfm-code-blocks')
const isUrl = require('is-url')

const describeRule = require('../../test-utils/describe-rule')
const getAllMatchesForRegex = require('../../utils/get-all-matches-for-regex')
const allTestAssetPaths = uniqueArrayItems(globby.sync(`./test-assets/**/*.*`).map(path => path.replace(`./`, ``)))

describeRule('check if referenced test assets exists', ruleData => {
	const codeBlocks = gfmCodeBlocks(ruleData.body)
	const usedAssetPaths = getUniqueTestAssetsUsedInCodeBlocks(codeBlocks)

	if (usedAssetPaths && usedAssetPaths.length) {
		test.each(usedAssetPaths)('%s', path => {
			expect(allTestAssetPaths.includes(path), path).toBe(true)
		})
	}
})

/**
 * Parse given code blocks in a given rule's markdown data & get test-asset paths
 * @param {Object[]} codeBlocks code blocks in a give rule markdown data
 * @returns {String[]}
 */
function getUniqueTestAssetsUsedInCodeBlocks(codeBlocks) {
	const result = []
	const codeReferencingTestAssets = codeBlocks.filter(({ code }) => /test-assets\//.test(code))

	for (const { code } of codeReferencingTestAssets) {
		const paths = getAllMatchesForRegex(/(href|src)="[^"]*"/, code, false)
		for (const path of paths) {
			const assetPath = curateAssetPath(path.block)
			if (!isUrl(assetPath)) {
				/**
				 * In some places, `test-assets` are referred as `../../test-assets` & sometimes as `./test-assets` etc.
				 * Normalising all references to `test-assets/...`
				 */
				const relativePath = assetPath.slice(assetPath.indexOf('test-assets'))
				result.push(relativePath)
			}
		}
	}

	return uniqueArrayItems(result)
}

/**
 * Curate a given asset path of attribtues and quotes
 * @param {String} str given asset path
 */
function curateAssetPath(str) {
	return str
		.replace('src=', '')
		.replace('href=', '')
		.replace(/"/g, '')
}

/**
 * Helper to unique array of primitive items
 * @param {Array<String>} items
 */
function uniqueArrayItems(items) {
	return [...new Set(items)]
}
