---
title: Inert
key: intert
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

An [HTML or SVG element][] is inert if:
- it has an `inert` [attribute value][] of true; or
- one of its ancestor elements has an `inert` [attribute value][] of true; or
- it is [blocked by a modal](https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog).
