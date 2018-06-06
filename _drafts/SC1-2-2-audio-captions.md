---
name: audio elements captions
group: NA
description: |
  Non-streaming audio elements must not contain auditory information that is not expressed in captions or a text alternative.

success_criterion:
- 1.2.1 # Audio-only and Video-only (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- [Audio output][]

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] audio element [audible on the page][].

### Expectation

The auditory information of each test target is available through a caption, or through a [text transcript][] that is available either on the page or through a link (or some other mechanism).

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html
- https://www.w3.org/TR/WCAG20-TECHS/G158.html

## Test Cases

### Passed

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</p>
```

### Failed

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<p>The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
```

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</p>
```

### Inapplicable

```html
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
```

[audio output]: ../pages/algorithms/audio-output.html
[non-streaming]: ../pages/algorithms/non-streaming.html
[audible on the page]: ../pages/algorithms/audible-in-the-page.html
[text transcript]: https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef