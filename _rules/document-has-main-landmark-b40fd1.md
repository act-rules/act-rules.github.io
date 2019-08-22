---
id: b40fd1
name: HTML page has a main landmark
rule_type: atomic
description: |
  This rule checks that each page has an element with a semantic role of `main`
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS styling
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectations

The [document element](https://dom.spec.whatwg.org/#document-element) has at least one [descendant](https://www.w3.org/TR/dom41/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) with a [semantic role][#semantic-role] of [`main`](https://www.w3.org/TR/wai-aria-1.1/#main).

**Note**: Authors SHOULD not use more than one element with a [semantic role](#semantic-role) of [`main`](https://www.w3.org/TR/wai-aria-1.1/#main). This is, however, a not a requirement for this rule nor for technique [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11).

**Note**: Technique [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11) is not clear as to how many landmarks are actually needed to satisfy it, hence it is not listed as an accessibility requirement for this rule. However, having a landmark to identify the primary content of a page is enough to satisfy [Success Criterion 2.4.1 Bypass blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html).

## Assumptions

This rule assumes that the `main` landmark is correctly used to identify the primary content of the page.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)

## Test Cases

### Passed

#### Passed Example 1

This [document](#https://dom.spec.whatwg.org/#concept-document) has a one element with a role of `main`.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei), Chapter one</title></head>
  <body>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
    <div role="main">
      <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    </div>
  </body>
</html>
```

#### Passed Example 2

This [document](#https://dom.spec.whatwg.org/#concept-document) has several elements with a role of `main`.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title></head>
  <body>
  <h1>Contents</h1>
  <!-- list of links to each chapter -->
    <div role="main" aria-label="Translation by C. H. Brewitt-Taylor (1925)">
      <h1>Three Heroes Swear Brotherhood in the Peach Garden</h1>
      The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to divide.
    </div>
    <div role="main" aria-label="Translation by Moss Roberts (1976)">
      <h1>Three Bold Spirits Plight Mutual Faith in the Peach Garden</h1>
      The empire, long divided, must unite; long united, must divide. Thus it has ever been.
    </div>
    <div role="main" aria-label="Translation by Yu Sumei (2014)">
      <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    </div>
  </body>
</html>
```

#### Passed Example 3

This [document](#https://dom.spec.whatwg.org/#concept-document) has a one element with a role of `main`. The rule does not check whether the role is correctly used.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
    <div role="main">
      <h1>Contents</h1>
      <!-- list of links to each chapter -->
    </div>
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </body>
</html>
```

### Failed

#### Failed Example 1

This [document](#https://dom.spec.whatwg.org/#concept-document) has no element with a role of `main`.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei), Chapter one</title></head>
    <body>
      <h1>Contents</h1>
      <!-- list of links to each chapter -->
      <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
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

