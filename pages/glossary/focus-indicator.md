---
title: Focus indicator
key: focus-indicator
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element I is a _focus indicator_ for a [focusable][] element F if all the following conditions are true:

- I is a [potential focus indicator][] for F; and
- I has a [distinguishing styles][] between its state when F is [focused][] and when it's not.

**Note to reviewers:** This currently does not handle the default blinking cursor of focused `<input type="text" />` as it is not a [distinguishing style][distinguishing styles]. Any idea?

[focusable]: #focusable 'Definition of focusable'
[focused]: #focused 'Definition of Focused'
[potential focus indicator]: #potential-focus-indicator 'Definition of Potential focus indicator'
[distinguishing styles]: #distinguishing-styles 'Definition of Distinguishing styles'
