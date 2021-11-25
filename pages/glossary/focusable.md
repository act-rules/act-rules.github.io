---
title: Focusable
key: focusable
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus immediately after the focus event is fired are not considered _focusable_.

The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers](https://html.spec.whatwg.org/#rules-for-parsing-integers). For the [tabindex value][] to be different from null, the [tabindex attribute][] must be a [valid integer](https://html.spec.whatwg.org/#valid-integer).

[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value