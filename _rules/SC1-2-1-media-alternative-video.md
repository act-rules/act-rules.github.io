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

The rule applies to any [non-streaming][] `video` element that is [visible on the page](#visible-on-the-page), where the video doesn't contains audio.

### Expectation 1

All the information contained in each target element is available as text (directly or via text alternatives) that is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies).

### Expectation 2

Each target element has a label indicating the `video` is an alternative to text on the page.

### Expectation 3

The label (from expectation 2) is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies)

## Assumptions

This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the poster.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- 

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
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
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
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
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
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
</video>
```

#### Failed example 3

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<p>Not being able to use your computer because your mouse 
  doesn't work, is frustrating. Many people use only the keyboard to navigate 
  websites. Either through preference or circumstance. This is solved by keyboard compatibility. 
  Keyboard compatibility is described in WCAG.</p>
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
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
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls>
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
<video data-rule-target src="../test-assets/perspective-video/perspective-keyboard-compatibility-video.mp4" controls>
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
<video data-rule-target src="../test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls style="display: none;">
</video>
```
