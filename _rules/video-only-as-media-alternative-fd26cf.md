---
id: fd26cf
name: '`video` element visual-only content is media alternative for text'
rule_type: atomic
description: |
  This rule checks non-streaming silent `video` is a media alternative for text on the page.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
acknowledgements:
  authors:
    - Wilco Fiers
    - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video doesn't contain audio.

## Expectation 1

All the information contained in each target element is available as text (directly or via text alternatives) that is [visible][] and [included in the accessibility tree][].

## Expectation 2

Each target element is labeled as a video alternative for text on the page.

## Expectation 3

The label (from expectation 2) is [visible][] and [included in the accessibility tree][].

**Note:** The term label does not refer to the `label` element.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

A video element without audio. The text on the page labels the video as an alternative.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
```

### Failed

#### Failed Example 1

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
	circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
	below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
```

#### Failed Example 2

A video element that describes some of the text on the same page. The text is not [visible][].

```html
<p style="display: none;">
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
```

#### Failed Example 3

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG.
</p>
<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
```

#### Failed Example 4

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the label is not [visible][].

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG.
</p>
<p style="display: none;">
	See the video below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
```

### Inapplicable

#### Inapplicable Example 1

A video element with audio.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Inapplicable Example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the video is not [visible][].

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video
	src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4"
	controls
	style="display: none;"
></video>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
