---
id: 59br37
name: Zoomed text node is not clipped with CSS overflow
rule_type: atomic
description: |
  This rule checks that text nodes are not unintentionally clipped by overflow, when a page is zoomed to 200% on 1280 by 1024 viewport;
accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.4.4: # Resize Text (AA)
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
  funding:
    - WAI-Tools
  assets:
    - The Raven, poem by Edgar Allan Poe
---

## Applicability

This rule applies to any [text node][] for which all of the following is true when in a [viewport size][] of 640 by 512:

- The [text node][] is [visible][]; and
- The [text node][] has an [HTML element][] as a [parent][] in the [flat tree][]; and
- The [text node][] has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-x][overflow] or [overflow-y][overflow] of `hidden` or `clip`; and
- The [text node][] does not have an [ancestor][] in the [flat tree][] with an `aria-hidden` [attribute value][] of `true`.

**Note**: A [viewport size][] of 640 by 512 is equivalent to a [viewport size][] of 1280 by 1024 zoomed 200%.

## Expectation 1

Each test target is not [horizontally clipped by overflow][horizontally clipped] of an [ancestor][] in the [flat tree][] when in a [viewport size][] of 640 by 512, except if the [clipping][horizontally clipped] [ancestor][] has a [computed][] [white-space][] of `nowrap`, and a [computed][] [text-overflow][] that is not `clip`

## Expectation 2

Each test target is not [vertically clipped by overflow][vertically clipped] of an [ancestor][] in the [flat tree][] when in a [viewport size][] of 640 by 512, except if the [clipping][vertically clipped] [ancestor][] has a [used][] [line-height][] equal to or greater than the height of its [bounding box][], or in case of a [computed][] [overflow-y][overflow] of `clip`, its [content box][].

## Assumptions

If any of the following assumptions is true, failing this rule may not result in a failure of [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG22/#resize-text):

- There is no other mechanism for resizing text available on the page, that can be used to resize text to 200% without loss of information or functionality. This includes font resizing in the browser, or a javascript mechanism of resizing in the page.

- [Text nodes][text node] can not be [horizontally][horizontally clipped] or [vertically clipped by overflow][vertically clipped] without loss of information, except for [text nodes][text node] with an [ancestor][] with `aria-hidden` set to `true`, or when specific styles have been applied to ensure text is clipped cleanly (text-overflow, line wrapping or hidden text).

- While [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG22/#resize-text) does not explicitly mention which viewport size has to be resized up to 200%, it is assumed that a [viewport size][] of 1280 by 1024 is applicable. A 1280 by 1024 [viewport size][] is explicitly mentioned under [success criterion 1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow).

## Accessibility Support

Some user agents treat the value of the `aria-hidden` attribute as case-sensitive.

## Background

When the [computed][] value of the `line-height` property is `normal`, the [used][] value depends on font specific metrics. [CSS specifications][line-height normal] recommend that the [used][] value is between 1.0 and 1.2 and major browsers are effectively using values close to 1.2.

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [G42: Using a technology that has commonly-available user agents that support zoom](https://www.w3.org/WAI/WCAG22/Techniques/general/G142)

## Test Cases

### Passed

#### Passed Example 1

This [text node][] is fully [visible][] at a [viewport size][] of 640 by 512.

```html
<div style="white-space: nowrap; overflow: hidden; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Passed Example 2

This [text node][] is [horizontally clipped][] using `text-overflow: ellipsis` at a [viewport size][] of 640 by 512. A link to a full version of the poem is also provided.

```html
<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
<a href="/test-assets/59br37/poem.html">Full text of the poem</a>
```

#### Passed Example 3

This [text node][] is restricted to a single line, by setting a `line-height` that is the same as the `height`. A link to a full version of the poem is also provided.

```html
<style>
	.wordClip {
		overflow: hidden;
		word-wrap: break-word;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
	}
</style>
<div class="wordClip">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
<a href="/test-assets/59br37/poem.html">Full text of the poem</a>
```

#### Passed Example 4

This [text node][] is not [vertically clipped][] with `overflow: hidden` because it has a parent with `overflow: auto` at a [viewport size][] of 640 by 512.

```html
<div style="overflow: hidden; height: 2em; font-size: 16px;">
	<div style="overflow: auto; height: 2em;">
		Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
		lore. While I nodded, nearly napping, suddenly there came a tapping.
	</div>
</div>
```

### Failed

#### Failed Example 1

This [text node][] is [vertically clipped][] because it has a fixed height that does not leave enough space for the content to wrap.

```html
<div style="overflow: hidden; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 2

This [text node][] is [vertically clipped][] because its height is relative to the viewport height, leaving insufficient space for the page to be zoomed to 200% at a [viewport size][] of 1280 by 1024.

```html
<div style="overflow: hidden; height: 16vh; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Failed Example 3

This [text node][] is [vertically clipped][] by style that is applied at a [viewport size][] width of 640.

```html
<style>
	@media screen and (max-width: 640px) {
		.myContainer {
			height: 1.5em;
			width: 50%;
			overflow: hidden;
			font-size: 16px;
		}
	}
</style>
<div class="myContainer">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my
	chamber door. “’Tis some visitor,” I muttered, “tapping at my chamber door. Only this and nothing more.”
</div>
```

#### Failed Example 4

This [text node][] is [vertically clipped][] at a [viewport size][] of 640 by 512.

```html
<div style="overflow-y: hidden; height: 10px; white-space: nowrap; text-overflow: ellipsis; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 5

This [text node][] is [horizontally clipped][] at a [viewport size][] of 640 by 512.

```html
<style>
	.wordClip {
		overflow-x: hidden;
		white-space: nowrap;
		text-overflow: clip;
		width: 50px;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
	}
</style>
<div class="wordClip">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

### Inapplicable

#### Inapplicable Example 1

This [text node][] is not [visible][] at a [viewport size][] of 640 by 512.

```html
<p style="display:none;">Last updated 2020/03/27 10:52pm</p>
```

#### Inapplicable Example 2

This [text node][] has an SVG element as a [parent][].

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 3

This [text node][] has no [ancestor][] with `overflow: hidden` or `clip`.

```html
<div style="overflow: auto; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Inapplicable Example 4

This [text node][] has an [ancestor][] with `aria-hidden` set to `true`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" /> <span aria-hidden="true">(W3C Logo)</span>
```

#### Inapplicable Example 5

This [text node][] with the text "Web Content Accessibility Guidelines 2.1" is fully hidden in a [viewport size][] of 640 by 512.

```html
<style>
	@media screen and (max-width: 640px) {
		.mobile-hidden {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			font-size: 16px;
		}
	}
</style>
<a href="/"> Next<span class="mobile-hidden">: Web Content Accessibility Guidelines 2.1</span> </a>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, 2020/02/13'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[content box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-content-box
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
[html element]: #namespaced-element
[horizontally clipped]: #horizontally-clipped-by-overflow
[line-height]: https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
[line-height normal]: https://drafts.csswg.org/css2/#valdef-line-height-normal "CSS 2.2 (Editor's draft) - normal line-height"
[overflow]: https://drafts.csswg.org/css-overflow/#overflow-properties
[parent]: https://dom.spec.whatwg.org/#concept-tree-parent 'DOM parent, as of 2020/02/14'
[text node]: https://dom.spec.whatwg.org/#text
[text-overflow]: https://www.w3.org/TR/css-ui-3/#text-overflow
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[vertically clipped]: #vertically-clipped-by-overflow
[viewport size]: #viewport-size
[visible]: #visible
[white-space]: https://www.w3.org/TR/CSS22/text.html#propdef-white-space
