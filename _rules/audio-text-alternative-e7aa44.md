---
id: e7aa44
name: '`audio` element content has text alternative'
rule_type: composite
description: |
  This rule checks if audio only elements have a text alternative available.
accessibility_requirements:
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 2eb176
  - afb423
authors:
  - Wilco Fiers
  - Brian Bors
  - John Hicks
  - Rafal Charlampowicz
---

## Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a "play button" that is [visible][] and [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Audio elements have a transcript](https://act-rules.github.io/rules/2eb176)
- [Audio-only as a media alternative for text](https://act-rules.github.io/rules/afb423)

## Assumptions

_There are currently no assumptions_

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
<audio data-rule-target src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>
	The above audio contains the following speech: We choose to go to the moon in this decade and do the other things, not
	because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
```

#### Passed Example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative.

```html
<p>
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
<p>
	You can also listen to the audio file below to hear the above part of the speech.
</p>
<audio data-rule-target src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Failed

#### Failed Example 1

Audio with controls and incorrect internal transcript

```html
<audio data-rule-target src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>
	The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things,
	not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
	our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
	postpone, and one which we intend to win, and the others, too.
</p>
```

#### Failed Example 2

An audio element that describes some of the text on the same page. The text is not [visible][] on the page.

```html
<p style="display: none;">
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
<p>
	You can also listen to the audio file below to hear the above part of the speech.
</p>
<audio data-rule-target src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Inapplicable

#### Inapplicable Example 1

Audio without controls.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
```

#### Inapplicable Example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not [visible][] on the page.

```html
<p>
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
<p>
	You can also listen to the audio file below to hear the above part of the speech.
</p>
<audio data-rule-target src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
```

[visible]: #visible 'Definition of visible'
