---
id: 674b10
name: Role attribute has valid value
rule_type: atomic
description: |
  This rule checks that each `role` attribute has a valid value.
accessibility_requirements:
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
  wcag20:1.3.1: # Info and Relationship (A)
    secondary: This success criterion is **less strict** than this rule. This is because the success criterion can be satisfied by an element's implicit role when the explicit role is incorrect. Some of the failed examples may satisfy this success criterion.
  wcag20:4.1.2: # Name, Role, Value (A)
    secondary: This success criterion is **less strict** than this rule. This is because the success criterion can be satisfied by an element's implicit role when the explicit role is incorrect. Some of the failed examples may satisfy this success criterion.
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any `role` attribute for which all the following are true:

- the attribute has a value that is neither empty ("") nor only [ASCII whitespace][]; and
- the attribute is specified on an [HTML or SVG element][] which is not [programmatically hidden][].

## Expectation

Each test target has at least one token which is a valid value corresponding to a non-abstract role from [WAI-ARIA Specifications][].

## Assumptions

There are no assumptions.

## Accessibility Support

Older browsers do not support more than one token in the value for a role attribute. If multiple values are used in the role attribute, the attribute is ignored in these browsers.

## Background

Using an invalid role is often the result of a typo or other developer error. Unknown roles are ignored by browsers and assistive technologies, and the element's [implicit role][] is used. This often means that a role that should exist is missing.

The `role` attribute is a set of [space separated tokens][]. Having a [whitespace](#whitespace) separated list of more than one token in the value of the role attribute is used for what is known as _fallback roles_. If the first token is not accessibility supported (or valid), the next one will be used for determining the [semantic role][] of the element, and so forth. The rule applies to attributes containing at least one non-[ASCII whitespace][] character so that there is at least one token in the set.

Not every role can be used on every element. Which ARIA roles may be used on which HTML elements is defined in [ARIA in HTML](https://www.w3.org/TR/html-aria/). Testing this is not part of this rule.

### Bibliography

- [List of WAI-ARIA Roles][wai-aria role]
- [List of Graphics ARIA Roles](https://www.w3.org/TR/graphics-aria-1.0/#role_definitions)
- [List of DPUB ARIA Roles](https://www.w3.org/TR/dpub-aria-1.1/#role_definitions)
- [Specification of the `role` attribute][role attribute]
- [WAI-ARIA 1.2 Categorization of Roles](https://www.w3.org/TR/wai-aria-1.2/#roles_categorization)
- [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria-1.2/#introroles)

## Test Cases

### Passed

#### Passed Example 1

This `role` attribute contains one `searchbox` token which is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchbox" placeholder="Enter 3 or more characters"/></label>
```

#### Passed Example 2

This `role` attribute contains two tokens which are both valid [WAI-ARIA roles][wai-aria role].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="doc-biblioref link">ACT rules</span
>].
```

#### Passed Example 3

This `role` attribute contains two tokens, and one of these tokens (`searchbox`) is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchfield searchbox" placeholder="Enter 3 or more characters"/></label>
```

### Failed

#### Failed Example 1

This `role` attribute contains one `lnik` token, but this token is not a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.link {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
I love <span class="link" onclick="location.href='https://act-rules.github.io/'" role="lnik">ACT rules</span>.
```

#### Failed Example 2

This `role` attribute contains two tokens, but neither of these tokens is a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="bibliographic-reference lnik"
	>ACT rules</span
>].
```

### Inapplicable

#### Inapplicable Example 1

There is no `role` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 2

This `role` attribute has no value.

```html
<div role>Some Content</div>
```

#### Inapplicable Example 3

This `role` attribute is empty ("").

```html
<div role="">Some Content</div>
```

#### Inapplicable Example 4

This `role` attribute is only [ASCII whitespace][].

```html
<input type="text" role=" " />
```

#### Inapplicable Example 5

This `role` attribute is specified on an element which is [programmatically hidden][].

```html
<div aria-hidden="true" role="banner">Some Content</div>
```

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'Definition of ASCII whitespace'
[html or svg element]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the Role attribute'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated tokens]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'Definition of space separated tokens'
[wai-aria role]: https://www.w3.org/TR/wai-aria-1.2/#role_definitions 'List of WAI-ARIA roles'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
