---
name: SC3-1-1-html-has-lang

description:
  This rule checks that the `html` element has a `lang` or `xml:lang` attribute.

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree # The tree that HTML is parsed into.

authors:
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root node of the page, if it is an `html` element.

### Expectation

- The element has a `lang` or `xml:lang` attribute

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html
