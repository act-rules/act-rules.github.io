---
title: Explicitly Hidden
key: hidden
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An HTML element is _hidden_ if at least one of the following is true for itself or any of its [ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed](https://www.w3.org/TR/css-cascade/#computed-value) CSS property `display` of `none`; or
- has a [computed](https://www.w3.org/TR/css-cascade/#computed-value) CSS property `visibility` of `hidden`.
- has an `aria-hidden` attribute set to `true`
