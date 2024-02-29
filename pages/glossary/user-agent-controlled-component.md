---
title: User-Agent Controlled Component
key: user-agent-controlled-component
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

A _User-Agent Controlled Component_ is an [HTML element][namespace element] for which all the following are true:

- the element has an [implicit role][] which is a [semantic `widget`][semantic role]; and
- the [computed values][] of the element's `height` and `width` CSS properties do not depend on content provided by the author; and
- the [computed values][] of the element's `height` and `width` CSS properties do not depend on any CSS property with a [cascaded value][] with "Author" [origin][].

#### Examples

Typically, radio buttons or checkboxes are User-Agent controlled, until an author does change their dimensions.

Links and buttons usually aren't, because their (text) content is provided by the author and the width depends on it.

Days in a calendar widget build with an `<input type="date">` element are also User-Agent controlled since their content isn't provided by the author and their dimension do not depend on values provided by the author.

Directly setting the `height` or `width` CSS properties makes an element not User-Agent controlled. Changing the `max-height` or `min-width` properties can make it not User-Agent controlled, if the added constraint impacts the [computed][computed values] `height` or `width` properties (i.e., if the `height` would be larger than `max-height` and is restricted by it; or if the `width` would be smaller than `min-width` and is changed by it).

[cascaded value]: https://www.w3.org/TR/css-cascade-5/#cascade-value 'CSS definition of computed value'
[computed values]: https://www.w3.org/TR/css-cascade-3/#computed 'CSS definition of Computed Value'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[origin]: https://drafts.csswg.org/css-cascade-5/#cascading-origins 'CSS definition of Cascading Origin'
[semantic role]: #semantic-role 'Definition of Semantic Role'
