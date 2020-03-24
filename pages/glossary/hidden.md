---
title: Explicitly Hidden
key: hidden
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An HTML element is _explicitly hidden_ if at least one of the following is true for itself or any of its ancestors:

- has a `hidden` attribute; or
- has a CSS property `display` set to `none`; or
- has a CSS property `visibility` set to `hidden`.
