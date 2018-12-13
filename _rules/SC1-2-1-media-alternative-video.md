---
name: Video-only as a media alternative for text

description: |
  This rule checks non-streaming silent `video` is a media alternative for text on the page.

test_aspects:
- DOM Tree
- CSS Styling
- Audio output

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming](#non-streaming) `video` element that is [visible](#visible), where the video doesn't contain audio.

### Expectation 1

All the information contained in each target element is available as text (directly or via text alternatives) that is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation 2

Each target element is labelled as a video alternative for text on the page. This label is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note:** The term label does not refer to the `label` element.

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html) 

## Test cases

### Passed

#### Passed example 1

A video element without audio. The text on the page labels the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

### Failed

#### Failed example 1

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html

<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Failed example 2

A video element that describes some of the text on the same page. The text is not visible on the page.

```html
<p style="display: none;">Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Failed example 3

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Failed example 4

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the label is not visible on the page.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.</p>
  <p style="display: none;">See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

### Inapplicable

#### Inapplicable example 1

A video element with audio.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
</video>
```

#### Inapplicable example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the video is not visible on the page.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.
  See the video below to watch the same information again in video form.</p>
<video src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls style="display: none;">
</video>
```
