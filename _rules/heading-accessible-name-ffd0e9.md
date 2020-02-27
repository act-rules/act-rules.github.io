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
  wcag20:2.4.6: # Headings and Labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
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

- Some assistive technologies may hide headings with empty [accessible name][] from the users. This depends both on the user agent and how the [accessible name][] was computed (the [accessible name and description computation][] is not clear concerning which characters should be trimmed) and of the assistive technology itself. Hence, there are cases where the outcome of this rule is _failed_, but users of certain assistive technology and browser combinations will not experience an issue.

**Note:** Completely empty headings (`<h1></h1>`) seem to be consistently ignored by assistive technologies. However, they fail [Technique H42: Using h1-h6 to identify headings][tech h42] (by using heading markup for content which is not heading). Moreover, they may be rendered on screen (by breaking flow content, or because of custom styling), thus causing concerns for sighted users. Therefore, this rule also fails on these.

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][].
- Some browsers expose elements which are [focusable][] but have an `aria-hidden="true"` attribute, while some hide them.

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships][usc131]
- [Understanding Success Criterion 2.4.6: Headings and Labels][usc246]
- [Technique H42: Using h1-h6 to identify headings][tech h42]

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

This `h1` element has an non-empty [accessible name][] given by the `aria-labelledby` attribute. Its content is hidden from assistive technologies.

```html
<span id="h-name">ACT rules</span>
<h1 aria-labelledby="h-name"><span aria-hidden="true">Learn about ACT rules</span></h1>
```

#### Passed Example 4

This `h1` element has an non-empty [accessible name][] given by the `alt` attribute of its content.

```html
<h1><img src="#" alt="ACT rules" /></h1>
```

#### Passed Example 5

Even though this `h1` element is not [visible][], it is still [included in the accessibility tree][]. It has a non-empty [accessible name][].

```html
<h1 style="position: absolute; top: -9999px">ACT rules</h1>
```

### Failed

#### Failed Example 1

This `h1` element has an empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="label"></span>
<h1 aria-labelledby="label">ACT rules</h1>
```

#### Failed Example 2

This `h1` element has an empty [accessible name][] because the `img` element has a [semantic role][] of `presentation`, and thus does not provide an [accessible name][] to the `h1` element. Note that the `alt` attribute does not trigger [Presentational Roles Conflict Resolution][] because it is not an ARIA attribute.

```html
<h1><img src="#" alt="ACT rules" role="presentation" /></h1>
```

#### Failed Example 3

This `h1` element has an empty [accessible name][] because the spaces and line break are trimmed by [accessible name computation][accessible name and description computation].

```html
<h1><br /></h1>
```

#### Failed Example 4

This `h1` element has an empty [accessible name][]. It is nonetheless rendered by breaking the flow content, resulting in confusing situation for sighted users.

```html
<span>Hello</span>
<h1></h1>
<span>World!</span>
```

#### Failed Example 5

This `div` element with a [semantic role][] of `heading` has an empty [accessible name][] (and content). It is nonetheless rendered due to its styling, resulting in confusing situation for sighted users.

```html
<div role="heading" aria-level="1" style="border-style: solid"></div>
```

#### Failed Example 6

This `h1` element has an [explicit role][] of `none`. However, the [global][] [property][] `aria-labelledby` is specified. Thus it has a [semantic role][] of `heading` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="label"></span>
<h1 aria-labelledby="label" role="none">ACT rules</h1>
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
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[semantic role]: #semantic-role 'Definition of semantic role'
[tech h42]: https://www.w3.org/WAI/WCAG21/Techniques/html/H42 'Technique H42: Using h1-h6 to identify headings'
[usc131]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[usc246]: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html 'Understanding Success Criterion 2.4.6: Headings and Labels'
[visible]: #visible 'Definition of visible'
