# nlcst-is-literal

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**nlcst**][nlcst] utility to check if a node is meant literally.

Useful if a tool wants to exclude values that are possibly void of meaning.
For example, a spell-checker could exclude these literal words, thus not warning
about “monsieur”.

## Install

[npm][]:

```sh
npm install nlcst-is-literal
```

## Use

Say we have the following file, `example.txt`:

```txt
The word “foo” is meant as a literal.

The word «bar» is meant as a literal.

The word (baz) is meant as a literal.

The word, qux, is meant as a literal.

The word — quux — is meant as a literal.
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var unified = require('unified')
var english = require('retext-english')
var visit = require('unist-util-visit')
var toString = require('nlcst-to-string')
var literal = require('nlcst-is-literal')

var file = vfile.readSync('example.txt')

var tree = unified()
  .use(english)
  .parse(file)

visit(tree, 'WordNode', visitor)

function visitor(node, index, parent) {
  if (literal(parent, index)) {
    console.log(toString(node))
  }
}
```

Now, running `node example` yields:

```txt
foo
bar
baz
qux
quux
```

## API

### `isLiteral(parent, index|child)`

Check if the `child` in `parent` is enclosed by matching delimiters.
If `index` is given, the [child][] of `parent` at that [index][] is checked.

For example, `foo` is literal in the following samples:

*   `Foo - is meant as a literal.`
*   `Meant as a literal is - foo.`
*   `The word “foo” is meant as a literal.`

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

[build-badge]: https://img.shields.io/travis/syntax-tree/nlcst-is-literal.svg

[build]: https://travis-ci.org/syntax-tree/nlcst-is-literal

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-is-literal.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-is-literal

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-is-literal.svg

[downloads]: https://www.npmjs.com/package/nlcst-is-literal

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-is-literal.svg

[size]: https://bundlephobia.com/result?p=nlcst-is-literal

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/jchat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[nlcst]: https://github.com/syntax-tree/nlcst

[index]: https://github.com/syntax-tree/unist#index

[child]: https://github.com/syntax-tree/unist#child
