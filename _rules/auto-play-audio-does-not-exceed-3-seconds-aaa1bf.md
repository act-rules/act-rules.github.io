---
id: aaa1bf
name: auto-play audio does not exceed 3 seconds
rule_type: atomic
description: |
  auto-play audio content does not output audio for more than 3 seconds
accessibility_requirements:
input_aspects:
  - DOM Tree
  - CSS Styling
  - Audio output
  - Visual output
authors:
  - Anne Thyme Nørregaard
  - Bryn Anderson
---

## Applicability

This rule applies to any HTML `<audio>`, `<video>` or `<source>` elements, with a `src` attribute referencing content with a duration of more than 3 seconds, that has an `autoplay` attribute equal to `true`, and that has both `paused` and `muted` attributes equal to `false`.

## Expectation

For each test target the total audio output does not last more than 3 seconds.
 
## Assumptions

*There are currently no assumptions*

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](https://www.w3.org/WAI/WCAG21/Techniques/failures/F23)
- [G171: Playing sounds only on user request](https://www.w3.org/WAI/WCAG21/Techniques/general/G171)

## Test Cases

### Passed

#### Passed example 1

The `<audio>` element does not auto-play for more than 3 seconds.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3#t=25" autoplay="true"></audio>
```

#### Passed example 2

The `<video>` element audio output does not last longer than 3 seconds.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

### Failed

#### Failed example 1

The `<audio>` auto-plays for more than 3 seconds.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true" controls></audio>
```

#### Failed example 2

The `<video>` element audio auto-plays for more than 3 seconds.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable example 1

The `video` element is `muted`.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable example 2

The `video` element `src` file has no audio output.

``` html
 <video autoplay="true">
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable example 3

The `audio` element does not autoplay.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" controls></audio>
```
