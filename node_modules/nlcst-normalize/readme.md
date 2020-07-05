# nlcst-normalize

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**nlcst**][nlcst] utility to normalize a word for easier comparison.

## Install

[npm][]:

```sh
npm install nlcst-normalize
```

## Use

```js
var normalize = require('nlcst-normalize')

normalize("Don't") // => 'dont'
normalize('Don’t') // => 'dont'
normalize('Don’t', {allowApostrophes: true}) // => 'don\'t'
normalize('Block-level') // => 'blocklevel'
normalize('Block-level', {allowDashes: true}) // => 'block-level'

normalize({
  type: 'WordNode',
  children: [
    {type: 'TextNode', value: 'Block'},
    {type: 'PunctuationNode', value: '-'},
    {type: 'TextNode', value: 'level'}
  ]
}) // => 'blocklevel'
```

## API

### `normalize(value[, options])`

Normalize a word (`string`, [`Node`][node], `Array.<Node>`) for easier
comparison.
Always normalizes smart apostrophes (`’`) to straight apostrophes (`'`) and
lowercases alphabetical characters (`[A-Z]`).

###### `options.allowApostrophes`

`boolean`, default: `false` — Do not strip apostrophes (`'`).

###### `options.allowDashes`

`boolean`, default: `false` — Do not strip hyphens (`-`).

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/nlcst-normalize.svg

[build]: https://travis-ci.org/syntax-tree/nlcst-normalize

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-normalize.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-normalize

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-normalize.svg

[downloads]: https://www.npmjs.com/package/nlcst-normalize

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-normalize.svg

[size]: https://bundlephobia.com/result?p=nlcst-normalize

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[nlcst]: https://github.com/syntax-tree/nlcst

[node]: https://github.com/syntax-tree/unist#node
