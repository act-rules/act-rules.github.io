'use strict'

var convert = require('unist-util-is/convert')
var position = require('unist-util-position')
var modifyChildren = require('unist-util-modify-children')
var toString = require('nlcst-to-string')

module.exports = urls

var word = convert('WordNode')
var punctuationOrSymbol = convert(['PunctuationNode', 'SymbolNode'])
var applicable = convert(['WordNode', 'PunctuationNode', 'SymbolNode'])

var slashes = /^\/{1,3}$/

function urls() {
  this.Parser.prototype.useFirst('tokenizeSentence', modifyChildren(mergeLinks))
}

// eslint-disable-next-line complexity
function mergeLinks(child, index, parent) {
  var siblings = parent.children
  var nodes = [child]
  var start = index
  var end = index
  var currentIndex = index
  var value
  var initial
  var final
  var prev
  var next

  if (!punctuationOrSymbol(child) || toString(child) !== '.') {
    return
  }

  // Find preceding word/punctuation.
  // Stop before slashes, break after `www`.
  while ((prev = siblings[start - 1])) {
    if (
      !applicable(prev) ||
      (punctuationOrSymbol(prev) && slashes.test(toString(prev)))
    ) {
      break
    }

    start--

    nodes.unshift(siblings[start])

    if (word(prev) && toString(siblings[start]) === 'www') {
      break
    }
  }

  // Find following word/punctuation.
  next = siblings[end + 1]
  while (applicable(next)) {
    end++
    nodes.push(next)
    next = siblings[end + 1]
  }

  // This full stop doesnt look like a link:  it’s either not followed, or not
  // preceded, by words or punctuation.
  if (currentIndex === start || currentIndex === end) {
    return
  }

  // 1-3 slashes.
  prev = siblings[start - 1]
  if (punctuationOrSymbol(prev) && slashes.test(toString(prev))) {
    start--
    nodes.unshift(siblings[start])
  }

  // URL protocol and colon.
  prev = siblings[start - 1]
  if (
    punctuationOrSymbol(prev) &&
    toString(prev) === ':' &&
    word(siblings[start - 2])
  ) {
    nodes.unshift(siblings[start - 2], prev)
    start -= 2
  }

  value = null

  // Remove the last node if it’s punctuation, unless it’s `/` or `)`.
  if (punctuationOrSymbol(siblings[end])) {
    value = toString(siblings[end])

    if (value !== '/' && value !== ')') {
      end--
      nodes.pop()
    }
  }

  child = {type: 'SourceNode', value: toString(nodes)}
  initial = position.start(nodes[0])
  final = position.end(nodes[nodes.length - 1])

  if (initial.line && final.line) {
    child.position = {start: initial, end: final}
  }

  // Remove the nodes and insert a SourceNode.
  siblings.splice(start, end - start + 1, child)

  // Ignore the following full-stop: it’s not part of a link.
  if (value === '.') {
    index++
  }

  return index + 1
}
