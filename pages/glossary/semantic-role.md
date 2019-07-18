---
title: Semantic Role
key: semantic-role
---

A semantic role is a semantic association that indicates an object's type. This allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.

[Roles](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) can be [implicit](https://www.w3.org/TR/wai-aria/#implicit_semantics) through the element type or explicit through the [role attribute](https://www.w3.org/TR/html/dom.html#aria-role-attribute).

The [role attribute](https://www.w3.org/TR/html/dom.html#aria-role-attribute) takes a list of tokens. The semantic role is the first valid role in this list. If none of the tokens are valid, the implicit role will be used instead.

Non-abstract roles defined in the following specifications are considered valid:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)
- [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/)

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line](https://www.w3.org/TR/WCAG-EM/#step1c). For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

**Note**: For HTML elements the [implicit roles](#implicit-role) are documented in [ARIA in HTML](https://www.w3.org/TR/html-aria/).

#### Acccessibility Support

Some browsers and assistive technologies treat the tokens of the `role` attribute as case-sensitive. Unless lowercase letters are used for the value of the `role` attribute, not all user agents will be able to interpret the tokens correctly. ARIA in HTML also specifies that [authors must use lowercase letters for the `role` and `aria-*` attributes](https://www.w3.org/TR/html-aria/#case-sensitivity).
