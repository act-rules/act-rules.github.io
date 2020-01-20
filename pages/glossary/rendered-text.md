---
title: Rendered text
key: rendered-text
---

An element is considered to have "rendered text" when it contains [text nodes](https://dom.spec.whatwg.org/#text) that do not inherit from an element that is styled with `display:none` or `visibility:hidden`. The rendered text is a string of the concatenated [data](https://dom.spec.whatwg.org/#concept-cd-data) of all these [text nodes](https://dom.spec.whatwg.org/#text).
