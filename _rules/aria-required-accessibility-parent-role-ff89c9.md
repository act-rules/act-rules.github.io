---
id: ff89c9
name: ARIA required accessibility parent role
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks that an element with an explicit semantic role exists inside its required accessibility parent role.
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
    - Dan Tripp
  previous_authors:
    - Anne Thyme Nørregaard
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has a [WAI-ARIA 1.3][aria 1.3] [explicit semantic role][] which has one of more [required accessibility parent roles][required accessibility parent role], except if the element has an [implicit semantic role][] that is identical to its [explicit semantic role][].

## Expectation

Each test target is the child in the [accessibility tree][] of an element that has a [semantic role][] that is one of the [required accessibility parent roles][] of the target element.

## Background

Some [required accessibility parent roles][] are only valid if they in turn have an [accessibility parent][] with a given [semantic role][]. This is denoted by the words "with accessibility parent" in the [aria 1.3][] in the role description. For example, the [role `treeitem`](https://www.w3.org/TR/wai-aria-1.3/#treeitem) has as one of its [required accessibility parent roles][] `group with accessibility parent treeitem`.  This means that an element with a role of `treeitem` may only have as its [accessibility parent][] an element with a role of `group` if that group element has as its [accessibility parent][] an element with a role of `treeitem`.

The applicability of this rule is limited to the [WAI-ARIA 1.3 Recommendation][aria 1.3] roles.

The [WAI-ARIA Graphics Module][] does not include any [required accessibility parent roles][].

The [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1][dpub 1.1] has no roles which have any [required accessibility parent roles][].  The earlier version [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] did have two such roles.  (dpub 1.0 used the older term "required accessibility parent role" rather than "Required Accessibility Parent Roles".)  Both of those roles were removed in dpub 1.1.

An example of an element that has an [implicit semantic role][] that is identical to its [explicit semantic role][] is a `<li role="listitem">` element. These elements are not applicable because they have extra requirements and should thus be checked separately.

Being a child in the [accessibility tree][] is different from being a child in the DOM tree. Some DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `role="presentation"`). So a child in the [accessibility tree][] can correspond to a /grandchild/ in the DOM tree. Also, the use of `aria-owns` attribute can change the accessibility tree structure to something which is not a subtree in the DOM tree.

This rule is restricted to [accessibility parents][accessibility parent], which means /direct/ parents.  Not grandparents.  Also, the definition of [accessibility parent][] handles aria-owns, so this rule doesn't need to handle it too.

[Subclass roles][subclass role] of [required accessibility parent roles][] are not automatically included as possible [required accessibility parent roles][]. For example, the [`feed`](https://www.w3.org/TR/wai-aria-1.3/#feed) role is not a possible [required accessibility parent role][] for [`listitem`](https://www.w3.org/TR/wai-aria-1.3/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.3/#feed) is a [subclass role][] of the [`list`](https://www.w3.org/TR/wai-aria-1.3/#list) role.

Some user agents try to correct missing [required accessibility parent roles][] or incorrect [content model][]. This often results, for example, in an isolated list item being presented as part of a one-item list containing only itself. Therefore, most examples contain several targets to try and circumvent these corrections in order to better demonstrate the issue.

### Assumptions

The rule assumes that the [explicit semantic role][] of the applicable elements is appropriate for their element. For example: a heading incorrectly marked up with `role="cell"` does not fail [success criterion 1.3.1 Info and Relationships][sc131] for not being in the context of a `row`. Having an inappropriate role is itself an issue under 1.3.1 Info and Relationships, so in either scenario a failure of this rule means this success criterion is not satisfied.

### Accessibility Support

- User agents do not all have the same accessibility tree. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- There exist some combination of popular browsers and assistive technologies who do not announce correctly relationships based on a mix of [implicit][implicit semantic role] and [explicit][explicit semantic role] semantic roles.

### Other Resources

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [required accessibility parent role]
- [accessibility parent]

## Examples

### Passed

#### Passed Example 1

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][], `list`, expressed as an [explicit semantic role][].

```html
<div role="list">
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</div>
```

#### Passed Example 2

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][], `list`, expressed as an [implicit semantic role][] of `ul`. Note that this example does not satisfy [Success Criterion 4.1.1 Parsing][sc411] because the [`ul` element][ul] does not respect its [content model][].

```html
<ul>
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</ul>
```

#### Passed Example 3

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][] even though they are not its children in DOM.  Instead, they are grandchildren.  The element with `role="presentation"` is not [included in the accessibility tree][].

```html
<div role="list">
	<div role="presentation">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 4

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][] even though they are not its DOM descendants. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required accessibility parent role][].

```html
<div role="list" aria-owns="item1 item2"></div>
<div id="item1" role="listitem">List item 1</div>
<div id="item2" role="listitem">List item 2</div>
```

#### Passed Example 5

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][] even though they are not its DOM children. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required accessibility parent role][].

```html
<div role="list" aria-owns="item1 item2">
	<div role="listitem">
		<div id="item1" role="listitem">List item 1</div>
		<div id="item2" role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 6

These elements with an [explicit semantic role][] of `listitem` are children in the [accessibility tree][] of an element with their [required accessibility parent role][] because the [accessibility tree][] mimics the DOM tree across shadow boundaries.

```html
<div id="host" role="list"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div role="listitem">List item 1</div> <div role="listitem">List item 2</div>'
</script>
```

#### Passed Example 7

These elements with an [explicit semantic role][] of `listitem` are [accessibility children][accessibility child] of an element with their [required accessibility parent role][]. The intervening `div`, which has an `aria-live` attribute, doesn't change that fact.  The `div` is [included in the accessibility tree][] because it has a [global attribute](https://www.w3.org/TR/wai-aria-1.3/#global_states) (the `aria-live` attribute).  The `div` has a role of `generic`.  An element with a role of `generic` does not change the parent-child relationship.

This example failed in ARIA 1.2.  It passes in ARIA 1.3.

```html
<div role="list">
	<div aria-live="polite">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```


### Failed

#### Failed Example 1

This element with an [explicit semantic role][] of `listitem` is not a child in the [accessibility tree][] of an element with its [required accessibility parent role][].

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

These elements with an [explicit semantic role][] of `listitem` are not children in the [accessibility tree][] of an element with their [required accessibility parent role][], but of an element with the `tabpanel` role.

```html
<div role="list">
	<div role="tabpanel">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 3

These elements with an [explicit semantic role][] of `listitem` are not children in the [accessibility tree][] of an element with their [required accessibility parent role][] because explicit parent-child relation in the [accessibility tree][] (set by `aria-owns`) does not cross shadow boundaries.

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

This element with an [explicit semantic role][] of `listitem` is not [included in the accessibility tree][], because it has the CSS `display:none`.

```html
<div role="listitem" style="display:none;">List item 1</div>
```

#### Inapplicable Example 2

There is no element with an [explicit semantic role][].

```html
<ul>
	<li>List item 1</li>
</ul>
```

#### Inapplicable Example 3

This `section` element with an [explicit semantic role][] of `doc-abstract` has a role from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0], not the [WAI-ARIA 1.3 Recommendation][aria 1.3].

```html
<section role="doc-abstract" aria-label="Abstract">
	<p>Accessibility of web content requires semantic information about widgets, structures, and behaviors …</p>
</section>
```

#### Inapplicable Example 4

There is no element whose role has [required accessibility parent role][] because the `heading` role does not have one.

```html
<div role="heading" aria-level="1">Hello!</div>
<p>Welcome to my homepage!</p>
```

#### Inapplicable Example 5

There is no element with an [explicit semantic role][] different from its [implicit semantic role][]. This `li` element has an [explicit semantic role][] of `listitem` which is identical to its [implicit semantic role][].

```html
<ul>
	<li role="listitem">List item 1</li>
</ul>
```

[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'
[aria 1.3]: https://www.w3.org/TR/wai-aria-1.3/ 'WAI ARIA 1.3 Recommendation'
[content model]: https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model 'HTML definition of the Content Model'
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/ 'Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0'
[dpub 1.1]: https://w3c.github.io/dpub-aria/ "Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1 (Editor's Draft)"
[explicit semantic role]: #explicit-role 'Definition of Explicit Semantic Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Semantic Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[required accessibility parent role]: https://www.w3.org/TR/wai-aria-1.3/#scope 'WAI ARIA definition of Required Accessibility Parent Role'
[required accessibility parent roles]: https://www.w3.org/TR/wai-aria-1.3/#scope 'WAI ARIA definition of Required Accessibility Parent Role'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc411]: https://www.w3.org/TR/WCAG22/#parsing 'Success Criterion 4.1.1 Parsing'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[subclass role]: https://www.w3.org/TR/wai-aria-1.3/#subclassroles 'ARIA Specification of Subclass Role'
[ul]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element 'HTML specification of the ul element'
[wai-aria graphics module]: https://www.w3.org/TR/graphics-aria-1.0/ 'WAI-ARIA Graphics Module 1.0'
[html or svg element]: #namespaced-element
[accessibility parent]: https://www.w3.org/TR/wai-aria-1.3/#dfn-accessibility-parent
[accessibility child]: https://www.w3.org/TR/wai-aria-1.3/#dfn-accessibility-child

