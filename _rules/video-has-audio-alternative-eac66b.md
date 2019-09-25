---
id: eac66b
name: Video has audio alternative
rule_type: composite
description: |
  This rule checks that `video` elements have an alternative for information conveyed through audio.
accessibility_requirements:
  wcag20:1.2.2: # Captions (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - ab4d13
  - f51b46
authors:
  - Wilco Fiers
  - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Video as a media alternative for text](https://act-rules.github.io/rules/ab4d13)
- [Video has captions](https://act-rules.github.io/rules/f51b46)

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG21/Techniques/html/H95)

## Test Cases

### Passed

#### Passed Example 1

A video element with an associated track element that contains captions for all the audio.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
</video>
```

#### Passed Example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the keyboard
	to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility. Keyboard
	compatibility is described in WCAG. See the video below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Failed

#### Failed Example 1

A video element without any form of captions.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 2

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<p>
	Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
	circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
	below to watch the same information again in video form.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

### Inapplicable

#### Inapplicable Example 1

A video element without that is not [visible][].

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

#### Inapplicable Example 2

A video element without audio.

```html
<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

[visible]: #visible 'Definition of visible'
