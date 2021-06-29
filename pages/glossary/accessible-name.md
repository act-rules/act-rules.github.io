---
title: Accessible Name
key: accessible-name
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name](/pages/examples/accessible-name/).

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support

- Because the [accessible name and description computation][] is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).
- The [accessible name and description computation][] suggest that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case.

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
