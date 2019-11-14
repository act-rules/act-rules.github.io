---
id:
name:
rule_type: atomic
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
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
   using-aria:anchor-name: # <Heading in Using ARIA>
    title: Title to display
    forConformance: true | false
    failed: not satisfied
    passed: satisfied | further testing needed
    inapplicable: satisfied | further testing needed
input_aspects:
  -  # (e.g. HTTP Messages, DOM Tree, CSS Styling, Accessibility Tree, Language, etc.,)
authors:
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

- (e.g. WCAG Techniques or links with background information mentioned in Applicability, Expectations or Assumptions)

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
