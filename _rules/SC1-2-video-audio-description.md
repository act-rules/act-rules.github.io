---
name: video element audio described
rule_type: atomic
description: |
  Non-streaming `video` elements must have all visual information also contained in the audio

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

The rule applies to every [non-streaming](#non-streaming) `video` element that is [visible](#visible) where the video contains audio.

### Expectation

The visual information of each test target is available through its audio, or through an audio description track.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility support

There are only a few implementations of video players (without third party technologies) that support audio description tracks at the time of writing.

## Background

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html)
- [G78:Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G78)
- [G173:Providing a version of a movie with audio descriptions](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G173)
- [G8:Providing a movie with extended audio descriptions](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G8)

## Test Cases

### Passed

#### Passed example 1

A video element with a voiceover that describes the visual information.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
</video>
```

#### Passed example 2

A video element with an audio description.

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
      <source src="../test-assets/rabbit-video/audio-description.mp3" type="audio/mp3"  />
    </audio>
  </div>
</figure>

<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
```

**Note:** The ozplayer implementation is only an example and is not meant as an endorsment of the ozplayer.

### Failed

#### Failed example 1

A video element without an audio description.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Failed example 2

A video element with an incorrect audio description.

```html
<video controls>
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
</video>
```

#### Failed example 3

A video element with an incorrect audio description.

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
      <source src="../test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mp3"  />
    </audio>
  </div>
</figure>

<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
```

**Note:** The ozplayer implementation is only an example and is not meant as an endorsment of the ozplayer.

### Inapplicable

#### Inapplicable example 1

A video element without audio.

```html
<video controls>
  <source src="../test-assets/rabbit-video/silent.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable example 2

A video element that is not visible on the page.

```html
<video controls style="display: none;">
  <source src="../test-assets/rabbit-video/video.mp4" type="video/mp4" />
  <source src="../test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```
