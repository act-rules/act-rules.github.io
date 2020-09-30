---
title: Semantic segmentation
key: semantic-segmentation
unambiguous: true
objective: false
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A [segmentation][] of an [HTML web page][] is a _semantic segmentation_ if there is no [block][] in the [segmentation][] that contains nodes from both inside and outside the [main block of content][] (if it exists).

The [main block of content][] doesn't need to be a single [block] in the [segmentation][]. It may be split into sub-[blocks][block]. But it is not possible for a [block][] to "overlap" the boundaries of the [main block of content][].

[block]: #block-of-content 'Definition of Block of Content'
[html web page]: #web-page-html 'Definition of HTML Web Page'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[segmentation]: #segmentation 'Definition of Segmentation'
