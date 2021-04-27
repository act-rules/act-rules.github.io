---
id: mogq50
name: 'Status text update has `aria-live` property'
rule_type: atomic
description: |
  This rule checks that any text update that meets the definition of a [status message][] has `aria-live` property.
accessibility_requirements:
  wcag21:4.1.3: # Status Messages (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA22: # Using role=status to present status messages
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:ARIA19: # Using ARIA role=alert or Live Regions to Identify Errors
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Accessibility Tree
acknowledgments:
  authors:
    - Aron Janecki
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [HTML element][] that has a [text node][] as a [descendant][] in the [flat tree][] if:

- **changed**: the `innerText` property of the element changes; and
- **available**: the [text node][] is [included in the accessibility tree][].

## Expectation

Each test target has an implicit or explicit `aria-live` property value that is [ASCII lowercase][] match for string "assertive", "polite", or "off".

## Assumptions

The text changes meet the definition of [status message][]. If this is not the case, success criterion 4.1.3 Status Messages may be satisfied even if this rule failed.

This rule assumes that the [explicit role][] of the elements does not need to be appropriate to satisfy success criterion 4.1.3 Status Messages. For example, a status message can be programmatically determined when it's' using `role="alert"` on elements with score updates even though the `role="status"` appears to be more appropriate.

## Accessibility Support

## Background

## Test Cases

### Passed

#### Passed Example 1

[alert]: https://www.w3.org/TR/wai-aria-1.1/#alert 'Definition of alert'
[ascii lowercase]: https://infra.spec.whatwg.org/#ascii-lowercase 'Definition of ASCII lowercase'

[timer][https://www.w3.org/tr/wai-aria-1.1/#timer]
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[HTML element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[status]: https://www.w3.org/TR/wai-aria-1.1/#status 'Definition of status'
[status message]: https://www.w3.org/TR/WCAG21/#dfn-status-messages
[text node]: https://dom.spec.whatwg.org/#text
[timer]: https://www.w3.org/TR/wai-aria-1.1/#timer 'Definition of timer'
[valid time string]: https://html.spec.whatwg.org/#valid-time-string 'Definition of valid time string'
