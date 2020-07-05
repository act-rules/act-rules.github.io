'use strict'

var visit = require('unist-util-visit')
var normalize = require('nlcst-normalize')
var isLiteral = require('nlcst-is-literal')

var own = {}.hasOwnProperty

module.exports = search

var word = 'WordNode'
var whiteSpace = 'WhiteSpaceNode'

function search(tree, phrases, handler, options) {
  var settings = options || {}
  var apos = settings.allowApostrophes || options
  var dashes = settings.allowDashes || false
  var literals = settings.allowLiterals
  var config = {allowApostrophes: apos, allowDashes: dashes}
  var byWord = {'*': []}
  var length
  var index
  var key

  if (!tree || !tree.type) {
    throw new Error('Expected node')
  }

  if (typeof phrases !== 'object') {
    throw new Error('Expected object for phrases')
  }

  length = phrases.length
  index = -1

  if ('length' in phrases) {
    while (++index < length) {
      handlePhrase(phrases[index])
    }
  } else {
    for (key in phrases) {
      handlePhrase(key)
    }
  }

  // Search the tree.
  visit(tree, word, visitor)

  // Test a phrase.
  function test(phrase, position, parent) {
    var siblings = parent.children
    var node = siblings[position]
    var count = siblings.length
    var queue = [node]
    var expressions = phrase.split(' ').slice(1)
    var length = expressions.length
    var index = -1
    var expression

    // Move one position forward.
    position++

    // Iterate over `expressions`.
    while (++index < length) {
      // Allow joining white-space.
      while (position < count) {
        node = siblings[position]

        if (node.type !== whiteSpace) {
          break
        }

        queue.push(node)
        position++
      }

      node = siblings[position]
      expression = expressions[index]

      // Exit if there are no nodes left, if the current node is not a word, or
      // if the current word does not match the search for value.
      if (
        !node ||
        node.type !== word ||
        (expression !== '*' &&
          normalize(expression, config) !== normalize(node, config))
      ) {
        return
      }

      queue.push(node)
      position++
    }

    return queue
  }

  // Visitor for `WordNode`s.
  function visitor(node, position, parent) {
    var word
    var phrases
    var length
    var index
    var result

    if (!literals && isLiteral(parent, position)) {
      return
    }

    word = normalize(node, config)
    phrases = byWord['*'].concat(own.call(byWord, word) ? byWord[word] : [])
    length = phrases.length
    index = -1

    while (++index < length) {
      result = test(phrases[index], position, parent)

      if (result) {
        handler(result, position, parent, phrases[index])
      }
    }
  }

  // Handle a phrase.
  function handlePhrase(phrase) {
    var firstWord = normalize(phrase.split(' ', 1)[0], config)

    if (own.call(byWord, firstWord)) {
      byWord[firstWord].push(phrase)
    } else {
      byWord[firstWord] = [phrase]
    }
  }
}
