---
title: Programmatically Hidden
key: programmatically-hidden
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An HTML element is _programmatically hidden_ if any of the following is true:

- the element has a [computed][] CSS property `visibility` whose value is not `visible`; or
- at least one [ancestor][] of the element has a [computed][] CSS property `content-visibility` of `hidden`; or
- at least one [inclusive ancestors][] of the element has a [computed][] CSS property `display` of `none`; or
- at least one [inclusive ancestors][] of the elementhas an `aria-hidden` attribute set to `true`

[Ancestors][ancestor] and [inclusive ancestors][inclusive ancestor] are considered in the [flat tree][] for this definition.

#### Assumptions

This definition assumes that `content-visibility: auto` is treated the same way as `content-visibility: visible` for accessibility purposes (notably for inclusion in the accessibility tree).

#### Background

Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hiddenCSS) setting the CSS `display` property to `none` for elements with the `hidden` attribute set to the `hidden` state; and the CSS `content-visibility` property to `hidden` for elements with the `hidden` attribute set to `until-found`. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` or `content-visibility` properties can reveal elements with the `hidden` attribute.

Using `content-visibility: auto` is meant to allow the user agent to delay styling and painting the content until it is needed, thus saving an CPU usage (for example, when showing a very long list of items such as a newsfeed). However, the content must still be considered for search in page, tab order, … which make it needed. This mostly implies that the content must also be exposed to assistive technologies as normal. But in turn, if the content is only styled and laid out for assistive technologies, it means that the rendering time depends whether the user uses some; which open a "time attack" channel for malicious authors to detect user with disabilities… For this reason the draft specification has a caveat about [accessibility implications][] allowing the user agent to **not** expose such content in some case. The assumption states that the definition should not be used when such a case triggers.

[accessibility implications]: https://w3c.github.io/csswg-drafts/css-contain-2/#cv-a11y
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM Definition of Ancestor'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
