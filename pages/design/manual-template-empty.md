---
id:
name:
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks ...
accessibility_requirements: # Remove whatever is not applicable
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
    -  # (full names as found in `contributors` property in `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
    -  # (full names as found in `contributors` property in `package.json` - if not yet listed, please have authors added to the list)
---

This is the template for the manual test rules. It matches the automation rules but there are parts that can be completed with help from other community members (like adding examples of code).

For the starting section, and examples, complete what you feel comfortable with and then ask for help via emails to the chairs of the ACT Task Force and Community Group. Delete these instructions after the --- and before "## Applicability" (delete rows 38-42).

Save the finished rule with the Title to display or success criterion aspect being tested.

## Applicability

This rule applies to any (??) element ...

## Expectation (1)

Each target element ...

## Background

- (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)

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
