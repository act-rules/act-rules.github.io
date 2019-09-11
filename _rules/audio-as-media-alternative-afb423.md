---
id: afb423
name: Audio-only as a media alternative for text
rule_type: atomic
description: |
  This rule checks `audio` is a media alternative for text on the page.
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
authors:
  - Wilco Fiers
  - Brian Bors
---

## Applicability

The rule applies to every [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a "play button" that is [visibile](#visible) and [included-in-the-accessibility-tree](#included-in-the-accessibility-tree).

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation 1

The auditory information of each test target is available as text (directly or via text alternatives) that is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation 2

Each target element is labeled as an audio alternative for text on the page.

## Expectation 3

The label (from expectation 2) is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree)

**Note:** The term label does not refer to the `label` element.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

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
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Failed

#### Failed Example 1

An audio element that describes some of the text on the same page. The audio contains more information than the text does.

```html
<p>
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard.
</p>
<p>
	You can also listen to the audio file below to hear the above part of the speech.
</p>
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Failed Example 2

An audio element that describes some of the text on the same page. The text is not visible on the page.

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
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Failed Example 3

An audio element that describes some of the text on the same page. The text on the page does not label the audio as an alternative.

```html
<p>
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

#### Failed Example 4

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the label is not visible on the page.

```html
<p>
	A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not because
	they are easy, but because they are hard, because that goal will serve to organize and measure the best of our
	energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone,
	and one which we intend to win, and the others, too.
</p>
<p style="display: none;">
	You can also listen to the audio file below to hear the above part of the speech.
</p>
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

### Inapplicable

#### Inapplicable Example 1

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not visible on the page.

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
<audio src="../test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
```

#### Inapplicable Example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but there are no controls.

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

<audio src="../test-assets/moon-audio/moon-speech.mp3"></audio>
```
