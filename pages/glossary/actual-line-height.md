---
title: Actual Line Height
key: actual-line-height
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

The _actual line height_ of an element is obtained from the [computed value][] of its `line-height` property as follows:

- if the value is a length, then the _actual line height_ is that length;
- if the value is a number, then the _actual line height_ is that number multiplied by the [computed value][] of the `font-size` property of the element;
- if the value is the keyword `normal`, then the _actual line height_ is 1.2 times the [computed value][] of the `font-size` property of the element.

#### Background

This definition is meant to mimic the [used value][] of the `line-height` property. However, in the `normal` case, this value depends on font specific metrics resulting in complex computations. Therefore, this definition uses 1.2 as a reasonable heuristic. [CSS specifications][line-height normal] recommend that the [used value][] is between 1.0 and 1.2 and major browsers are effectively using values close to 1.2.

[computed value]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[line-height normal]: https://drafts.csswg.org/css2/#valdef-line-height-normal "CSS 2.2 (Editor's draft) - normal line-height"
[used value]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
