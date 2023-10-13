---
title: Can be target by a pointer event
key: can-be-targeted-by-pointer-event
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element _can be targeted by pointer events_ when both the following conditions are true:

- the element is [focusable][]; and
- the element is not totally [obscured][]. <- not covered, even by transparent stuff…

> **Comment:** if a transparent element completely covers it (and intercept clicks), then the element cannot be clicked.

[focusable]: #focusable 'Definition of Focusable'
[visible]: #visible ' Definition of Visible'
