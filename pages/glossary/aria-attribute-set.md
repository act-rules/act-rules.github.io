---
title: ARIA state or property is set
key: aria-attribute-set
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

An ARIA [state][aria state] or [property][aria property] is <dfn>set</dfn> on an [HTML element][namespaced element] when it has a value. This may happen in three ways:

- It is <dfn id="aria-attribute-set:explicit">explicitly set</dfn> if there is a corresponding `aria-*` HTML attribute on the element, whose value is valid for this ARIA [state][aria state] or [property][aria property].

  For example, `aria-label` is explicitly set on `<button aria-label="Next page">Next</button>`.

- It is <dfn id="aria-attribute-set:implicit">implicitly set</dfn> if there is no corresponding `aria-*` HTML attribute on the element, but the element has an [implicit semantic role][implicit role] that has a value for this ARIA [state][aria state] or [property][aria property] defined in [HTML Attribute State and Property Mappings][aria attribute mapping].

  For example, `aria-checked` is implicitly set on `<input type="checkbox" checked />`.

- It is <dfn id="aria-attribute-set:default">set by default</dfn> if there is no corresponding `aria-*` HTML attribute on the element, and the element has an [implicit semantic role][implicit role] that has a default value for this ARIA [state][aria state] or [property][aria property].

  For example, `aria-expanded` is set by default on `<details><summary>Details</summary></details>`.

[aria attribute mapping]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'HTML Attribute State and Property Mappings'
[aria property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[aria state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[implicit role]: #implicit-role 'Definition of Implicit Semantic Role'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
