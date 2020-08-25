---
title: Block of repeated content
key: block-of-repeated-content
unambiguous: true
objective: false
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A [block of content][], B, inside an [HTML web page][], P, is a _block of repeated content_ if:

- (**distance 1**) there exist in P an [instrument][] which leads the user to another [HTML web page][], P'; and
- (**repeated**) there exist in P' a [block of content][] which is [equivalent][equivalent resource] to B; and
- (**maximal**) B is not strictly included in another block of repeated content.

Note that this definition only consider pages at "distance 1" from the current page. The instrument leading there will usually be either a link, sometimes a button. Note also that P' can be any page and is not restricted, for example, to pages of the same website.

[block of content]: #block-of-content 'Definition of Block of Content'
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[html web page]: #web-page-html 'Definition of Web Page'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
