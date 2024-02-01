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

- It is <dfn id="aria-attribute-set:explicit">explicitly set</dfn> if there is a corresponding `aria-*` HTML attribute on the element. The [value][html attribute value] as written in the HTML code may or may not be valid for this ARIA [state][aria state] or [property][aria property] and therefore the attribute may or may not have an [attribute value][]

  For example, `aria-label` is explicitly set on `<button aria-label="Next page">Next</button>`; and `aria-checked` is explicitly set on `<input type="checkbox" aria-checked="yes" />`, even though it does not have an [attribute value][].

- It is <dfn id="aria-attribute-set:implicit">implicitly set</dfn> if there is no corresponding `aria-*` HTML attribute on the element, but the element or one of its HTML attribute has an [ARIA attribute mapping][aria attribute mapping] setting this ARIA attribute.

  For example, `aria-checked` is implicitly set both on `<input type="checkbox" checked />` (through the [presence of the HTML attribute `checked`][checked present]) and `<input type="checkbox" />` (through its [absence][checked absent]); however, it is not set on `<input type="text" />` given that the mapping for `checked` doesn't apply when the `input` element is not of type `checkbox` or `radio`.

- It is <dfn id="aria-attribute-set:default">set by default</dfn> if there is no corresponding `aria-*` HTML attribute on the element, and either the element has an [semantic role][] that has a default value for this ARIA [state][aria state] or [property][aria property] or the attribute itself has a default value.

  For example, `aria-haspopup` is set by default on `<div role="combobox"></div>` through the role of `combobox`.

#### Background

For explicitly set attributes, this definition only looks at the value written in the HTML code, without considering its validity. Attributes that are explicitly set with an invalid value are author errors that are detected by the rule [Role attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/674b10/), and authors should not rely on invalid value to have forbidden attributes discarded from roles not allowing it.

For attributes set by default, this definition doesn't consider whether the attribute is allowed on the element (or role). Thus, `aria-expanded` (whose default value is `false`) is considered as set by default on `<input />` even though it is not allowed on the `textbox` role. While authors can (and should) rely on attributes to be set by default, they also have no direct control on them and therefore whether they are allowed on an element never causes an author error.

[aria attribute mapping]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'HTML Attribute State and Property Mappings'
[aria property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[aria state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[checked absent]: https://www.w3.org/TR/html-aam-1.0/#att-checked-absent 'HTML Accessibility API Mappings, Attribute Checked absent'
[checked present]: https://www.w3.org/TR/html-aam-1.0/#att-checked 'HTML Accessibility API Mappings, Attribute Checked present'
[html attribute value]: https://html.spec.whatwg.org/multipage/dom.html#attributes 'HTML Specification of Attribute Value'
[namespaced element]: #namespaced-element 'Definition of Namespaced Element'
[semantic role]: #semantic-role 'Definition of Semantic Role'
