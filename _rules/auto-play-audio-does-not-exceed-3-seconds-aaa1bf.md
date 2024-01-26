---
id: aaa1bf
name: Audio or video element that plays automatically has no audio that lasts more than 3 seconds
rule_type: atomic
description: |
  `audio` or `video` that plays automatically does not output audio for more than 3 seconds.
accessibility_requirements:
  wcag-technique:G60: # Playing a sound that turns off automatically within three seconds
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
  funding:
    - WAI-Tools
  assets:
    - Rabbit video is © copyright 2008, Blender Foundation / [www.bigbuckbunny.org](https://www.bigbuckbunny.org)
    - JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.
---

## Applicability

This rule applies to any `audio` or `video` element for which all the following are true:

- **autoplay**: the element has an `autoplay` [attribute value][] of `true`; and
- **not muted**: the element has a `muted` [attribute value][] of `false`; and
- **not paused**: the element has a `paused` [attribute value][] of `false`; and
- **duration**: the element has a [media resource][] lasting more than 3 seconds that contains audio.

## Expectation

For each test target the total audio output does not last more than 3 seconds.

**Note:** This rule does not cover single audio instances that play repeatedly for more than three seconds, or multiple audio instances for more than three seconds. The [WCAG Understanding documentation for 1.4.2 Audio Controls](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html) is ambiguous about how to handle these scenarios.

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](https://www.w3.org/WAI/WCAG22/Techniques/failures/F23)
- [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/WAI/WCAG22/Techniques/general/G60)
- [G171: Playing sounds only on user request](https://www.w3.org/WAI/WCAG22/Techniques/general/G171)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element does not play automatically for more than 3 seconds.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3#t=25" autoplay></audio>
```

#### Passed Example 2

This `video` element's audio output does not last longer than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

### Failed

#### Failed Example 1

This `audio` element plays automatically for more than 3 seconds.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Failed Example 2

This `video` element plays some audio automatically for more than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio that autoplays for longer than 3 seconds but is muted.

```html
<video autoplay muted>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

This `video` element refers to a source file that has no audio output.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

This `audio` element does not autoplay.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource 'HTML Specification of Media Resource'
