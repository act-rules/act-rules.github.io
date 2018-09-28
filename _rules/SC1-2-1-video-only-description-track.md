---
name: Video only element description track
description: |
  This rule checks that description tracks that come with non-streaming `video` elements, without audio, are descriptive.

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

The rule applies to any [non-streaming](#non-streaming) `video` element [visible on the page](#visible-on-the-page) where the video doesn't contain audio and a `track` element with a `kind="descriptions"` attribute.

### Expectation

The visual information of each test target is described with a description `track` element.

*Note*: Multiple description `track` elements may be useful for different languages, but at least one must match the language of the video.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the poster.

## Accessibility support

Currently the description track is not supported by most assistive technology. Accessibility support for the description track attribute is relativly low to non-existent. Video players may be able to work around the lack of support for the discription track by using aria-live but few do this today.

This means that the rule can only provide a pass for these succescriteria if accessistive technology support the description track or if the video player that is used has implemented such a work around.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html
- https://www.w3.org/TR/WCAG20-TECHS/H96.html

## Test Cases

### Passed

#### Pass example 1

A video only element with a track element that contains descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

### Failed

#### Fail example 1

A video only element with a track element that contains incorrect descriptions.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt" />
</video>
```

### Inapplicable

#### Inapplicable example 1

A video only element without a track element.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable example 2

A video only element that is not visible on the page.

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```

#### Inapplicable example 3

A video element with audio.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
  <track kind="descriptions" src="rabbit-video-descriptions.vtt" />
</video>
```