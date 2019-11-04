---
id: 80f0bf
name: 'Video or audio has no autoplay audio'
rule_type: composite
description: |
  'This rule checks that autoplay audio does not last for more than 3 seconds, or the audio has a control mechanism to stop or mute it.'
accessibility_requirements:
  wcag20:1.4.2: # Audio Control (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 4c31df
  - aaa1bf
acknowledgements:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

This rule applies to any `audio` or `video` element that has:

- an autoplay attribute that is equal to true, and
- both `paused` and `muted` attributes equal to false, and
- either a `src` attribute or a child `source` element that references content with a duration of more than 3 seconds that contains audio.

**Note**:

The default value of both `paused` and `muted` attributes is `false`.

## Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [autoplay audio does not exceed 3 seconds](https://act-rules.github.io/rules/4c31df)
- [autoplay audio has control mechanism](https://act-rules.github.io/rules/aaa1bf)

## Assumptions

_There are currently no assumptions_

## Accessibility Support

The native `<video>` and `<audio>` controls in several browser and assistive technology combinations are not keyboard accessible and the `<video>` or `<audio>` element itself may not be announced. Authors are recommended to use custom controls for keyboard navigation and cross browser accessibility support in general.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [Accessible Multimedia](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

## Test Cases

### Passed

#### Passed Example 1

The `<audio>` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true" controls></audio>
```

#### Passed Example 2

The `<video>` element does not play for longer than 3 seconds.

```html
<video autoplay="true">
	<source src="../test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

#### Passed Example 3

The `<video>` element autoplays, and has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

```html
<head>
	<style>
		button {
			color: #000;
		}
		button:hover {
			cursor: pointer;
			cursor: pointer;
			background-color: grey;
			color: white;
		}
	</style>
</head>
<body>
	<div id="video-container">
		<!-- Video -->
		<video id="video" autoplay="true">
			<source src="https://act-rules.github.io/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="https://act-rules.github.io/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="../test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

### Failed

#### Failed Example 1

The `<audio>` element autoplays, lasts for more than 3 seconds, and does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true"></audio>
```

#### Failed Example 2

The `<video>` element audio autoplays for longer than 3 seconds, and does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

```html
<video autoplay="true">
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

The `<video>` element audio autoplays for longer than 3 seconds, but is `muted`.

```html
<video autoplay="true" muted="true">
	<source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

The `<video>` element has no audio output.

```html
<video autoplay="true">
	<source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

The `<audio>` element does not autoplay.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```
