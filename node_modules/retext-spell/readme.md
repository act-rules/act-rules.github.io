# retext-spell

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**retext**][retext] plugin to check spelling (with [`nspell`][nspell]).

## Install

[npm][]:

```sh
npm install retext-spell
```

## Use

```js
var retext = require('retext')
var spell = require('retext-spell')
var dictionary = require('dictionary-en-gb')
var report = require('vfile-reporter')

retext()
  .use(spell, dictionary)
  .process('Some useles documeant.', function(err, file) {
    console.error(report(err || file))
  })
```

Yields:

```txt
   1:6-1:12  warning  `useles` is misspelt; did you mean `useless`?      useles     retext-spell
  1:13-1:22  warning  `documeant` is misspelt; did you mean `document`?  documeant  retext-spell

⚠ 2 warnings
```

## API

### `retext().use(spell, options)`

> `retext-spell` is async; use [`process`][process], not `processSync`.

Check spelling (with [`nspell`][nspell]).

###### Signatures

*   `retext().use(spell, dictionary)`
*   `retext().use(spell, options)`

###### `options.dictionary`

A dictionary ([`Function`][dictionaries]).
Result of requiring one of the dictionaries in
[`wooorm/dictionaries`][dictionaries].

###### `options.personal`

[Personal][] dictionary (`string` or a `Buffer` in UTF-8, optional).

###### `options.ignore`

List of words to ignore (`Array.<string>`, default `[]`).

###### `options.ignoreLiteral`

Whether to ignore [literal words][literal] (`boolean?`, default `true`).

###### `options.ignoreDigits`

Whether to ignore “words” that contain only digits, such as `123456`
(`boolean?`, default `true`).

###### `options.normalizeApostrophes`

Deal with apostrophes (`boolean?`, default `true`).
Whether to swap smart apostrophes (`’`) with straight apostrophes (`'`) before
checking spelling.
Dictionaries typically support this, but this option can be used if not.

###### `options.max`

Number of unique words to suggest for (`number?`, default `30`).
By default, up to thirty words are suggested for.
Further misspellings are still warned about, but without suggestions.
Increasing this number significantly impacts performance.

### Messages

Each message is emitted as a [`VFileMessage`][message] on `file`, with the
following fields:

###### `message.source`

Name of this plugin (`'retext-spell'`).

###### `message.ruleId`

Normalized not ok word (`string`, such as `'useles'`).

###### `message.actual`

Current not ok word (`string`, such as `'Useles'`).

###### `message.expected`

List of suggestions of words to use (`Array.<string>`, such as `['Useless']`).

## Related

*   [`retext-contractions`](https://github.com/retextjs/retext-contractions)
    — Check apostrophe use in contractions
*   [`retext-diacritics`](https://github.com/retextjs/retext-diacritics)
    — Check for proper use of diacritics
*   [`retext-indefinite-article`](https://github.com/retextjs/retext-indefinite-article)
    — Check if indefinite articles (`a`, `an`) are used correctly
*   [`retext-redundant-acronyms`](https://github.com/retextjs/retext-redundant-acronyms)
    — Check for redundant acronyms (`ATM machine`)
*   [`retext-repeated-words`](https://github.com/retextjs/retext-repeated-words)
    — Check `for for` repeated words
*   [`retext-syntax-mentions`](https://github.com/retextjs/retext-syntax-mentions)
    — Classify [**@mentions**](https://github.com/blog/821) as syntax
*   [`retext-syntax-urls`](https://github.com/retextjs/retext-syntax-urls)
    — Classify URLs and filepaths as syntax

## Contribute

See [`contributing.md`][contributing] in [`retextjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/retextjs/retext-spell.svg

[build]: https://travis-ci.org/retextjs/retext-spell

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-spell.svg

[coverage]: https://codecov.io/github/retextjs/retext-spell

[downloads-badge]: https://img.shields.io/npm/dm/retext-spell.svg

[downloads]: https://www.npmjs.com/package/retext-spell

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-spell.svg

[size]: https://bundlephobia.com/result?p=retext-spell

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/retext

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/retextjs/.github

[contributing]: https://github.com/retextjs/.github/blob/master/contributing.md

[support]: https://github.com/retextjs/.github/blob/master/support.md

[coc]: https://github.com/retextjs/.github/blob/master/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[message]: https://github.com/vfile/vfile-message

[literal]: https://github.com/syntax-tree/nlcst-is-literal#isliteralparent-index

[process]: https://github.com/unifiedjs/unified#processorprocessfilevalue-done

[dictionaries]: https://github.com/wooorm/dictionaries

[nspell]: https://github.com/wooorm/nspell

[personal]: https://github.com/wooorm/nspell#personal-dictionary-documents
