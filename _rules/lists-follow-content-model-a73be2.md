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

The rule applies to every `ul` , `ol` , and `dl` [HTML elements][] for which

- the [semantic role][] is the same as the [implicit semantic role][]; and
- is [included in the accessibility tree][]; and
- is [visible][].

## Expectation 1

Each test target of type [HTML `<ul>` element][] or [HTML `<ol>` element][], has at least one [HTML `<li>` element][] as a [descendant][] in the [flat tree][] which

- has non-empty [text][]; and
- does not have the [hidden][] attribute.

## Expectation 2

Each test target of type [HTML `<dl>` element][] has at least one name-value group as a [descendant][] in the [flat tree][] which

- has non-empty [text][]; and
- does not have the [hidden][] attribute.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [HTML Specification - Content model](https://html.spec.whatwg.org/#concept-element-content-model)

## Test Cases

### Passed

#### Passed Example 1

This [HTML `<ul>` element][] has a non-empty [descendant][] of type [HTML `<li>` element][].

```html
<ul>
	<li>
		<a href="http://facebook.com">Follow us</a>
	</li>
</ul>
```

#### Passed Example 2

This [HTML `<dl>` element][] contains at least one name-value group as [descendant][].

```html
<dl>
	<dt>Physics</dt>
	<dd>8/10</dd>
</dl>
```

#### Passed Example 3

This [HTML `<ol>` element][] contains at least one [descendant][] of type [HTML `<li>` element][].

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

This [HTML `<ul>` element][] contains [HTML `<li>` element][] that is [hidden][].

```html
<ul>
	<li>
		<p hidden>Brocolli</p>
	</li>
</ul>
```

#### Failed Example 2

This [HTML `<ol>` element][] has [HTML `<li>` element][] with empty [text][] as [descendant][].

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

#### Inapplicable Example 3

This rule is not applicable to [HTML elements][] with `list` or `listitem` ARIA roles, because the [semantic role][] is not the same as the [implicit semantic role][].

```html
<div role="list">
	<div role="listitem">
		<p>Some text</p>
	</div>
</div>
```

[html elements]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[semantic role]: #semantic-role 'Definition of semantic role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'HTML Specification - Descendants'
[hidden]: https://html.spec.whatwg.org/#the-hidden-attribute 'HTML Specification - The hidden attribute'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[text]: https://html.spec.whatwg.org/multipage/dom.html#text-content
[html `<ol>` element]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
[html `<ul>` element]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
[html `<li>` element]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
[html `<dl>` element]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element
[visible]: #visible 'Definition of visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
