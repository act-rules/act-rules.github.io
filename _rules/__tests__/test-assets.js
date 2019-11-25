const gfmCodeBlocks = require('gfm-code-blocks')
const describeRule = require('../../test-utils/describe-rule')

describeRule('check if referenced test assets exists', ruleData => {
	const codeBlocks = gfmCodeBlocks(ruleData.body)

	/**
	 * Get only code blocks that refer to `test-assets`
	 */
	const codeSnippetsReferringTestAssets = codeBlocks.filter(({ block }) => {
		console.log(block)

		const match = new RegExp(/\s\[[^(]*?\]\r?\n?\(#.*?\)/g).exec(block).match
		return true
	})

	test(`temp`, () => {
		expect(1).toBe(1)
	})
})
