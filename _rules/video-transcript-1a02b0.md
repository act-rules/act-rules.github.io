---
id: 1a02b0
name: Audio and visuals of video element have transcript
rule_type: atomic
description: |
  This rule checks that non-streaming `video` elements have all audio and visual information available in a transcript.
accessibility_requirements:
  wcag20:1.2.8: # Media Alternative (Prerecorded) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G69: # Providing an alternative for time based media
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
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'tag-pair'
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][].

## Expectation

The visual information of each test target is available through a text transcript that is [visible][], [included in the accessibility tree][], and is either on the page or linked.

**Note:** A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media).

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded)
- [Understanding Success Criterion 1.2.8: Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)
- [G203: Using a static text alternative to describe a talking head video](https://www.w3.org/WAI/WCAG22/Techniques/general/G203)

## Test Cases

### Passed

#### Passed Example 1

A video element with a text transcript on the same page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

A video element with a link to a text transcript on a different page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

A video element with an incorrect text transcript on the same page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 2

A video element with a link to an incorrect text transcript on a different page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

### Inapplicable

#### Inapplicable Example 1

A video element that is not [visible][].

```html
<html lang="en">`
<video controls style="display: none;">
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
