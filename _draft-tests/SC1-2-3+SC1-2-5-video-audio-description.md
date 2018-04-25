---
rule_id: SC1-2-3+SC1-2-5-video-audio-description

success_criterion: 
- 1.2.3
- 1.2.5
---

## Passed

```html
<video src="../test-assets/rabbit-video-with-voiceover.mp4" controls></video>
```

```html
TODO: Video with separate audio description
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
```

```html
<video src="../test-assets/rabbit-video-with-incorrect-voiceover.mp4" controls></video>
```

```html
TODO: Video with separate incorrect audio description
```

## Inapplicable

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video-silent.mp4" controls></video>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;"></video>
```