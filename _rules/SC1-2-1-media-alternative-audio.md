---
name: Audio-only as a media alternative for text

description: |
  This rule checks `audio` is a media alternative for text on the page.

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

### Expectation 1

The auditory information of each test target is available as text (directly or via text alternatives) that is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies).

### Expectation 2

Each target element has a label indicating the `audio` is an alternative to text on the page.

### Expectation 3

The label (from expectation 2) is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies)

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html

## Test cases

### Passed

#### Pass example 1

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Failed

#### Fail example 1

An audio element that describes some of the text on the same page. The audio contains more information than the text does.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Fail example 2

An audio element that describes some of the text on the same page. The text is not visible on the page.

```html
<p style="display: none;">A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Fail example 3

An audio element that describes some of the text on the same page. The text on the page does not label the audio as an alternative.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Fail example 4

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the label is not visible on the page.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p style="display: none;">You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Inapplicable

#### Inapplicable example 1

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not visible on the page.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"> </audio>
```

#### Inapplicable example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but there are no controls.

```html
<p>A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>
<p>You can also listen to the audio file below to hear the above part of the speech.</p>
<audio data-rule-target src="../test-assets/moon-audio/moon-speech.mp3" > </audio>
```