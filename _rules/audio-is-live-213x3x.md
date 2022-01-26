---
id: 213x3x
name: '`audio` element plays live content'
rule_type: atomic
description: |
  This rule checks the content played by an `audio` element is live
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
acknowledgments:
  authors:
    - Carlos Duarte
---

## Applicability

This rule applies to every `audio` element that is:

- playing; or,
- has a [play button][] that is [visible][] and [included in the accessibility tree][].

## Expectation

For each test target at least one of the following is true:

- the target element's [media resource][] is not [seekable][]; or
- after [seeking][seek] the end of the target element's [media resource][] the [current playback position][] is not the end of the target element's [media resource][].

## Assumptions

_No assumptions._

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element plays a live media resource by streaming the audio from the device's microphone. The [media resource][] is a MediaStream which is not [seekable][].

Test instructions:

- Load the test case in a browser supporting the experimental MediaStreamTrack API (You can successfully test this example on Google Chrome with the flag --enable-blink-features=WebCodecs,MediaStreamInsertableStreams);
- Authorize the browser to access a microphone.

```html
<html lang="en">
	<p>
		This example requires a browser supporting the experimental MediaStreamTrack API. The browser must be authorized to
		access a microphone. You can successfully test this example on Google Chrome with the flag
		--enable-blink-features=WebCodecs,MediaStreamInsertableStreams
	</p>

	<p id="vLog"></p>
	<audio controls autoplay></audio>

	<script>
		const log = document.querySelector('#vLog')

		document.addEventListener(
			'DOMContentLoaded',
			function(event) {
				if (typeof MediaStreamTrackProcessor === 'undefined' || typeof MediaStreamTrackGenerator === 'undefined') {
					log.innerHTML =
						'Your browser does not support the experimental MediaStreamTrack API. ' +
						'Please launch with the --enable-blink-features=WebCodecs,MediaStreamInsertableStreams flag'
					return
				}

				const constraints = {
					audio: true,
					video: false,
				}

				navigator.mediaDevices
					.getUserMedia(constraints)
					.then(function(mediaStream) {
						document.querySelector('audio').srcObject = mediaStream
					})
					.catch(function(err) {
						log.innerHTML += err.name + ': ' + err.message
					})
			},
			false
		)
	</script>
</html>
```

### Failed

#### Failed Example 1

This `audio` element plays a recorded media resource.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `audio` element's controls are not [visible][] on the page.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

#### Inapplicable Example 2

This `audio` element does not have controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

[current playback position]: https://html.spec.whatwg.org/multipage/media.html#current-playback-position
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource
[play button]: #play-button
[seek]: https://html.spec.whatwg.org/multipage/media.html#dom-media-seek
[seekable]: https://html.spec.whatwg.org/multipage/media.html#dom-media-seekable
[visible]: #visible 'Definition of visible'
