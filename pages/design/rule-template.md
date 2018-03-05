---
title: Auto-WCAG Rule Template
---

The rule template contains a plain language description of the rule, some background information, and a list of all assumptions. The test procedure is defined by the selector, a number of steps and a description of the possible outcomes.

Use the [empty test template](rule-template-empty.md) to create new auto-wcag rule. When creating a new rule, first read [rule design](rule-design.md).

```markdown
---
name: Short descriptive name
group: group-id # Optional
description: | # Use "|" for multi-line text
  This rule checks ...

success_criterion:
- x.x.x # Criterion handle as a YAML comment + level

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling
- HTTP messages
- Accessibility Tree
- Language

authors:
- Your Name # As used in /data/contributors.yml
---

## Test procedure

### Applicability

The rule applies to any (??) element ...

### Expectation (1)

Each target element ...

### Expectation 2

Each target element [that meets expectation 1, and] ...

## Assumptions

- Make a list

## Accessibility Support

Support for XXX is known to be limited in some assistive technologies. If any of those assistive technologies is part of the accessibility support baseline of a test, any applicable element must **fail** this rule.

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

```