---
title: Scrollable Elements
key: scrollable-element
unambiguous: true
objective: true
---

A scrollable element is an [element][] with a _horizontal scroll distance_ or a _vertical scroll distance_ greater than 0.

- **horizontal scroll distance**: The difference between [scrollWidth][] and [clientWidth] for elements where the [computed][] [overflow-x][] is `auto` or `scroll`. Undefined for other elements.

- **vertical scroll distance**: The difference between [scrollHeight][] and [clientHeight] for elements where the [computed][] [overflow-y][] is `auto` or `scroll`. Undefined for other elements.

**note**: Elements such as `iframe` which can render a [nested browsing context][] are not _scrollable elements_. The scrollbars on some `iframe` elements come from the content inside the [nested browsing context][].

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/04/03'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow-x]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-x 'CSS Overflow working draft, overflow-x, 2020/04/03'
[overflow-y]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-y 'CSS Overflow working draft, overflow-y, 2020/04/03'
[clientwidth]: https://www.w3.org/TR/cssom-view/#dom-element-clientwidth 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[clientheight]: https://www.w3.org/TR/cssom-view/#dom-element-clientheight 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[scrollwidth]: https://www.w3.org/TR/cssom-view/#dom-element-scrollwidth 'CSS working draft, Element.scrollHeight, 2020/04/03'
[scrollheight]: https://www.w3.org/TR/cssom-view/#dom-element-scrollheight 'CSS working draft, Element.clientHeight, 2020/04/03'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/04/03'
