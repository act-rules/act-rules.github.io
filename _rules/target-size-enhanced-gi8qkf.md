---
id: gi8qkf
name:
rule_type: atomic
description: |
  This rule checks that elements that can receive pointer events have a size of at least 44×44 pixels.
accessibility_requirements:
  wcag21:2.5.5: # Target size (enhanced) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag22:2.5.8: # Target Size (Minimum)
    secondary: true
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Jean-Yves Moyen
    - Wilco Fiers
---

## Applicability

This rule applies ta any [HTML element][namespaced element] for which all the following are true:

- the element is an [inheriting semantic][] `widget`; and
- the element is [visible][]; and
- the element [can be targeted by a pointer event][].
  
Exception: not for `area` (due to weird shapes).
Exception: not if a descendant is focusable (hard to define the clickable area).

## Expectation

For each test target, at least one of the following is true:

- the target element has a [clickable area][] width and height of at least 44 CSS pixels; or
- the target is part of [inline text][]; or
  > comment: I feel this is going to be difficult to define objectively, so it is better in Expectation for now. #1010 has some work in that direction that we can probably reuse: https://github.com/act-rules/act-rules.github.io/pull/1010/files#diff-32079a0602a5a909b242b4e0961e7c5ddd6b6f5c9906b216d5bf21cf2ba13a77R28-R29
  https://github.com/act-rules/act-rules.github.io/blob/4b64bba6cb77a8d4dc0649c83c55372f513d979f/pages/glossary/rendered-on-a-line.md
- the target is a [UI controlled component][].
  > comment: This is for the "User Agent Control" exception. The Understanding doc mentions days in a calendar widget. I somewhat intend to have this as a list of elements (or their descendants) which are known to correspond (e.g. `<input type="date">`) as it is fairly flexible and easy to define. This would, however let out cases where these components are re-sized by the author. But this is only false negatives, so I guess it's OK. 

## Assumptions

- Not essential
  > comment: this is always a bit tricky. I guess we can do as in #1916 and list cases that are considered essential (list can grow). Since this is in an Assumption, we do not need to be as strict as elsewhere. 
- No alternative <--- ???
  > comment: I think we can go in line of "there is no [instrument][] to achieve the same goal". That does leave quite a lot of fluffyness around the goal (which should normally be unambiguosly defined), but that is maybe OK for an Assumption?

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
