---
id: 047fe0
name: Document has headings
rule_type: atomic
description: |
  This rule checks that each section of content starts with a heading
accessibility_requirements:
  wcag-technique:H69: # Providing heading elements at the beginning of each section of content
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
  - CSS styling
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectations

For each [section of content](#section-of-content) in the test target, the first [text node](https://dom.spec.whatwg.org/#text) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) which is inside this [section of content](#section-of-content) is a descendant in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) of an element with a [semantic role](#semantic-role) of `heading` which is [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69), expects the heading to accurately describe its corresponding section.

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69), expects the headings are correctly nested without skipping level. It is nonetheless recommended to nest headings hierarchically without skipping levels.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)

## Test Cases

### Passed

#### Passed Example 1

This [document](#https://dom.spec.whatwg.org/#concept-document) has one [section of content](#section-of-content) for each Chapter in a book. Each of these [section of content](#section-of-content) starts with an `h1` element.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei)</title></head>
  <h1>Chapter one</h1>
  Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  <!-- rest of the text of Chapter one -->
  <h1>Chapter two</h1>
  <!-- text of the next chapter -->
</html>
```

#### Passed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Passed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

### Failed

#### Failed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 4

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element](#https://dom.spec.whatwg.org/#document-element) of this [document](#https://dom.spec.whatwg.org/#concept-document) is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

