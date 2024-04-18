---
id: qt1vmo
name: Image accessible name is descriptive
rule_type: atomic
description: |
  This rule checks that the accessible names of images serve an equivalent purpose to the image.
accessibility_requirements:
  wcag20:1.1.1: # Non-Text Content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G94: # Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G95: # Providing short text alternatives that provide a brief description of the non-text content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - W3C; HTML and W3C logo
    - Wikimedia; Fireworks image
    - Adobe; PDF logo
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
  - 'attr-lowercase'
---

## Applicability

This rule applies to any `img`, `canvas` or `svg` element that is [visible][] and has a non-empty [accessible name][], except if one or more of the following is true:

- The element has an [ancestor][] in the [flat tree][] that is [named from author][]; or
- The element is an `img` element where the [current request][]'s [state][image request state] is not [completely available][].

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][] of that test target.

## Assumptions

There are no assumptions.

## Accessibility Support

Some popular browser / screen reader combinations do not pronounce the accessible names of `svg` elements. This can be resolved by adding an [explicit semantic role][] of `img` to the `svg` element.

## Background

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G95)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)

## Test Cases

### Passed

#### Passed Example 1

This `img` element has an `alt` attribute that describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
</html>
```

#### Passed Example 2

This `svg` element has an `aria-label` attribute that describes the HTML5 logo image.

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="HTML 5 logo" role="img">
		<path
			d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"
		/>
		<path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
		<path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
		<path
			fill="#ebebeb"
			d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
		/>
		<path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
	</svg>
</html>
```

#### Passed Example 3

This `canvas` element has an `aria-label` attribute that describes the W3C logo image.

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="W3C logo"></canvas>
	<script>
		const img = new Image()
		img.src = '/test-assets/shared/w3c-logo.png'
		img.onload = function() {
			const ctx = document.querySelector('#logo').getContext('2d')
			ctx.drawImage(img, 0, 0)
		}
	</script>
</html>
```

### Failed

#### Failed Example 1

This `img` element has an `alt` attribute that incorrectly describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="ERCIM logo" />
</html>
```

#### Failed Example 2

This `svg` element has an `aria-label` attribute that incorrectly describes the image (the `aria-label` is "W3C" but the actual image is the HTML5 logo).

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="W3C" role="img">
		<path
			d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"
		/>
		<path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
		<path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
		<path
			fill="#ebebeb"
			d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
		/>
		<path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
	</svg>
</html>
```

#### Failed Example 3

This `canvas` element has an `aria-label` attribute that incorrectly describes the image (the `aria-label` is "HTML5 logo" but the actual image is the W3C logo).

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="HTML 5 logo"></canvas>
	<script>
		const img = new Image()
		img.src = '/test-assets/shared/w3c-logo.png'
		img.onload = function() {
			const ctx = document.querySelector('#logo').getContext('2d')
			ctx.drawImage(img, 0, 0)
		}
	</script>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element has an empty (`""`) [accessible name][]. The image is described by the adjacent text.

```html
<img src="/test-assets/shared/pdf-icon.png" alt="" /> PDF document
```

#### Inapplicable Example 2

This decorative `img` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<img src="/test-assets/shared/fireworks.jpg" role="presentation" />
</html>
```

#### Inapplicable Example 3

This `svg` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<svg height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</html>
```

#### Inapplicable Example 4

This `canvas` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<canvas id="newyear" width="200" height="200"></canvas>
	<script>
		const ctx = document.querySelector('#newyear').getContext('2d')
		ctx.fillStyle = 'yellow'
		ctx.beginPath()
		ctx.moveTo(100, 10)
		ctx.lineTo(40, 180)
		ctx.lineTo(190, 60)
		ctx.lineTo(10, 60)
		ctx.lineTo(160, 180)
		ctx.fill()
	</script>
</html>
```

#### Inapplicable Example 5

This `img` element is not [visible][].

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" style="display:none" />
</html>
```

#### Inapplicable Example 6

This `canvas` element is not [visible][] because it is completely transparent.

```html
<html lang="en">
	<canvas width="200" height="200"></canvas>
</html>
```

#### Inapplicable Example 7

This `img` element has no [accessible name][] because it is not [included in the accessibility tree][].

```html
<html lang="en">
	<img aria-hidden="true" src="/test-assets/shared/fireworks.jpg" alt="fireworks" />
</html>
```

#### Inapplicable Example 8

This `svg` element is ignored because it is a child of a link that provides its [accessible name][].

```html
<a href="https://w3.org" aria-label="W3C Website">
	<svg height="200" xmlns="http://www.w3.org/2000/svg" aria-label="star">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</a>
```

#### Inapplicable Example 9

This `img` element has a `src` attribute which will cause the [image request state][] to be [Broken](https://html.spec.whatwg.org/#img-error).

```html
<img src="/test-assets/does-not-exist.png" alt="" />
```

#### Inapplicable Example 10

This is a `div` element with a background image. Background images must be tested separate from this rule.

```html
<p>Happy new year!</p>
<div
	style="
	width: 260px;
	height: 260px;
	background: url(/test-assets/shared/fireworks.jpg) no-repeat;
"
></div>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit semantic role]: #explicit-role
[visible]: #visible 'Definition of visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content 'WCAG 2.2 definition of non-text content'
[completely available]: https://html.spec.whatwg.org/#img-all 'HTML definition of Completely available, 2020/03/06'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[named from author]: https://www.w3.org/TR/wai-aria-1.2/#namecalculation 'WAI-ARIA definition of Named from author'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM definition of ancestor, 2020/03/06'
