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
- none of the following CSS properties of the element have a [cascaded value][] with "Author" [origin][]: `height`, `width`, `font-size`, `line-height`.

[cascaded value]: https://www.w3.org/TR/css-cascade-5/#cascade-value 'CSS definition of computed value'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[origin]: https://drafts.csswg.org/css-cascade-5/#cascading-origins 'CSS definition of Cascading Origin'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[semantic role]: #semantic-role 'Definition of Semantic Role'
