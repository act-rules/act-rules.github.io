---
name: No keyboard trap R1
group:
- SC2-1-2-no-keyboard-trap-r1 (current)
- SC2-1-2-no-keyboard-trap-r2
description: This rule checks if it is possible to navigate through all content on a web page using a keyboard without becoming trapped in any element or group of elements.
success_criterion: 
- 2.1.2
test aspects: DOM Tree
authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
- Malin Øvrebø
- Shadi Abou-Zahra
- Carlos Duarte
- Anne Thyme Nørregaard
---

## Test procedure
### Applicability
The rule applies to all elements on a web page where focus can be moved to through keyboard navigation.

### Expectation
For each target element, focus can be moved to the next element on the web page by using arrow keys, ESC key, TAB key, Shift+TAB or Enter key.

## Assumptions
The test assumes that an element is an HTML element.

## Accessibility support
There are no major accessibility support issues known for this rule.

## Background
- https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G21
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F10

## Implementation Tests
- SC2-1-2-no-keyboard-trap-r1 - Test-case
