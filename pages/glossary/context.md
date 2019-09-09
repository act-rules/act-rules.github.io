---
title: Context
key: context
---

The context of a piece of information is any other information that helps a user understand it by clarifying its meaning.

Both the [visual context](#visual-context) and the [programmatically determined context](#programmatically-determined-context) contribute to the context.

**Note**: The maximum "distance" (both visual distance on the device, and tree distance within the DOM tree) between some information and its context depends on the precise situation, and on what kind of information is looked at.

**Note**: When used to differentiate between two pieces of information, context should not include anything that is "shared" by these two pieces of information: _e.g._, headings that are above only one of these pieces of information may be used as context, but headings that are above both should not.

**Note**: Some elements, _e.g._ headings, may be part of both the [visual context](#visual-context) and the [programmatically determined context](#programmatically-determined-context). In many cases, a document which has proper semantic formatting while have all the [visual context](#visual-context) of its elements included in their [programmatically determined context](#programmatically-determined-context) (on the other hand, [programmatically determined context](#programmatically-determined-context) can often include information that is not [visible](#visible), _e.g._ a hidden element referred by `aria-describedby` to provide some alternative text description).
