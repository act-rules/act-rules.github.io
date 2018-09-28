---
name: video with audio has an accessible alternative
rule_type: composite
description: |
  This rule checks video elements with audio have audio description

success_criterion:
- 1.2.5 # Audio Description (Prerecorded)§

atomic_rules:
- SC1-2-video-audio-description
- SC1-2-video-media-alternative
- SC1-2-video-description-track

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element [visible on the page](#visible-on-the-page), where the video contains audio.

### Expectation

For each test target, the outcome of at least one of the following rules is passed:

- [video element audio described](SC1-2-video-audio-description)
- [Video element description track](SC1-2-video-description-track)
- [Video as a media alternative for text](SC1-2-video-media-alternative)

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility support

See [Video element description track: accessibility support](SC1-2-Video-description-track.html#accessibility-support).

