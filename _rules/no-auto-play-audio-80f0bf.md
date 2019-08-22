---
id: 80f0bf
name: Video or audio has no auto-play audio.
rule_type: composite
description: |
    This rule checks that auto-play audio does not last for more than 3 seconds, or the audio has a control mechanism to stop or mute it.
accessibility_requirements:
  wcag20:1.4.2: # Audio Control (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 4c31df
  - aaa1bf
authors:
  - Anne Thyme Nørregaard
  - Bryn ANderson
---

## Applicability

This rule applies to any HTML [`audio`](https://html.spec.whatwg.org/multipage/media.html#the-audio-element), [`video`](https://html.spec.whatwg.org/multipage/media.html#the-video-element) or [`source`](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element) elements, with a [`src`](https://html.spec.whatwg.org/multipage/media.html#attr-media-src) attribute referencing content with a duration of more than 3 seconds, that has an [`autoplay`](https://html.spec.whatwg.org/multipage/media.html#attr-media-autoplay) attribute equal to `true`, and that has both [`paused`](https://html.spec.whatwg.org/multipage/media.html#dom-media-paused) and [`muted`](https://html.spec.whatwg.org/multipage/media.html#attr-media-muted) attributes equal to `false`.

## Expectation

For each test target, the outcome of at least one of the following rules is passed:
- [Auto-play audio does not exceed 3 seconds](https://act-rules.github.io/_rules/auto-play-audio-has-control-mechanism-4c31df.md)
- [Auto-play audio has control mechanism](https://act-rules.github.io/_rules/auto-play-audio-exceeds-3-seconds-aaa1bf.md)
 
## Assumptions

*There are currently no assumptions*

## Accessibility Support

The native `<video>` and `<audio>` controls in several browser and assistive technology combinations are not keyboard accessible and the `<video>` or `<audio>` element itself may not be anounced. Authors are recomended to use custom controls for keyboard navigation and cross browser accessibility support in general.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [Accessible Multimedia](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

## Test Cases

### Passed

#### Passed Example 1

The `<audio>` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true" controls></audio>
```

#### Passed Example 2

The `<video>` element does not play for longer than 3 seconds.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

#### Passed Example 3

The `<video>` element autoplays, and has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

``` html
<head>
<style>
button {color: #000;}
button:hover {cursor: pointer;	cursor: pointer; background-color: grey;  color: white;}
</style>
</head>
<body>
	<div id="video-container">
		<!-- Video -->
		<video id="video" autoplay="true">
		 <source src="https://act-rules.github.io/test-assets/rabbit-video/video.mp4" type="video/mp4">
	   	 <source src="https://act-rules.github.io/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
</body>
```

### Failed

#### Failed Example 1

The `<audio>` element autoplays, lasts for more than 3 seconds, and does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true"></audio>
```

#### Failed Example 2

The `<video>` element audio autoplays for longer than 3 seconds, and does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

The `<video>` element audio autoplays for longer than 3 seconds, but is `muted`.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

The `<video>` element has no audio output.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

The `<audio>` element does not `autoplay`.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```
