# fastmatter [![npm Version](http://img.shields.io/npm/v/fastmatter.svg?style=flat)](https://www.npmjs.org/package/fastmatter) [![Build Status](https://img.shields.io/travis/yuanqing/fastmatter.svg?branch=master&style=flat)](https://travis-ci.org/yuanqing/fastmatter) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/fastmatter.svg?style=flat)](https://coveralls.io/github/yuanqing/fastmatter)

> A fast frontmatter parser. Supports both string and stream inputs.

## Usage

Given a document `foo.md` containing YAML frontmatter and content:

```md
---
title: Hello, World!
tags: [ foo, bar, baz ]
---
Lorem ipsum dolor sit amet consectetur adipisicing elit.
```

&hellip;we can parse this document as a string, via [`fastmatter(string)`](#fastmatterstring):

```js
const fastmatter = require('fastmatter')
const fs = require('fs')

fs.readFile('foo.md', 'utf8', function (error, data) {
  if (error) {
    throw error
  }
  console.log(fastmatter(data))
  /* =>
   * {
   *   attributes: {
   *     title: 'Hello, World!',
   *     tags: [ 'foo', 'bar', 'baz' ]
   *   },
   *   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
   * }
   */
})
```

&hellip;or as a stream, via [`fastmatter.stream([callback])`](#fastmatterstreamcallback):

```js
const fastmatter = require('fastmatter')
const fs = require('fs')
const concat = require('concat-stream')

fs.createReadStream('foo.md').pipe(
  fastmatter.stream(function (attributes) {
    console.log(attributes)
    /* =>
     * {
     *   title: 'Hello, World!',
     *   tags: [ 'foo', 'bar', 'baz' ]
     * }
     */
    this.pipe(
      concat(function (body) {
        console.log(body.toString())
        //=> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      })
    )
  })
)
```

`callback` is called with the frontmatter `attributes`, while the document `body` is simply passed through the stream. Also note that the `this` context of `callback` is the stream itself; this is useful if we want to change the flow of the stream depending on the parsed `attributes`.

## API

```js
const fastmatter = require('fastmatter')
```

### fastmatter(string)

Parses the `string` and returns the parsed frontmatter `attributes` and document `body`.

### fastmatter.stream([callback])

Calls `callback` with the parsed frontmatter `attributes`. The `this` context of `callback` is the stream itself. The document `body` is passed through the stream.

## Installation

Install via [yarn](https://yarnpkg.com):

```sh
$ yarn add fastmatter
```

Or [npm](https://npmjs.com):

```sh
$ npm install --save fastmatter
```

## License

[MIT](LICENSE.md)
