---
id: 97a4e1
name: Buttons have an accessible name
rule_type: atomic
description: |
  Each button element has an accessible name
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Wilco Fiers
  - Stein Erik Skotkjerra
---

## Applicability

The rule applies to elements that are [included in the accessibility tree](#included-in-the-accessibility-tree) with the [semantic role](#semantic-role) of `button`, except for `input` elements of `type="image"`.

## Expectation

Each target element has an [accessible name](#accessible-name) that is not only [whitespace](#whitespace).

**Note**: `input` elements of type `submit` and `reset` can get their [accessible name](#accessible-name) from a [default text](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset), as well as from a `value` or other attribute.

## Assumptions

- The rule assumes that all buttons are user interface components as defined by WCAG 2.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
- [https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html](https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html)

## Test Cases

### Passed

#### Passed Example 1

Regular button.

```html
<button>My button</button>
```

#### Passed Example 2

Value attribute as the [accessible name](#accessible-name).

```html
<input type="submit" value="Submit" />
```

#### Passed Example 3

`aria-label` for the [accessible name](#accessible-name).

```html
<button aria-label="My button"></button>
```

#### Passed Example 4

Span tag with role button and has name defined by aria-label.

```html
<span role="button" aria-label="My button"></span>
```

#### Passed Example 5

Summary element has a default semantic role of button.

```html
<summary>Press Here</summary>
```

#### Passed Example 6

Disabled elements are also applicable.

```html
<button disabled>Delete</button>
```

#### Passed Example 7

Off screen elements should be tested.

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

#### Passed example 8

Button has [accessible name](#accessible-name) that is not only [whitespace](#whitespace).

```html
<button>:-)</button>
```

#### Passed example 9

Input button has an [accessible name](#accessible-name) that comes from the default "reset" text.

```html
<input type="reset" />
```

### Failed

#### Failed Example 1

Value attribute does NOT give an [accessible name](#accessible-name), only for input elements.

```html
<button type="button" value="read more"></button>
```

#### Failed Example 2

Span tag with role button with no name.

```html
<span role="button"></span>
```

#### Failed Example 3

Off screen element without an [accessible name](#accessible-name).

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

#### Failed example 4

Button has an [accessible name](#accessible-name) that is only [whitespace](#whitespace).

```html
<button> </button>
```

### Inapplicable

#### Inapplicable Example 1

Image buttons are tested in a different rule.

```html
<input type="image" value="download" />
```

#### Inapplicable Example 2

Not [visible](#visible) in page and not [included in the accessibility tree](#included-in-the-accessibility-tree).

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
		<button class="notInPage" aria-hidden="true">Confirm</button>
	</body>
</html>
```

#### Inapplicable Example 3

Inapplicable: role overridden to link for button element.

```html
<button role="link">take me somewhere</button>
```

#### Inapplicable Example 4

Not [included in the accessibility tree](#included-in-the-accessibility-tree) due to `aria-hidden`.

```html
<button aria-hidden="true"></button>
```
