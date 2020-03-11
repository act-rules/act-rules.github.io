const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

describe('frontmatter', () => {
	/**
	 * Rules
	 */
	// describeRule('Rules', validateRuleFrontmatter)

	/**
	 * Other pages
	 */
	describePage('Pages', data => {
		const { path } = data
		/**
		 * Only run validation on glossary pages
		 */
		if (!path.includes('/pages/glossary/')) {
			return
		}
		validateGlossaryFrontmatter(data)
	})
})

/**
 * Helper to test various frontmatter content of a rule markdown file
 * @param {Object} ruleData rule data
 * @param {Object} metaData meta data
 */
function validateRuleFrontmatter({ frontmatter }, metaData) {
	const { rule_type, acknowledgements, accessibility_requirements, input_rules } = frontmatter

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

		test('if `composite` rule only refers to `atomic` rules in `input_rules`', () => {
			expect(metaData.atomicRuleIds).toIncludeAllMembers(input_rules)
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
	test.each([...authors, ...previous_authors])('has contributor data for author: `%s`', author => {
		expect(metaData.contributors).toContain(author.toLowerCase())
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
	}
}

/**
 * Helper to test frontmatter of glossary markdown file
 * @param {Object} data page data
 */
function validateGlossaryFrontmatter({ frontmatter }) {
	/**
	 * Check for `required` properties
	 */
	const requiredProps = ['title', 'key', 'unambiguous', 'objective']
	test.each(requiredProps)('has required property `%s`', requiredProp => {
		expect(frontmatter).toHaveProperty(requiredProp)
	})
}
