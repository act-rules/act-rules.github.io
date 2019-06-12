const getAssertionSource = require('./get-assertion-source')

/**
 * Get all assertions for given testcase
 * Note: cache assertion for easier look-up
 * 
 * @param {Array<Object>} assertions assertions
 * @param {String} relativeUrl relative url of testcase
 */
const getTestcaseAssertions = (assertions, relativeUrl) => {
  var cache = {}

  const cacheKeys = Object.keys(cache);
  if (cacheKeys.includes(relativeUrl)) {
    return cache[relativeUrl]
  }

  const testcaseAssertions = assertions.filter(assertion => {
    const source = getAssertionSource(assertion)
    return source.includes(relativeUrl)
  })

  cache[relativeUrl] = testcaseAssertions;
  return testcaseAssertions;
}

module.exports = getTestcaseAssertions