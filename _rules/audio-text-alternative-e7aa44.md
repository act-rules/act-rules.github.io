---
id: e7aa44
name: Audio element content has text alternative
rule_type: composite
description: |
  This rule checks that `audio` elements have a text alternative available.
accessibility_requirements:
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G158: # Providing an alternative for time-based media for audio-only content
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 2eb176
  - afb423
acknowledgments:
  authors:
    - Brian Bors
    - John Hicks
    - Rafal Charlampowicz
    - Wilco Fiers
  funding:
    - WAI-Tools
  assets:
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `audio` element for which at least one of the following is true:

- has an `autoplay` [attribute value][] of true; or,
- has a [play button][] that is [visible][] and [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Audio` Element Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/2eb176/)
- [`Audio` Element Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/afb423/)

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding SC 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element has a play button, and there is a transcript of the audio.

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

This `audio` element has a play button, and the text on the page labels the audio as an alternative.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Passed Example 3

This `audio` element autoplays, and there is a transcript of the audio.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

### Failed

#### Failed Example 1

This `audio` element has a play button but has an incorrect transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We are going to the North Pole in this decade with puppies, not
		because they are easy, but because they are cute, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 2

This `audio` element autoplays but the text transcript is not [visible][] on the page.

```html
<html lang="en">
	<p style="display: none;">
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `audio` element does not autoplay or have a play button.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

This `audio` element is labeled as an alternative by text on the same page, but the controls are not [visible][] on the page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

#### Inapplicable Example 3

This `a` element links to an audio file, but there is no `audio` element on this page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		<a href="/test-assets/moon-audio/moon-speech.mp3">Download the speech as MP3</a>
	</p>
</html>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[play button]: #play-button 'Definition of play button'
[visible]: #visible 'Definition of visible'
