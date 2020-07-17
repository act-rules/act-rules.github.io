---
id: ep1s13
name: Additional content triggered on hover is hoverable
rule_type: atomic
description: |
  This rule checks ...
accessibility_requirements:
  wcag21:1.4.13: Content on Hover or Focus (AA)
    forConformance: true 
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    -  Carlos Duarte
---

## Applicability

The rule applies to any element that when [hovered][] causes [changes in content][].

## Expectation 

There are no [changes in content][] while the target element is [hovered][] or the mouse pointer remains inside a rectangle defined by the following coordinates:
- **top**: the lowest value of the y coordinate of any pixel affected by the [changes in content][]; and
- **left**: the lowest value of the x coordinate of any pixel affected by the [changes in content][]; and
- **bottom**: the highest value of the y coordinate of any pixel affected by the [changes in content][]; and
- **right**: the highest value of the x coordinate of any pixel affected by the [changes in content][].

## Assumptions

- The user does not dismiss the tooltip causing the changes in content by pressing a key on the keyboard. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.
- The content displayed on the rectangle with the changes in content does not become irrelevant. In this instance the rule will fail while [success criterion 1.4.13: Content on Hover or Focus][sc1.4.13] might be satisfied.

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.13: Content on Hover or Focus][sc1.4.13]
- [F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95)

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

#### Inapplicable Example 2

...

[changes in content]: #changes-in-content 'Definition of changes in content'
[hovered]: #hovered 'Definition of hovered'
[sc1.4.13]: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html 'Understanding Success Criterion 1.4.13: Content on Hover or Focus'