---
name: Vídeo has audio alternative
description: |
  This rule checks that video elements have an alternative for information conveyed through audio

success_criterion:
- 1.2.2

atomic_rules:
- SC1-2-video-media-alternative
- SC1-2-2-video-caption

authors:
- Wilco fiers
- Brian Bors

---

## Aggregation Definition

### Applicability

The rule applies to any [non-streaming][#non-streaming-video-element] `video` element that is [visible on the page](#visible-on-the-page), where the video contains audio.

### Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [Video as a media alternative for text](#SC1-2-video-media-alternative)
- [Video captions](#SC1-2-2-video-caption)

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html
- https://www.w3.org/TR/WCAG20-TECHS/G93.html
- https://www.w3.org/TR/WCAG20-TECHS/G87.html
- https://www.w3.org/TR/WCAG20-TECHS/H95.html

## Test Cases

### Passed example 1

A video element with an associated track element that contains captions for all the audio.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls>
  <track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions">
</video>
```

### Passed example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

### Failure example 1

A video element without any form of captions.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Failure example 2

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

### Inapplicable example 1

A video element without that is not visible on the page.

```html
<video src="../test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

### Inapplicable example 2

A video element without audio.

```html
<video src="../test-assets/perspective-video/perspective-video-silent.mp4" controls>
</video>
```
