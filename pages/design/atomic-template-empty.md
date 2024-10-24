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
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
  previous_authors:
    -  # (full names as found in `contributors` property in  `package.json` - if not yet listed, please have authors added to the list)
---

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
