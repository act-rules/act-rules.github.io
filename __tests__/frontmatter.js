const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

describe('frontmatter', () => {
	/**
	 * Rules
	 */
	describeRule('Rules', validateRuleFrontmatter)

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
	const { rule_type, acknowledgments, accessibility_requirements, input_rules } = frontmatter

	/**
	 * Check for `required` properties
	 */
	const requiredProps = ['id', 'name', 'rule_type', 'description', 'accessibility_requirements', 'acknowledgments']
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
			expect(frontmatter).not.toHaveProperty('input_rules')

			expect(frontmatter).toHaveProperty('input_aspects')
			expect(Array.isArray(frontmatter.input_aspects), `input_aspects should be a list`).toBe(true)
			expect(frontmatter.input_aspects.length > 0, `should have atleast one item in input_aspects`).toBe(true)

			expect(
				frontmatter.input_aspects.every(aspect => {
					const isTypeString = typeof aspect === 'string'
					const isNotMultipleAspects = /\s-\s/.test(aspect) === false // ensure it is not concatantated aspects like `"DOM Tree - CSS Styling"`
					return isTypeString && isNotMultipleAspects
				}),
				`input_aspects items shoud be of type string and not nested`
			).toBe(true)
		})
	}

	/**
	 * Check if listed `authors` have meta data as contributors in package.json
	 */
	const { authors, previous_authors = [] } = acknowledgments
	test.each([...authors, ...previous_authors])('has contributor data for author: `%s`', author => {
		expect(metaData.contributors).toContain(author.toLowerCase())
	})
	const orderedAuthors = [...authors].sort((a, b) => a.localeCompare(b))
	test('authors are ordered alphabetically', () => {
		expect(authors).toStrictEqual(orderedAuthors)
	})
	const orderedPreviousAuthors = [...previous_authors].sort((a, b) => a.localeCompare(b))
	test('previous authors are ordered alphabetically', () => {
		expect(previous_authors).toStrictEqual(orderedPreviousAuthors)
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

			if (keys.includes('secondary')) {
				expect(keys.length).toBe(1)
				expect(typeof accReq.secondary).toBe('string')
			} else {
				expect(keys.length).toBeGreaterThanOrEqual(4)
				expect(keys).toIncludeAllMembers(['failed', 'forConformance', 'inapplicable', 'passed'])
			}
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
