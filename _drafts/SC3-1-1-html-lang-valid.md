---
name: SC3-1-1-html-lang-valid

description:
- This rule checks the validity of the `xml:lang` and/or the `lang` attribute, and that it conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree: The tree that HTML is parsed into.

authors:
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root node of the page, if it is an `<html>` element with a `lang` and/or `xml:lang` attribute.

### Expectation

- The value of the `lang` and/or `xml:lang` attribute conforms to [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt).

## Assumptions

*There are currently no assumptions*

## Accessibility Support

This rule is only applicable in a scenario where assistive technologies are inconsistent about how they determine the language of the page.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html

## Implementation Tests

Implementation tests are available at: [{{ page.name}} tests](../draft-tests/{{ page.name }}.html)
