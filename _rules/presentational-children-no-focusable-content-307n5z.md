---
id: 307n5z
name: Element with presentational children has no focusable content
rule_type: atomic
description: |
  This rule checks that elements with a role that makes its children presentational do not contain focusable elements.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML or SVG element][] with a [semantic role][] that defines its [children][child] to be [presentational children][].

## Expectation

None of the target elements have [descendants][] in the [flat tree][] that are part of [sequential focus navigation][].

## Assumptions

This rule assumes that elements that are part of [sequential focus navigation][] do not immediately blur, or move focus to another element. Such elements will fail this rule, but may still satisfy success criterion 4.1.2.

## Accessibility Support

Several major browsers ignore the WAI-ARIA requirements on [presentational children][] for most or sometimes all roles, or in presence of focusable content. Since some browsers implement presentational children while others do not, pages failing this rule may only be problematic with some browsers.

## Background

This rule applies to elements with a [semantic role][] that defines its [children][child] to be [presentational children][], which are all of the following: `button`, `checkbox`, `img`, `meter`, `menuitemcheckbox`, `menuitemradio`, `option`, `progressbar`, `radio`, `scrollbar`, `separator`, `slider`, `switch`, and `tab`.

Elements with a [semantic role][] that has [presentational children][] will not have any descendants in the accessibility tree. If any of those descendants are included in [sequential focus navigation][], this causes the focus to land on an element that has no corresponding node in the [accessibility tree][]. The result is that there is no programmatic name or role available for assistive technologies. There are other problems that can come from [presentational children][] too. These must be tested separately.

This rule is often misunderstood as applying to elements with an <i>explicit</i> role of `presentation`.  In fact, this rule only applies to elements which have been given an <i>implicit</i> role of `presentation` through the [presentational children][] mechanism.  Similarly, this rule does not apply to elements with `aria-hidden="true"`.

### Related rules

- [Element with aria-hidden has no content in sequential focus navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/)

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WAI-ARIA 1.2 Presentational Children][presentational children]

## Test Cases

### Passed

#### Passed Example 1

None of these `button` elements has [descendants][] that are included in [sequential focus navigation][].

```html
<button>Save</button> <button aria-label="save options" aria-expanded="false">▼</button>
```

#### Passed Example 2

This element with the `checkbox` role has no [descendants][] that are included in [sequential focus navigation][]. Instead the link to the terms of service is adjacent, and `aria-labelledby` is used to provide its [accessible name][].

```html
<p id="terms">
	<span role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="terms">
		I agree to the
	</span>
	<a href="/terms">terms of service</a>
</p>
```

#### Passed Example 3

This element with the `menuitemcheckbox` role has an `input` element as a descendant. Because the `input` is disabled it is not included in [sequential focus navigation][].

**Note**: The `input` checkbox has a `role` [attribute value][] of `none` to ensure it is ignored by browsers that do not support [presentational children][].

```html
<ul role="menu">
	<li role="menuitemcheckbox" aria-checked="true">
		<input type="checkbox" role="none" disabled checked />
		Sort by Last Modified
	</li>
</ul>
```

#### Passed Example 4

This `<button>` element has an `<a>` element as a [child][].  The `<a>` element has no `href` attribute, so it isn't included in [sequential focus navigation][].  So this `<button>` element passes the rule.

```html
<button><a>button/link</a></button>
```


### Failed

#### Failed Example 1

This `button` element has a [child][] `span` element. Because the `span` element has a `tabindex` attribute with value of `0`, it is included in [sequential focus navigation][].

```html
<button>
	Save
	<span role="button" aria-label="save options" aria-expanded="false" tabindex="0">▼</span>
</button>
```

#### Failed Example 2

This element with the `checkbox` role has an `a` element as a [child][]. Because the `a` element has an `href` attribute, it is included in [sequential focus navigation][].

```html
<p role="checkbox" aria-checked="false" tabindex="0">I agree to the <a href="/terms">terms of service</a></p>
```

#### Failed Example 3

This element with the `menuitemcheckbox` role has a checkbox as a child. Because the checkbox is not disabled, it is included in [sequential focus navigation][].

```html
<ul role="menu">
	<li role="menuitemcheckbox" aria-checked="true">
		<input type="checkbox" checked />
		Sort by Last Modified
	</li>
</ul>
```

#### Failed Example 4

This element with the `tab` role contains an `<a>` element.  The `tab` role has [presentational children][].  The `a` element is included in [sequential focus navigation][].  So the element with the `tab` role fails the rule.  (This tablist implementation is non-functional for users.  It's not meant to function - it's only meant to show roles.)

```html
<ul role="tablist">
	<li role="tab">
		<a href="#">Tab 1</a>
	</li>
</ul>
```

#### Failed Example 5

This element with the `img` role contains an `<a>` element.  The `img` role has [presentational children][].  The `<a>` element is included in [sequential focus navigation][].  So the element with the `img` role fails the rule.

```html
<span role="img" aria-label="some ASCII art">****** This ASCII art ******* <a href="#">contains a link.</a></span>
```

### Inapplicable

#### Inapplicable Example 1

None of the roles that build this semantic table structure (`table` for `<table>`, `row` for `<tr>`, `columnheader` for `<th>`, and `cell` for `<td>`) have [presentational children][].  So this rule does not apply to them.

```html
<table>
		<thead>
				<tr>
						<th><a href="#">link in table header cell - no problem</a></th>
				</tr>
		</thead>
		<tbody>
				<tr>
						<td><a href="#">link in table data cell - no problem</a></td>
				</tr>
		</tbody>
</table>
```

#### Inapplicable Example 2

This `<a>` element has a `link` role, which does not have [presentational children][].  So this `<a>` element does not fail this rule, because it's inapplicable.  To have a "focusable element within a focusable element" like this is a bad practice, but this rule doesn't directly check for it.

```html
<a href="https://w3.org"><span tabindex="0">W3C Website</span></a>
```

[accessible name]: #accessible-name 'Definition of Accessible name'
[attribute value]: #attribute-value 'Definition of Attribute value'
[semantic role]: #semantic-role 'Definition of Semantic role'
[accessibility tree]: https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree 'Definition of Accessibility tree'
[presentational children]: https://www.w3.org/TR/wai-aria-1.2/#childrenArePresentational 'WAI-ARIA 1.2 Presentational Children'
[child]: https://dom.spec.whatwg.org/#concept-tree-child 'Definition child, as on 2020-10-21'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition Descendant, as on 2020-10-21'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/10/21'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[html or svg element]: #namespaced-element
