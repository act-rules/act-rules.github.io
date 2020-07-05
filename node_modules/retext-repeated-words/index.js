'use strict'

var visit = require('unist-util-visit')
var convert = require('unist-util-is/convert')
var toString = require('nlcst-to-string')

module.exports = repeatedWords

var source = 'retext-repeated-words'

var word = convert('WordNode')
var whiteSpace = convert('WhiteSpaceNode')

// List of words that can legally occur twice.
var list = [
  'had',
  'that',
  'can',
  'blah',
  'beep',
  'yadda',
  'sapiens',
  'tse',
  'mau'
]

// Check for for repeated words.
function repeatedWords() {
  return transformer
}

function transformer(tree, file) {
  visit(tree, 'SentenceNode', visitor)

  function visitor(parent) {
    var children = parent.children
    var length = children.length
    var index = -1
    var child
    var before
    var value
    var node
    var prev
    var message
    var position
    var start

    while (++index < length) {
      child = children[index]

      if (word(child)) {
        value = toString(child)
        node = child
        position = index
      } else if (whiteSpace(child)) {
        start = position
        before = value
        prev = node
        value = node = position = null
      } else {
        before = value = prev = node = position = start = null
      }

      if (before && before === value && !ignore(value)) {
        message = file.message(
          'Expected `' + value + '` once, not twice',
          {
            start: prev.position.start,
            end: node.position.end
          },
          [source, value.toLowerCase().replace(/\W+/g, '-')].join(':')
        )

        message.actual = toString(children.slice(start, position + 1))
        message.expected = [toString(prev)]
      }
    }

    return visit.SKIP
  }
}

// Check if `value`, a word which occurs twice, should be ignored.
function ignore(value) {
  var head
  var tail

  // …the most heartening exhibition they had had since…
  if (list.indexOf(lower(value)) !== -1) {
    return true
  }

  head = value.charAt(0)

  if (head === head.toUpperCase()) {
    // D. D. will pop up with...
    if (value.length === 2 && value.charAt(1) === '.') {
      return true
    }

    tail = value.slice(1)

    // Duran Duran... Bella Bella...
    if (tail === lower(tail)) {
      return true
    }
  }

  return false
}

function lower(value) {
  return value.toLowerCase()
}
