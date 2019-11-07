---
id: c3232f
name: '`video` element visual-only content has accessible alternative'
rule_type: composite
description: |
  This rule checks that `video` elements without audio have an alternative available.
accessibility_requirements:
  wcag20:1.2.1: # Audio-only and Video-only (Prerecorded) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - fd26cf
  - ac7dc6
  - ee13b5
  - d7ba54
acknowledgements:
  authors:
    - Wilco Fiers
    - Brian Bors
    - John Hicks
    - Rafal Charlampowicz
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'tag-pair'
---

## Applicability

The rule applies to any [non-streaming](#non-streaming-media-element) `video` element [visible][], where the video doesn't contain audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Video-Only As A Media Alternative For Text](https://act-rules.github.io/rules/fd26cf)
- [Video Only Element Has Description Track](https://act-rules.github.io/rules/ac7dc6)
- [Video Only Element Has Transcript](https://act-rules.github.io/rules/ee13b5)
- [Video Has Audio Alternative](https://act-rules.github.io/rules/eac66b)

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that if `lang` attributes are used, their value accurately describes the part of the content they are applied to.

## Accessibility Support

See [Video Only Element Has Description Track: accessibility support](https://act-rules.github.io/rules/ac7dc6#accessibility-support).

## Background

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)

## Test Cases

### Passed

#### Passed Example 1

A video element without audio. The text on the page labels the video as an alternative.

```html
<section lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video
		data-rule-target
		src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4"
		controls
	></video>
</section>
```

#### Passed Example 2

A video only element with a track element that contains descriptions.

```html
<section lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="rabbit-video-descriptions.vtt" />
	</video>
</section>
```

#### Passed Example 3

A silent video element with a text transcript on the same page.

```html
<section lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</section>
```

#### Passed Example 4

A video element without audio has a separate audio track that describes the visual information.

```html
<section lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/audio-description.mp3" type="audio/mpeg" />
	</audio>
</section>
```

### Failed

#### Failed Example 1

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<section lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<video
		data-rule-target
		src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4"
		controls
	></video>
</section>
```

#### Failed Example 2

A video only element with a track element that contains incorrect descriptions.

```html
<section lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="rabbit-video-incorrect-descriptions.vtt" />
	</video>
</section>
```

#### Failed Example 3

A silent video element with a link to an incorrect text transcript on a different page.

```html
<section lang="en">
<video controls data-rule-target>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video-incorrect-transcript.html">Transcript</a>
</section>
```

#### Failed Example 4

A video element without audio has a separate audio track that incorrectly describes the visual information.

```html
<section lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mpeg" />
	</audio>
</section>
```

### Inapplicable

#### Inapplicable Example 1

A video element with audio.

```html
<section lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video data-rule-target src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</section>
```

#### Inapplicable Example 2

A video only element that is not [visible][].

```html
<section lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="rabbit-video-descriptions.vtt" />
	</video>
</section>
```

[visible]: #visible 'Definition of visible'
