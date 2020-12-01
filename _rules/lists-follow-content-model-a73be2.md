---
id: a73be2
name: List elements follow content model
rule_type: atomic
description: |
  This rule checks that list elements have child nodes allowed by the content model
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

This rule applies to any [HTML elements][] with a [hidden state][] of "false", where the [semantic role][] is the same as the [implicit role][], and for which one of the following is true:

- **lists**: The element is a `ul`, `ol` or `menu`; or
- **definition lists**: The element is a `dl`, or a `div` that is a [child][] in the [flat tree][] of a `dl`.

## Expectation

For each [child][] in the [flat tree][] of each test target, one of the following is true:

- **implicit role**: the [child][] follows the [content model][] and has no [explicit role][]; or
- **explicit role**: the [child][] has an [explicit role][] which is the [implicit ARIA semantics][] for an HTML element included in the [content model][] for the test target; or
- **hidden**: the [child][] is not [included in the accessibility tree][].

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

All children of `ul`, `ol`, and `menu` elements must be either an element with a [semantic role][] of `listitem`, or a node that is hidden, such as a `script` or `template` element, an HTML comment, or a text node that consists of only [ascii whitespace][].

All children of a `dl` element must be an element with a [semantic role][] of `term` or `definition`, a `div` with no [explicit role][], or a node that is hidden. If the child has a `definition` role, it must have a previous sibling that has a `term` role. If the child is a `div` element with no [explicit role][] it is treated as a `term` and `definition` group. The children of the `div` have the same requirement as the `dl` element, except that it does not allow another `div`.

- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [HTML Specification - Content model](https://html.spec.whatwg.org/#concept-element-content-model)

## Test Cases

### Passed

#### Passed Example 1

This `ul` element has `li` [children][child] which are allowed by its [content model][].

```html
<ul>
	<li>Eggs</li>
	<li>Milk</li>
</ul>
```

#### Passed Example 2

This `dl` element has `dt` and `dd` [children][child] which are allowed by its [content model][].

```html
<dl>
	<dt>Physics</dt>
	<dd>8/10</dd>
</dl>
```

#### Passed Example 3

This `ul` element has no [child][] [elements][element]. Its only [children][child] are a comment and an empty text node, neither of which are [included in the accessibility tree][].

```html
<ul>
	<!-- empty list -->
</ul>
```

#### Passed Example 4

This `menu` element has `li` [children][child] which are allowed by its [content model][].

```html
<menu>
	<li>New file</li>
	<li>Save file</li>
</menu>
```

#### Passed Example 5

This `ol` element has `span` [children][child] with an [explicit role][] or `listitem`. The [content model][] of `ol` allows `li` elements which have [implicit ARIA semantics][] of `listitem`.

```html
<ol>
	<span role="listitem">Eggs</span>
	<span role="listitem">Milk</span>
</ol>
```

#### Passed Example 6

This `ul` element has `li` and `template` [children][child]. `li` is explicitly allowed by the `ul` [content model][], `template` is a script-supported element, which is also allowed by the `ul` content model.

```html
<ol>
	<li>Eggs</li>
	<li>Milk</li>
	<template>
		<li>{{item}}</li>
	</template>
</ol>
```

#### Passed Example 7

This `dl` element has `div` [child][child] which is allowed by its [content model][]. The `div` element has a `dt` [child][] followed by a `dd` element, which is allowed by the `div` [content model][].

```html
<dl>
	<div>
		<dt>Physics</dt>
		<dd>8/10</dd>
	</div>
</dl>
```

#### Passed Example 8

This `dl` element has `div` [children][child] with an [explicit role][] of `term` and `definition`. The [content model][] of `dl` allows `dt` and `dd` elements which have [implicit ARIA semantics][] of `term` and `definition`.

```html
<dl>
	<div role="term">Physics</div>
	<div role="definition">8/10</div>
</dl>
```

#### Passed Example 9

This `dl` element has `div` [child][child] which is allowed by its [content model][]. The `div` element has `div` [children][child] with an [explicit role][] of `term` and `definition`. The [content model][] of `div` allows `dt` and `dd` elements which have [implicit ARIA semantics][] of `term` and `definition`.

```html
<dl>
	<div>
		<div role="term">Chemistry</div>
		<div role="definition">7/10</div>
	</div>
</dl>
```

#### Passed Example 10

This `ul` element has a `p` [child][] which is not [included in the accessibility tree][] because of the `hidden` attribute.

```html
<ul>
	<p hidden>Empty list</p>
</ul>
```

### Failed

#### Failed Example 1

This `ul` element had a text node as a child, which will be [included in the accessibility tree][]. Except if they only have [ascii whitespace][], text nodes are not allowed by the [content model][] of `ul` elements.

```html
<ol>
	Coming soon!
</ol>
```

#### Failed Example 2

This `ul` element has `li` [children][child] with a [semantic role][] of `menuitem`, which is not allowed by its [content model][].

```html
<ul>
	<li role="menuitem">New file</li>
	<li role="menuitem">Save file</li>
</ul>
```

#### Failed Example 3

This `ol` element has `dt` and `dd` [children][child] which are not allowed by its [content model][].

```html
<ol>
	<dt>Physics</dt>
	<dd>8/10</dd>
</ol>
```

#### Failed Example 4

This `dl` element has `li` [children][child] which are not allowed by its [content model][].

```html
<dl>
	<li>New file</li>
	<li role="listitem">Save file</li>
</dl>
```

#### Failed Example 5

This `dl` element has `dd` [children][child] which are not preceded by an element with a [semantic role][] of `term`. This is not allowed by its [content model][].

```html
<dl>
	<dd>New file</dd>
	<dd>Save file</dd>
</dl>
```

### Inapplicable

#### Inapplicable Example 1

This `ul` element is not [included in the accessibility tree][].

```html
<ul hidden>
	<li role="menuitem">Eggs</li>
</ul>
```

#### Inapplicable Example 2

This `ul` has an [explicit role][] of menu. The `ul` content model does not need to be applied.

```html
<ul role="menu">
	<li role="menuitem">Eggs</li>
</ul>
```

#### Inapplicable Example 3

This element with a `list` role is not a `ul`, `ol`, `dl`, or `menu` element.

```html
<div role="list">
	<div role="listitem">
		<p>Some text</p>
	</div>
</div>
```

[html elements]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[explicit role]: #explicit-role 'Definition of explicit role'
[semantic role]: #semantic-role 'Definition of semantic role'
[implicit role]: #implicit-role 'Definition of implicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[content model]: https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model 'HTML sequential, Definition of content model, 2020/11/27'
[hidden state]: #hidden-state 'Definition of hidden state'
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[implicit aria semantics]: https://www.w3.org/TR/html-aria/#dfn-implicit-aria-semantics 'ARIA in HTML, Implicit ARIA semantics, draft 2020/11/30'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/11/30'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/11/30'
