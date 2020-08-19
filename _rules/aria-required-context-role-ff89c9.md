---
id: ff89c9
name: ARIA required context role
rule_type: atomic
description: |
  This rule checks that an element with an explicit semantic role exists inside its required context.
accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Wilco Fiers
    - Brian Bors
  previous_authors:
    - Anne Thyme Nørregaard
---

## Applicability

The rule applies to any HTML or SVG element that is [included in the accessibility tree][] and has a [WAI-ARIA 1.1][aria 1.1] [explicit semantic role][] with a [required context role][], except if the element has an [implicit semantic role][] that is identical to its [explicit semantic role][].

## Expectation

Each test target is [owned by][] an element that has a [semantic role][] that is one of the [required context roles][] of the target element.

## Assumptions

This rule assumes that the `role` attribute is used to give a [semantic role][] to the element according to ARIA specifications. If it is used for other purposes, and relationships between elements are already programmatically determinable by other means, it is possible to fail this rule but still satisfy [WCAG success criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).

## Accessibility Support

- User agents do not all have the same accessibility tree. Particularly the method of deriving which element owns which other elements varies between browsers. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- There exist some combination of popular browsers and assistive technologies who do not announce correctly relationships based on a mix of [implicit][implicit role] and [explicit][explicit role] roles.

## Background

The applicability of this rule is limited to only the [WAI-ARIA 1.1 Recommendation][aria 1.1] roles, since there are unresolved issues with how [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] uses role inheritance to define the [required context roles][], which makes it deviate from the model defined in [WAI-ARIA 1.1][aria 1.1]. The [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/) does not include any [required context roles][].

An example of an element that has an [implicit semantic role][] that is identical to its [explicit semantic role][] is an `li` element that has `role="listitem"`. These elements are not applicable because they have extra requirements and should thus be checked separately.

The definition of [owned by][] used in this rule is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by][] definition.

[Subclass roles][] of [required context roles][] are not automatically included as possible [required context roles][]. For example, the [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) role is not a possible [required context role][] for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) is a [subclass role][] of the [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) role.

Some user agents try to correct missing [required context roles][] or incorrect [content model][]. This often results, for example, in an isolated list item being presented as part of a one-item list containing only itself. Therefore, most test cases contain several targets to try and circumvent these corrections in order to better demonstrate the issue.

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role][]

## Test Cases

### Passed

#### Passed Example 1

Element with [explicit semantic role][] `listitem` is contained within its [required context role][] `list`, expressed as an [explicit semantic role][].

```html
<div role="list">
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</div>
```

#### Passed Example 2

Element with [explicit semantic role][] `listitem` is contained within its [required context role][] `list`, through the [implicit semantic role][] of `ul`. Note that this example does not satisfy [Success Criterion 4.1.1 Parsing][sc411] because the [`ul` element][ul] does not respect its [content model][].

```html
<ul>
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</ul>
```

#### Passed Example 3

Element contained within its [required context role][] even though it is not a direct child of the [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list">
	<div role="presentation">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 4

`aria-owns` used to give the target element the right [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2"></div>
<div id="item1" role="listitem">List item 1</div>
<div id="item2" role="listitem">List item 2</div>
```

#### Passed Example 5

The `aria-owns` attribute override normal DOM tree relationship. Thus, the innermost `div` element (`item`) is not owned by the intermediate one (with a `role="navigation"`) and has the correct [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2">
	<div role="navigation">
		<div id="item1" role="listitem">List item 1</div>
		<div id="item2" role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 6

Since implicit ownership can cross shadow boundaries, the element with the [explicit semantic role][] of `listitem` is contained within its [required context role][] of `list`.

```html
<div id="host" role="list"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div role="listitem">List item 1</div> <div role="listitem">List item 2</div>'
</script>
```

### Failed

#### Failed Example 1

The `listitem` has no [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

The `listitem` are owned by the `tabpanel`, because it is the closest ancestor, but `tabpanel` is not the correct [context](https://www.w3.org/TR/wai-aria-1.1/#scope) for `listitem`.

```html
<div role="list">
	<div role="tabpanel">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 3

The `listitem` are owned by the `aria-label="menu"` div, rather than the `list`.

```html
<div role="list">
	<div aria-label="menu">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 4

Since explicit ownership cannot cross shadow boundaries, the element with the [explicit semantic role][] of `listitem` does not have a [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item"></div>

<div id="host"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div id="item" role="listitem">List item 1</div>'
</script>
```

### Inapplicable

#### Inapplicable Example 1

There is no element with an [explicit semantic role][].

```html
<ul>
	<li>List item 1</li>
</ul>
```

#### Inapplicable Example 2

The `listitem` is not [included in the accessibility tree][].

```html
<div role="listitem" style="display:none;">List item 1</div>
```

#### Inapplicable Example 3

The `header` role does not have a [required context role][].

```html
<div role="header" aria-level="1">Hello!</div>
<p>Welcome to my homepage!</p>
```

#### Inapplicable Example 4

The `listitem` has an [explicit semantic role][], but it is identical to the [implicit semantic role][], making the element inapplicable.

```html
<ul>
	<li role="listitem">List item 1</li>
</ul>
```

#### Inapplicable Example 5

The `doc-biblioentry` has a role from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0], not the [WAI-ARIA 1.1 Recommendation][aria 1.1], and it is therefore inapplicable.

```html
<section role="doc-bibliography">
	<h1>Cited Works</h1>
	<div role="list">
		<p role="doc-biblioentry" id="b8cab5dd-bc24-459c-9858-7afa9da69b64">
			John Steinbeck, The Grapes of Wrath (New York: The Viking Press, 1939)
		</p>
	</div>
</section>
```

[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/ 'WAI ARIA 1.1 specifications'
[content model]: https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model 'HTML definition of the Content Model'
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/ 'Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0'
[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibilty Tree'
[owned by]: #owned-by 'Definition of Owned by'
[required context role]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[required context roles]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[sc411]: https://www.w3.org/TR/WCAG21/#parsing 'Success Criterion 4.1.1 Parsing'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[subclass role]: https://www.w3.org/TR/wai-aria-1.1/#subclassroles 'ARIA Specification of Subclass Role'
[ul]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element 'HTML specification of the ul element'
