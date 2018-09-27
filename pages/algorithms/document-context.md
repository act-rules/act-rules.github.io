---
title: Document Context
key: document-context
---

Each element has a document root which defines its context. The document context varies if the node is within a `shadowDOM` or perhaps within a nested `iframe`. Other elements usually share the same document context. The document root can usually be identified using the [getRootNode](https://dom.spec.whatwg.org/#ref-for-dom-node-getrootnode) method.