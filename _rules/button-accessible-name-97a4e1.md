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

The rule applies to elements that are [included in the accessibility tree][] with the [semantic role](#semantic-role) of `button`, except for `input` elements of `type="image"`.

## Expectation

Each target element has an [accessible name][] that is not only [whitespace][].

**Note**: `input` elements of type `submit` and `reset` can get their [accessible name][] from a [default text](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset), as well as from a `value` or other attribute.

## Assumptions

- The rule assumes that all buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [HTML Accessibility API Mappings 1.0 (working draft)](https://www.w3.org/TR/html-aam/)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

The [accessible name][] of `button` elements comes from it's content.

```html
<button>My button</button>
```

#### Passed Example 2

The [accessible name][] of the `input` button comes from it's `value` attribute.

```html
<input type="submit" value="Submit" />
```

#### Passed Example 3

When there is no text content, a `button` can be given an [accessible name][] with the `aria-label` attribute.

```html
<button aria-label="My button"></button>
```

#### Passed Example 4

Elements with `role="button"` require an [accessible name][]. In this example the [accessible name][] comes from the `aria-label` attribute.

```html
<span role="button" aria-label="My button"></span>
```

#### Passed Example 5

The `summary` element has an implicit semantic role of `button`. In this example it is given an [accessible name][] through it's content.

```html
<summary>Press Here</summary>
```

#### Passed Example 6

Buttons that are disabled still require an [accessible name][]. In this example it is provided through the content of the `button` element.

```html
<button disabled>Delete</button>
```

#### Passed Example 7

Off screen buttons still require an [accessible name][]. In this example it is provided through the content of the `button` element.

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

Some buttons have a default value. In this example the `input` element has "reset" as the [accessible name][], or translated of "reset" provided by the browser.

```html
<input type="reset" />
```

### Failed

#### Failed Example 1

The `button` element has an empty [accessible name][], because it has no content, nor any attribute that would give it an accessible name.

```html
<button></button>
```

#### Failed Example 2

The `value` attribute can not be used to provide an [accessible name][] for `button` elements. Only on `input` buttons will the value be used as the [accessible name][].

```html
<button type="button" value="read more"></button>
```

#### Failed Example 3

Elements with an explicit semantic role of `button` require an [accessible name][], either provided through it's content, or through an `aria-label` or `aria-labelledby` attribute.

```html
<span role="button"></span>
```

#### Failed Example 4

Off screen buttons still require an [accessible name][].

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

### Inapplicable

#### Inapplicable Example 1

Image buttons are tested in a separate rule, because also have to be tested for [success criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content).

```html
<input type="image" value="download" alt="Download" />
```

#### Inapplicable Example 2

Buttons that are not [included in the accessibility tree][] are ignored by assistive technologies. These are not required to have an accessible name. If at some future state of the page the element is made visible, an [accessible name][] will be necessary.

```html
<button style="display: none;"></button>
```

#### Inapplicable Example 3

A `button` element (or `input` button) can have it's role changed through the `role` attribute. Such elements are not applicable for this rule. In most scenarios this will still require an [accessible name][], but different rules, and different success criteria may be applicable.

```html
<button role="link">take me somewhere</button>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[whitespace]: #whitespace 'Definition of whitespace'
