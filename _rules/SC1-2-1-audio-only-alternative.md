---
name: audio only has a text alternative
rule_type: composite
description: |
  This rule checks if audio only elements have a text alternative available

success_criterion:
- 1.2.1 # Audio-only and Video-only (Prerecorded)

atomic_rules:
- SC1-2-1-audio-transcript
- SC1-2-1-media-alternative-audio

authors:
- Wilco Fiers
- Brian Bors
- John Hicks
- Rafal Charlampozicz
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `audio` element that is:
- playing; or,
- has a "play button" that is [visibile on the page](#visible-on-the-page) or [exposed to assistive technologies](#exposed-to-assistive-technologies).

**Note:** A play button is an interactive element that when activated, plays the audio. 

### Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [audio transcript](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-audio-transcript.html)
- [media alternative audio](https://auto-wcag.github.io/auto-wcag/rules/SC1-2-1-media-alternative-audio.html)

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) 
- [G158:Providing an alternative for time-based media for audio-only content](https://www.w3.org/TR/WCAG20-TECHS/G158.html)

## Test Cases

### Passed

#### Pass example 1

Audio with controls and internal transcript

```html
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

#### Pass example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```


### Failed

#### Fail example 1

Audio with controls and incorrect internal transcript

```html
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

#### Fail example 2

An audio element that describes some of the text on the same page. The text is not visible on the page.

```html
<p style="display: none;">A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Inapplicable

#### Inapplicable example 1

Audio without controls.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3"></audio>
```

#### Inapplicable example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not visible on the page.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"> </audio>
```
