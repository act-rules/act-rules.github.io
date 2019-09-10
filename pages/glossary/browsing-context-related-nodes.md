---
title: Set of browsing context related nodes
key: browsing-context-related-nodes
---

Two HTML [nodes](https://dom.spec.whatwg.org/#concept-node) are _browsing context related_ if:

- their [shadow including roots](https://dom.spec.whatwg.org/#concept-shadow-including-root) are [fully active](https://html.spec.whatwg.org/#fully-active); and
- the [browsing contexts](https://html.spec.whatwg.org/#browsing-context) of their [shadow including roots](https://dom.spec.whatwg.org/#concept-shadow-including-root) either have a common [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context) or one is [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context) of the other.

A _set of browsing context related nodes_ is the set of all [nodes](https://dom.spec.whatwg.org/#concept-node) that are browsing context related with a [node](https://dom.spec.whatwg.org/#concept-node) whose [shadow including root]'s [browsing context](https://html.spec.whatwg.org/#browsing-context) is a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

A _set of browsing context related documents_ is the set of all [documents](https://dom.spec.whatwg.org/#concept-document) that are browsing context related with a [document](https://dom.spec.whatwg.org/#concept-document) whose [browsing context](https://html.spec.whatwg.org/#browsing-context) is a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: By construction, a set of browsing context related nodes is always maximal for inclusion.

**Note**: Nesting of browsing context mostly happens with `iframe` and `object`. Thus a set of browsing context related nodes will most of the time be a all nodes in a "top-level" document and all its `iframe` and `object` (recursively).
