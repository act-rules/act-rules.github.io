---
id: m6b1q3
name: Menuitem has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each element with a `menuitem` role has a non-empty accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS Styling
  - DOM Tree
acknowledgments:
  authors:
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - The "file.svg" icon is part of the Feather Icons package, which uses the [MIT license](https://github.com/feathericons/feather/blob/master/LICENSE).
---

## Applicability

This rule applies to [HTML elements][] that is a [semantic][semantic role] `menuitem` [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

This rule assumes that all menuitems are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components). If an element has a role of `menuitem` that would not be perceived as a single control by users, [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value) would not apply and so failing this rule would not result in a conformance issue.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `menuitem` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

This element with the `menuitem` role has an [accessible name][] because of its text content.

```html
<div role="menu">
	<button role="menuitem">New file</button>
</div>
```

#### Passed Example 2

This element with the `menuitem` role has an [accessible name][] because of its `aria-label` attribute.

```html
<div role="menu">
	<button role="menuitem" aria-label="New file">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

#### Passed Example 3

This element with the `menuitem` role has an [accessible name][] because its `aria-labelledby` attribute references an element with text content.

```html
<div role="menu">
	<button role="menuitem" aria-labelledby="newfile">
		<img src="/test-assets/shared/file.svg" alt="" />
		<span id="newfile" hidden>New file</span>
	</button>
</div>
```

#### Passed Example 4

This element with the `menuitem` role has an [accessible name][] because of its `title` attribute.

```html
<div role="menu">
	<button role="menuitem" title="New file">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

### Failed

#### Failed Example 1

This element with the `menuitem` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<div role="menu">
	<button role="menuitem">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

#### Failed Example 2

This off-screen element with the `menuitem` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<html lang="en">
	<style>
		.offscreen {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<div role="menu" class="offscreen">
		<button role="menuitem">
			<img src="/test-assets/shared/file.svg" alt="" />
		</button>
	</div>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The `li` element has a `listitem` [semantic role][], even as a child of a `menu` element.

```html
<menu>
	<li>
		<a href="#">New file</a>
	</li>
</menu>
```

#### Inapplicable Example 2

This element with the `menuitem` role does not need an [accessible name][] because it is not [included in the accessibility tree][].

```html
<div role="menu" hidden>
	<button role="menuitem">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[html elements]: #namespaced-element
