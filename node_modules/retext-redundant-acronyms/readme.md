# retext-redundant-acronyms

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**retext**][retext] plugin to check for redundant acronyms (such as
`ATM machine` to `ATM`).

Fun fact, this is called [`RAS syndrome`][ras] (`redundant acronym syndrome
syndrome`).

## Install

[npm][]:

```sh
npm install retext-redundant-acronyms
```

## Use

Say we have the following file, `example.txt`:

```txt
Where can I find an ATM machine?
```

…and our script, `example.js`, looks like this:

```js
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
var redundantAcronyms = require('retext-redundant-acronyms')

unified()
  .use(english)
  .use(redundantAcronyms)
  .use(stringify)
  .process(vfile.readSync('example.txt'), function(err, file) {
    console.error(report(err || file))
  })
```

Now, running `node example` yields:

```text
example.txt
  1:21-1:32  warning  Expected `ATM` instead of `ATM machine`  atm  retext-redundant-acronyms

⚠ 1 warning
```

## API

### `retext().use(redundantAcronyms)`

Check for redundant acronyms (such as `ATM machine`).

### Messages

Each message is emitted as a [`VFileMessage`][message] on `file`, with the
following fields:

###### `message.source`

Name of this plugin (`'retext-redundant-acronyms'`).

###### `message.ruleId`

Lower case matched abbreviation (`string`, such as `'atm'`)

###### `message.actual`

Current not ok phrase (`string`, such as `'ATM machines'`).

###### `message.expected`

List of suggestions (`Array.<string>`, such as `['ATMs']`).

## Related

*   [`retext-indefinite-article`](https://github.com/retextjs/retext-indefinite-article)
    — Check if indefinite articles are used correctly
*   [`retext-repeated-words`](https://github.com/retextjs/retext-repeated-words)
    — Check `for for` repeated words

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

[build-badge]: https://img.shields.io/travis/retextjs/retext-redundant-acronyms.svg

[build]: https://travis-ci.org/retextjs/retext-redundant-acronyms

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-redundant-acronyms.svg

[coverage]: https://codecov.io/github/retextjs/retext-redundant-acronyms

[downloads-badge]: https://img.shields.io/npm/dm/retext-redundant-acronyms.svg

[downloads]: https://www.npmjs.com/package/retext-redundant-acronyms

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-redundant-acronyms.svg

[size]: https://bundlephobia.com/result?p=retext-redundant-acronyms

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

[ras]: https://en.wikipedia.org/wiki/RAS_syndrome
