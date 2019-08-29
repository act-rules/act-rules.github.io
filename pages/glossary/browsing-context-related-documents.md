---
title: Set of browsing context related documents
key: browsing-context-related-documents
---

Two [documents](https://dom.spec.whatwg.org/#concept-document) are *browsing context related* if they are [fully active](https://html.spec.whatwg.org/#fully-active); and their respective [browsing context](https://html.spec.whatwg.org/#browsing-context) have a common [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context).

A *set of browsing context related documents* is the set of all [documents](https://dom.spec.whatwg.org/#concept-document) that are browsing context related with a [document](https://dom.spec.whatwg.org/#concept-document) whose [browsing context](https://html.spec.whatwg.org/#browsing-context) is a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note**: By construction, a set of browsing context related is always maximal for inclusion.