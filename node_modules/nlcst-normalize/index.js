'use strict'

var toString = require('nlcst-to-string')

module.exports = normalize

var all = /[-']/g
var dash = /-/g
var apostrophe = /’/g
var singleQuote = /'/g

function normalize(value, options) {
  var settings = options || {}
  var allowApostrophes = settings.allowApostrophes
  var allowDashes = settings.allowDashes
  var result = (typeof value === 'string' ? value : toString(value))
    .toLowerCase()
    .replace(apostrophe, "'")

  if (allowApostrophes && allowDashes) {
    return result
  }

  if (allowApostrophes) {
    return result.replace(dash, '')
  }

  if (allowDashes) {
    return result.replace(singleQuote, '')
  }

  return result.replace(all, '')
}
