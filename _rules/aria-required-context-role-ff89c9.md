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
    - Brian Bors
    - Jean-Yves Moyen
    - Wilco Fiers
  previous_authors:
    - Anne Thyme Nørregaard
---

## Applicability

This rule applies to any HTML or SVG element that is [included in the accessibility tree][] and has a [WAI-ARIA 1.1][aria 1.1] [explicit semantic role][] with a [required context role][], except if the element has an [implicit semantic role][] that is identical to its [explicit semantic role][].

## Expectation

Each test target is [owned by][] an element that has a [semantic role][] that is one of the [required context roles][] of the target element.

## Assumptions

This rule assumes that the `role` attribute is used to give a [semantic role][] to the element according to ARIA specifications. If it is used for other purposes, and relationships between elements are already programmatically determinable by other means, it is possible to fail this rule but still satisfy [WCAG success criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).

## Accessibility Support

- User agents do not all have the same accessibility tree. Particularly the method of deriving which element [owns][owned by] which other elements varies between browsers. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- There exist some combination of popular browsers and assistive technologies who do not announce correctly relationships based on a mix of [implicit][implicit role] and [explicit][explicit role] roles.

## Background

The applicability of this rule is limited to the [WAI-ARIA 1.1 Recommendation][aria 1.1] roles. The [WAI-ARIA Graphics Module][] does not include any [required context roles][]. The [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] only has two roles with [required context roles][] (`doc-biblioentry` and `doc-endnote`); both of them have issues with their use of role inheritance, and both of them are deprecated in the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1][dpub 1.1] editor's draft.

An example of an element that has an [implicit semantic role][] that is identical to its [explicit semantic role][] is a `<li role="listitem">` element. These elements are not applicable because they have extra requirements and should thus be checked separately.

The definition of [owned by][] used in this rule is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element).

[Subclass roles][subclass role] of [required context roles][] are not automatically included as possible [required context roles][]. For example, the [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) role is not a possible [required context role][] for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) is a [subclass role][] of the [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) role.

Some user agents try to correct missing [required context roles][] or incorrect [content model][]. This often results, for example, in an isolated list item being presented as part of a one-item list containing only itself. Therefore, most test cases contain several targets to try and circumvent these corrections in order to better demonstrate the issue.

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role][]

## Test Cases

### Passed

#### Passed Example 1

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][], `list`, expressed as an [explicit role][].

```html
<div role="list">
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</div>
```

#### Passed Example 2

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][], `list`, expressed as an [implicit role][] of `ul`. Note that this test case does not satisfy [Success Criterion 4.1.1 Parsing][sc411] because the [`ul` element][ul] does not respect its [content model][].

```html
<ul>
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</ul>
```

#### Passed Example 3

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][] even though they are not direct DOM children of it. ARIA [ownership][owned by] "skips" through presentational nodes because they are not [included in the accessibility tree][].

```html
<div role="list">
	<div role="presentation">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 4

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][] even though they are not DOM descendants of it. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2"></div>
<div id="item1" role="listitem">List item 1</div>
<div id="item2" role="listitem">List item 2</div>
```

#### Passed Example 5

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][] even though they are not direct DOM descendants of it. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2">
	<div role="navigation">
		<div id="item1" role="listitem">List item 1</div>
		<div id="item2" role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 6

These elements with an [explicit role][] of `listitem` are [owned by][] an element with their [required context role][] because implicit [ownership][owned by] (inherited from DOM tree structure) crosses shadow boundaries.

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

This element with an [explicit role][] of `listitem` is not [owned by][] an element with its [required context role][].

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

These elements with an [explicit role][] of `listitem` are not [owned by][] an element with their [required context role][]. They are [owned by][] the `tabpanel` element, because it is the closest ancestor.

```html
<div role="list">
	<div role="tabpanel">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 3

These elements with an [explicit role][] of `listitem` are not [owned by][] an element with their [required context role][]. They are instead [owned by][] the `div` with an `aria-label` attribute; even though this `div` has no role, it has a global ARIA attribute and is thus [included in the accessibility tree][].

```html
<div role="list">
	<div aria-label="menu">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 4

These elements with an [explicit role][] of `listitem` are not [owned by][] an element with their [required context role][] because explicit [ownership][owned by] (set by `aria-owns`) does not cross shadow boundaries.

```html
<div role="list" aria-owns="item1 item2"></div>

<div id="host"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div id="item1" role="listitem">List item 1</div> <div id="item2" role="listitem">List item 2</div>'
</script>
```

### Inapplicable

#### Inapplicable Example 1

This element with an [explicit role][] of `listitem` is not [included in the accessibility tree][].

```html
<div role="listitem" style="display:none;">List item 1</div>
```

#### Inapplicable Example 2

There is no element with an [explicit role][].

```html
<ul>
	<li>List item 1</li>
</ul>
```

#### Inapplicable Example 3

This `section` element with an [explicit role][] of `doc-abstract` has a role from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0], not the [WAI-ARIA 1.1 Recommendation][aria 1.1].

```html
<section role="doc-abstract" aria-label="Abstract">
	<p>Accessibility of web content requires semantic information about widgets, structures, and behaviors …</p>
</section>
```

#### Inapplicable Example 4

There is no element whose role has [required context role][] because the `header` role does not have one.

```html
<div role="header" aria-level="1">Hello!</div>
<p>Welcome to my homepage!</p>
```

#### Inapplicable Example 5

There is no element with an [explicit role][] different from its [implicit role][]. This `li` element has an [explicit role][] of `listitem` which is identical to its [implicit role][].

```html
<ul>
	<li role="listitem">List item 1</li>
</ul>
```

[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/ 'WAI ARIA 1.1 specifications'
[content model]: https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model 'HTML definition of the Content Model'
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/ 'Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0'
[dpub 1.1]: https://w3c.github.io/dpub-aria/ "Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1 (Editor's Draft)"
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[owned by]: #owned-by 'Definition of Owned by'
[required context role]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[required context roles]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[sc411]: https://www.w3.org/TR/WCAG21/#parsing 'Success Criterion 4.1.1 Parsing'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[subclass role]: https://www.w3.org/TR/wai-aria-1.1/#subclassroles 'ARIA Specification of Subclass Role'
[ul]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element 'HTML specification of the ul element'
[wai-aria graphics module]: https://www.w3.org/TR/graphics-aria-1.0/ 'WAI-ARIA Graphics Module 1.0'
