---
title: Semantic Role 
key: semantic-role
---

A semantic association that indicates an object's type. This allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.

[Roles](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) can be [implicit](https://www.w3.org/TR/wai-aria/#implicit_semantics) through the element type or explicit through the [role attribute](https://www.w3.org/TR/html/dom.html#aria-role-attribute). 

The role attribute takes a list of tokens, the semantic role is the first valid role in this list. If none of the tokens are valid, the implicit role will be used instead.

Non-abstract roles defined in the following specifications are considered valid:
- https://www.w3.org/TR/wai-aria-1.1/
- https://www.w3.org/TR/dpub-aria-1.0/
- https://www.w3.org/TR/graphics-aria-1.0/

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line](https://www.w3.org/TR/WCAG-EM/#step1c). For the purposes of test cases in all rules, full support must be assumed.

**Note**: For HTML elements the implicit roles are documented in [ARIA in HTML](https://www.w3.org/TR/html-aria/).



