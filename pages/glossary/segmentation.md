---
title: Segmentation
key: segmentation
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A _segmentation_ of an [HTML web page][] is a set of [blocks of content][block of content] such that each [perceivable content][] in the page is in exactly one [block of content][].

Note that a segmentation is effectively a partition of the [perceivable content][] into [blocks of content][block of content]. However, not every partition of the page is a segmentation, because there are extra conditions for being a [block of content][]. Notably, the **continuity** condition on blocks prevents interleaving, each block is effectively a segment of the nodes (in tree order).

[block of content]: #block-of-content 'Definition of Block of Content'
[html web page]: #web-page-html 'Definition of HTML Web Page'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
