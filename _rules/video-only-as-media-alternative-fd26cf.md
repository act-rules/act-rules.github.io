---
id: fd26cf
name: Video element visual-only content is media alternative for text
rule_type: atomic
description: |
  This rule checks non-streaming silent `video` is a media alternative for text on the page.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - Web Accessibility Perspective videos by W3C WAI.
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation 1

All the information contained in each target element is available as text (directly or via text alternatives) that is [visible][] and [included in the accessibility tree][].

## Expectation 2

Each target element is labeled as a video alternative for text on the page by content that is [visible][] and [included in the accessibility tree][].

## Assumptions

A mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are no accessibility support issues known.

## Background

The term [label](https://www.w3.org/TR/WCAG22/#dfn-labels) used in expectations 2 and 3 does not refer to the `label` element.

### Bibliography

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, is a media alternative for the text in the page and it is labeled as such.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, has more information than the text on the page.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
		circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
		below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

#### Failed Example 2

This `video` element, which has no audio, is a media alternative for the text in the page and labeled as such, but the text is not [visible][].

```html
<html lang="en">
	<p style="display: none;">
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

#### Failed Example 3

This `video` element, which has no audio, is a media alternative for the text in the page but not labeled as such.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

#### Failed Example 4

This `video` element, which has no audio, is a media alternative for the text in the page and labeled as such, but the label is not [visible][].

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<p style="display: none;">
		See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Inapplicable Example 2

This `video` element is not [visible][].

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video
		src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4"
		controls
		style="display: none;"
	></video>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
