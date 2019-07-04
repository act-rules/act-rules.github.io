
/**
 * Get `text` of headings of given depth
 * @param {Array<Object>} headings list of headings
 * @param {Number} headingDepth given depth of heading
 * @returns {Array<String>} al headings matching given depth
 */
const getHeadingOfDepth = (headings, headingDepth) => {
  return headings
    .filter(({ depth }) => depth === headingDepth)
    .map(({ text }) => text)
}

module.exports = getHeadingOfDepth