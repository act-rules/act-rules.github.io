---
title: Focused
key: focused
unambiguous: true
objective: true
input_aspects:
  - CSS styling
---

An element is said to be _focused_ when the element matches the [`:focus` pseudo-class](https://drafts.csswg.org/selectors-4/#focus-pseudo) uninterruptedly for a period of 5 seconds after a user interacted with the page.

The 5 seconds time span is an arbitrary limit which is not included in WCAG. Giving the possibility of the focus state of elements being managed through scripts, testing the focused state of an element consistently would be impractical without a time limit.