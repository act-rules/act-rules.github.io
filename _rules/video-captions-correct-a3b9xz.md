---
id: a3b9xz
name: Video element auditory content has correct captions
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks that provided captions are correct for audio information in non-streaming `video` elements.
accessibility_requirements:
  wcag20:1.2.2: # Captions (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:F8: # Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:F75: # Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
acknowledgments:
  authors:
    - Kathy Eng
  funding:
    - WAI-Tools
  assets:
    - Web Accessibility Perspective videos by W3C WAI.
---

## Applicability

This rule applies to [captions](https://www.w3.org/TR/WCAG22/#dfn-captions) provided for a [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains [audio](#audio-output).

## Expectation

For each test target, speech and non-speech audio information that is not conveyed visually in the video is available in the [captions](https://www.w3.org/TR/WCAG22/#dfn-captions).

**Note:** Captions can be either embedded in the video file itself or can be made available through a separate track.

## Background

### Assumptions

This rule assumes that the [non-streaming](#non-streaming-media-element) video is not a media alternative for text.

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

### Accessibility Support

There are no accessibility support issues known.

### Related Rules

- [Video element auditory content has captions](https://www.w3.org/WAI/standards-guidelines/act/rules/f51b46/proposed/)
- [Video element auditory content has accessible alternative](https://www.w3.org/WAI/standards-guidelines/act/rules/eac66b/proposed/)

### Bibliography

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](https://www.w3.org/WAI/WCAG22/Techniques/failures/F8)
- [F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page](https://www.w3.org/WAI/WCAG22/Techniques/failures/F75)

## Test Cases

### Passed

#### Passed Example 1

The open captions contain all of the audio content.

```html
<video src="/test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

#### Passed Example 2

The closed captions contain all of the audio content.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
</video>
```

### Failed

#### Failed Example 1

A video element with an associated track element that contains incorrect captions. Specifically, the captions flip the role of the mouse and computer by saying, "Not being able to use your mouse because your computer doesn't work is frustrating."

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions" />
</video>
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

#### Inapplicable Example 3

A video element without any form of captions.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Inapplicable Example 4

A video element with text on the same page that describes the audio in the video.

```html
<p>
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Inapplicable Example 5

A video element with an explicitly associated text on the same page that describes the audio in the video.

```html
<p id="text">
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls ariadescribedby="text"></video>
```

[visible]: #visible 'Definition of visible'
