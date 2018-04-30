---
name: audio described video element
group: SC1-2-video-element
description: |
  Non-streaming video elements must not contain any visual information that is not expressed in the audio

success_criterion:
- 1.2.3 # Audio Description or Media Alternative (Prerecorded)
- 1.2.5 # Audio Description (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- [Audio output][]
- [Visual output][]

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] video element [visible in the page][] where the video contains [audio][].

### Expectation

The visual information of each test target is available through its audio, or through an audio description track.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html
- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G8

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/visual-output.html
[non-streaming]: ../pages/algorithms/non-streaming-media-element.html
[visible in the page]: ../pages/algorithms/visible-in-the-page.html
[text transcript]: https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef
[audio]: https://www.w3.org/TR/WCAG20/#audiodef

## Test Cases

## Passed

```html
<video src="../test-assets/rabbit-video-with-voiceover.mp4" controls></video>
```

```html
TODO: Video with separate audio description
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
```

```html
<video src="../test-assets/rabbit-video-with-incorrect-voiceover.mp4" controls></video>
```

```html
TODO: Video with separate incorrect audio description
```

## Inapplicable

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video-silent.mp4" controls></video>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;"></video>
```