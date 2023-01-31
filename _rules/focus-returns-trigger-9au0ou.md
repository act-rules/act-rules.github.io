---
id: 9au0ou
name: Focus returns to trigger
rule_type: atomic
description: |
  This rule checks that when a modal closes the focus returns to the trigger that opened the modal.
accessibility_requirements:
  wcag20:2.4.3: # Focus Order (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G59: # Placing the interactive elements in an order that follows sequences and relationships within the content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
acknowledgments:
  authors:
    -  Helen Burge
  previous_authors:
---

## Applicability

This rule applies to any [modal][] that when closed the [focus][] returns to the [trigger][].

## Expectation

On closing the [modal][], the assistive technology [focus][] will return to the item in the owning document that triggered the [modal][].

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 2.4.3: Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G59)


## Test Cases

### Passed

#### Passed Example 1

The button that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the close button in the modal.

```html
Code needed!
```

#### Passed Example 2

The button that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the escape key.

```html
Code needed!
```

#### Passed Example 3

The button that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the cancel button.

```html
Code needed!
```

#### Passed Example 4

The link that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the close button in the modal.

```html
Code needed!
```

#### Passed Example 5

The link that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the escape key.

```html
Code needed!
```

#### Passed Example 6

The link that is activated to open the [modal][] gets the [focus][] returned to it when the [modal][] is dismissed using the cancel button.

```html
Code needed!
```

### Failed

#### Failed Example 1
The button that is activated to open the [modal][] gets the [focus][] returned to the item after it when the [modal][] is dismissed.

```html
Code needed!
```

#### Failed Example 2
The button that is activated to open the [modal][] gets the [focus][] returned to the start of the page when the modal is dismissed.

```html
Code needed!
```

#### Failed Example 3
The link that is activated to open the [modal][] gets the [focus][] returned to the item after it when the [modal][] is dismissed.

```html
Code needed!
```

#### Failed Example 4
The link that is activated to open the [modal][] gets the [focus][] returned to the start of the page when the modal is dismissed.

```html
Code needed!
```

### Inapplicable

#### Inapplicable Example 1
TBC

[trigger]: #trigger 'Definition of trigger'
[focus]: #focus 'Definition of focus'
[html]: #namespaced-element
[modal]: https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
