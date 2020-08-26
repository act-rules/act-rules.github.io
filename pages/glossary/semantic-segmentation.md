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

A [segmentation][] of an [HTML web page][] is a _semantic segmentation_ if all of the following are true:

- each [block of repeated content][] in the page is a [block][] in the [segmentation]; and
- there is no [block][] in the [segmentation][] that contain both nodes from inside and outside the [main block of content][] (if it exists).

Note that the [main block of content][] doesn't need to be a single [block] in the [segmentation][]. It may be split into sub-[blocks][block]. But it is not possible for a [block][] to "overlap" the boundaries of the [main block of content][].

[block]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[html web page]: #web-page-html 'Definition of HTML Web Page'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[segmentation]: #segmentation 'Definition of Segmentation'
