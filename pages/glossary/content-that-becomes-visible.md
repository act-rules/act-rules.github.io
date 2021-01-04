---
title: Content that becomes visible
key: content-that-becomes-visible
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

The _content that becomes visible_ after an [event][] [firing][] is any element for which all of the following is true:

- 500 milliseconds after the [event][] [firing][] the element has [visible text content][]; and
- a tick before the [event][] [firing][] there was no element with the same [descendant text content][] that the element has after the [event][] [firing][]; and
- the element has no [descendants][] for which the above two conditions are true.

[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant
[descendant text content]: https://dom.spec.whatwg.org/#concept-descendant-text-content 'Definition of descendant text content'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[visible text content]: #visible-text-content 'Definition of visible text content'