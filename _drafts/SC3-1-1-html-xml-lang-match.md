---
name: SC3-1-1-html-xml-lang-match

description:
 The rule checks that for the `html` element, there is no mismatch between the primary language in `lang` and `xml:lang` attributes, if both are used.

success_criterion:
- 3.1.1

test_aspects:
- DOM Tree # The tree that HTML is parsed into.

authors:
- Annika Nietzio
- Jey Nandakumar
---

## Test Procedure

### Applicability

The root node of the page, if it is an `html` element with both `lang` and `xml:lang` attributes.

### Expectation

- The value of the primary language sub-tag for the `lang` and `xml:lang` attributes are the same.

**Note:** language tags are not case sensitive

## Assumptions

*There are currently no assumptions*

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies, as to which attribute is used to determine the language, does this lead to a violation of SC 3.1.1.

## Background

- https://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140408/H57
- https://www.ietf.org/rfc/bcp/bcp47.txt
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
- https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:lang
- https://www.w3.org/TR/WCAG20-TECHS/H57.html
