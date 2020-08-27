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

A [segmentation][] of an [HTML web page][] is a _semantic segmentation_ if all the following are true:

- each [block of repeated content][] in the page is fully included in a single [block][] in the [segmentation]; and
- there is no [block][] in the [segmentation][] that contain both nodes from inside and outside the [main block of content][] (if it exists).

The [main block of content][] doesn't need to be a single [block] in the [segmentation][]. It may be split into sub-[blocks][block]. But it is not possible for a [block][] to "overlap" the boundaries of the [main block of content][]. On the other hand, [blocks of repeated content][block of repeated content] may be merged into a single [block][] of the [segmefntation][], but may not be split over several. Content which is neither in the [main block of content][] nor in any [block of repeated content][] may be in any [block][] of the [segmentation][].

[block]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[html web page]: #web-page-html 'Definition of HTML Web Page'
[main block of content]: #main-block-of-content 'Definition of Main Block of Content'
[segmentation]: #segmentation 'Definition of Segmentation'
