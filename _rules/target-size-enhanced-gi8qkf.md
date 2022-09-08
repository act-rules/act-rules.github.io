---
id: gi8qkf
name:
rule_type: atomic
description: |

accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
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
---

## Applicability

This rule applies to any [inheriting semantic] `widget`, except if one or more of the following is true:

- The widget cannot be [targeted by a pointer event][]
- The widget is part of [[inline text]]
- The widget has a label that has a width and height of at least 44 CSS pixels

## Expectation 1

The target element has a width and height of at least 44 CSS pixels.

## Assumptions

- Not essential
- No alternative <--- ???

## Accessibility Support

## Background

### Bibliography

- [Understanding Success Criterion](#)
- [Technique](#)

## Test Cases

### Passed

#### Passed Example 1

This ...

```html
<style>
	a {
		line-height: 44px;
	}
</style>
<a href="/">Home</a>
```

#### Passed Example 2

This `input` element, combined with its

```html
<label style="padding: 6px 0;">
	Given Name<br />
	<input />
</label>
```

### Failed

- Link has insufficient size
- Button has sufficient size, but is partially obscured
- Button has sufficient size, but is clipped
- This radio button with insufficient size has its size modified by the author

#### Failed Example 1

This ...

```html
<label> Given Name <input /> </label>
```

### Inapplicable

#### Inapplicable Example 1

These links are part of a block of text, which determines its size.

```html
<p>
	The size of the <a href="https://www.w3.org/TR/WCAG21/#dfn-target">target</a> for <a href="https://www.w3.org/TR/WCAG21/#dfn-pointer-inputs">pointer inputs</a> is at least 44 by 44 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels">CSS pixels.
</p>
```

#### Inapplicable Example 2

These `input` elements and `button` are `disabled`.

```html
<fieldset disabled>
	<label>First name <input /></label><br />
	<label>Last name <input /></label><br />
	<button>submit</button>
</fieldset>
```

#### Inapplicable Example 3

This checkbox does not have its size adjusted by the author

```html
<p id="accept">
	<input aria-labelledby="accept" type="checkbox" />
	I agree with the terms and conditions.
</p>
```

#### Inapplicable Example 4

This checkbox cannot be [targeted by a click event][] because it is hidden. It is replaced with an on-screen clickable SVG.

```html

```

#### Inapplicable Example 5

This checkbox cannot be [targeted by a click event][] because it is obscured by the modal.

```html

```
