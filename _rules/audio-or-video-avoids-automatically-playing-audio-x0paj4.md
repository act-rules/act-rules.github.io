---
id: x0paj4
name: '`audio` or `video` avoids automatically playing audio'
rule_type: atomic
description: |
  This rule checks that audio or video that plays automatically with audio that lasts for more than 3 seconds has an audio control mechanism to stop or mute it.
accessibility_requirements:
  wcag20:1.4.2: # Audio Control (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-text:cc5: # Non-interference due to mapping to 1.4.2
    title: WCAG Non-Interference
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G60: # Playing a sound that turns off automatically within three seconds
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G170: # Providing a control near the beginning of the Web page that turns off sounds that play automatically
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G171: # Playing sounds only on user request
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
    - Carlos Duarte
  previous_authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'title-require'
---

## Applicability

This rule applies to any `audio` or `video` element for which all the following are true:

- **autoplay**: the element has an `autoplay` [attribute value][] of `true`; and
- **not muted**: the element has a `muted` [attribute value][] of `false`; and
- **not paused**: the element has a `paused` [attribute value][] of `false`; and
- **audio duration**: the element has a [media resource][] for which the audio output lasts more than 3 seconds.

## Expectation

For each test target, there is at least one [instrument][] in the same [web page][] to pause or stop the audio, or turn the audio volume off independently from the overall system volume control.

## Assumptions

This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to control the sound must be located in the same [web page][]. Mechanisms located on other pages can still create accessibility issues for users relying on sound to navigate (e.g. screen readers users) since the autoplaying sound will interfere with their ability to find and activate the mechanism. If a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) external to the [web page][] is provided, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].

This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to control the sound must be visible and accessible in order to be effective and usable by all kinds of users. If the mechanism is hidden to some users, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].

No [user style sheets](https://drafts.csswg.org/css-cascade/#cascade-origin-user) are used and no changes to the [user agent default style sheet](https://drafts.csswg.org/css-cascade/#cascade-origin-ua) are in place, otherwise the test cases might have different outcomes of the ones presented here. 

## Accessibility Support

The native `video` and `audio` controls in several browser and assistive technology combinations are not keyboard accessible and the `video` or `audio` element itself may not be announced. Authors are recommended to use custom controls for keyboard navigation and cross browser accessibility support in general.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 1.4.2 Audio Control][sc142]. These extra requirements are left out of this rule, and should be tested separately.

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [Accessible Multimedia](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)
- [Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays](https://www.w3.org/WAI/WCAG21/Techniques/failures/F93)
- [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/WAI/WCAG21/Techniques/general/G170)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element has an [instrument][] to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Passed Example 2

This `video` element has (in its default controls) an [instrument][] to pause it, an [instrument][] to stop it, and an [instrument][] to turn its audio volume off.

```html
<video autoplay controls>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Passed Example 3

This `video` element autoplays and has an [instrument][] to pause, stop, or turn the audio volume off.

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

This `audio` element autoplays, lasts for more than 3 seconds, and does not have an [instrument][] to pause, stop, or mute the audio.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
```

#### Failed Example 2

This `video` element's audio autoplays for longer than 3 seconds, and does not have an [instrument][] to pause, stop, or mute the audio

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```
#### Failed Example 3

This `video` element has an [instrument][] to pause, stop, or turn the audio volume off but the [instrument][] is not visible.

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
			<button type="button" id="play-pause" class="play">Pause</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

#### Failed Example 4

This `video` element has an [instrument][] to pause, stop, or turn the audio volume off but its `button` elements do not have accessible names.

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

This `video` element has an [instrument][] to pause, stop, or turn the audio volume off but the [instrument][] is not included in the accessibility tree.

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

This `video` element audio autoplays for longer than 3 seconds but is `muted`.

```html
<video autoplay muted>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

This `video` element has no audio output.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

This `audio` element does not play automatically.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Inapplicable Example 4

This `video` element does not play for longer than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource 'HTML Specification of Media Resource'
[sc142]: https://www.w3.org/TR/WCAG21/#audio-control 'Success Criterion 1.4.2 Audio Control'
[web page]: #web-page-html 'Definition of HTML web page'
