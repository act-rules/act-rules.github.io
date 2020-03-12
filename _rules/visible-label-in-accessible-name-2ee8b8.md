---
id: 2ee8b8
name: Visible label is part of accessible name
rule_type: atomic
description: |
  This rule checks that interactive elements labeled through their content have their visible label as part of their accessible name.
accessibility_requirements:
  wcag21:2.5.3: # Label in Name
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
    - Jey Nandakumar
---

## Applicability

This rule applies to any element that has:

- a [semantic role](#semantic-role) that is a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent), and
- [visible text content](#visible-text-content), and
- an `aria-label` or `aria-labelledby` attribute.

**Note:** [widget roles](https://www.w3.org/TR/wai-aria-1.1/#widget_roles) that [supports name from content](https://www.w3.org/TR/wai-aria-1.1/#namefromcontent) are: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

## Expectation

The complete [visible text content](#visible-text-content) of the target element either matches or is contained within its [accessible name][].

**Note:** Leading and trailing [whitespace](#whitespace) and difference in case sensitivity should be ignored.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

## Test Cases

### Passed

#### Passed Example 1

[Visible][] label and [accessible name][] matches when trailing white spaces are removed.

```html
<a href="https://act-rules.github.io/" aria-label="ACT rules ">ACT rules</a>
```

#### Passed Example 2

Character insensitivity between [visible][] label and [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="act rules ">ACT rules</a>
```

#### Passed Example 3

Full [visible][] label is contained in the [accessible name][].

```html
<button name="link" aria-label="Next Page in the list">Next Page</button>
```

### Failed

#### Failed Example 1

[Visible][] label doesn't match [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="WCAG">ACT rules</a>
```

#### Failed Example 2

Not all of [visible][] label is included in [accessible name][].

```html
<button name="link" aria-label="the full">The full label</button>
```

#### Failed Example 3

Mathematical symbols cannot be substituted for text as [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

### Inapplicable

#### Inapplicable Example 1

Not a widget role.

```html
<a aria-label="OK">Next</a>
```

#### Inapplicable Example 2

Widget role that does not support name from content.

```html
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

Non-widget role that supports name from content.

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

No [rendered text](#rendered-text) in name from content.

```html
<div role="tooltip" aria-label="OK"></div>
```

#### Inapplicable Example 5

Non-text content.

```html
<button aria-label="close">X</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[focusable]: #focusable 'Definition of focusable'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[visible]: #visible 'Definition of visible'
[explicit role]: #explicit-role 'Definition of explicit role'
[semantic role]: #semantic-role 'Definition of semantic role'
