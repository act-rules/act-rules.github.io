
const describeRule = require('./utils/describe-rule')

describeRule('frontmatter', (ruleData) => {
  const { frontmatter } = ruleData
  const { rule_type } = frontmatter

  /**
   * Check for `required` properties
   */
  const requiredProps = [
    'id',
    'name',
    'rule_type',
    'description',
    'accessibility_requirements',
    'authors'
  ]
  test.each(requiredProps)('has required property `%s`',
    (requiredProp) => {
      expect(frontmatter).toHaveProperty(requiredProp);
    })

  /**
   * Check for `optional` properties 
   */
  if (rule_type.toLowerCase() === `composite`) {
    test('has optional property `input_rules` when `rule_type = composite`', () => {
      expect(frontmatter).toHaveProperty('input_rules');
      expect(frontmatter).not.toHaveProperty('input_aspects');
    })
  }
  if (rule_type.toLowerCase() === `atomic`) {
    test('has optional property `input_aspects` when `rule_type = atomic`', () => {
      expect(frontmatter).toHaveProperty('input_aspects');
      expect(frontmatter).not.toHaveProperty('input_rules');
    })
  }
})