---
name: SC2-4-4-link-has-name
description: |
  Each link has an accessible name

success_criterion:
- 4.1.2 # Name, Role, Value

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML or SVG element with the semantic role of `link` that are [visible on the page][] or [exposed to assistive technologies][].

**Note**: Roles can be [implicit](https://www.w3.org/TR/html-aria/#dfn-implicit-aria-semantics) through the element name or explicit through the [role attribute](https://www.w3.org/TR/html52/dom.html#aria-role-attribute).

### Expectation

Each target element has an [accessible name][] that is [non-empty][].

## Assumptions

- The rule assumes that all links are user interface components as defined by WCAG 2. When the link role is used incorrectly, this assumption may not be true.

## Accessibility Support

There are no major accessibility support issues known for this rule.

@@@TO DO: Accessibility Support in SVG???

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

## Test Cases

### Passed
```html
<a href="http://www.w3.org/WAI">Web Accessibility Initiative (WAI)</a>
```

```html
<button role="link">Click me!</button>
```

```html

```

### Failed
```html

```

### Inapplicable
```html
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```
------

## exposed to assistive technologies

Elements that should be contained in the accessibility tree as described in [Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/#mapping_general)

## visible on the page


[accessible name]: TODO
[non-empty]: 
[exposed to assistive technologies]: 
[visible on the page]: 