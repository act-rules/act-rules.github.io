---
title: Programmatically Hidden
key: programmatically-hidden
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion. If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
