---
id: e88epe
name: Image not in the accessibility tree is decorative
rule_type: atomic
description: |
  This rule checks that visible `img`, `svg` and `canvas` elements that are ignored by assistive technologies are decorative.
accessibility_requirements:
  wcag20:1.1.1: # Non-text content (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - Accessibility tree
  - CSS Styling
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - W3C
    - Wikimedia
    - Adobe
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'attr-lowercase'
---

## Applicability

This rule applies to any `img`, `canvas` or `svg` element that is [visible][] and for which at least one of the following is true:

- **excluded**: The element is not [included in the accessibility tree][]; or
- **ignored svg**: The element is an `svg` with an empty (`""`) [accessible name][] and a [semantic role][] of `graphics-document`; or
- **ignored canvas**: The element is a `canvas` with an empty (`""`) [accessible name][] and no [explicit semantic role][]; or

**Exception**: This rule never applies to elements for which one or more of the following is true:

- The element has an [ancestor][] in the [flat tree][] that is [named from author][]; or
- The element is an `img` element where the [current request][]'s [state][image request state] is not [completely available][].

**Note**: An example of an image ignored because of an [ancestor][] with [named from author][] is when the image is a descendant of a `button` element that uses `aria-label` for its accessible name.

## Expectation

Each test target is [purely decorative][].

**Note**: It is relatively common for an informative image such as an icon to be marked up as decorative, if the text alternative is adjacent to the image. This is a [conforming alternative version][] for the image. This fails the rule but meets [conformance requirement 1 of WCAG 2.2](https://www.w3.org/TR/WCAG22/#cc1).

## Assumptions

- `svg` elements with a [semantic role][] of `graphics-document` and with an empty (`""`) [accessible name][] are ignored by assistive technologies tested for this rule. If some assistive technology does not ignore these elements, and that assistive technology is required for conformance, passing this rule does not ensure all decorative `svg` elements can be ignored, and the [success criterion 1.1.1 Non-text content][] may still not be satisfied. The same is true for `canvas` elements with no [semantic role][] and an empty (`""`) [accessible name][].

- A web page with informative images without an [accessible name][] may conform to WCAG 2.2 Level A when the information provided by that image is available elsewhere on the web page itself. For example if an equivalent text is adjacent to the image, or if the text alternative is included in the [accessible name][] of a parent element.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG22/Techniques/html/H67.html)
- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

## Test Cases

### Passed

#### Passed Example 1

This `img` element with an empty `alt` attribute which is not [included in the accessibility tree][] is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" alt="" />
```

#### Passed Example 2

This `img` element that is ignored by assistive technologies because `aria-hidden` is set to `true` is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" aria-hidden="true" role="img" alt="" />
```

#### Passed Example 3

This `img` element that is ignored by assistive technologies because it has an [explicit semantic role][] of `none` is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" role="none" alt="ignore me" />
```

#### Passed Example 4

This `svg` element that is ignored by assistive technologies because it has no attribute that would give it an [accessible name][] is [purely decorative][].

```html
<p>Happy new year!</p>
<svg height="200" xmlns="http://www.w3.org/2000/svg">
	<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
</svg>
```

#### Passed Example 5

This `canvas` element that is ignored by assistive technologies because it has no attribute that would give it an [accessible name][] is [purely decorative][].

```html
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
```

### Failed

#### Failed Example 1

This `img` element with an empty (`""`) `alt` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" />
```

#### Failed Example 2

This `img` element which is not [included in the accessibility tree][] because `aria-hidden` is set to `true` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" aria-hidden="true" alt="W3C logo" />
```

#### Failed Example 3

This `img` element which is not [included in the accessibility tree][] because it has an [explicit semantic role][] of `none` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" role="none" alt="W3C logo" />
```

#### Failed Example 4

This `svg` element which has a [semantic role][] of `graphics-document` and an empty (`""`) [accessible name][] is not [purely decorative][].

```html
<p>Best W3C logo:</p>
<svg viewBox="0 0 512 512">
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
```

#### Failed Example 5

This `canvas` element which has no [semantic role][] and an empty (`""`) [accessible name][] is not [purely decorative][].

```html
<canvas id="w3c" width="200" height="60"></canvas>
<script>
	const ctx = document.querySelector('#w3c').getContext('2d')
	ctx.font = '30px Arial'
	ctx.fillText('ACT Rules!', 20, 40)
</script>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element is [included in the accessibility tree][] because the `alt` attribute is not empty (`""`).

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 2

This `img` element is neither [visible][] nor [included in the accessibility tree][].

```html
<img src="/test-assets/shared/w3c-logo.png" style="display:none" alt="" />
```

#### Inapplicable Example 3

This `img` element is not [visible][] because it is positioned off screen.

```html
<style>
	img {
		position: absolute;
		top: -9999em;
	}
</style>
<img src="/test-assets/shared/fireworks.jpg" alt="" />
```

#### Inapplicable Example 4

This `svg` element is ignored because it is a child of a link that provides its [accessible name][].

```html
<a href="https://example.org" aria-label="SVG star">
	<svg height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</a>
```

#### Inapplicable Example 5

This `svg` element has a [semantic role][] of `img` and an [accessible name][] from its `aria-label` attribute.

```html
<svg viewBox="0 0 512 512" role="img" aria-label="HTML 5 logo">
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
```

#### Inapplicable Example 6

This `canvas` element is not [visible][] because it is completely transparent.

```html
<canvas width="200" height="200"></canvas>
```

#### Inapplicable Example 7

This `canvas` element has a [semantic role][] of `img` and an [accessible name][] from its `aria-label` attribute.

```html
<canvas id="w3c" width="200" height="60" role="img" aria-label="ACT Rules!"></canvas>
<script>
	const ctx = document.querySelector('#w3c').getContext('2d')
	ctx.font = '30px Arial'
	ctx.fillText('ACT Rules!', 20, 40)
</script>
```

#### Inapplicable Example 8

This `img` element is [visible][] but [included in the accessibility tree][].

**Note**: While it might be better for the PDF icon to be ignored by assistive technologies, because assistive technologies will announce "PDF" twice, the image is not [purely decorative][]. Having assistive technologies ignore it is not required by [Success Criterion 1.1.1 Non-text content][].

```html
<img src="/test-assets/shared/pdf-icon.png" alt="PDF" /> PDF document
```

#### Inapplicable Example 9

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

#### Inapplicable Example 10

This `img` element has an `src` attribute which will cause the [image request state][] to be [Broken](https://html.spec.whatwg.org/#img-error).

```html
<img src="/test-assets/does-not-exist.png" alt="" />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[visible]: #visible 'Definition of Visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[explicit semantic role]: #explicit-role 'Definition of Explicit semantic role'
[purely decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[success criterion 1.1.1 non-text content]: https://www.w3.org/TR/WCAG22/#non-text-content
[conforming alternative version]: https://www.w3.org/TR/WCAG22/#dfn-conforming-alternate-version 'WCAG definition of Conforming alternative version'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM definition of ancestor, 2020/03/06'
[named from author]: https://www.w3.org/TR/wai-aria-1.2/#namecalculation 'WAI-ARIA definition of Named from author'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[completely available]: https://html.spec.whatwg.org/#img-all 'HTML definition of Completely available, 2020/03/06'
