---
id: ffd0e9
name: Heading has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each heading has a non-empty accessible name.
accessibility_requirements:
  aria12:namecalculation:
    title: ARIA 1.2,5.2.8 Accessible Name Calculation
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
    - Jean-Yves Moyen
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] that is a [semantic][semantic role] `heading`, [included in the accessibility tree][].

## Expectation

Each test target has a non-empty (`""`) [accessible name][].

## Assumptions

There are no assumptions.

## Accessibility Support

- Some assistive technologies may hide headings with empty [accessible name][] from the users. This depends on the user agent, on how the [accessible name][] was computed (the [accessible name and description computation][] is not clear concerning which characters should be trimmed), and on the assistive technology itself. Hence, there are cases where the outcome of this rule is _failed_, but users of certain assistive technology and browser combinations will not experience an issue.

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `heading` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue because the same elements would have a [semantic role][] of `presentation` and be hidden for these users.

- The [accessible name and description computation][] suggests that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case (ultimately defaulting to the content).

## Background

Completely empty headings (e.g., `<h1></h1>`) seem to be consistently ignored by assistive technologies. However, they fail [Technique H42: Using h1-h6 to identify headings][tech h42] (by using heading markup for content which is not heading). Moreover, they may be rendered on screen (by breaking flow content, or because of custom styling), thus causing concerns for sighted users. Therefore, this rule also fails on these.

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships][usc131]
- [Technique H42: Using h1-h6 to identify headings][tech h42]

## Test Cases

### Passed

#### Passed Example 1

This `h1` element has a non-empty [accessible name][].

```html
<h1>ACT rules</h1>
```

#### Passed Example 2

This `div` element with a [semantic role][] of `heading` has a non-empty [accessible name][].

```html
<div role="heading" aria-level="1">ACT rules</div>
```

#### Passed Example 3

This `h1` element has a non-empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="h-name" hidden>ACT rules</span>
<h1 aria-labelledby="h-name">Learn about ACT rules</h1>
```

#### Passed Example 4

This `h1` element has a non-empty [accessible name][] given by the `alt` attribute of its content.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="ACT rules" /></h1>
```

#### Passed Example 5

This `h1` element is not [visible][], but is still [included in the accessibility tree][]. It has a non-empty [accessible name][].

```html
<h1 style="position: absolute; top: -9999px">ACT rules</h1>
```

### Failed

#### Failed Example 1

This `h1` element has an empty [accessible name][] because its content is not exposed to assistive technologies.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="" /></h1>
```

#### Failed Example 2

This `h1` element has an empty [accessible name][] given by its `aria-label` attribute. Its content is not exposed to assistive technologies, thus preventing the [accessible name][] to default to the content.

```html
<h1 aria-label=""><span aria-hidden="true">ACT rules</span></h1>
```

#### Failed Example 3

This `h1` element has an empty [accessible name][] given by its `aria-labelledby` attribute. Its content is not exposed to assistive technologies, thus preventing the [accessible name][] to default to the content.

```html
<span id="h-name" hidden></span>
<h1 aria-labelledby="h-name"><span aria-hidden="true">ACT rules</span></h1>
```

#### Failed Example 4

This `h1` element has an empty [accessible name][] because the `img` element has a [semantic role][] of `presentation`, and thus does not provide an [accessible name][] to the `h1` element. Note that the `alt` attribute does not trigger [Presentational Roles Conflict Resolution][] because it is not an ARIA attribute.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="ACT rules" role="presentation" /></h1>
```

#### Failed Example 5

This `h1` element has an empty [accessible name][] because the spaces and line break are trimmed by [accessible name computation][accessible name and description computation].

```html
<h1><br /></h1>
```

#### Failed Example 6

This `h1` element has an empty [accessible name][]. It is nonetheless rendered by breaking the flow content, resulting in a confusing situation for sighted users.

```html
<span>Hello</span>
<h1></h1>
<span>World!</span>
```

#### Failed Example 7

This `div` element with a [semantic role][] of `heading` has an empty [accessible name][] (and content). It is nonetheless rendered due to its styling, resulting in a confusing situation for sighted users.

```html
<div role="heading" aria-level="1" style="border-style: solid"></div>
```

#### Failed Example 8

This `h1` element has an [explicit role][] of `none`. However, the [global][] [property][] `aria-label` is specified. Thus it has a [semantic role][] of `heading` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][] given by its `aria-label` attribute and the lack of accessible content to fallback to.

```html
<h1 aria-label="" role="none"><span aria-hidden="true">ACT rules</span></h1>
```

### Inapplicable

#### Inapplicable Example 1

There is no [semantic][semantic role] `heading` element.

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
[global]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[semantic role]: #semantic-role 'Definition of semantic role'
[tech h42]: https://www.w3.org/WAI/WCAG22/Techniques/html/H42 'Technique H42: Using h1-h6 to identify headings'
[usc131]: https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[visible]: #visible 'Definition of visible'
[html element]: #namespaced-element
