---
name: SC3-1-1-html-has-lang

description: |
  This rule checks that the `html` element has a `lang` or `xml:lang` attribute.

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree

authors:
- Annika Nietzio
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root element of the page, if it is an `html` element.

### Expectation

The test target has a `lang` or `xml:lang` attribute.

**Note**: HTML 5 recommends using `lang` instead of `xml:lang`. This is not known to impact accessibility, which is why use of both is permitted by this rule.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html
