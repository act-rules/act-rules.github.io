---
id: 59br37
name: Zoomed text node is not clipped with CSS overflow
rule_type: atomic
description: |
  This rule checks that text nodes are not unintentionally clipped by overflow, when a page is zoomed to 200% on a 720p display;
accessibility_requirements: # Remove whatever is not applicable
  wcag20:1.4.4: # Resize Text (AA)
    forConformance: true
    failed: not satisfied
    passed: urther testing needed
    inapplicable: urther testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Wilco Fiers
---

## Applicability

The rule applies to any [text node][] that:

- is [visible][] in a [display size][] of 1280 by 1024; and
- has an HTML element as a [parent][]; and
- has an [ancestor][] with the a [computed][] [overflow][] of `none` or `clip`, when in a [display size][] of 640 by 512.
- does not have an [ancestor][] with an `aria-hidden` attribute set to `true`

## Expectation

Each test target is not [clipped by overflow][clipped] of an [ancestor][] when in a [display size][] of 640 by 512, except if the [clipping][clipped] [ancestor][] has one of the following:

- **text-overflow**: A [computed][] [line-wrap][] of `nowrap`, and a [computed][] [text-overflow][] that is not `clip` or `clip clip`; or

- **line wrapping**: A [computed][] [line-height][] equal to or greater than its
  height of its [bounding box][], or in case of a [computed][] [overflow][] of `clip`, its [content box][]; or

- **hidden text**: A [clientWidth][] or [clientHeight][] of 1 or less.

## Assumptions

TODO: properly reword these:

- There's no other mechanism to resize
- Resizing is possible in the web page
- Text nodes containing decorative content are marked up with aria-hidden=true
- 200% at 720p is sufficient for this SC

## Accessibility Support

_No accessibility support issues known._

## Background

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)
- [G42: Using a technology that has commonly-available user agents that support zoom](https://www.w3.org/WAI/WCAG21/Techniques/general/G142)

## Test Cases

TODO: overflow: clip examples

### Passed

#### Passed Example 1

This [test target][meets / does not meet condition] [because optional reasons].

```html
<div style="white-space: nowrap; overflow: hidden;">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Passed Example 2

This [test target][meets / does not meet condition] [because optional reasons].

```html
<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Passed Example 3

```html
<style>
	.wordClip {
		overflow: hidden;
		word-wrap: break-word;
		height: 16px;
		line-height: 16px;
	}
</style>
<div class="wordClip">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Passed Example 4

```html
<style>
	@media screen and (max-width: 1024px) {
		.mobile-hidden {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
	}
</style>
<a href="/"> Next<span class="mobile-hidden">: Web Content Accessibility Guidelines 2.1</span> </a>
```

### Failed

#### Failed Example 1

This text content is clipped because it has a fixed height that does not leave enough space for the content to wrap

```html
<div style="overflow: hidden; height: 1em;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 2

This text content is clipped because its height has is relative to the viewport height, leaving insufficient space for the page to be zoomed to 200% at 720p.

```html
<div style="overflow: hidden; height: 16vh">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Failed Example 3

```html
<style>
	@media screen and (max-width: 1024px) {
		.myContainer {
			height: 1em;
			width: 50%;
			overflow: hidden;
		}
	}
</style>
<div class="myContainer">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my
	chamber door. “’Tis some visitor,” I muttered, “tapping at my chamber door. Only this and nothing more.”
</div>
```

### Inapplicable

#### Inapplicable Example 1

Description...

```html
<!-- code -->
```

#### Inapplicable Example 2

...

[clipped]: #clipped-by-overflow
[visible]: #visible
[display size]: #display-size
[parent]: #parent
[ancestor]: #ancestor
[text node]: https://dom.spec.whatwg.org/#text
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[clientwidth]: https://drafts.csswg.org/cssom-view/#dom-element-clientwidth 'CSS working draft, Element.clientWidth, 2020/02/14'
[clientheight]: https://drafts.csswg.org/cssom-view/#dom-element-clientheight 'CSS working draft, Element.clientHeight, 2020/02/14'
[overflow]: https://www.w3.org/TR/CSS22/visufx.html#overflow
[line-height]: https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
[text-overflow]: https://www.w3.org/TR/css-ui-3/#text-overflow
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[content box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-content-box
