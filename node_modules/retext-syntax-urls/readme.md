# retext-syntax-urls

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**retext**][retext] plugin to classify url-like values (`example.com`,
`index.html`, `www.alpha.bravo`) as [syntax][source], not natural language.

## Install

[npm][]:

```sh
npm install retext-syntax-urls
```

## Use

Without `syntax-urls`:

```js
var dictionary = require('dictionary-en-gb')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
var spell = require('retext-spell')
var urls = require('retext-syntax-urls')
var report = require('vfile-reporter')

unified()
  .use(english)
  .use(spell, dictionary)
  .use(stringify)
  .process(
    'Have you read readme.md? Check it out: www.example.com/readme.md',
    function(err, file) {
      console.log(report(err || file))
    }
  )
```

Yields:

```txt
  1:15-1:24  warning  `readme.md` is misspelt        retext-spell  retext-spell
  1:40-1:55  warning  `www.example.com` is misspelt  retext-spell  retext-spell
  1:56-1:65  warning  `readme.md` is misspelt        retext-spell  retext-spell

⚠ 3 warnings
```

With `syntax-urls`:

```diff
   .use(english)
+  .use(urls)
   .use(spell, dictionary)
```

Yields:

```txt
no issues found
```

## API

### `retext().use(urls)`

Classify URLs, paths, and filenames as [**source**][source], which represent
“external (ungrammatical) values” instead of natural language.
This hides them from [`retext-spell`][spell],
[`retext-readability`][readability], [`retext-equality`][equality], and more.

## Related

*   [`retext-syntax-mentions`][syntax-mentions]
    — Classify [**@mentions**](https://github.com/blog/821) as syntax
*   [`retext-spell`][spell]
    — Check spelling
*   [`retext-readability`][readability]
    — Check readability
*   [`retext-equality`][equality]
    — Check possible insensitive, inconsiderate language

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

[build-badge]: https://img.shields.io/travis/retextjs/retext-syntax-urls.svg

[build]: https://travis-ci.org/retextjs/retext-syntax-urls

[coverage-badge]: https://img.shields.io/codecov/c/github/retextjs/retext-syntax-urls.svg

[coverage]: https://codecov.io/github/retextjs/retext-syntax-urls

[downloads-badge]: https://img.shields.io/npm/dm/retext-syntax-urls.svg

[downloads]: https://www.npmjs.com/package/retext-syntax-urls

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-syntax-urls.svg

[size]: https://bundlephobia.com/result?p=retext-syntax-urls

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

[source]: https://github.com/syntax-tree/nlcst#source

[spell]: https://github.com/retextjs/retext-spell

[readability]: https://github.com/retextjs/retext-readability

[equality]: https://github.com/retextjs/retext-equality

[syntax-mentions]: https://github.com/retextjs/retext-syntax-mentions
