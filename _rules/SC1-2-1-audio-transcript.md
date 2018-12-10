---
name: audio elements have a transcript

description: |
  Non-streaming `audio` elements must have a text alternative for all included auditory information.

test_aspects:
- DOM Tree
- CSS Styling
- Audio output

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `audio` element that is playing or has a "play button".  If a play button exists the rule applies if the button is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

A play button is an interactive element that when activated, plays the audio. The play button must be [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

The auditory information of each test target is available through a text transcript that is available either on the page or through a link.

**Note**: A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG21/#dfn-alternative-for-time-based-media).

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) 
- [G158:Providing an alternative for time-based media for audio-only content](https://www.w3.org/TR/WCAG20-TECHS/G158.html)

## Test Cases

### Passed

#### Passed example 1

Audio with controls and internal transcript

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

#### Passed example 2

Audio with controls and external transcript

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</p>
```

#### Passed example 3

Audio with autoplay and external transcript

```html (no-iframe)
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</p>
```

### Failed

#### Failed example 1

Audio with controls and no transcript

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Failed example 2

Audio with controls and incorrect internal transcript

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

#### Failed example 3

Audio with controls and incorrect external transcript

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</p>
```

#### Failed example 4

Audio with autoplay and incorrect external transcript

```html (no-iframe)
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</p>
```

### Inapplicable

#### Inapplicable example 1

Audio without controls.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3"></audio>
```

#### Inapplicable example 2

Audio with hidden controls.

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
```
