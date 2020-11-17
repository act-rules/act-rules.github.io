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

A [block of content][] B, inside an [HTML web page][] P, is a _block of repeated content_ if both the following are true:

- **distance 1**: there exist an [instrument][] in P which leads the user to another [HTML web page][] P'; and
- **repeated**: there exist a [block of content][] in P' which is [equivalent][equivalent resource] to B.

#### Background

This definition only considers pages at "distance 1" from the current page. The instrument leading there is usually a link, sometimes a button. In addition, P' can be any page and is not restricted, for example, to pages of the same website.

The blocks of repeated content are not uniquely defined. For example `<div><span id="repeated-1"></span><span id="repeated-2"></span><span id="not-repeated"></span></div>` can be considered to have two blocks of repeated content (each of the first two `span`) or one (both the first two `span` together).

[block of content]: #block-of-content 'Definition of Block of Content'
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[html web page]: #web-page-html 'Definition of Web Page'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
