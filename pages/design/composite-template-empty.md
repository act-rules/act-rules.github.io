---
id:
name:
rule_type: composite
description: |
  This rule checks ...
accessibility_requirements: # Remove whatever is not applicable
  wcag20:x.x.x: # <Name of Success Criterion> (A | AA | AAA)
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
  -  # Include the ID of the rule
acknowledgments:
  authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

## Applicability

The rule applies to any (??) element ...

## Expectation (1)

For each test target, the outcome of (at least one of | all of | any of etc.) the following rules is (passed / failed / etc.):

- [Rule name](relative_link_to_rule.html)
- ...

## Assumptions

_No assumptions._

## Accessibility Support

_No accessibility support issues known._

## Background

- - (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)

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
