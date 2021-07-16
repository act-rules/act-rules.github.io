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
- has a [play button][] that is [visible][] and [included in the accessibility tree][].

## Expectation 

For each test target one of the following is true:
- it is not possible to [seek][] the end of the target element's [media resource][]; or 
- after [seeking][seek] the end of the target element's [media resource][] the [current playback position][] is not the end of the target element's [media resource][].

## Assumptions

_No assumptions._

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

Still looking for a solution to the problem of finding a live stream that we can use.

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

[current playback position]: https://html.spec.whatwg.org/multipage/media.html#current-playback-position
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource
[play button]: #play-button
[seek]: https://html.spec.whatwg.org/multipage/media.html#dom-media-seek
[visible]: #visible 'Definition of visible'
