---
title: Text content
key: text-content
---

The textual content is a concatenated string of all text nodes within an element and all textual alternatives within an element. This includes all the [rendered text][] as well as the text alternative returned by the [Text Alternative Computation][] of all `img` elements that are not set to `role=presentation`. The strings are to be concatenated in the order in which they appear in the DOM tree.

[rendered text]: rendered-text.html
[text alternative computation]: text-alternative.html