---
rule_id: SC1-2-1+SC1-2-3-video-transcript

success_criterion: 
- 1.2.1
- 1.2.3
---

## Passed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<a href="/test-assets/rabbit-video-transcript.html">Transcript</p>
```

## Failed

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground. 
He stretches, yaws, and then starts walking. 
Then he stops to scratch his bottom.</p>
```

```html
<video src="../test-assets/rabbit-video.mp4" controls></video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</p>
```

## Inapplicable

```html
TODO: a source to a live video
```

```html
<video src="../test-assets/rabbit-video.mp4" controls style="display: none;"></video>
```