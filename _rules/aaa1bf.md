---
name: No auto-play audio lasts more than 3 seconds
test_type: atomic

description: |
  This rule checks that none of the auto-play audio or video elements have audio that last more than 3 seconds.

success_criterion: 
- 1.4.2 # Audio Control

test_aspects:
- DOM Tree
- CSS Styling
- Audio output

authors:
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to any HTML `audio` or `video` element with a `src` file content `duation` of more than 3 seconds, is set to `autoplay` and or `loop`, and has audio output that is not `paused` or `muted`.

## Expectation

For each test target the audio does not last more than 3 seconds.
 
## Assumptions

*There are currently no assumptions*

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Test Cases

### Passed

### Passed example 1

The `video` element audio does not play for longer than 3 seconds.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

### Failed

### Failed example 1

The `video` element audio plays for longer than 3 seconds.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

### Inapplicable example 1

The `video` element is `muted`.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable example 2

The `video` element has no audio output.

``` html
 <video autoplay="true" muted="true">
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
</video>
```

### Inapplicable example 3

The `audio` element does no `autoplay` attribute.

``` html
  <audio src="../test-assets/moon-audio/moon-speech.mp3" autoplay="true" controls></audio>
```
