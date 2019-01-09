---
name: Heading element with image content has an accessible name
rule_type: atomic
description: |
  This rule checks that headings that has images as their only content also has an accessible name

success_criterion: 
- 1.1.1 # Non-Text Content (A)
- 1.3.1 # Info and Relationships (A)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

This rule applies to each element that has a [semantic role](#semantic-rolve) of `heading` and is exposed to assistive technologies, and that:
- has elements with the semantic role of `img` as decendants,
- does not have any non-seperator unicode characters as its content, 
- does not have descendants that contain any non-seperator unicode characters as its content.

### Expectation 1

Each target element has an [accessible name](#accessible-name), or has a descendant that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has an accessible name.

## Assumptions

_There are no assumptions for this rule._

## Accessibility Support

_There are no known accessibility support issues for this rule._

## Background

- (TBD)

## Test Cases

### Passed

#### Passed example 1

TBD

```html
<!-- passing html code snippet -->
```

#### Passed example X

TBD

```html
<!-- inapplicable code snippet -->
```

### Failed

#### Failed example 1

TBD

```html
<!-- failing html code snippet -->
```

#### Failed example 2

TBD

```html
<!-- inapplicable code snippet -->
```

### Inapplicable

#### Inapplicable example 1

TBD

```html
<!-- inapplicable code snippet -->
```

#### Inapplicable example X

TBD 

```html
<!-- inapplicable code snippet -->
```
