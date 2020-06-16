---
id: 674b10
name: '`role` attribute has valid value'
rule_type: atomic
description: |
  This rule checks that each `role` attribute has a valid value.
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

Any [`role` attribute][role attribute] for which all the following are true:

- the attribute has a value that is neither empty ("") nor only [ASCII whitespace][]; and
- the attribute is specified on an HTML or SVG element that is [included in the accessibility tree][].

## Expectation

Each test target has at least one token which is a valid value corresponding to a non-abstract role from [WAI-ARIA Specifications][].

## Assumptions

The ARIA `role` is being used to comply to WCAG. If compliance to WCAG is done in other ways, this rule may fail while [Success Criterion 4.1.2 Name, Role, Value][sc412] is still satisfied.

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

#### Passed Example 1

This [`role` attribute][role attribute] contains one token, and this token is a valid [WAI-ARIA role][].

```html
<input type="text" role="textbox" />
```

#### Passed Example 2

This [`role` attribute][role attribute] contains two tokens, and these tokens are both valid [WAI-ARIA roles][wai-aria role].

```html
<span role="button link"></span>
```

#### Passed Example 3

This [`role` attribute][role attribute] contains two tokens, and one of these tokens is a valid [WAI-ARIA role][].

```html
<img role="img xyz" src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

### Failed

#### Failed Example 1

This [`role` attribute][role attribute] contains one token, but this token is not a valid role in any of the [WAI-ARIA specifications][].

```html
<input role="invalid" value="123" />
```

#### Failed Example 2

This [`role` attribute][role attribute] contains two tokens, but none of these tokens is a valid role in any of the [WAI-ARIA specifications][].

```html
<input type="text" role="invalid role" />
```

#### Failed Example 3

This [`role` attribute][role attribute] contains one token, but this token is not a valid role in any of the [WAI-ARIA specifications][].

```html
<input type="text" role="#" />
```

### Inapplicable

#### Inapplicable Example 1

There is no [`role` attribute][role attribute].

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This [`role` attribute][role attribute] has no value.

```html
<div role>Some Content</div>
```

#### Inapplicable Example 3

This [`role` attribute][role attribute] is empty ("").

```html
<div role="">Some Content</div>
```

#### Inapplicable Example 4

This [`role` attribute][role attribute] is only [ASCII whitespace][].

```html
<input type="text" role=" " />
```

#### Inapplicable Example 5

This [`role` attribute][role attribute] is specified on an element which is not [included in the accessibility tree][].

```html
<div aria-hidden="true" role="banner">Some Content</div>
```

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'Definition of ASCII whitespace'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the Role attribute'
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[space separated tokens]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'Definition of space separated tokens'
[wai-aria role]: https://www.w3.org/TR/wai-aria-1.1/#role_definitions 'List of WAI-ARIA roles'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
