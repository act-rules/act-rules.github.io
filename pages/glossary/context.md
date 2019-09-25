---
title: Context
key: context
---

The context of a piece of information is any other information that helps a user understand it by clarifying its meaning.

Both the [visual context](#visual-context) and the [programmatically determined context](#programmatically-determined-context) contribute to the context.

**Note**: To be considered as context, content must be available similarly to all users with similar abilities. Thus, usually, content from another [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) is not part of the context as there is no guarantee that all users have access to it (the global topic of a website may nonetheless be considered context even if it's not repeated on every single page of the site).

**Note**: The maximum "distance" (both visual distance on the device, and tree distance within the [node tree](https://dom.spec.whatwg.org/#concept-node-tree)) between some information and its context depends on the precise situation, and on what kind of information is looked at.

**Note**: When used to differentiate between two pieces of information, context should not include anything that is "shared" by these two pieces of information: _e.g._, headings that are above only one of these pieces of information may be used as context, but headings that are above both should not.

**Note**: Some elements, _e.g._ headings, may be part of both the [visual context](#visual-context) and the [programmatically determined context](#programmatically-determined-context). In many cases, if a document has proper semantic formatting, it also has all the [visual context](#visual-context) of its elements included in their [programmatically determined context](#programmatically-determined-context) (on the other hand, [programmatically determined context](#programmatically-determined-context) can often include information that is not [visible](#visible), _e.g._ a hidden element referred by `aria-describedby` to provide some alternative text description).
