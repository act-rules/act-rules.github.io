---
id: eac66b
name: Video element auditory content has accessible alternative
rule_type: composite
description: |
  This rule checks that `video` elements have an alternative for information conveyed through audio.
accessibility_requirements:
  wcag20:1.2.2: # Captions (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G87: # Providing closed captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G93: # Providing open (always visible) captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:H95: # Using the track element to provide captions
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - ab4d13
  - f51b46
acknowledgments:
  authors:
    - Brian Bors
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - Web Accessibility Perspective videos by W3C WAI.
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/ab4d13/)
- [`Video` Element Auditory Content Has Captions](https://www.w3.org/WAI/standards-guidelines/act/rules/f51b46/)

## Assumptions

- This rule assumes that the video element is used to play synchronized media (video with audio), and that there is a mechanism to start the media.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG22/Techniques/html/H95)

## Test Cases

### Passed

#### Passed Example 1

A video element with an associated track element that contains captions for all the audio.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
		<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
	</video>
</html>
```

#### Passed Example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<html lang="en">
	<p>
		Web Accessibility Perspectives: Keyboard Accessibility. Not being able to use your computer because your mouse
		doesn't work, is frustrating. Many people use only the keyboard to navigate websites. Either through preference or
		circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
		below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

A video element without any form of captions.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 2

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
		circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
		below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

A video element that is not [visible][].

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
</html>
```

#### Inapplicable Example 2

A video element without audio.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
</html>
```

[visible]: #visible 'Definition of visible'
