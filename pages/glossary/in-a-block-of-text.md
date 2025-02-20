---
title: In a Block of Text
key: in-a-block-of-text
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element E is _in a block of text_ if its closest [inclusive ancestor][] which creates a [block box][] contains at least one non-whitespace [text node][] descendant (other than a `::marker` pseudo-element) that is not also a descendant of E.

[block box]: https://drafts.csswg.org/css-display/#block-box 'CSS definition of a Block Box'
[inclusive ancestor]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[text node]: https://dom.spec.whatwg.org/#text 'DOM Definition of Text Node'

```

```
