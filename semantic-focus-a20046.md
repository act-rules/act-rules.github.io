---
id: a20046
name: Sequential focus navigation has semantic role
rule_type: atomic

description: | 
 This rule checks that every element part of the sequential focus navigation has a semantic role.

accessibility_requirements: 

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

The rule applies to all HTML and SVG elements in the [sequential focus navigation order](https://www.w3.org/TR/html/editing.html#sequential-focus-navigation) except scrollable content elements.

Note: Scrolling the content of a web page using the keyboard requires that content to receive focus. However, the scrollable content does not need a semantic role, since users do not interact with it

## Expectation

Target element has a [semantic role](#semantic-role).

## Assumptions

_There are currently no assumptions._
- Giving focus to scrollable content elements is the only way to scroll non interactive content using a keyboard.

## Accessibility support

_There are no major accessibility support issues known for this rule._

## Background

- https://www.w3.org/TR/WCAG20-TECHS/G202.html

## Test Cases

### Passed

#### Passed Example 1

Focusable element `a` has semantic role 

```html
<a href="https://act-rules.github.io/">Go to home page</a>
```

#### Passed Example 2

Focusable element `button` has semantic role 

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

Element in sequential navigation does not have semantic role

```html
<a href="#desc" tabindex="0" aria-hidden="true">More</a>
```

#### Failed Example 2

Element in sequential navigation does not have semantic role

```html
<div href="#desc" role="presentation" tabindex="0">More</div>
```

### Inapplicable 

#### Inapplicable Example 1

Button element not in the sequential navigation order
```html
<button role="presentation" tabindex="-1">Pretty picture</button>
```

#### Inapplicable Example 2

div element not in the sequential navigation order
```html
<div></div>
```
