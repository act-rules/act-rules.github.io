'use strict'

var nspell = require('nspell')
var visit = require('unist-util-visit')
var toString = require('nlcst-to-string')
var isLiteral = require('nlcst-is-literal')
var includes = require('lodash.includes')
var quote = require('quotation')

module.exports = spell

var own = {}.hasOwnProperty

var source = 'retext-spell'
var digitsOnly = /^\d+$/
var smart = /’/g
var straight = "'"
var max = 30

function spell(options) {
  var queue = []
  var settings = options || {}
  var load = options && (options.dictionary || options)
  var literal = settings.ignoreLiteral
  var digits = settings.ignoreDigits
  var apos = settings.normalizeApostrophes
  var personal = settings.personal
  var config
  var loadError

  if (typeof load !== 'function') {
    throw new Error('Expected `Object`, got `' + load + '`')
  }

  config = {
    ignoreLiteral: literal === null || literal === undefined ? true : literal,
    ignoreDigits: digits === null || digits === undefined ? true : digits,
    normalizeApostrophes: apos === null || apos === undefined ? true : apos,
    ignore: settings.ignore,
    max: settings.max || max,
    count: 0,
    cache: {},
    checker: null
  }

  load(construct)

  return transformer

  // Transformer which either immediately invokes `all` when everything has
  // finished loading or queues the arguments.
  function transformer(tree, file, next) {
    if (loadError) {
      next(loadError)
    } else if (config.checker) {
      all(tree, file, config)
      next()
    } else {
      queue.push([tree, file, config, next])
    }
  }

  // Callback invoked when a `dictionary` is loaded (possibly erroneous) or
  // when `load`ing failed.
  // Flushes the queue when available, and sets the results on the parent scope.
  function construct(err, dictionary) {
    var length = queue.length
    var index = -1

    loadError = err

    if (dictionary) {
      config.checker = nspell(dictionary)

      if (personal) {
        config.checker.personal(personal)
      }
    }

    while (++index < length) {
      if (!err) {
        all.apply(null, queue[index])
      }

      queue[index][3](err)
    }

    queue = []
  }
}

// Check a file for spelling mistakes.
function all(tree, file, config) {
  var ignore = config.ignore
  var ignoreLiteral = config.ignoreLiteral
  var ignoreDigits = config.ignoreDigits
  var apos = config.normalizeApostrophes
  var checker = config.checker
  var cache = config.cache

  visit(tree, 'WordNode', checkWord)

  // Check one word.
  function checkWord(node, position, parent) {
    var children = node.children
    var word = toString(node)
    var correct
    var length
    var index
    var child
    var reason
    var message
    var suggestions

    if (ignoreLiteral && isLiteral(parent, position)) {
      return
    }

    if (apos) {
      word = word.replace(smart, straight)
    }

    if (irrelevant(word)) {
      return
    }

    // Check the whole word.
    correct = checker.correct(word)

    // If the whole word is not correct, check all its parts.
    // This makes sure that, if `alpha` and `bravo` are correct, `alpha-bravo`
    // is also seen as correct.
    if (!correct && children.length > 1) {
      correct = true
      length = children.length
      index = -1

      while (++index < length) {
        child = children[index]

        if (child.type !== 'TextNode' || irrelevant(child.value)) {
          continue
        }

        if (!checker.correct(child.value)) {
          correct = false
        }
      }
    }

    if (!correct) {
      // Suggestions are very slow, so cache them (spelling mistakes other than
      // typos often occur multiple times).
      if (own.call(cache, word)) {
        reason = cache[word]
      } else {
        reason = quote(word, '`') + ' is misspelt'

        if (config.count === config.max) {
          file.message(
            'Too many misspellings; no further spell suggestions are given',
            node,
            [source, 'overflow'].join(':')
          )
        }

        config.count++

        if (config.count < config.max) {
          suggestions = checker.suggest(word)

          if (suggestions.length !== 0) {
            reason +=
              '; did you mean ' + quote(suggestions, '`').join(', ') + '?'
            cache[word] = reason
          }
        }

        cache[word] = reason
      }

      message = file.message(
        reason,
        node,
        [source, word.toLowerCase().replace(/\W+/, '-')].join(':')
      )
      message.actual = word
      message.expected = suggestions || []
    }
  }

  // Check if a word is irrelevant.
  function irrelevant(word) {
    return includes(ignore, word) || (ignoreDigits && digitsOnly.test(word))
  }
}
