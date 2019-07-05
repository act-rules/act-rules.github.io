const marked = require('marked')

/**
 * Get headings  from a given body of text
 * @method getAllHeadingsFromMarkdownBody
 * @param {String} body text content of markdown file
 * @returns {Array<Object>} list of headings
 */
const getAllHeadingsFromMarkdownBody = (body) => {
  const lexer = new marked.Lexer({})
  const tokens = lexer.lex(body)
  return tokens.reduce((out, token, index) => {
    const { type } = token
    if (type === `heading`) {
      out.push({
        ...token,
        number: index // populate with line number, to check for ordering
      })
    }
    return out
  }, [])
}


module.exports = getAllHeadingsFromMarkdownBody
