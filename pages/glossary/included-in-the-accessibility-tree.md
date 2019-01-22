---
title: Included in the accessibility tree
key: included-in-the-accessibility-tree
---

Elements included in the accessibility tree of platform specific accessibility APIs. 

Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

An element is included in the accessibility tree if it is a DOM node in the flattened DOM tree that meets the following criteria:

1. It isn't hidden through WAI-ARIA or CSS, and
2. it has one or more of the following:
   * It has a [semantic role](#semantic-role), or
   * It has an accessible name that, when trimmed of whitespace, is not an empty string, or
   * it owns another element though an `aria-owns` attribute, or
   * It is owned by another element that references it with `aria-owns`

 > **Note:** Text nodes and pseudo elements can also be part of the accessibility tree, since they have their text content as the accessible name.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are [included in the accessibility tree](#included-in-the-accessibility-tree) can be found in the [HTML accessibility API mappings](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings](https://www.w3.org/TR/svg-aam/).
 
 > **Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted with using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
