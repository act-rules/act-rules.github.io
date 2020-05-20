---
id: 4c31df
name: '`audio` or `video` that plays automatically has a control mechanism'
rule_type: atomic
description: |
  audio or video that plays automatically must have a control mechanism.
accessibility_requirements:
  wcag-technique:G170: # Providing a control near the beginning of the Web page that turns off sounds that play automatically
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
acknowledgments:
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

- an `autoplay` attribute whose value is true, and
- both `paused` and `muted` attributes whose values are both false, and
- either a `src` attribute or a child `source` element that references content with a duration of more than 3 seconds that contains audio.

**Note:** The default value of both `paused` and `muted` attributes is `false`.

## Expectation 1

For each test target a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) is provided to pause or stop the audio, or turn the audio volume off independently from the overall system volume control.

## Expectation 2

The [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off is [visible](#visible), has an [accessible name](#accessible-name) that is not only [whitespace](#whitespace) , and is [included in the accessibility tree](#included-in-the-accessibility-tree).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

The native `video` and `audio` controls in several browser and assistive technology combinations are not keyboard accessible and the `video` or `audio` element itself may not be announced. Authors are recommended to use custom controls for keyboard navigation and cross browser accessibility support in general.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays](https://www.w3.org/WAI/WCAG21/Techniques/failures/F93)
- [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/WAI/WCAG21/Techniques/general/G170)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Passed Example 2

This `video` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off.

```html
<video autoplay controls>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Passed Example 3

This `video` element has a custom [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause or stop or turn the audio volume off.

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
		<video id="video" autoplay>
			<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

### Failed

#### Failed Example 1

This `audio` element does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
```

#### Failed Example 2

This `video` element autoplays and does not have a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Failed Example 3

This `video` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off but the mechanism is not visible.

```html
<head>
	<style>
		button {
			color: #000;
			display: none;
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
		<video id="video" autoplay>
			<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

#### Failed Example 4

This `video` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off but its `button` elements do not have accessible names.

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
		<video id="video" autoplay>
			<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play"></button>
			<button type="button" id="mute"></button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

#### Failed Example 5

This `video` element has a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to pause, stop, or turn the audio volume off but the mechanism is not included in the accessibility tree.

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
		<video id="video" autoplay>
			<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls" aria-hidden="true">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The audio of this `video` element autoplays for longer than 3 seconds but is `muted`.

```html
<video autoplay muted>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

The `src` file of this `video` element has no audio output.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

This `audio` element does not autoplay.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```
