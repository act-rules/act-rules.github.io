/**
 * Given a string, get all values that match specified regular expression
 *
 * @param {String} regex regular expression
 * @param {*} compareString string against which reg exp has to be evaluated
 * @param {*} computeIndexes boolean representing if line and column number should be computed
 */
const getAllMatchesForRegex = (regex, compareString, computeIndexes = true) => {
	if (typeof compareString !== 'string') {
		throw new TypeError('Expected a string to match.')
	}

	const blocks = []

	function getMatch(str) {
		const match = new RegExp(regex).exec(str)
		if (match) {
			const actualMatch = match[0]
			const matchValue = match[1]
			const indices = computeIndexes
				? {
						start: match.index,
						end: match.index + matchValue.length,
				  }
				: {}
			const block = {
				...indices,
				value: matchValue,
				block: actualMatch,
			}
			blocks.push(block)
			const strippedStr = str.replace(actualMatch, '')
			getMatch(strippedStr)
		}
		return
	}

	getMatch(compareString)

	return blocks
}

module.exports = getAllMatchesForRegex
