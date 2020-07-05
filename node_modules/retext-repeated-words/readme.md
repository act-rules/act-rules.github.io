# retext-repeated-words

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**retext**][retext] plugin to check for ~~`for`~~ repeated words.

## Install

[npm][]:

```sh
npm install retext-repeated-words
```

## Use

Say we have the following file, `example.txt`:

```txt
Well, it it doesn’t have to to be. Like a fish in the
the sea.
```

…and our script, `example.js`, looks like this:

```js
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
var repeated = require('retext-repeated-words')

unified()
  .use(english)
  .use(repeated)
  .use(stringify)
  .process(vfile.readSync('example.txt'), function(err, file) {
    console.error(report(err || file))
  })
```

Now, running `node example` yields:

```txt
example.txt
   1:7-1:12  warning  Expected `it` once, not twice   it   retext-repeated-words
  1:26-1:31  warning  Expected `to` once, not twice   to   retext-repeated-words
   1:51-2:4  warning  Expected `the` once, not twice  the  retext-repeated-words

⚠ 3 warnings
```

## API

### `retext().use(repeatedWords)`

Check for repeated words.

*   Doesn’t warn for some words which *do* occur twice (`the best exhibition
    they had had since`)
*   Doesn’t warn for initialisms (`D. D. will pop up with…`)
*   Doesn’t warn for capitalised words (`Duran Duran…`)

### Messages

Each message is emitted as a [`VFileMessage`][message] on `file`, with the
following fields:

###### `message.source`

Name of this plugin (`'retext-repeated-words'`).

###### `message.ruleId`

Repeated word (normalized) (`string`, such as `the`).

###### `message.actual`

Current not ok phrase (`string`).

###### `message.expected`

List of suggestions (`Array.<string>`, such as `['the']`).

## Related

*   [`retext-indefinite-article`](https://github.com/retextjs/retext-indefinite-article)
    — Check if indefinite articles are used correctly
*   [`retext-redundant-acronyms`](https://github.com/retextjs/retext-redundant-acronyms)
    — Check for redundant acronyms

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

[build-badge]: https://img.shields.io/travis/retextjs/retext-repeated-words.svg

[build]: https://travis-ci.org/retextjs/retext-repeated-words

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-repeated-words.svg

[coverage]: https://codecov.io/github/retextjs/retext-repeated-words

[downloads-badge]: https://img.shields.io/npm/dm/retext-repeated-words.svg

[downloads]: https://www.npmjs.com/package/retext-repeated-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-repeated-words.svg

[size]: https://bundlephobia.com/result?p=retext-repeated-words

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
