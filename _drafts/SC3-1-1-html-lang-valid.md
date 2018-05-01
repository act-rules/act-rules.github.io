---
name: SC3-1-1-html-lang-valid

description: |
  This rule checks the lang or xml:lang attribute conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

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

The root element of the page, if it is an `html` element with a `lang` and/or `xml:lang` attribute.

### Expectation

The value of the `lang` or `xml:lang` attribute conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

**Note**: If `lang` and `xml:lang` exists, then only `lang` is tested for conformance.

## Assumptions

*There are currently no assumptions*

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` and `xml:lang` attributes.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html

## Implementation Tests

Implementation tests are available at: [{{ page.rule_id}} tests](../draft-tests/{{ page.rule_id }}.html)
