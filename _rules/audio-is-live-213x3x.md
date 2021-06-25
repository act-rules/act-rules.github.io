---
id: 213x3x
name: '`audio` element plays live content'
rule_type: atomic
description: |
  This rule checks the content played by an `audio` element is live
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
acknowledgments:
  authors:
    - Carlos Duarte
---

## Applicability

This rule applies to every `audio` element that is:

- playing; or,
- has a "play button" that is [visible][] and [included in the accessibility tree][].

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation 

The target element's [media resource](https://html.spec.whatwg.org/multipage/media.html#media-resource) is being broadcasted in real time without being first recorded and stored on the origin server.

## Assumptions

_No assumptions._

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element plays a live media resource.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Failed

#### Failed Example 1

This `audio` element plays a recorded media resource.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `audio` element's controls are not [visible][] on the page.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

#### Inapplicable Example 2

This `audio` element does not have controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[visible]: #visible 'Definition of visible'
