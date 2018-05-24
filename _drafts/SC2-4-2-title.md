---
name: HTML page has a title
description: |
  This rule checks that the HTML page has a title

success_criterion:
- 2.4.2 # Page Titled

test_aspects:
- DOM Tree

authors:
- Wilco Fiers
- Stein Erik Skotkjerra
- Bryn Anderson
- Anne Thyme Nørregaard
- Jey Nandakumar
---

## Test procedure

### Applicability

The rule applies to any page where the root element is an `html` element, and which is not embedded in another page.

**Note**: Pages may be embedded inside other pages through elements such as iframes and object elements.

### Expectation 1

The page contains at least one `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not `title` elements for HTML document and should be ignored.

### Expectation 2

The first `title` element contains [non-empty text][].

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html
- https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=242#qr-navigation-mechanisms-title
- https://www.w3.org/TR/WCAG20-TECHS/G88.html
- https://www.w3.org/TR/WCAG20-TECHS/H25.html
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
