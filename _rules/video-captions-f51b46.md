---
id: f51b46
name: `video` element auditory content has captions
rule_type: atomic
description: |
  This rule checks that captions are available for audio information in non-streaming `video` elements.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
authors:
  - Wilco Fiers
  - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains [audio](#audio-output).

## Expectation

For each test target, audio information that is not conveyed visually in the video, is available through [captions](https://www.w3.org/TR/WCAG21/#dfn-captions).

**Note**: Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG21/Techniques/html/H95)

## Test Cases

### Passed

#### Passed Example 1

A video element that has captions for all the audio baked into it.

```html
<video src="/test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

#### Passed Example 2

A video element with an associated track element that contain captions for all the audio.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
</video>
```

### Failed

#### Failed Example 1

A video element without any form of captions.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 2

A video element with an associated track element that contain incorrect captions.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions" />
</video>
```

#### Failed Example 3

A video element with a text on the same page that described the audio in the video.

```html
<p>
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 4

A video element with an explicitly associated text on the same page that described the audio in the video.

```html
<p id="text">
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls ariadescribedby="text"></video>
```

### Inapplicable

#### Inapplicable Example 1

A video element without audio.

```html
<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

#### Inapplicable Example 2

A video element that is not [visible][].

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

[visible]: #visible 'Definition of visible'
