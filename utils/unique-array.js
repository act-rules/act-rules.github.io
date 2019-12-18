/**
 * Helper to unique array of primitive items
 * @param {Array<String>} items
 */
function uniqueArray(items) {
	return [...new Set(items)]
}

module.exports = uniqueArray
