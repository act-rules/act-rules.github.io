---
id: a20046
name: Sequential focus has semantic role
rule_type: atomic

description: | 
 This rule checks that every element part of the sequential focus navigation order has a semantic role.

accessibility_requirements: 
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling

authors:
  - Carlos Duarte
  - Damien Engels
  - Marie Trudelle 
  - Ramit Garg
---

## Applicability

The rule applies to all HTML and SVG elements in the [sequential focus navigation order](https://www.w3.org/TR/html/editing.html#sequential-focus-navigation) that are [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

Each target element has a [semantic role](#semantic-role) that is not `presentation` or `none`.

## Assumptions

_There are currently no assumptions._

## Accessibility support

_There are no major accessibility support issues known for this rule._

## Background

- https://www.w3.org/TR/WCAG20-TECHS/G202.html

## Test Cases

### Passed

#### Passed Example 1

Focusable element `a` has implicit semantic role `link`

```html
<a href="https://act-rules.github.io/">Go to home page</a>
```

#### Passed Example 2

Focusable element `button` has implicit semantic role `button`

```html
<button>Click here</button>
```

#### Passed Example 3

Element with `tabindex=0` has explicit semantic role 

```html
<div id="id1" role="button" tabindex="0">Go</div>
```

### Failed

#### Failed Example 1

Focusable element `input` has role overriden to `none`

```html
<input type="text" role="none">
```

#### Failed Example 2

Element with `tabindex=0` has `presentation` role

```html
<div href="#desc" role="presentation" tabindex="0">More</div>
```

### Inapplicable 

#### Inapplicable Example 1

Element `input` removed from the sequential navigation order

```html
<input type="text" tabindex="-1">
```

#### Inapplicable Example 2

Element `div` not in the sequential navigation order

```html
<div></div>
```

#### Inapplicable Example 3

Element `button` is `disabled` and, thus, not focusable

```html
<button disabled>Click here</button>
```
