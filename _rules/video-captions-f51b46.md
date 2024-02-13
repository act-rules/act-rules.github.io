---
id: f51b46
name: Video element auditory content has captions
rule_type: atomic
description: |
  This rule checks that captions are available for audio information in non-streaming `video` elements.
accessibility_requirements:
  wcag-technique:G87: # Providing closed captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G93: # Providing open (always visible) captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H95: # Using the track element to provide captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not consider that the video may be a media alternative for text. Some of the failed examples satisfy this success criterion.
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
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

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains [audio](#audio-output) that is not only silence.

## Expectation

For each test target, audio information that is not conveyed visually in the video, is available through [captions](https://www.w3.org/TR/WCAG22/#dfn-captions).

**Note:** Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG22/Techniques/html/H95)

## Test Cases

### Passed

#### Passed Example 1

A video element that has open captions for all of the audio content.

```html
<video src="/test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

#### Passed Example 2

A video element with an associated track element that contains captions for all of the audio content.

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

A video element with an associated track element that contains incorrect captions. Specifically, the captions flip the role of the mouse and computer by saying, "Not being able to use your mouse because your computer doesn't work is frustrating."

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions" />
</video>
```

#### Failed Example 3

A video element with text on the same page that describes the audio in the video.

```html
<p>
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 4

A video element with an explicitly associated text on the same page that describes the audio in the video.

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
