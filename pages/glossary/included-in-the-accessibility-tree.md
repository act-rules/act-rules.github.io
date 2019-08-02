---
title: Included in the accessibility tree
key: included-in-the-accessibility-tree
---

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are [included in the accessibility tree][] can be found in the [HTML accessibility API mappings](https://www.w3.org/TR/html-aam/) (work in progress) and the [SVG accessibility API mappings](https://www.w3.org/TR/svg-aam/) (work in progress).

> **Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted with using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
