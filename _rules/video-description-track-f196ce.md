---
id: f196ce
name: Video element description track
rule_type: atomic
description: |
  This rule checks that description tracks that come with non-streaming `video` elements are descriptive.
accessibility_requirements:
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

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains audio and a `track` element with a `kind="descriptions"` attribute.

## Expectation

The visual information of each test target not available through its audio is described with a description `track` element.

_Note_: Multiple description `track` elements may be useful for different languages, but at least one must match the language of the video.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility Support

Currently the description track is not supported by most assistive technology. Accessibility support for the description track attribute is relatively low to non-existent. Video players may be able to work around the lack of support for the description track by using aria-live but few do this today.

This means that the rule can only provide a pass for these success criteria if assistive technology support the description track or if the video player that is used has implemented such a work around.

## Background

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded)
- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78)
- [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)

## Test Cases

### Passed

#### Passed Example 1

A video element with a track element that contains descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/descriptions.vtt" />
</video>
```

### Failed

#### Failed Example 1

A video element with a track element that contains incorrect descriptions.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/incorrect-descriptions.vtt" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

A video element without a track element.

```html
<video controls>
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

A video element that is not [visible][].

```html
<video controls style="display: none;">
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/descriptions.vtt" />
</video>
```

#### Inapplicable Example 3

A video element without audio.

```html
<video controls>
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
	<track kind="descriptions" src="../test-assets/rabbit-video/descriptions.vtt" />
</video>
```

[visible]: #visible 'Definition of visible'
