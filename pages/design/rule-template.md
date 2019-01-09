---
title: Auto-WCAG Rule Template
---

The rule template contains a plain language description of the rule, some background information, and a list of all assumptions. The test procedure is defined by the selector, a number of steps and a description of the possible outcomes.

Use the [empty atomic rule template](atomic-template-empty.html) to create new auto-wcag rule. When creating a new rule, first read [rule design](rule-design.html).

### Atomic Rule template

````md

---
name:
test_type: atomic

description: |
  This rule checks ...

success_criterion:
- x.x.x # (Name of Success Criterion)

test_aspects:
- # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)

authors:
- # (full names as found in /_data/contributors.yml@master - if not yet listed, please have authors added to the list)
---

## Test Procedure

### Applicability

The rule applies to any (??) element ...

### Expectation (1)

Each target element ...

## Assumptions

*There are currently no assumptions*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)

## Test Cases

### Passed

#### Passed example 1

Description...

```html
<!-- code -->
```

#### Passed example 2

...

### Failed

#### Failed example 1

Description...

```html
<!-- code -->
```

#### Failed example 2

...

### Inapplicable

#### Inapplicable example 1

Description...

```html
<!-- code -->
```

#### Inapplicable example 2
...

````

## Composite rules

Composite rules are rules that take results from different rules and through some logic come to a single result. For example: SC 1.2.3 allows video to pass with either a transcript, an audio description, or if it is a media alternative. Each of these would be atomic rules, that are used in a composite rule. The composite rule than describes that at least one of these must pass for the composite rule to pass.

For more about composite rules, see the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/#composed-rules). To create a composite rule, use the [empty composite rule template](./composite-template-empty.html).

### Composite Rule template

````md
---
name:
rule_type: composite
description: |
  This rule checks ...

success_criterion:
- x.x.x # (Name of Success Criterion)

atomic_rules:
- 

authors:
- # (full names as found in /_data/contributors.yml@master - if not yet listed, please have authors added to the list)
---

## Aggregation Definition

### Applicability

The rule applies to any (??) element ...

### Expectation

For each test target, the outcome of (at least one of / all of / any of etc.) the following rules is (passed / failed / etc.):
- (list atomic rules that are used in this composite rule)
- 

## Assumptions

*There are currently no assumptions.*

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- - (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)


## Test Cases

### Passed

#### Passed example 1

Description...

```html
<!-- code -->
```

#### Passed example 2

...

### Failed

#### Failed example 1

Description...

```html
<!-- code -->
```

#### Failed example 2

...

### Inapplicable

#### Inapplicable example 1

Description...

```html
<!-- code -->
```

#### Inapplicable example 2

...

````