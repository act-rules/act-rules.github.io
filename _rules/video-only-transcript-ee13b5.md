---
id: ee13b5
name: '`video` element visual-only content has transcript'
rule_type: atomic
description: |
  Non-streaming `video` elements without audio must have all visual information available in a transcript.
accessibility_requirements:
  wcag-technique:G159: # Providing an alternative for time-based media for video-only content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'tag-pair'
---

## Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation

The visual information of each test target is available in a text transcript that is available either on the page or through a link. The text transcript needs to be [visible][] and [included in the accessibility tree][].

## Assumptions

- A mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- The language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).
- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G159)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, has a text transcript available on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

This `video` element, which has no audio, has a transcript which does not convey information included in the video-only content. The transcript is available through a link on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, has an incorrect text transcript available on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 2

This `video` element, which has no audio, has a incorrect text transcript available through a link on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 3

This `video` element, which has no audio, has a text transcript available on the same page, but the transcript is not [visible][].

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p style="text-indent: -9999px;">The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 4

This `video` element, which has no audio, has a text transcript available on the same page, but the transcript is not [included in the accessibility tree][].

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p aria-hidden="true">The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

#### Inapplicable Example 2

This `video` element is not [visible][].

```html
<html lang="en">
<video controls style="display: none;">
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
