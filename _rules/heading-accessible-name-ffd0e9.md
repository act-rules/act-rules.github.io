---
id: ffd0e9
name: Heading has accessible name
rule_type: atomic
description: |
  This rule checks that each heading has an accessible name.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any HTML element with the [semantic role][] of `heading` that is [included in the accessibility tree][].

## Expectation

Each test target has a non-empty (`""`) [accessible name][].

## Assumptions

_There are currently no assumptions._

## Accessibility Support

Some assistive technologies may hide headings with empty [accessible name][] from the users. This depends both on the user agent and how the [accessible name][] was computed (the [accessible name and description computation][] is not clear concerning which characters should be trimmed) and of the assistive technology itself. Hence, there are cases where the outcome of this rule is _failed_, but users of certain assistive technology and browser combinations will not experience an issue.

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships][usc131]

## Test Cases

### Passed

#### Passed Example 1

This `h1` element has a non-empty [accessible name][].

```html
<h1>ACT rules</h1>
```

#### Passed Example 2

This `div` element has a [semantic role][] of heading and a non-empty [accessible name][].

```html
<div role="heading" aria-level="1">ACT rules</div>
```

#### Passed Example 3

This `h1` element has an non-empty [accessible name][] given by the `aria-labelledby` attribute.

```html
<span id="h-name">ACT rules</span>
<h1 aria-labelledby="h-name"></h1>
```

#### Passed Example 4

This `h1` element has an non-empty [accessible name][] given by the `alt` attribute of its content.

```html
<h1><img src="#" alt="ACT rules" /></h1>
```

#### Passed Example 5

Even though this `h1` element is not [visible][], it is still [included in the accessibility tree][]. It has a non-empty [accessible name][]

```html
<h1 style="position: absolute; top: -9999px">ACT rules</h1>
```

### Failed

#### Failed Example 1

This `h1` element has an empty [accessible name][].

```html
<h1></h1>
```

#### Failed Example 2

This `div` element with a [semantic role][] of `heading` has an empty [accessible name][].

```html
<div role="heading" aria-level="1"></div>
```

#### Failed Example 3

Because the `img` element is marked as [decorative][] through its [semantic role][] of `presentation`, it does not provides an [accessible name][] to the `h1` element. Hence the `h1` element has an empty [accessible name][].

```html
<h1><img src="#" alt="ACT rules" role="presentation" /></h1>
```

#### Failed Example 4

The nested `span` element does not affect [accessible name computation][accessible name and description computation]. Thus, the `h1` element has an empty [accessible name][].

```html
<h1>
	<span> </span>
</h1>
```

### Inapplicable

#### Inapplicable Example 1

No element has a [semantic role][] of `heading`.

```html
<div></div>
```

#### Inapplicable Example 2

This `h1` element is not [included in the accessibility tree][].

```html
<h1 aria-hidden="true"></h1>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[accessible name and description computation]: https://www.w3.org/TR/accname
[decorative]: #decorative 'Definition of decorative'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[usc131]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
