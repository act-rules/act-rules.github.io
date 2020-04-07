---
title: Rendered text
key: rendered-text
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element is considered to have _rendered text_ when it contains [text nodes](https://dom.spec.whatwg.org/#text) that do not inherit from an element that is styled with `display:none` or `visibility:hidden`. The rendered text is a string of the concatenated [data](https://dom.spec.whatwg.org/#concept-cd-data) of all these [text nodes](https://dom.spec.whatwg.org/#text).
