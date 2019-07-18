const describeRule = require('../../test-utils/describe-rule')

describeRule('filename', ruleData => {
  const { filename, frontmatter } = ruleData
  const { id } = frontmatter

  /**
   * Check if filename has `id` as a part of the name
   */
  test('has `id` as a part of the `filename`', () => {
    const hasIdInName = filename.includes(id)
    expect(hasIdInName).toBe(true)
  })
})