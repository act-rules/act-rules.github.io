---
id: a73be2
name: List elements follow content model
rule_type: atomic
description: |
  This rule checks that list elements follow content model
accessibility_requirements:
  wcag20:1.3.1: # Infor and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
acknowledgements:
  authors:
    - Jey Nandakumar
---

## Applicability

The rule applies to every `ul`, `ol`, and `dl` HTML elements where the [semantic role][] is the same as the [implicit semantic role][].

## Expectation

Each target element:

- is categorised to follow the [flow content model][], and;
- that it's contents are its [descendants][] in the DOM, and;
- has at least one node in its contents that is a [palpable content][], which does not have the `hidden` attribute specified.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [HTML Specification - Content model](https://html.spec.whatwg.org/#concept-element-content-model)
- [HTML Specification - Flow content](https://html.spec.whatwg.org/#flow-content)
- [HTML Specification - Palpable content](https://html.spec.whatwg.org/#palpable-content)

## Test Cases

[semantic role]: #semantic-role 'Definition of semantic role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[flow content model]: https://html.spec.whatwg.org/#flow-content 'HTML Specification - Flow content model'
[palpable content]: https://html.spec.whatwg.org/#palpable-content 'HTML Specification - Palpable content'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'HTML Specification - Descendants'
