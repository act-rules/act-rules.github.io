---
id: b5c3f8
name: HTML page has `lang` attribute
rule_type: atomic
description: |
  This rule checks that an HTML page has a non-empty `lang` attribute.
accessibility_requirements:
  wcag20:3.1.1: # Language of Page (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Annika Nietzio
  - Jey Nandakumar
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

## Expectation

Each test target has a `lang` attribute that is neither empty ("") nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

## Assumptions

- The presence of a `lang` attribute is being used to comply to WCAG. This rule doesn't test if the attribute is needed to comply to WCAG.

## Accessibility Support

There are known combinations of a popular operating system with browsers and assistive technologies that do not support the `lang` attribute.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [MDN: `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

## Test Cases

### Passed

#### Passed Example 1

The `lang` attribute specified has a non-empty value.

```html
<html lang="en"></html>
```

### Failed

#### Failed Example 1

There is no `lang` attribute specified.

```html
<html></html>
```

#### Failed Example 2

The `lang` attribute specified is empty ("").

```html
<html lang=""></html>
```

#### Failed Example 3

The `lang` attribute consists of only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

```html
<html lang=" "></html>
```

### Inapplicable

#### Inapplicable Example 1

The rule does not apply to `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg"></svg>
```

#### Inapplicable Example 2

The rule does not apply to `math` element.

```svg
<math></math>
```
