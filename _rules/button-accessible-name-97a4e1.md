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
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Wilco Fiers
    - Stein Erik Skotkjerra
---

## Applicability

The rule applies to all elements that are [included in the accessibility tree][] and have a [semantic role](#semantic-role) of `button`.

**Note:** `input` elements have a `type` attribute in the `Image button` state if it is set to any case-insensitive match of `image` (most of the time, using `<input type="image">`).

**Note:** The specification of the [`type`](https://html.spec.whatwg.org/#states-of-the-type-attribute) attribute describes in detail how to map the value of the attribute to its corresponding state.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** `input` elements of type `submit` and `reset` can get their [accessible name][] from a [default text](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset), as well as from a `value` or other attribute.

**Note:** Testing that the [accessible name][] is descriptive is not part of this rule and must be tested separately.

## Assumptions

- The rule assumes that all buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][], which may apply to `input` elements with a `type` attribute in the `Image button` state.

## Background

- [HTML Accessibility API Mappings 1.0 (working draft), 5.2 `input type="button"`, `input type="submit"` and `input type="reset"`](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)
- [WCAG Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)

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

This `summary` element with an [implicit role](#implicit-role) of `button` has an [accessible name][] because of its text content.

```html
<summary>Press Here</summary>
```

#### Passed Example 6

This `button` element with the `disabled` attribute has an [accessible name][] because of its text content.

```html
<button disabled>Delete</button>
```

#### Passed Example 7

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

#### Passed Example 8

This `input` element has an [accessible name][] because of the default accessible name for an `input` element with a `type` attribute set to `reset`.

```html
<input type="reset" />
```

#### Passed Example 9

This `input` element with 'type' attribute in the `Image button` state has an [accessible name][] through the `alt` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Search" />
```

#### Passed Example 10

This image button has an [accessible name][] through the `aria-label` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-label="Search" />
```

#### Passed Example 11

This image button has an [accessible name][] through the `title` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" title="Search" />
```

#### Passed Example 12

This image button has an [accessible name][] through the `aria-labelledby` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="id1" />
<div id="id1">Search</div>
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

This `input` element with 'type' attribute in the `Image button` state has an empty [accessible name][]. The `name` attribute can not be used to provide an [accessible name][].

```html
<input type="image" name="search" src="/test-assets/shared/search-icon.svg" />
```

#### Failed Example 6

This image button has an empty `alt` attribute, and no other attributes that can give it an [accessible name][].

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="" />
```

#### Failed Example 7

This image button has an `aria-labelledby` attribute, but the referenced element does not exist. This gives the button an empty [accessible name][].

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="non-existing" />
```


### Inapplicable

#### Inapplicable Example 1

This `button` element does not need an [accessible name][] because it is not included in the accessibility tree.

```html
<button style="display: none;"></button>
```

#### Inapplicable Example 2


This `input` element with 'type' attribute in the `Image button` state does not need an [accessible name][] because it is not included in the accessibility tree.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" style="display: none;" />
```

#### Inapplicable Example 3

The `button` element is tested separately from the `img` element. [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) is applied to the button, whereas the image is tested under [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content)

```html
<button><img src="/test-assets/shared/search-icon.svg" alt="Search" /></button>
```

#### Inapplicable Example 3

There is no element with a [semantic role][] of `button`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 4

This `button` element has a `link` role. Links are tested in a separate rule which also tests [success criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context).

```html
<button role="link">take me somewhere</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
