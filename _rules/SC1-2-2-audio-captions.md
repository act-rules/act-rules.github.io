---
name: audio elements captions

description: |
  Non-streaming `audio` elements must have a text alternative or captions for all included auditory information.

success_criterion:
- 1.2.2

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

The rule applies to any [non-streaming](#non-streaming-media-element) `audio` element that is playing or with a "play button".

A play button is an interactive element that when activated, plays the audio. The play button must be ]visibile on the page](#visible-on-the-page) or [exposed to assistive technologies](#exposed-to-assistive-technologies)

### Expectation

The auditory information of each test target is available through a caption, or through a [text transcript](#text-transcript) that is available either on the page or through a link.

## Assumptions

*There are currently no assumptions*

## Accessibility support

While the HTML specifications allows the use of `track` elements inside of `audio` elements, there is currently limited to no support for this in major web browsers.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html
- https://www.w3.org/TR/WCAG20-TECHS/G158.html

## Test Cases

### Passed

```html
<!-- Audio with controls and internal transcript -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

```html
<!-- Audio with controls and external transcript -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</p>
```

```html (no-iframe)
<!-- Audio with autoplay and external transcript -->
<!-- Audio with a text description on the page -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</p>
```

### Failed

```html
<!-- Audio with controls and incorrect internal transcript -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

```html
<!-- Audio with controls and incorrect external transcript -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</p>
```

```html (no-iframe)
<!-- Audio with autoplay and incorrect external transcript -->
<audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</p>
```

### Inapplicable

```html
<!-- Audio without controls -->
<audio src="../test-assets/moon-audio/moon-speech.mp3"></audio>
```

```html
<!-- Audio with hidden controls
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
```
