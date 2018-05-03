---
name: video element transcript
group: SC1-2-video-element
description: |
  Non-streaming video elements must have all audio and visual information available in a transcript.

success_criterion:
- 1.2.1 # Audio-only and Video-only (Prerecorded)
- 1.2.3 # Audio Description or Media Alternative (Prerecorded)
- 1.2.8 # Media Alternative (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- Audio output
- Visual output

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] video element [visible in the page][]

### Expectation 1

A [text transcript][] is available for the test target, either on the page or available through a link (or some other mechanism).

### Expectation 2

The [text transcript][] (from expectation 1) contains all the visual and auditory information of the test target.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html
- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html
- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G203

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/visual-output.html
[non-streaming]: ../pages/algorithms/non-streaming-media-element.html
[visible in the page]: ../pages/algorithms/visible-in-the-page.html
[text transcript]: https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef

## Test Cases

## Passed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</p>
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</p>
```

## Inapplicable

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;"></video>
```