---
id: a73be2
name: List elements follow content model
rule_type: atomic
description: |
  This rule checks that list elements follow content model
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects: + DOM Tree

acknowledgements:
  authors:
    - Jey Nandakumar
---

## Applicability

The rule applies to every `ul` , `ol` , and `dl` HTML elements where the [semantic role][] is the same as the [implicit semantic role][].

## Expectation

Each target element:

- is categorised to follow the [flow content model][], and;
- that it's contents are its [descendants][] in the DOM, and;
- has at least one node in its contents that is a [palpable content][], which does not have the `hidden` attribute specified.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [HTML Specification - Content model](https://html.spec.whatwg.org/#concept-element-content-model)
- [HTML Specification - Flow content](https://html.spec.whatwg.org/#flow-content)
- [HTML Specification - Palpable content](https://html.spec.whatwg.org/#palpable-content)

## Test Cases

### Passed

#### Passed Example 1

This `ul` element contains palpable content `li` element.

```html
<ul>
	<li>Complete online form</li>
</ul>
```

#### Passed Example 2

This `dl` element contains palpable content(s), which are name-value group formed by using `dt` and `dd` elements.

```html
<dl>
	<dt>Physics</dt>
	<dd>8/10</dd>
</dl>
```

#### Passed Example 3

This `ol` element contains palpable content, with an explicit role of `listitem`.

```html
<ol>
	<span role="listitem">Eggs</span>
	<span role="listitem">Milk</span>
</ol>
```

### Failed

#### Failed Example 1

This `ul` element contains palpable content `li` element, that is [hidden][].

```html
<ul>
	<li aria-hidden="true"></li>
</ul>
```

#### Failed Example 2

This `ol` element does not contain expected palpable content.

```html
<ol>
	<span>Get some Spinach</span>
</ol>
```

#### Failed Example 3

This `dl` element does not contain a complete name-value groups formed by using `dt` and `dd` elements.

```html
<dl>
	<dt>Physics</dt>
	<span>10/10</span>
</dl>
```

#### Failed Example 4

This `ol` element does not contain expected palpable content, here the `li` element has an overriding role specified.

```html
<ol>
	<li role="menuitem">Milk</li>
</ol>
```

### Inapplicable

#### Inapplicable Example 1

This rule is not applicable to `menu` element.

```html
<menu>
	<li></li>
</menu>
```

#### Inapplicable Example 2

This rule is not applicable to `ul` element where the [semantic role][] is not the same as the [implicit semantic role][].

```html
<ul role="grid">
	<li>Eggs</li>
</ul>
```

[semantic role]: #semantic-role 'Definition of semantic role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[flow content model]: https://html.spec.whatwg.org/#flow-content 'HTML Specification - Flow content model'
[palpable content]: https://html.spec.whatwg.org/#palpable-content 'HTML Specification - Palpable content'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'HTML Specification - Descendants'
[hidden]: https://html.spec.whatwg.org/#the-hidden-attribute 'HTML Specification - The hidden attribute'
