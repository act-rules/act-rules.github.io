
---
name: Focusable element has visible focus
test_type: atomic

 description: |
  This rule checks that all elements that can receive focus has a focus styling that is visibly different from the normal styling.
 success_criterion: 
- 2.4.7 # Focus Visible

 test_aspects:
- DOM Tree
- CSS Styling

 authors:
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to all elements that is [focusable](#focusable).

## Expectation

When the target element's [focus state](#focus-state) is triggered, a [change in appearance](#change-in-appearance) occurs for the element.

## Assumptions

## Accessibility Support

## Test Cases

### Passed

### Failed

### Inapplicable
