---
title: Implicit Semantic Role
key: implicit-role
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

#### Accessibility Support

- Images with an empty `alt` attribute should have an implicit role of `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation`. Instead, they add the `img` element to the accessibility tree with a role of either `img` or `graphic`.
