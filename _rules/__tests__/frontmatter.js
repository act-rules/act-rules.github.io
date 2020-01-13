const describeRule = require('../../test-utils/describe-rule')
const { contributors } = require('./../../package.json')

const contributorsNames = contributors.map(contributor => contributor.name.toLowerCase())

describeRule('frontmatter', (ruleData, metaData) => {
	const { frontmatter } = ruleData
	const { rule_type, acknowledgements, accessibility_requirements } = frontmatter

	/**
	 * Check for `required` properties
	 */
	const requiredProps = ['id', 'name', 'rule_type', 'description', 'accessibility_requirements', 'acknowledgements']
	test.each(requiredProps)('has required property `%s`', requiredProp => {
		expect(frontmatter).toHaveProperty(requiredProp)
	})

	/**
	 * Check for `optional` properties
	 */
	if (rule_type.toLowerCase() === `composite`) {
		test('has optional property `input_rules` when `rule_type = composite`', () => {
			expect(frontmatter).toHaveProperty('input_rules')
			expect(frontmatter).not.toHaveProperty('input_aspects')
		})

		const { atomicRuleIds } = metaData
		const { input_rules } = frontmatter
		test('if `composite` rule only refers to `atomic` rules in `input_rules`', () => {
			expect(atomicRuleIds).toIncludeAllMembers(input_rules)
		})
	}

	if (rule_type.toLowerCase() === `atomic`) {
		test('has optional property `input_aspects` when `rule_type = atomic`', () => {
			expect(frontmatter).toHaveProperty('input_aspects')
			expect(frontmatter).not.toHaveProperty('input_rules')
		})
	}

	/**
	 * Check if listed `authors` have meta data as contributors in package.json
	 */

	const { authors, previous_authors = [] } = acknowledgements
	const allAuthors = [...authors, ...previous_authors]
	test.each(allAuthors)('has contributor data for author: `%s`', author => {
		expect(contributorsNames).toContain(author.toLowerCase())
	})

	/**
	 * Check if `accessibility_requirements` (if any) has expected values
	 */
	if (accessibility_requirements) {
		/**
		 * The below check the `values` for every `key - value` pair of accessibility requirements
		 */
		const accRequirementValues = Object.values(accessibility_requirements)
		test.each(accRequirementValues)('has expected keys for accessibility requirement: `%p`', accReq => {
			const keys = Object.keys(accReq).sort()
			expect(keys.length).toBeGreaterThanOrEqual(4)
			expect(keys).toIncludeAllMembers(['failed', 'forConformance', 'inapplicable', 'passed'])
		})

		/**
		 * Check of the requirement is of type `WCAG`, then the SC number and WCAG type match
		 * Eg:
		 * `wcag20:2.5.3` should fail, as it should be `wcag21:253`
		 */
		// todo: note this test is skipped until we find a way forward with generating necessary `_data` meta data
		// const wcagAccRequirementKeys = Object.keys(accessibility_requirements).filter(key =>
		// 	key.toLowerCase().includes(`wcag`)
		// )

		// if (wcagAccRequirementKeys.length) {
		// 	test.each(wcagAccRequirementKeys)(`has correct WCAG type for Success Criterion specified`, wcagReqKey => {
		// 		const [wcagType, successCriterion] = wcagReqKey.split(':')
		// 		expect(scUrls).toContainKey(successCriterion)
		// 		/**
		// 		 * convert `2.0` to `wcag20` or `2.1` to `wcag2.1`
		// 		 */
		// 		const computedWcagType = `wcag` + scUrls[successCriterion]['wcagType'].split('.').join('')
		// 		expect(computedWcagType).toBe(wcagType)
		// 	})
		// }
	}
})
