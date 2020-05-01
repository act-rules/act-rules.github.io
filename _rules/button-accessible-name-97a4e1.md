---
id: 97a4e1
name: Button has accessible name
rule_type: atomic
description: |
  This rule checks that each `button` element has an accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
    - Stein Erik Skotkjerra
---

## Applicability

The rule applies to elements that are [included in the accessibility tree][] and have a [semantic role](#semantic-role) of `button`, except for `input` elements whose `type` attribute is in the [`Image Button` state](<https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image)>).

**Note:** `input` elements have a `type` attribute in the `Image button` state if it is set to any case-insensitive match of `image` (most of the time, using `<input type="image">`).

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** `input` elements of type `submit` and `reset` can get their [accessible name][] from a [default text](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset), as well as from a `value` or other attribute.

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

## Assumptions

- The rule assumes that all buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `button` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [HTML Accessibility API Mappings 1.0 (working draft), 5.2 `input type="button"`, `input type="submit"` and `input type="reset"`](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

This `button` element has an [accessible name][] because of its text content.

```html
<button>My button</button>
```

#### Passed Example 2

This `input` element has an [accessible name][] because of its `value` attribute.

```html
<input type="submit" value="Submit" />
```

#### Passed Example 3

This `button` element has an [accessible name][] because of its `aria-label` attribute.

```html
<button aria-label="My button"></button>
```

#### Passed Example 4

This element with a `button` role has an [accessible name][] because of its `aria-label` attribute.

```html
<span role="button" aria-label="My button"></span>
```

#### Passed Example 5

This `button` element with the `disabled` attribute has an [accessible name][] because of its text content.

```html
<button disabled>Delete</button>
```

#### Passed Example 6

This off screen `button` element has an [accessible name][] because of its text content.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<button class="notInPage">Save</button>
	</body>
</html>
```

#### Passed Example 7

This `input` element has an [accessible name][] because of the default accessible name for an `input` element with a `type` attribute set to `reset`.

```html
<input type="reset" />
```

### Failed

#### Failed Example 1

This `button` element has no [accessible name][] because it has no content or attribute that can provide it.

```html
<button></button>
```

#### Failed Example 2

This `button` element has no [accessible name][]. The `value` attribute does not provide an [accessible name][] for `button` elements, only for `input` elements.

```html
<button type="button" value="read more"></button>
```

#### Failed Example 3

This element with the `button` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<span role="button"></span>
```

#### Failed Example 4

This off screen `button` element has no [accessible name][] because it has no content or attribute that can provide it.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<button class="notInPage" value="delete"></button>
	</body>
</html>
```

#### Failed Example 5

This `button` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<button role="none"></button>
```

### Inapplicable

#### Inapplicable Example 1

This `input` element has a `type` attribute set to `image`. These images are tested in a separate rule which also tests [success criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content).

```html
<input type="image" value="download" alt="Download" />
```

#### Inapplicable Example 2

This `button` element does not need an [accessible name][] because it is not included in the accessibility tree.

```html
<button style="display: none;"></button>
```

#### Inapplicable Example 3

This `button` element has a `link` role. Links are tested in a separate rule which also tests [success criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context).

```html
<button role="link">take me somewhere</button>
```

#### Inapplicable Example 4

There is no element with a semantic role of `button`.

```html
<div>Press Here</div>
```

#### Inapplicable Example 5

This `button` element has an [explicit role][] of `none`; it is not [focusable][] because it is `disabled`. Thus it has a [semantic role][] of `none`.

```html
<button role="none" disabled></button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
