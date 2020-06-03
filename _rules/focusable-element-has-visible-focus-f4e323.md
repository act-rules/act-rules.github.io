---
id: f4e323
name: Focusable element has visible focus
rule_type: atomic
description: |
  This rule checks that each focusable element has visible focus indication
accessibility_requirements: # Remove whatever is not applicable
  wcag20:2.4.7: # Focus Visible (AA)
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - CSS styling
  - DOM tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

The rule applies to any [focusable][] element.

## Expectation

For each target element, there exists a set of [focus indicators][focus indicator] which are not all also [focus indicators][potential focus indicator] for another [focusable][] element (the same for all the indicators).

## Assumptions

The definition of [focus indicator][] is based on the tree order but users are likely to perceive relationship based on position on the rendered page. If these are greatly different, the rule will produce incorrect results.

## Accessibility Support

WCAG does not have any requirement of how big or small focus indicator should be and it is possible to pass this rule and [Success Criterion 2.4.7: Focus Visible][sc247] with barely perceptible changes that would thus still be an accessibility issue. WCAG 2.2 is working on an extended Success Criterion 2.4.11 specifying how big the focus indicator should be. See the [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced)][usc2411] proposal.

## Background

- [Success Criterion 2.4.7: Focus Visible][sc247]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)][usc2411]

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

[focusable]: #focusable 'Definition of Focusable'
[focus indicator]: #focus-indicator 'Definition of Focus Indicator'
[potential focus indicator]: #potential-focus-indicator 'Definition of Potential focus Indicator'
[sc247]: https://www.w3.org/TR/WCAG21/#focus-visible 'Success Criterion 2.4.7: Focus Visible'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[usc2411]: https://w3c.github.io/wcag/understanding/focus-visible-enhanced.html 'Understanding Success Criterion 2.4.11: Focus Visible (Enhanced) (WCAG 2.2 proposal)'
