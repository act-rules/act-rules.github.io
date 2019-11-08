---
title: Explicit Semantic Role
key: explicit-role
---

The explicit semantic role is the [semantic role](#semantic-role) of an element set by its [role attribute](https://www.w3.org/TR/role-attribute/).

The [role attribute](https://www.w3.org/TR/role-attribute/) takes a list of tokens. The explicit semantic role is the first valid role in this list. If none of the tokens are valid, the [implicit semantic role](#implicit-role) will be used instead. The valid roles are all non-abstract roles from [WAI-ARIA Specifications](#wai-aria-specifications).

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line](https://www.w3.org/TR/WCAG-EM/#step1c). For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

#### Acccessibility Support

Some browsers and assistive technologies treat the tokens of the `role` attribute as case-sensitive. Unless lowercase letters are used for the value of the `role` attribute, not all user agents will be able to interpret the tokens correctly. [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/) also specifies that [authors must use lowercase letters for the `role` and `aria-*` attributes](https://www.w3.org/TR/html-aria/#case-sensitivity).
