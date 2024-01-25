---
id: b33eff
name: Orientation of the page is not restricted using CSS transforms
rule_type: atomic
description: |
  This rule checks that page content is not restricted to either `landscape` or `portrait` orientation using CSS transforms
accessibility_requirements:
  wcag21:1.3.4: # Orientation
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Audrey Maniez
    - Jey Nandakumar
    - Tom Brunet
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] that is [visible](#visible) and has one of the following CSS properties applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) with a value of `landscape` or `portrait`:

- the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property; or
- the CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property with any of the below [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions):

  - [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate)
  - [rotate3d](https://www.w3.org/TR/css-transforms-2/#funcdef-rotate3d)
  - [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez)
  - [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
  - [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d)

**Note:** These specific [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) are of interest to this rule as they have the potential to affect the [rotation](https://www.w3.org/TR/css-transforms-2/#Rotate3dDefined) of a given element.

**Note:** The [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property and the [rotate3d](https://www.w3.org/TR/css-transforms-2/#funcdef-rotate3d), [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez) and [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d) transform functions are currently part of a [W3C](https://www.w3.org/) Working Draft and widely implemented in browsers.

## Expectation

The target element is neither rotated clockwise nor counter clockwise around the Z-axis at an angle corresponding to 90 degrees relative from the position of the element in `landscape` orientation to the position of the element in `portrait` orientation, and vice versa.

**Note:** Imagine the display of a smartphone with cartoon figure at its center. With this example, if a user turns the smartphone a quarter turn, that is a partial move from one orientation to the other, the user would expect that the cartoon figure continues to remain facing upwards. The smartphone accomplishes this by rotating the contents of its display a quarter turn to counter the users change in orientation. In effect, the cartoon figure has remained in place and its rotation relative from one orientation to the other is 0 degrees. Now imagine that a developer facilitated this rotation of the cartoon figure by a quarter turn _only_ when the smartphone starts from one orientation and not the other; its rotation relative from one orientation to the other would then be 90 degrees and it would appear stuck, or locked, as the user moves between orientations. What the developer has done is effectively counter the smartphone's attempt at countering the user's change in orientation.

## Assumptions

This rule does not consider and may produce incorrect results for:

- Elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential).
- The existence of any control on the page that can change the orientation on demand.
- Scripts are not used to adjust the CSS orientation lock.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [CSS Transforms Module Level 2](https://www.w3.org/TR/css-transforms-2)
- [CSS3 Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation)
- [The Transform Rendering Model](https://drafts.csswg.org/css-transforms/#transform-rendering)

## Test Cases

### Passed

#### Passed Example 1

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

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

**Note:** The extremely small number in the transform function below is included to ensure testing methodologies correctly interpret the impacts of the transformation and are not simply looking for 0.

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

A page where the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property has a 0 degree rotation conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					rotate: 0turn;
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
		<style>
			@media (orientation: portrait) {
				html {
					transform: rotate(1.5708rad);
					width: min(100vw, 100vh);
					height: min(100vw, 100vh);
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 2

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `portrait` orientation.

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

#### Failed Example 3

This page appears rotated at a slight angle of 2.5 degrees for stylistic purposes, but is locked in portrait orientation by applying a 92.5 degree rotation when in landscape orientation:

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(2.5deg);
				padding: 2rem;
				width: min(100vw, 100vh);
				height: min(100vw, 100vh);
			}

			@media (orientation: landscape) {
				body {
					transform: rotate(92.5deg);
					position: absolute;
					right: 0px;
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 4

A page where the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property has a 90 degree rotation conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					rotate: 90deg;
					width: min(100vw, 100vh);
					height: min(100vw, 100vh);
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
				width: calc(min(100vw, 100vh) - 2rem);
				height: calc(min(100vw, 100vh) - 2rem);
				padding: 1rem;
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

[html element]: #namespaced-element
