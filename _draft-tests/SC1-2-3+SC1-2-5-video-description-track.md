---
rule_id: SC1-2-3+SC1-2-5-video-description-track

success_criterion: 
- 1.2.3
- 1.2.5
---

## Passed

```html
<video src="../test-assets/rabbit-video.mp4" controls>
  <track kind="descriptions" src="rabbit-video-descriptions.vtt">
</video>
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls>
  <track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt">
</video>
```

## Inapplicable

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
```

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;">
  <track kind="descriptions" src="rabbit-video-descriptions.vtt">
</video>
```

```html
<video src="../test-assets/rabbit-video-silent.mp4" controls></video>
```
