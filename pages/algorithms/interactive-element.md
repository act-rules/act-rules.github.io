---
title: Content (element type)
---

1. An element is interactive if tabindex is not turned off on a standard interactive HMTL element. These will match the following selector:

    a[href], button, select, textarea

AND also match:

    *:not([tabindex=-1]):not([role])

2. An element is interactive if it has an ARIA role that inherits from the abstract `widget` role, and if it matches the following selector:

    *[tabindex][:not([tabindex=-1])

**Editor note:** We should test if `*[role=link]` is picked up as a link if it does not have tabindex on it. If so we might want to remove the `[tabindex]` part of the selector.

For a list of roles that inherit from the widget role, see the ARIA specification here: https://www.w3.org/TR/wai-aria-1.1/#widget_roles