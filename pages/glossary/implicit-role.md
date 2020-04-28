---
title: Implicit Semantic Role
key: implicit-role
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

The _Implicit Semantic Role_ is the [semantic role](#semantic-role) of each element that is used when no valid [explicit semantic role](#explicit-role) is specified. Elements with no [role attribute](https://html.spec.whatwg.org/#attr-aria-role), or with a [role attribute](https://www.w3.org/TR/role-attribute/) containing no valid token, are mapped to their implicit role.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/), the [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/) documentation, and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

#### Accessibility Support

- Images with an empty `alt` attribute should have an implicit role of `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a role of either `img` or `graphic`.
