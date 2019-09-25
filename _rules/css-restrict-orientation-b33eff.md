---
id: b33eff
name: Orientation of the page is not restricted using CSS transform property
rule_type: atomic
description: |
  This rule checks that page content is not restricted to either `landscape` or `portrait` orientation using CSS transform property.
accessibility_requirements:
  wcag21:1.3.4: # Orientation
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Jey Nandakumar
  - Audrey Maniez
---

## Applicability

The rule applies to any HTML element that is [visible](#visible) and has a CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property that is applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) with a value of `landscape` or `portrait`, where the CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has any of the below [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions):

- [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate)
- [rotate3d](https://drafts.csswg.org/css-transforms-2/#funcdef-rotate3d)
- [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez)
- [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d)

**Note:** These specific [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) are of interest to this rule as they have the potential to affect the [rotation](https://drafts.csswg.org/css-transforms-2/#Rotate3dDefined) of a given element.

**Note:** The [rotate3d](https://drafts.csswg.org/css-transforms-2/#funcdef-rotate3d), [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez) and [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d) are currently part of a [W3C](https://www.w3.org/) Editor's Draft.

## Expectation

The target element is neither rotated clockwise nor counter clockwise around the Z-axis at an angle corresponding to 90 degrees relative from the position of the element in `landscape` orientation to the position of the element in `portrait` orientation, and vice versa.

## Assumptions

This rule does not consider and may produce incorrect results for:

- Elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential).
- The existence of any control on the page that can change the orientation on demand.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2)
- [CSS3 Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation)
- [The Transform Rendering Model](https://drafts.csswg.org/css-transforms/#transform-rendering)

## Test Cases

### Passed

#### Passed Example 1

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: rotateZ(1turn);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Passed Example 2

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: matrix(1, -1.22465e-15, 1.22465e-15, 1, 0, 0);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Passed Example 3

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which matches the default CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) applied on the target element.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(90deg);
			}
			@media (orientation: portrait) {
				body {
					transform: rotate(90deg);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<link rel="stylesheet" href="/test-assets/b33eff/style.css" />
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 2

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `portrait` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: landscape) {
				body {
					transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

A page where there are no CSS styles.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
	</head>
	<body>
		I am a page with no styles
	</body>
</html>
```

#### Inapplicable Example 2

A page that has no CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property specified.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			html {
				font-size: 22px;
			}
			@media (min-width: 30em) {
				font-size: 100%;
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Inapplicable Example 3

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is applied to an element that is not [visible](#visible).

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: lanscape) {
				body {
					transform: rotateZ(0, 0, 1, 270deg);
				}
			}
		</style>
	</head>
	<body style="display:none;">
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Inapplicable Example 4

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is not applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1).

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(90deg);
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Inapplicable Example 5

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1), but does not have any of the applicable [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) which restricts the element to either `landscape` or `portrait` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				body {
					transform: translateX(100px);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

