---
title: Included in the accessibility tree
key: included-in-the-accessibility-tree
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
---

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree](https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/).

Elements with `aria-hidden="true"` should not be included in the accessibility tree. However, some browsers include [focusable](#focusable) elements with `aria-hidden="true"`in the accessibility tree. In such a browser, a user of assistive technology could still interact with the element by using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

