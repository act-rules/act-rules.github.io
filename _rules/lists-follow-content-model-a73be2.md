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
input_aspects:
  - Accessibility tree
  - CSS Styling
  - DOM Tree
acknowledgments:
  authors:
    - Jey Nandakumar
---

## Applicability

The rule applies to every `ul` , `ol` , and `dl` HTML elements where the [semantic role][] is the same as the [implicit semantic role][].

## Expectation

Each test target has at least one [descendant][] in the [flat tree][] that is categorized as [palpable content][], which does not have the [hidden][] attribute specified.

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

This `ul` element has a [descendant][] of type [palpable content][].

```html
<ul>
	<li>
		<a href="http://facebook.com">Follow us</a>
	</li>
</ul>
```

#### Passed Example 2

This `dl` element contains at least one [descendant][] of type [palpable content][].

```html
<dl>
	<dt>Physics</dt>
	<dd>8/10</dd>
</dl>
```

#### Passed Example 3

This `ol` element contains at least one [descendant][] of type [palpable content][].

```html
<ol>
	<span role="listitem"></span>
	<span role="listitem">
		<p>Milk</p>
	</span>
</ol>
```

### Failed

#### Failed Example 1

This `ul` element contains [palpable content][] `li` element, that is [hidden][].

```html
<ul>
	<li>
		<p hidden>Brocolli</p>
	</li>
</ul>
```

#### Failed Example 2

This `ol` element does not any [descendant][] of type [palpable content][].

```html
<ol>
	<li></li>
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
[palpable content]: https://html.spec.whatwg.org/#palpable-content 'HTML Specification - Palpable content'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'HTML Specification - Descendants'
[hidden]: https://html.spec.whatwg.org/#the-hidden-attribute 'HTML Specification - The hidden attribute'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
