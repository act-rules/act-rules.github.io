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
		- Brian Bors
		- Wilco Fiers
  previous_authors:
    - Jey Nandakumar
---

## Applicability

The rule applies to every `ul`, `ol`, `dl`, and `menu` [HTML elements][] that is [included in the accessibility tree][] and has the same [semantic role][] as its [implicit semantic role][].

## Expectation 1

Each test target only has [child][] [node][] in the [flat tree][] for which one of the following is true:

- the [child][] [element][] follows the [content model][]; or
- the [child][] has an [explicit role][] which is the [Implicit ARIA semantics]() for an HTML element included in the [content model][] for the test target; or
- the [child][] is not included in the [accessibility tree][].

## Expectation 2

Each test target has one or more [child][] [elements][] in the [flat tree][] that is [included in the accessibility tree][].

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
	<li>Eggs</li>
	<li>Milk</li>
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

TODO

```html
<menu>
	<li></li>
</menu>
```

#### Passed Example 4

This [HTML `<ol>` element][] contains at least one [descendant][] of type [HTML `<li>` element][].

```html
<ol>
	<span role="listitem">Eggs</span>
	<span role="listitem">Milk</span>
</ol>
```

#### Passed Example 5

TODO

```html
<ol>
	<li>Eggs</li>
	<li>Milk</li>
	<template>
		<li>{{item}}</li>
	</template>
</ol>
```

#### Passed Example 6

TODO

```html
<dl>
	<div>
		<dt>Physics</dt>
		<dd>8/10</dd>
	</div>
</dl>
```

#### Passed Example 7

TODO

```html
<ol>
	<li></li>
</ol>
```

#### Passed Example 8

TODO

```html
<dl>
	<div role="term">Physics</div>
	<div role="definition">8/10</div>
</dl>
```

### Failed

#### Failed Example 1

This [HTML `<ul>` element][] contains [HTML `<li>` element][] that is [hidden][].

```html
<ul></ul>
```

#### Failed Example 2

TODO

```html
<ol>
	Coming soon!
</ol>
```

#### Failed Example 3

```html
<ul>
	<li role="menuitem">New file</li>
	<li role="menuitem">Save file</li>
</ul>
```

#### Failed Example 4

TODO

```html
<ol>
	<dt>Physics</dt>
	<dd>8/10</dd>
</ol>
```

#### Failed Example 5

TODO

```html
<dl>
	<li>New file</li>
	<li role="listitem">Save file</li>
</dl>
```

### Inapplicable

#### Inapplicable Example 1

TODO

```html
<ul hidden>
	<li role="menuitem">Eggs</li>
</ul>
```

#### Inapplicable Example 2

This rule is not applicable to `ul` element where the [semantic role][] is not the same as the [implicit semantic role][].

```html
<ul role="menu">
	<li role="menuitem">Eggs</li>
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
