---
title: Web page
key: web-page
---

A web page is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note**: This definition differs from [WCAG definition of a web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) which focuses on the URI rather than on the [browsing contexts](https://html.spec.whatwg.org/#browsing-context).
