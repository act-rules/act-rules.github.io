---
id: 2eb176
name: '`audio` element content has transcript'
rule_type: atomic
description: |
  Non-streaming `audio` elements must have a text alternative for all included auditory information.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Language
acknowledgments:
  authors:
    - Wilco Fiers
    - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a "play button" that is [visible][] and [included in the accessibility tree][].

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation

The auditory information of each test target is available through a text transcript. That text transcript is [visible][] and [included in the accessibility tree][], either on the page or through a link.

**Note:** A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G158)

## Test Cases

### Passed

#### Passed Example 1

Audio with controls and internal transcript

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

Audio with controls and external transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.txt">Transcript</a>
</html>
```

#### Passed Example 3

Audio with autoplay and external transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.txt">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

Audio with controls and no transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 2

Audio with controls and incorrect internal transcript

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

Audio with controls and incorrect external transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.txt">Transcript</a>
</html>
```

#### Failed Example 4

Audio with autoplay and incorrect external transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.txt">Transcript</a>
</html>
```

#### Failed Example 5

Audio with controls and [non-visible][visible] internal transcript

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

#### Failed Example 6

Audio with controls and internal transcript that is not exposed to the accessibility tree

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p aria-hidden="true">
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

Audio without controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

Audio with hidden controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
