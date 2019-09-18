---
title: Visual context
key: visual-context
---

The visual context of some piece of information (_e.g._ an element) is everything that is visually or logically located near it. Only [visible](#visible) information may be part of the visual context.

It may include, but is not limited to, headings, text in the same sentence or paragraph.

**Note**: As a rule of thumb, visual context should be close enough to be displayed on the device at the same time as the piece of information it clarifies. Because device sizes vary wildly and content can further be zoomed and moved around, this is however not a strong requirement.

**Note**: Elements that are visually located further from the piece of information may still be considered as visual context if they both have a visual emphasise and are logically close to the piece of information (_e.g._ near it in the [node tree](https://dom.spec.whatwg.org/#concept-node-tree)). For example, a heading can be considered as visual context for its full section of text even though it might be located far away from the end of that content, and might even be off screen due to scrolling. But it has a strong logical connection with the content which indicates that it is giving context for all of it.

**Note**: Visual context that is located before (in reading order) the piece of information it clarifies is often more useful than visual context located after. Indeed, it is easier for users to use context that they have already read than context that is yet to be read.
