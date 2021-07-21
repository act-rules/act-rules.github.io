---
title: Hidden State
key: hidden-state
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An HTML element's _hidden state_ is "true" if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

In any other case, the element's _hidden state_ is "false".

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
