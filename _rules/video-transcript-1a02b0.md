---
id: 1a02b0
name: Video element transcript
rule_type: atomic
description: |
  Non-streaming `video` elements must have all audio and visual information available in a transcript.
accessibility_requirements:
  wcag20:1.2.8: # Media Alternative (Prerecorded) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
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

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible](#visible) where the video contains audio.

## Expectation

A text transcript containing all the visual and auditory information of the test target is available, either on the page or available through a link.

**Note**: A "text transcript" in the context of this rule is defined in WCAG 2 as a [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)
- [Understanding 1.2.8: Media Alternative (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173)
- [G203: Using a static text alternative to describe a talking head video](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G203)

## Test Cases

### Passed

#### Passed Example 1

A video element with a text transcript on the same page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm">
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
```

#### Passed Example 2

A video element with a link to a text transcript on a different page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm">
</video>
<a href="../test-assets/rabbit-video/transcript.html">Transcript</a>
```

### Failed

#### Failed Example 1

A video element with an incorrect text transcript on the same page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm">
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
```

#### Failed Example 2

A video element with a link to an incorrect text transcript on a different page.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm">
</video>
<a href="../test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
```

### Inapplicable

#### Inapplicable Example 1

A video element that is not visible on the page.

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm">
</video>
<a href="../test-assets/rabbit-video/transcript.html">Transcript</a>
```

#### Inapplicable Example 2

A video element without audio.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4">
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm">
</video>
<a href="../test-assets/rabbit-video/transcript.html">Transcript</a>
```
