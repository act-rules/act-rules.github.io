const path = require('path')
const assert = require('assert')
const globby = require('globby')
const gfmCodeBlocks = require('gfm-code-blocks')
const isUrl = require('is-url')

const describeRule = require('../../test-utils/describe-rule')
const getAllMatchesForRegex = require('../../utils/get-all-matches-for-regex')
const allTestAssetPaths = uniqueArrayItems(globby.sync(`./test-assets/**/*.*`).map(path => path.replace(`./`, ``)))

describeRule('check if referenced test assets exists', ruleData => {
	const codeBlocks = gfmCodeBlocks(ruleData.body)
	const usedAssetPaths = getUniqueTestAssetsUsedInCodeBlocks(codeBlocks).filter(
		path => !path.includes('does-not-exist')
	)

	if (usedAssetPaths.length) {
		test.each(usedAssetPaths)('%s', assetPath => {
			const message = `Asset at path -> ${assetPath} does not exist`
			expect(allTestAssetPaths.includes(assetPath), message).toBe(true)
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
		const assetPaths = getAllMatchesForRegex(/(href|src)="[^"]*"/, code, false)
		for (const { block } of assetPaths) {
			const assetPath = curateAssetPath(block)
			/**
			 * Ignore URL
			 */
			if (!assetPath || isUrl(assetPath)) {
				return []
			}

			/**
			 * In some places, `test-assets` are referred as `../../test-assets` & sometimes as `./test-assets` etc.
			 * Normalising all references to `test-assets/...`
			 */
			assert(
				assetPath.indexOf('test-assets') >= 0,
				`Used path -> ${assetPath} is not referencing "test-assets" directory`
			)
			const relativePath = assetPath.slice(assetPath.indexOf('test-assets'))
			result.push(relativePath)
		}
	}

	return uniqueArrayItems(result).filter(item => !!item)
}

/**
 * Curate a given asset path of attribtues and quotes
 * @param {String} str given asset path
 */
function curateAssetPath(assetPath) {
	/**
	 * curate given path of
	 * `src` attribute
	 * `href` attribute
	 * `""` quotes
	 */
	const newPath = assetPath
		.replace('src=', '')
		.replace('href=', '')
		.replace(/"/g, '')

	/**
	 * Ignore assets that do not actually refer to a file/asset
	 * eg: `test-assets/directory` is ok
	 */
	const extn = path.extname(newPath)
	if (!extn) {
		return undefined
	}

	/**
	 * Strip any `#` search params
	 */
	const hashIndex = newPath.indexOf('#')
	if (hashIndex >= 0) {
		return newPath.replace(newPath.substring(hashIndex), '')
	}

	return newPath
}

/**
 * Helper to unique array of primitive items
 * @param {Array<String>} items
 */
function uniqueArrayItems(items) {
	return [...new Set(items)]
}
