---
title: Web page
key: web-page
---

A web page is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note**: This definition differs from [WCAG definition of a web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) which focuses on the URI rather than on the [browsing contexts](https://html.spec.whatwg.org/#browsing-context).

Two HTML [nodes](https://dom.spec.whatwg.org/#concept-node) are _browsing context related_ if:

- their [shadow including roots](https://dom.spec.whatwg.org/#concept-shadow-including-root) are [fully active](https://html.spec.whatwg.org/#fully-active); and
- the [browsing contexts](https://html.spec.whatwg.org/#browsing-context) of their [shadow including roots](https://dom.spec.whatwg.org/#concept-shadow-including-root) either have a common [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context), or one is an [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context) of the other, or they are the same.

A _set of browsing context related nodes_ is the set of all [nodes](https://dom.spec.whatwg.org/#concept-node) that are browsing context related with a [node](https://dom.spec.whatwg.org/#concept-node) whose [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root)'s [browsing context](https://html.spec.whatwg.org/#browsing-context) is a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: By construction, a set of browsing context related nodes is always maximal for inclusion.

**Note**: Nesting of browsing context mostly happens with `iframe` and `object`. Thus a set of browsing context related nodes will most of the time be all nodes in a "top-level" document and all its `iframe` and `object` (recursively).
