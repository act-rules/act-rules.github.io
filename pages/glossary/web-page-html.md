---
title: Web page (HTML)
key: web-page-html
---

As [defined by WCAG](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), a web page is:

> a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent

This generic definition applies to all technologies (_e.g._ PDF or DOCX documents, …).

In the case of HTML and SVG, a web page is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).
