const assert = require('assert')

const outcomeMapping = {
	failed: ['failed', 'cantTell'],
	fail: ['failed', 'cantTell'],
	passed: ['passed', 'cantTell', 'inapplicable'],
	pass: ['passed', 'cantTell', 'inapplicable'],
	inapplicable: ['passed', 'cantTell', 'inapplicable', 'untested'],
}

/**
 * Get rule state based on given assertions
 *
 * @param {Array<Object>} assertions
 */
const getRuleMappingState = assertions => {
	const mapping = assertions.some(
		({ actual, expected }) => expected === 'failed' && ['failed', 'cantTell'].includes(actual)
	)

	if (!mapping) {
		return { mapping: false }
	}

	const incorrect = assertions
		.filter(data => {
			const { expected, actual } = data
			assert(outcomeMapping[expected], `Unknown result type ${expected}`)

			return !outcomeMapping[expected].includes(actual)
		})
		.map(({ url }) => url)

	const complete = assertions.every(({ expected, actual }) => {
		return outcomeMapping[expected].includes(actual) && !incorrect.length
	})

	return {
		id: assertions[0].title,
		complete,
		incorrect,
		assertions: assertions.map(({ expected, actual, url }) => {
			return { expected, actual, url }
		}),
	}
}

module.exports = getRuleMappingState
