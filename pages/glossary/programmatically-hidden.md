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
- has a [computed][] CSS property `content-visibility` of `hidden`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hiddenCSS) setting the CSS `display` property to `none` for elements with the `hidden` attribute; and the CSS `content-visibility` property to `hidden` for elements with the `hidden` attribute set to `until-found`. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` or `content-visibility` properties can reveal elements with the `hidden` attribute.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
