---
name: video only element has transcript
description: |
  Non-streaming `video` elements without audio must have all visual information available in a transcript.

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

The rule applies to any [non-streaming](#non-streaming) `video` element [visible](#visible) where the video doesn't contain audio.

### Expectation

The visual information of each test target is available through a text transcript that is available either on the page or through a link. The text transcript needs to be [visibile](#visible) and [included-in-the-accessibility-tree](#included-in-the-accessibility-tree).

**Note**: A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [G159:Providing an alternative for time-based media for video-only content](https://www.w3.org/TR/WCAG20-TECHS/G159.html) 


## Test Cases

## Passed

#### Pass example 1

A silent video element with a text transcript on the same page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

#### Pass example 2

A silent video element with a link to a text transcript on a different page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</p>
```

## Failed

#### Fail example 1

A silent video element with an incorrect text transcript on the same page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

#### Fail example 2

A silent video element with a link to an incorrect text transcript on a different page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</p>
```

#### Failed example 3

A silent video element with an invisible text transcript on the same page.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p style="text-indent: -9999px;">The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

#### Failed example 4

A silent video element with a text transcript on the same page that is not included in the accessibility tree.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p aria-hidden="true">The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

## Inapplicable

#### Inapplicable example 1

A silent video element that is not visible on the page.

```html
<video controls style="display: none;" data-rule-target>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</p>
```

#### Inapplicable example 2

A video element with audio.

```html
<video controls data-rule-target>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</p>
```
