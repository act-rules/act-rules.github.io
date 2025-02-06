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
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks ...
accessibility_requirements:
  wcag20:x.x.x: # <Name of Success Criterion> (A | AA | AAA)
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  wcag20:z.z.z: # <Name of Success Criterion> (A | AA | AAA)
    secondary: This success criterion is ...
  aria12:anchor-name: # <Heading in WAI-ARIA>
    title: Title to display
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  wcag-technique:Xxx: # <Technique title>
    forConformance: false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  using-aria:anchor-name: # <Heading in Using ARIA>
    title: Title to display
    forConformance: false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
input_aspects:
  -  # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)
acknowledgments:
  authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

This rule applies to any (??) element ...

## Expectation (1)

Each target element ...

## Background

- Links to Techniques for WCAG 2.2
- Latest version: Techniques for WCAG 2.2 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.2 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible WCAG-ACT-RULES-CG refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Related Rules

<!-- This section is optional -->

- [rule name here](./abc123)

### Bibliography

<!-- This section is optional -->

- [link here](#)

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
rules_format: 1.1
rule_type: composite
description: |
  This rule checks ...
accessibility_requirements:
  wcag20:x.x.x: # (Name of Success Criterion)
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  aria11:anchor-name: # <Heading in WAI-ARIA>
    title: Title to display
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  wcag-technique:Xxx: # <Technique title>
    forConformance: false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
  using-aria:anchor-name: # <Heading in Using ARIA>
    title: Title to display
    forConformance: false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
input_rules:
  -
acknowledgments:
  authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

This rule applies to any (??) element ...

## Expectation

For each test target, the outcome of (at least one of / all of / any of etc.) the following rules is (passed / failed / etc.):

- [Rule name](relative_link_to_rule.html)
- ...

## Background

- Links to Techniques for WCAG 2.2
- Latest version: Techniques for WCAG 2.2 W3C Working Group Note 8 April 2014
- Link to other methodologies, test specifications or tools
- Links to test cases, test suites, unit tests, etc.
- The WCAG 2.2 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible WCAG-ACT-RULES-CG refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Related Rules

<!-- This section is optional -->

- [rule name here](./abc123)

### Bibliography

<!-- This section is optional -->

- [link here](#)

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
