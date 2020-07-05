# nlcst-search

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**nlcst**][nlcst] utility to search for patterns in a tree.

## Install

[npm][]:

```bash
npm install nlcst-search
```

## Usage

```js
var search = require('nlcst-search')
var toString = require('nlcst-to-string')

var tree = {
  type: 'SentenceNode',
  children: [
    {
      type: 'WordNode',
      children: [
        {type: 'TextNode', value: 'Don'},
        {type: 'PunctuationNode', value: '’'},
        {type: 'TextNode', value: 't'}
      ]
    },
    {type: 'WhiteSpaceNode', value: ' '},
    {
      type: 'WordNode',
      children: [{type: 'TextNode', value: 'do'}]
    },
    {type: 'WhiteSpaceNode', value: ' '},
    {
      type: 'WordNode',
      children: [
        {type: 'TextNode', value: 'Block'},
        {type: 'PunctuationNode', value: '-'},
        {type: 'TextNode', value: 'level'}
      ]
    }
  ]
}

search(tree, ['dont'], function(nodes) {
  console.log(toString(nodes))
})
// Don’t

search(tree, ['do blocklevel'], function(nodes) {
  console.log(toString(nodes))
})
// do Block-level
```

## API

### `search(node, patterns, handler[, allowApostrophes|options])`

Search for patterns a [tree][].

##### Throws

`Error` — When not given `node` or `patterns`.

##### Parameters

###### `node`

[Tree][] to search in ([`Node`][node]).

###### `patterns`

Patterns to search for (`Array.<string>` or `Object`).
If an `Object`, uses its keys as patterns.
Each pattern is a space-delimited list of words, where each word is
[normalize][]d to remove casing, apostrophes, and dashes.
Spaces in a pattern mean zero or more white space nodes in the tree.
Instead of a word, it’s also possible to use a wildcard symbol (`*`, an
asterisk), that matches any word in a pattern (`alpha * charlie`).

###### `handler`

Handler invoked when a match is found ([`Function`][fn-handler]).

###### `allowApostrophes`

Treated as `options.allowApostrophes`.

###### `options.allowApostrophes`

Passed to [`nlcst-normalize`][normalize] (`boolean`, default: `false`).

###### `options.allowDashes`

Passed to [`nlcst-normalize`][normalize] (`boolean`, default: `false`).

###### `options.allowLiterals`

Include [literal][] phrases (`boolean`, default: `false`).

## `function handler(nodes, index, parent, pattern)`

Handler invoked when a match is found.

##### Parameters

###### `nodes`

List of [sibling][]s that match `pattern` ([`Array.<Node>`][node]).

###### `index`

[Index][] where the match starts in `parent` (`number`).

###### `parent`

[Parent][] node of `nodes` ([`Node`][node]).

###### `pattern`

The matched pattern (`string`).

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/nlcst-search.svg

[build]: https://travis-ci.org/syntax-tree/nlcst-search

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-search.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-search

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-search.svg

[downloads]: https://www.npmjs.com/package/nlcst-search

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-search.svg

[size]: https://bundlephobia.com/result?p=nlcst-search

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[nlcst]: https://github.com/syntax-tree/nlcst

[node]: https://github.com/syntax-tree/unist#node

[literal]: https://github.com/syntax-tree/nlcst-is-literal

[normalize]: https://github.com/syntax-tree/nlcst-normalize

[fn-handler]: #function-handlernodes-index-parent-pattern

[tree]: https://github.com/syntax-tree/unist#tree

[sibling]: https://github.com/syntax-tree/unist#sibling

[index]: https://github.com/syntax-tree/unist#index

[parent]: https://github.com/syntax-tree/unist#parent-1
