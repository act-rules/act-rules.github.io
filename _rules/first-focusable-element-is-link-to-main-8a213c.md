---
id: 8a213c
name: First focusable element is link to main content
rule_type: atomic
description: |
  This rule checks that the first focusable element is a link referring to the main content of the page
accessibility_requirements:
  wcag-technique:G1: # Adding a link at the top of each page that goes directly to the main content area
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
  - Language
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectation 1

The first [focusable](#focusable) element within the test target:
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- has a [semantic role](#semantic-role) of link; and
- when activated, moves focus to the [main content](#main-content) of the [document](#https://dom.spec.whatwg.org/#concept-document); and
- has either an [accessible name](#accessible-name) or [accessible description](#accessible-description) that communicates that it links to the [main content](#main-content).

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such link is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually be viewing and accepting cookies policy). Since that content is *not* repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)

## Test Cases

### Passed

#### Passed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

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

