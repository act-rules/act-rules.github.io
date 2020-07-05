'use strict'

var toString = require('nlcst-to-string')

module.exports = isLiteral

var single = {
  '-': true, // Hyphen-minus
  '–': true, // En dash
  '—': true, // Em dash
  ':': true, // Colon
  ';': true // Semi-colon
}

// Pair delimiters.
// From common sense, and WikiPedia: <https://en.wikipedia.org/wiki/Quotation_mark>.
var pairs = {
  ',': {
    ',': true
  },
  '-': {
    '-': true
  },
  '–': {
    '–': true
  },
  '—': {
    '—': true
  },
  '"': {
    '"': true
  },
  "'": {
    "'": true
  },
  '‘': {
    '’': true
  },
  '‚': {
    '’': true
  },
  '’': {
    '’': true,
    '‚': true
  },
  '“': {
    '”': true
  },
  '”': {
    '”': true
  },
  '„': {
    '”': true,
    '“': true
  },
  '«': {
    '»': true
  },
  '»': {
    '«': true
  },
  '‹': {
    '›': true
  },
  '›': {
    '‹': true
  },
  '(': {
    ')': true
  },
  '[': {
    ']': true
  },
  '{': {
    '}': true
  },
  '⟨': {
    '⟩': true
  },
  '「': {
    '」': true
  }
}

// Check if the node in `parent` at `position` is enclosed by matching
// delimiters.
function isLiteral(parent, index) {
  if (!(parent && parent.children)) {
    throw new Error('Parent must be a node')
  }

  if (index !== null && typeof index === 'object' && 'type' in index) {
    index = parent.children.indexOf(index)

    if (index === -1) {
      throw new Error('Node must be a child of `parent`')
    }
  }

  if (isNaN(index)) {
    throw new Error('Index must be a number')
  }

  if (
    (!hasWordsBefore(parent, index) && nextDelimiter(parent, index, single)) ||
    (!hasWordsAfter(parent, index) &&
      previousDelimiter(parent, index, single)) ||
    isWrapped(parent, index, pairs)
  ) {
    return true
  }

  return false
}

// Check if the node in `parent` at `position` is enclosed by matching
// delimiters.
function isWrapped(parent, position, delimiters) {
  var prev = previousDelimiter(parent, position, delimiters)
  var next

  if (prev) {
    next = nextDelimiter(parent, position, delimiters[toString(prev)])
  }

  return Boolean(next)
}

// Find the previous delimiter before `position` in `parent`.
// Returns the delimiter node when found.
function previousDelimiter(parent, position, delimiters) {
  var siblings = parent.children
  var index = position
  var result

  while (index--) {
    result = delimiterCheck(siblings[index], delimiters)

    if (result === null) {
      continue
    }

    return result
  }

  return null
}

// Find the next delimiter after `position` in `parent`.
// Returns the delimiter node when found.
function nextDelimiter(parent, position, delimiters) {
  var siblings = parent.children
  var index = position
  var length = siblings.length
  var result

  while (++index < length) {
    result = delimiterCheck(siblings[index], delimiters)

    if (result === null) {
      continue
    }

    return result
  }

  return null
}

// Check if `node` is in `delimiters`.
function delimiterCheck(node, delimiters) {
  var type = node.type

  if (type === 'WordNode' || type === 'SourceNode') {
    return false
  }

  if (type === 'WhiteSpaceNode') {
    return null
  }

  return toString(node) in delimiters ? node : false
}

// Check if there are word nodes before `position` in `parent`.
function hasWordsBefore(parent, position) {
  return containsWord(parent, 0, position)
}

// Check if there are word nodes before `position` in `parent`.
function hasWordsAfter(parent, position) {
  return containsWord(parent, position + 1, parent.children.length)
}

// Check if parent contains word-nodes between `start` and `end`.
function containsWord(parent, start, end) {
  var siblings = parent.children
  var index = start - 1

  while (++index < end) {
    if (siblings[index].type === 'WordNode') {
      return true
    }
  }

  return false
}
