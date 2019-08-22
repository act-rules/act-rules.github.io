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

For each [section of content](#section-of-content) in the test target, the first node in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) which is inside this [section of content](#section-of-content) and has an [accessible name](#accessible-name):
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- has an [accessible name](#accessible-name) which does not consist only of [whitespace](#whitespace); and
- has a [semantic role](#semantic-role) of `heading`.

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69), expects the heading to accurately describe its corresponding section.

**Note**: Neither this rule, nor technique [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69), expects that headings are correctly nested without skipping level. It is nonetheless recommended to nest headings hierarchically without skipping levels.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

_There are no major accessibility support issues known for this rule._
 
**Editorial note**: In its current state, the definition of [section of content](#section-of-content) would include, *e.g.* an advertising sidebar as a specific section of content. However, it is not clear that the lack of heading on it would be a breach of H69 or SC 2.4.1… Idea?

## Background

- [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)

## Test Cases

### Passed

#### Passed Example 1

This [document](#https://dom.spec.whatwg.org/#concept-document) has one [section of content](#section-of-content) for the navigation links, and one for the actual text. Each starts with a `h1` heading.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined solely by the heading at their start.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
    <body>
    <!-- Navigational section of content starts here -->
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
    <!-- Navigational section of content ends here -->

    <!-- Main section of content starts here -->
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    <!-- Main section of content ends here -->
  </body>
</html>
```

#### Passed Example 2

In this [document](#https://dom.spec.whatwg.org/#concept-document), headings are not the first elements of each [section of content](#section-of-content), but they are the first with an [accessible name](#accessible-name). The [accessible name](#accessible name) of the second heading is inherited from its content (a typical situation with many frameworks that add a lot of extra elements around their components).

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
    <section>
      <hr>
      <h1>Contents</h1>
      <!-- list of links to each chapter -->
    </section>
    <section>
      <hr>
      <h1><span>Three Heroes Swear Brotherhood at a Feast in the Peach Garden<span></h1>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    </section>
  </body>
</html>
```

#### Passed Example 3

The image at the start of the second [section of content](#section-of-content) does not have an [accessible name](#accessible-name). Thus, the first node with an [accessible name](#accessible-name) is the `h1` element and the rule passes.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" role="presentation" alt="" />
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Passed Example 4

This [document](#https://dom.spec.whatwg.org/#concept-document) has one [section of content](#section-of-content) for the navigation links, and one for the actual text. Each starts with a `div` with a role of `heading`.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
    <section>
      <div role="heading">Contents</div>
      <!-- list of links to each chapter -->
    </section>
    <section>
      <div role="heading">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</div>
      Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    </section>
  </body>
</html>
```

#### Passed Example 5

This [document](#https://dom.spec.whatwg.org/#concept-document) is using image as heading, the [accessible name](#accessible-name) of the image (given by `alt` attribute) is also the [accessible name](#accessible-name) of the heading.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1><img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" alt="Three Heroes Swear Brotherhood at a Feast in the Peach Garden" /></h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Passed Example 6

This [document](#https://dom.spec.whatwg.org/#concept-document) is using image as heading, the [accessible name](#accessible-name) of the image (given by `aria-label` attribute) is also the [accessible name](#accessible-name) of the heading.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1><img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" aria-label="Three Heroes Swear Brotherhood at a Feast in the Peach Garden" /></h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Passed Example 7

This [document](#https://dom.spec.whatwg.org/#concept-document) is using image as heading, the [accessible name](#accessible-name) of the image (given by `aria-labelledby` attribute) is also the [accessible name](#accessible-name) of the heading.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <div style="display: hidden" id="chapter1-title">Three Heroes Swear Brotherhood at a Feast in the Peach Garden</div>
    <h1><img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" aria-labelledby="chapter1-title" /></h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Passed Example 8

This rule checks neither nesting nor pertinence of headings.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined solely by the heading at their start.

```html
<!DOCTYPE html>
<html lang="en">
    <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
    <body>
    <!-- Navigational section of content starts here -->
    <h2>An apple a day</h2>
    <!-- list of links to each chapter -->
    <!-- Navigational section of content ends here -->

    <!-- Main section of content starts here -->
    <h6>Keeps the doctor away</h6>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
    <!-- Main section of content ends here -->
  </body>
</html>
```

#### Passed Example 9

The heading at the start of the first [section of content](#section-of-content) is not [visible](#visible) but the [document](#https://dom.spec.whatwg.org/#concept-document) still passes this rule.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1 style="position: absolute; top: -9999px; left: -9999px;">Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

### Failed

#### Failed Example 1

This [document](#https://dom.spec.whatwg.org/#concept-document) has no heading, for its navigational [section of content](#section-of-content).

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Failed Example 2

The heading of the second [section of content](#section-of-content) is not [included in the accessibility tree](#included-in-the-accessibility-tree) because of the `aria-hidden` attribute.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1 aria-hidden=true>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```


#### Failed Example 3

The [accessible name](#accessible-name) of the image used as heading for the second [section of content](#section-of-content), which is also the [accessible name](#accessible-name) of the heading, is only [whitespace](#whitespace).

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1><img src="../test-assets/document-headings-047fe0/peach-garden-oath.jpg" alt=" " /></h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
  </body>
</html>
```

#### Failed Example 4

The first [section of content](#section-of-content) starts with a node which does not have a [semantic role](#semantic-role) of `heading`.

**Note**: In this [document](#https://dom.spec.whatwg.org/#concept-document), the [sections of content](#section-of-content) are defined by the `section` elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>The Three Kingdoms (translation by Yu Sumei) (Chapter one)</title></head>
  <body>
  <section>
    <div>Table of content</div>
    <h1>Contents</h1>
    <!-- list of links to each chapter -->
  </section>
  <section>
    <h1>Three Heroes Swear Brotherhood at a Feast in the Peach Garden</h1>
    Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of time.
  </section>
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

