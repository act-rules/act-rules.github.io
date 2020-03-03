---
id: e88epe
name: Image not in the accessibility tree is decorative
rule_type: atomic
description: |
  This rule checks that visible images that are excluded from the accessibility tree are decorative
accessibility_requirements:
  wcag20:1.1.1: # Non-text content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:Xxx: # <Technique title>
    forConformance: false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
input_aspects:
  - DOM Tree
  - Accessibiliy tree
  - CSS Styling
acknowledgements:
  authors:
    - Brian Bors
    - Wilco Fiers
---

## Applicability

Any `img`, `canvas` or `svg` element that is [visible][] and not [included in the accessibility tree][], except if

- the element is an `img` that failed to load the `src`; or
- the element is part of the content of an element which gets its accessible name from the author (i.e. aria-label)

## Expectation

Each test target is [purely decorative][].

**note**: It is relatively common for an informative image such as an icon to be marked up as decorative, if the text alternative is adjecent to the image. This is a conforming alternative version for the image. This fails the rule, but meets conformance requirement 1 of WCAG 2.1.

## Assumptions

- Images that convey information that is available in other places on the page are not by definition purely decorative.

## Accessibility Support

_No accessibility support issues known._

## Background

- (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)

## Test Cases

### Passed

#### Passed Example 1

Description...

```html
<!-- code -->
```

#### Passed Example 2

...

### Failed

#### Failed Example 1

Description...

```html
<!-- code -->
```

#### Failed Example 2

...

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

## Applicable

```html
<img src="" alt="" />
```

```html
<img src="" aria-hidden="true" alt="W3C" />
```

```html
<img src="" role="none" alt="W3C" />
```

## Inapplicable

```html
<img src="" style="display:none" />
```

```html
<img src="" class="off-screen" alt="W3C" />
```

```html
<img src="" alt="W3C" />
```

```html
<img src="spacer.gif" alt="" />
```

```html
<a href="//w3.org" aria-label="W3C">
	<img src="w3-logo.gif" alt="" />
</a>
```

``html
<img src="pdf.gif" alt="pdf">PDF document

```

#### Inapplicable Example 2

...

[visible]: #visible
[included in the accessibili] #included-in-the-accessibility-tree
```
