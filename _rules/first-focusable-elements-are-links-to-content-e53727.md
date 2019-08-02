---
id: e53727
name: First focusable elements are links to sections of content
rule_type: atomic
description: |
  This rule checks that the first focusable elements are links referring to sections of content on the same page
accessibility_requirements:
  wcag-technique:G124: # Adding links at the top of the page to each area of the content
    forConformance: false
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectation 1

There is an [initial segment](#initial-segment) of the [focusable](#focusable) elements (in focus order) such that each element in that [initial segment](#initial-segment):
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- has a [semantic role](#semantic-role) of link; and
- when activated, moves focus to a [section of content](#section-of-content) within the same [document](#https://dom.spec.whatwg.org/#concept-document); and
- has either an [accessible name](#accessible-name) or [accessible description](#accessible-description) that communicates that it links to that specific [section of content](#section-of-content).

**Note**: There is no requirement on how many [focusable](#focusable) elements are part of that [initial segment](#initial-segment), nor any requirement to provide a way to determine (programatically or not) where that [initial segment](#initial-segment) stops. Technique [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124), and this rule, only require that such an set exists.

**Editorial note**: An attempt to clarify what this initial segment has to be is done in the second expectation: it must contain exactly one link for each section of content in the page. I am still not very happy with the formulation, nor with the order of these two expectations. Any suggestions to improve that are welcome…

## Expectation 2

Each [section of content](#section-of-content) in the [document](#https://dom.spec.whatwg.org/#concept-document) is the target of exactly one link from the set of [focusable](#focusable) elements that passes Expectation 1.

## Assumptions

This rule assumes that any global dismissible information that only appears once per site has already been acknowledged and is not displayed any more.

**Note**: The aim of such links is to be able to skip repeated content (headers, navigation bar, ...) when viewing several pages of the same site. Many sites display a cookies policy banner which might be stealing focus until dismissed (usually be viewing and accepting cookies policy). Since that content is *not* repeated (is it only shown once for the full site), it is not a problem to have it, and it may appear on any page of the site (depending where the user first comes in).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)

## Test Cases

### Passed

#### Passed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

#### Passed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

#### Passed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

### Failed

#### Failed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

#### Failed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

#### Failed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
</html>
```

#### Failed Example 4

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></head>
  <body>
  
  </body>
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

