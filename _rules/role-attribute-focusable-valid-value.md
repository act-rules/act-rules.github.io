---
id: xxtodo
name: '`role` attribute has valid value for UI components'
rule_type: atomic
description: |
  TODO
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA4: # Using a WAI-ARIA role to expose the role of a user interface component
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G108: # Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jey Nandakumar
---

## Applicability

Any `role` attribute for which all the following are true:

- the attribute has a value that is neither empty ("") nor only [ASCII whitespace][]; and
- the attribute is specified on an HTML or SVG element that is [included in the accessibility tree][]; and
- the attribute is specified on an HTML or SVG element that is in [sequential focus order][#todo].

## Expectation

Each test target has at least one token which is a valid value corresponding to a non-abstract role from [WAI-ARIA Specifications][].

## Assumptions

- This rule assumes that elements in [sequential focus order][#todo] are [UI components][#todo link to wcag].
- This rule assumes that the [implicit role][] of elements is not enough to satisfy [Success Criterion 4.1.2 Name, Role, Value][sc412]. In case of invalid `role` attribute, the [semantic role][] defaults to the [implicit role]. If this is the correct role for the element, the rule will fail but [Success Criterion 4.1.2 Name, Role, Value][sc412] is still satisfied. For example, the element `<img role="image" src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />` will fail this rule (because `image` is not a valid role) but satisfies [Success Criterion 4.1.2 Name, Role, Value][sc412] because the element defaults to its [implicit role][] of `img`.

## Accessibility Support

Older browsers do not support more than one token in the value for a role attribute. If multiple values are used in the role attribute, the attribute is ignored in these browsers.

## Background

The `role` attribute is a set of [space separated tokens][]. Having a [whitespace](#whitespace) separated list of more than one token in the value of the role attribute is used for what is known as _fallback roles_. If the first token is not accessibility supported (or valid), the next one will be used for determining the [semantic role](#semantic-role) of the element, and so forth. Having the rule target attributes containing at least one non-[ASCII whitespace][] character ensures that there is at least one token in the set.

Further reading:

- [List of WAI-ARIA Roles][wai-aria role] and [List of Graphics ARIA Roles](https://www.w3.org/TR/graphics-aria-1.0/#role_definitions)
- [Specification of the `role` attribute][role attribute]
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1 Categorization of Roles](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization)
- [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)

## Test Cases

### Passed

### Failed

### Inapplicable

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'Definition of ASCII whitespace'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the Role attribute'
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated tokens]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'Definition of space separated tokens'
[wai-aria role]: https://www.w3.org/TR/wai-aria-1.1/#role_definitions 'List of WAI-ARIA roles'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
