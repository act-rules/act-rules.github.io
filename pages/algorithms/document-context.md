---
title: Document Context
key: document-context
---

Each element has a document context defined by the document root node. A new document root node is created for a `shadowDOM` or a nested `iframe`. The document root can usually be identified using the [getRootNode](https://dom.spec.whatwg.org/#ref-for-dom-node-getrootnode) method.