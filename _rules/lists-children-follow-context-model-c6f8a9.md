---
id: c6f8a9
name: Child elements of list(s) follow context model
rule_type: atomic
description: |
  This rule checks that child elements of a list follow context model
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility tree
  - DOM Tree
acknowledgments:
  authors:
    - Jey Nandakumar
---

## Applicability

The rule applies to every `li`, `dd` and `dt` HTML elements where the [semantic role][] is the same as the [implicit semantic role][].

## Expectation

Each test target element:

- is [owned by][] a node which;
  - is categorized as [flow content][]; and
  - has a [semantic role][] from the [required owned element][] list for the test target's [semantic role]().

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [HTML Specification - Contexts in which this element can be used](https://html.spec.whatwg.org/#concept-element-contexts)
- [HTML Specification - Content model](https://html.spec.whatwg.org/#concept-element-content-model)
- [HTML Specification - Flow content](https://html.spec.whatwg.org/#flow-content)
- [HTML Specification - Palpable content](https://html.spec.whatwg.org/#palpable-content)

## Test Cases

### Passed

#### Passed Example 1

This `li` element with an implicit semantic role of `listitem`, is [owned by][] an `ol` element, which follows the [flow content][] model & has an [implicit semantic role][] from the [required owned element][] list.

```html
<ol>
	<li>Eggs</li>
</ol>
```

#### Passed Example 2

These `dd` & `dt` elements are [owned by][] a `dl` element, which follows the [flow content][] model & has an [implicit semantic role][] from the [required owned element][] list.

```html
<dl>
	<dt>Physics</dt>
	<dd>8/10</dd>
</dl>
```

#### Passed Example 3

This `li` element is [owned by][] an `ul` element, which follows the [flow content][] model & has an [implicit semantic role][] from the [required owned element][] list.

```html
<ul>
	<li>Complete online form</li>
</ul>
```

### Failed

#### Failed Example 1

This `li` element is not [owned by][] an element that follows the [flow content][] model.

```html
<label>
	<li>Milk</li>
</label>
```

#### Failed Example 2

This `dt` element is [owned by][] an element that follows the [flow content][] model, but has an [explicit semantic role][] that is not in the [required owned element][] list.

```html
<dl role="columnheader">
	<dt>Physics</dt>
</dl>
```

### Inapplicable

#### Inapplicable Example 1

This rule is not applicable to `span` elements, although it is a [palpable content][].

```html
<ul>
	<span></span>
</ul>
```

#### Inapplicable Example 2

This rule is not applicable to `li` elements where the [semantic role][] is not the same as the [implicit semantic role][].

```html
<ul>
	<li role="cell"></li>
</ul>
```

[semantic role]: #semantic-role 'Definition of semantic role'
[explicit semantic role]: #explicit-role 'Definition of semantic role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[flow content]: https://html.spec.whatwg.org/#flow-content 'HTML Specification - Flow content model'
[palpable content]: https://html.spec.whatwg.org/#palpable-content 'HTML Specification - Palpable content'
[required owned element]: https://www.w3.org/TR/wai-aria-1.1/#mustContain 'Define Required owned element'
[owned by]: #owned-by 'Definition of owned by'
