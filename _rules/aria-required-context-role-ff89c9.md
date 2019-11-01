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
  - DOM Tree
acknowledgements:
  authors:
    - Wilco Fiers
    - Brian Bors
  previous_authros:
    - Anne Thyme Nørregaard
---

## Applicability

The rule applies to any HTML or SVG element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has a [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) [explicit semantic role](#explicit-role) with a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope), except if the element has an [implicit semantic role](#implicit-role) that is identical to its [explicit semantic role](#explicit-role).

**Note:** An example of an element that has a [WAI-ARIA required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) is `tab` that has `tablist` as a [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

**Note:** An example of an element that has an [implicit semantic role](#implicit-role) that is identical to its [explicit semantic role](#explicit-role) is an `li` element that has `role="listitem"`. These elements are not applicable

**Note:** The applicability of this rule is limited to only the [WAI-ARIA 1.1 Recommendation](https://www.w3.org/TR/wai-aria-1.1/) roles, since there are unresolved issues with how [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0](https://www.w3.org/TR/dpub-aria-1.0/) uses role inheritance to define the [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope), which makes it deviate from the model defined in [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/). The [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/) does not include any [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope).

## Expectation

Each test target is [owned by](#owned-by) an element that has a [semantic role](#semantic-role) that is one of the [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) of the target element.

**Note:** The definition of [owned by](#owned-by) used in this rule is different than the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by](#owned-by) definition.

**Note:** [Subclass roles](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of [WAI-ARIA required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) are not automatically included as possible [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope). E.g. the [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) role is not a possible [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) is a [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of the [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) role.

## Assumptions

If the [explicit semantic role](#explicit-role) on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule may not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

- User agents do not all have the same accessibility tree. Particularly the method of deriving which element owns which other elements varies between browsers. This can lead to different results from this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role](https://www.w3.org/TR/wai-aria-1.1/#scope)

## Test Cases

### Passed

#### Passed Example 1

Element with [explicit semantic role](#explicit-role) `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`, expressed as an [explicit semantic role](#explicit-role).

```html
<div role="list">
	<div role="listitem">List item 1</div>
</div>
```

#### Passed Example 2

Element with [explicit semantic role](#explicit-role) `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`, through the [implicit semantic role](#implicit-role) of `ul`.

```html
<ul>
	<div role="listitem">List item 1</div>
</ul>
```

#### Passed Example 3

Element contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) even though it is not a direct child of the [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list">
	<div role="presentation">
		<div role="listitem">List item 1</div>
	</div>
</div>
```

#### Passed Example 4

`aria-owns` used to give the target element the right [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem">List item 1</div>
```

#### Passed Example 5

`aria-owns` trumps ownership by closest ancestor, giving the element with [explicit semantic role](#explicit-role) of `listitem` the correct [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="id1">
	<div role="navigation">
		<div id="id1" role="listitem">List item 1</div>
	</div>
</div>
```

#### Passed Example 6

Since implicit ownership can cross shadow boundaries, the element with the [explicit semantic role](#explicit-role) of `listitem` is contained within its [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope) `list`.

```html
<div id="host" role="list"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div role="listitem">List item 1</div>'
</script>
```

### Failed

#### Failed Example 1

The `listitem` has no [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

The `listitem` is owned by the `tabpanel`, because it is the closest ancestor, but `tabpanel` is not the correct [context](https://www.w3.org/TR/wai-aria-1.1/#scope) for `listitem`.

```html
<div role="list">
	<div role="tabpanel">
		<div role="listitem">List item 1</div>
	</div>
</div>
```

#### Failed Example 3

The `listitem` is owned by the `aria-label="menu"` div, rather than the `list`.

```html
<div role="list">
	<div aria-label="menu">
		<div role="listitem">List item 1</div>
	</div>
</div>
```

#### Failed Example 4

Since explicit ownership cannot cross shadow boundaries, the element with the [explicit semantic role](#explicit-role) of `listitem` does not have a [context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

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

There is no element with an [explicit semantic role](#explicit-role).

```html
<ul>
    <li>List item 1</ul>
</ul>
```

#### Inapplicable example 2

The `listitem` is not [included in the accessibility tree](#included-in-the-accessibility-tree).

```html
<div role="listitem" style="display:none;">List item 1</div>
```

#### Inapplicable Example 3

The `header` does not have a [required context roles](https://www.w3.org/TR/wai-aria-1.1/#scope) listed in WAI-ARIA 1.1.

```html
<div role="header" aria-level="1">Hello!</div>
<p>Welcome to my homepage!</p>
```

#### Inapplicable Example 4

The `listitem` has an [explicit semantic role](#explicit-role), but it is identical to the [implicit semantic role](#implicit-role), making the element inapplicable.

```html
<ul>
	<li role="listitem">List item 1</li>
</ul>
```

#### Inapplicable Example 5

The `doc-biblioentry` has a role from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0](https://www.w3.org/TR/dpub-aria-1.0/), not the [WAI-ARIA 1.1 Recommendation](https://www.w3.org/TR/wai-aria-1.1/), and it is therefore inapplicable.

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
