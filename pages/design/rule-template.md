---
title: Rule Template
---

The rule template contains a plain language description of the rule, some background information, and a list of all assumptions. The test procedure is defined by the selector, a number of steps and a description of the possible outcomes.

Use the [empty atomic rule template](https://raw.githubusercontent.com/act-rules/act-rules.github.io/develop/pages/design/atomic-template-empty.md) to create new rule. When creating a new rule, first read [rule design](/pages/design/rule-design/).

## Atomic Rule Template

````md
---
id:
name:
rule_type: atomic

description: |
  This rule checks ...

accessibility_requirements:
  wcag20:x.x.x: # (Name of Success Criterion)
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  aria11:x.x.x: # <Heading in WAI-ARIA>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  wcag-technique:x.x.x: # <Technique title>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

input_aspects:
  -  # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)

acknowledgements:
  authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation (1)

Each target element ...

## Assumptions

_No assumptions._

## Accessibility Support

_No accessibility support issues known._

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible WCAG-ACT-RULES-CG refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

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
````

## Composite Rules

Composite rules are rules that take results from different rules and through some logic come to a single result. For example: SC 1.2.3 allows video to pass with either a transcript, an audio description, or if it is a media alternative. Each of these would be atomic rules, that are used in a composite rule. The composite rule than describes that at least one of these must pass for the composite rule to pass.

For more about composite rules, see the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/#composed-rules). To create a composite rule, use the [empty composite rule template](https://raw.githubusercontent.com/act-rules/act-rules.github.io/develop/pages/design/composite-template-empty.md).

### Composite Rule Template

````md
---
id:
name:
rule_type: composite

description: |
  This rule checks ...

accessibility_requirements:
  wcag20:x.x.x: # (Name of Success Criterion)
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  aria11:x.x.x: # <Heading in WAI-ARIA>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

  wcag-technique:x.x.x: # <Technique title>
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed

input_rules:
  -

authors:
  -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation

For each test target, the outcome of (at least one of / all of / any of etc.) the following rules is (passed / failed / etc.):

- [Rule name](relative_link_to_rule.html)
- ...

## Assumptions

_No assumptions._

## Accessibility Support

_No accessibility support issues known._

## Background

- Links to Techniques for WCAG 2.0
- Latest version: Techniques for WCAG 2.0 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible WCAG-ACT-RULES-CG refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

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
````
