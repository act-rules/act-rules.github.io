---
id: 80f0bf
name: '`audio` or `video` avoids automatically playing audio'
rule_type: composite
description: |
  This rule checks that audio or video that plays automatically does not have audio that lasts for more than 3 seconds or has an audio control mechanism to stop or mute it.
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
input_rules:
  - 4c31df
  - aaa1bf
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

This rule applies to any `audio` or `video` element for which all the following are true:

- (**autoplay**) the element has an `autoplay` [attribute value][] of `true`; and
- (**not muted**) the element has a `muted` [attribute value][] of `false`; and
- (**not paused**) the element has a `paused` [attribute value][] of `false`; and
- (**duration**) the element has a [media resource][] lasting more than 3 seconds and that contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Audio Or Video That Plays Automatically Has A Control Mechanism](https://act-rules.github.io/rules/4c31df)
- [Audio Or Video That Plays Automatically Has No Audio That Lasts More Than 3 Seconds](https://act-rules.github.io/rules/aaa1bf)

## Assumptions

- This rule assumes that it is not possible to satisfy [Success Criterion 1.4.2 Audio Control][sc142] if the total length of the automatically playing audio is more than 3 seconds, even if there are pauses in the sound and no more than 3 seconds in a row with actual sound.
- This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to control the sound must be located in the same [web page][]. Note that mechanisms that are provided by user agents, assistive technologies, or operating systems are hardly testable as they depend on the user. Note that mechanisms that are located on other pages can still create accessibility issues for users relying on sound to navigate (e.g. screen readers users) since the autoplaying sound will interfere with their ability to find and activate the mechanism. If a [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) external to the [web page][] is provided, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].
- This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) to control the sound must be visible and accessible in order to be effective and usable by all kinds of users. If the mechanism is hidden to some users, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].

## Accessibility Support

The native `video` and `audio` controls in several browser and assistive technology combinations are not keyboard accessible and the `video` or `audio` element itself may not be announced. Authors are recommended to use custom controls for keyboard navigation and cross browser accessibility support in general.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [Accessible Multimedia](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element has an [instrument][] to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Passed Example 2

This `video` element does not play for longer than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
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

This `audio` element autoplays, lasts for more than 3 seconds, and does not have an [instrument][] to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
```

#### Failed Example 2

This `video` element audio autoplays for longer than 3 seconds, and does not have an [instrument][] to pause, stop, or turn the audio volume off.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
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

[attribute value]: #attribute-value 'Definition of Attribute Value'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource 'HTML Specification of Media Resource'
[sc142]: https://www.w3.org/TR/WCAG21/#audio-control 'Success Criterion 1.4.2 Audio Control'
[web page]: #web-page-html 'Definition of HTML web page'
