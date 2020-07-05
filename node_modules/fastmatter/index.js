const combine = require('stream-combiner')
const jsYaml = require('js-yaml').load
const split = require('split')
const through = require('through2')

function isSeparator (line) {
  // the '---' separator can have trailing whitespace but not leading whitespace
  return line[0] === '-' && line.trim() === '---'
}

const NEWLINE = '\n'

function fastmatter (string) {
  if (typeof string !== 'string') {
    throw new Error('Need a string')
  }

  const bodyOnly = {
    attributes: {},
    body: string
  }

  const lines = string.split(NEWLINE)

  if (!isSeparator(lines[0])) {
    // no attributes; entire `string` is body
    return bodyOnly
  }

  const attributes = []
  const len = lines.length
  let i = 1
  while (i < len) {
    if (isSeparator(lines[i])) {
      // end of attributes
      break
    }
    attributes.push(lines[i])
    i += 1
  }

  if (i === lines.length) {
    // second '---' is missing; assume entire `string` is body
    return bodyOnly
  }

  return {
    attributes: attributes.length ? jsYaml(attributes.join(NEWLINE)) : {},
    body: lines.slice(i + 1).join(NEWLINE)
  }
}

const SPLIT_REGEX = /(\n)/

function noop () {}

fastmatter.stream = function (callback) {
  callback = callback || noop

  let isFirstLine = true
  let bodyFlag = 0
  let firstSeparator = ''
  let attributes = []

  function transform (chunk, encoding, transformCallback) {
    let line = chunk.toString()
    if (bodyFlag === 0) {
      // not in `body`
      if (isFirstLine) {
        isFirstLine = false
        if (isSeparator(line)) {
          // start of `attributes`
          firstSeparator = line // we need this if the second '---' is missing
        } else {
          // no attributes; the entire stream is `body`
          bodyFlag = 2 // the next line is the second line of `body`
          callback.call(this, {})
          callback = noop
          this.push(line)
        }
      } else {
        if (isSeparator(line)) {
          bodyFlag = 1 // the next line is the first line of `body`
          callback.call(this, jsYaml(attributes.join('')) || {})
          callback = noop
          firstSeparator = ''
          attributes = []
        } else {
          attributes.push(line)
        }
      }
    } else {
      // in `body`
      if (bodyFlag === 1) {
        bodyFlag = 2 // the next line is the second line of `body`
        line = line.substring(1) // drop the initial '\n'
      }
      this.push(line)
    }
    transformCallback()
  }

  function flush (flushCallback) {
    callback.call(this, {})
    if (firstSeparator.length) {
      this.push(firstSeparator)
    }
    if (attributes.length) {
      this.push(attributes.join(''))
    }
    flushCallback()
  }

  return combine(split(SPLIT_REGEX), through(transform, flush))
}

module.exports = fastmatter
