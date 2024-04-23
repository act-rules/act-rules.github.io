---
id: 2eb176
name: Audio element content has transcript
rule_type: atomic
description: |
  This rule checks that `audio` elements have a transcript that includes all auditory information.
accessibility_requirements:
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    forConformance: true
    secondary: This success criterion is **less strict** than this rule. This is because the rule does not consider that the audio may be a media alternative for text. Some of the failed examples satisfy this success criterion.
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Helen Burge
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `audio` element for which at least one of the following is true:

- [autoplaying](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#autoplay); or,
- has a [play button][] that is [visible][].

## Expectation

The auditory information of each test target is available through a text transcript. That text transcript is [visible][], either on the page or through a [clearly labeled location][].

**Note:** A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media).

## Assumptions

This rule assumes that if a transcript is present it is [included in the accessibility tree][].

## Accessibility Support

There are no accessibility support issues known.

## Background

It is known that the user can set the browser to prevent autoplay. This rule assumes the browser has not been set to do this.

### Bibliography

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element has native player controls and an internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Passed Example 2

This `audio` element has native player controls and an external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</a>
</html>
```

#### Passed Example 3

This `audio` element has an `autoplay` attribute and an external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

This `audio` element has native player controls and no transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 2

This `audio` element has native player controls and an incorrect internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 3

This `audio` element has native player controls and an incorrect external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 4

This `audio` element has an `autoplay` attribute and an incorrect external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 5

This `audio` element has native player controls and a [non-visible][visible] internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p style="text-indent: -9999px;">
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```


### Inapplicable

#### Inapplicable Example 1

This `audio` element has no native player controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

This `audio` element has hidden native player controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

[play button]: #play-button 'Definition of play button'
[visible]: #visible 'Definition of visible'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
