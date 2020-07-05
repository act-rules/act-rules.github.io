'use strict'

module.exports = quotation

var C_DEFAULT = '"'

function quotation(value, open, close) {
  var result
  var index
  var length

  open = open || C_DEFAULT
  close = close || open

  if (typeof value === 'string') {
    return open + value + close
  }

  if (typeof value !== 'object' || !('length' in value)) {
    throw new Error('Expected string or array of strings')
  }

  result = []
  length = value.length
  index = -1

  while (++index < length) {
    result[index] = quotation(value[index], open, close)
  }

  return result
}
