---
name: Video element description track
group: SC1-2-video-element
description: |
  This rule checks that non-streaming video elements with a description track have that track be descriptive.

success_criterion:
- 1.2.3 # Audio Description or Media Alternative (Prerecorded)
- 1.2.5 # Audio Description (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- Audio output
- Visual output

authors:
- Wilco Fiers
- Brian Bors

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] video element [visible in the page][] where the video contains [audio][] and a `track` element with a `kind="description"` attribute.

### Expectation

The visual information of each test target not available through its audio is describes with a description track element.

*Note*: Multiple description track elements may be useful for different languages, but at least one must match the language of the video.

## Assumptions

*There are currently no assumptions*

## Accessibility support

Currently the description track is not supported by most assistive technology. Accessibility support for the description track attribute is relativly low to non-existent. Video players may be able to work around the lack of support for the discription track by using aria-live but few do this today.

This means that the rule can only provide a pass for these succescriteria if accessistive technology support the description track or if the video player that is used has implemented such a work around.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html
- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78
- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/H96

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/visual-output.html
[non-streaming]: ../pages/algorithms/non-streaming-media-element.html
[visible in the page]: ../pages/algorithms/visible-in-the-page.html
[text transcript]: https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef
[audio]: https://www.w3.org/TR/WCAG20/#audiodef

## Test Cases

## Passed

```html
<video src="../test-assets/rabbit-video.mp4" controls>
  <track kind="descriptions" src="rabbit-video-descriptions.vtt">
</video>
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls>
  <track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt">
</video>
```

## Inapplicable

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
```

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;">
  <track kind="descriptions" src="rabbit-video-descriptions.vtt">
</video>
```

```html
<video src="../test-assets/rabbit-video-silent.mp4" controls></video>
```
