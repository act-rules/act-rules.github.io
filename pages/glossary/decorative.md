---
title: Decorative
key: decorative
---

Serving only an aesthetic purpose, providing no information, and having no functionality.

**Note:** Authors can mark an `img` element as decorative to indicate that it should be ignored by assistive technology by using either `role="presentation"`, `role="none"`, or `alt=""`. An element should only be marked as decorative if removing the element does not cause a loss of information to the user.

#### Accessibility Support

There are several popular browsers that do not fully respect empty `alt` attribute and will add the `img` element to the accessibility tree with a role of either `img` or `graphic`.
