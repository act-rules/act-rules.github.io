---
title: Visual context
key: visual-context
---

The visual context of a node is everything that is visually or logically located near it when the [document](https://dom.spec.whatwg.org/#concept-document) containing it is rendered. Only [visible](#visible) information may be part of the visual context.

The logical distance is the distance in the structure of the document: either the tree distance within the DOM tree, or the semantic relation. For example, headings are logically near the content that follows (until the next heading of the same or higher level) even though they might be far away visually or in the DOM tree.

The visual context may include, but is not limited to, headings, text in the same sentence or paragraph.

**Note**: As a rule of thumb, visual context should be close enough to be displayed on the device at the same time as the element it relates to. Because device sizes vary wildly and content can further be zoomed and moved around, this is however not a strong requirement.

**Note**: Visual context that is located before (in reading order) the element it relates to is often more useful than visual context located after. Indeed, it is easier for users to use context that they have already read than context that is yet to be read.
