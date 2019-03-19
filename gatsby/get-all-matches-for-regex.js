const getAllMatchesForRegex = (regex, compareString, computeIndexes = true) => {
	if (typeof compareString !== 'string') {
		throw new TypeError('Expected a string to match.')
	}

	const blocks = []

	function getMatch(str) {
		const match = regex.exec(str)
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
