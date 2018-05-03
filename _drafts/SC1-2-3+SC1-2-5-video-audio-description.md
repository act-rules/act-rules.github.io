---
name: audio described video element
group: SC1-2-video-element
description: |
  Non-streaming video elements must not contain any visual information that is not expressed in the audio

success_criterion:
- 1.2.3 # Audio Description or Media Alternative (Prerecorded)
- 1.2.5 # Audio Description (Prerecorded)

test_aspects:
- DOM Tree
- CSS Styling
- Audio output
- Visual output

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] video element [visible in the page][] where the video contains [audio][].

### Expectation

The visual information of each test target is available through its audio, or through an audio description track.

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html
- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173
- https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G8

[audio output]: ../pages/algorithms/audio-output.html
[visual output]: ../pages/algorithms/visual-output.html
[non-streaming]: ../pages/algorithms/non-streaming-media-element.html
[visible in the page]: ../pages/algorithms/visible-in-the-page.html
[text transcript]: https://www.w3.org/TR/WCAG20/#alt-time-based-mediadef
[audio]: https://www.w3.org/TR/WCAG20/#audiodef

## Test Cases

## Passed

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm"></source>
</video>
```

```html
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css">
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css">
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css">

<figure id="ozplayer-1-container" class="ozplayer-container">
  <div data-controls="stack" class="ozplayer" id="ozplayer-1">
    <video controls="controls" preload="none">
      <source src="../test-assets/rabbit-video.mp4" type="video/mp4"></source>
    </video>
    <audio data-default="default" preload="none">
      <source src="../test-assets/rabbit-video-audio-description.mp3" type="audio/mp3" ></source>
    </audio>
  </div>
</figure>

<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
```

## Failed

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
```

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm"></source>
</video>
```

```html
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css">
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css">
<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css">

<figure id="ozplayer-1-container" class="ozplayer-container">
  <div data-controls="stack" class="ozplayer" id="ozplayer-1">
    <video controls="controls" preload="none">
      <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
    </video>
    <audio data-default="default" preload="none">
      <source src="../test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mp3" ></source>
    </audio>
  </div>
</figure>

<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
```

## Inapplicable

```html
TODO: a source to a live video
```

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
```

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
```