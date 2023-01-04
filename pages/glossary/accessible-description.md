---
title: Accessible Description
key: accessible-description
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

The _accessible description_ is the programmatically determined description of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree). The accessible description provides information that complements the [accessible name][].

The accessible description is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible description can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note:** As per the [accessible name and description computation][], each element with the 'aria-describedby' property always has an accessible description.

[accessible name]: #accessible-name 'Definition of Accessible Name'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
