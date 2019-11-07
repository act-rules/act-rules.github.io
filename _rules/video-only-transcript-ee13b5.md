---
id: ee13b5
name: '`video` element visual-only content has transcript'
rule_type: atomic
description: |
  Non-streaming `video` elements without audio must have all visual information available in a transcript.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
  - Language
acknowledgements:
  authors:
    - Wilco Fiers
    - Brian Bors
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'tag-pair'
---

## Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `video` element [visible][] where the video doesn't contain audio.

## Expectation

The visual information of each test target is available through a text transcript that is available either on the page or through a link. The text transcript needs to be [visible][] and [included in the accessibility tree][].

**Note**: A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that if `lang` attributes are used, their value accurately describes the part of the content they are applied to.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G159)

## Test Cases

### Passed

#### Passed Example 1

A silent video element with a text transcript on the same page.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

A silent video element with a link to a text transcript on a different page.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

A silent video element with an incorrect text transcript on the same page.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 2

A silent video element with a link to an incorrect text transcript on a different page.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 3

A silent video element with an [non-visible][visible] text transcript on the same page.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p style="text-indent: -9999px;">The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 4

A silent video element with a text transcript on the same page that is not [included in the accessibility tree][].

```html
<html lang="en">
<video controls data-rule-target>
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

A silent video element that is not [visible][] on the page.

```html
<html lang="en">
<video controls style="display: none;" data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</a>
</html>
```

#### Inapplicable Example 2

A video element with audio.

```html
<html lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</a>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
