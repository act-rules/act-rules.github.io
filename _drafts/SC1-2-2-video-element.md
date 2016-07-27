
---
# [Rule Metadata](../pages/metadata.md)

rule_id: SC1-2-2-video-element
name: 
test_mode: semi-automatic

criteria:
- media-equiv-captions: 1.2.2 Captions (Prerecorded) (Level A)

authors:

---

## Description

This test checks captions in video elements with a track element. So, this one test the quality of the given captions. Note that instead of a pass or fail, we could also return a graded rating scheme. This can be the case if for example emotions are captured, and only one emotion is forgotten. We could return a 90% pass?

"BITV-Test, a German web-based accessibility evaluation tool which in its latest revision is a WCAG 2.0 test in all but name, takes a different approach. Its checkpoints that have graded rating scheme that offers five grades: from a clear "pass" (100%) via intermediate steps to a clear "fail" (0%). "
http://www.bitvtest.de/infothek/artikel/lesen/talking-head-captions.html

## Background

- [Understanding 1.2.2 Captions (prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)
- [QuailJS test for video captions](https://github.com/quailjs/quail/blob/dev/src/js/components/video.js)

## Assumptions

- Test device renders html5 video (phantomJS doesn't render)

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 1.2.2
| Test mode         | SemiAuto
| Test environment  | DOM and CSS + media API
| Test subject      | DOM document fragment
|User expertise and skills | No prior knowledge
| User profile      | For manual tests only: any additional requirements, such as language skills, use of AT etc.

## Test procedure

### Selector

Test mode: [automatic][AUTO]

`video` element containing a `track` attribute

### Step 1

Test mode: [automatic][AUTO]

Track element contains `kind` attribute with value `captions`

If the step returns true, go to step 3 with the value of `src`

### Step 2

Test mode: [automatic][AUTO]

Track element contains `kind` attribute with value `subtitles`

**Note**: success criterion doesn't take into account language changes. So it is valid to have spoken text in language 1, subtitles in language 2 and page content in language 3. We prefer captions as they include non-spoken text as well

### Step 3

Test mode: [automatic][AUTO]

`src` contains file

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | no caption file provided with the video

### Step 4

Test mode: [automatic][AUTO]

File content contains time codes and text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | empty caption file provided with the video

### Step 5

Test mode: [automatic][AUTO]

file contains valid time and text combinations

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | no valid caption data provided with the video

### Step 6

Test mode: [automatic][AUTO]

For each spoken audio fragment a timecode and text exists

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Not all dialogs are covered in the captions

### Step 7

Test mode: [automatic][AUTO]

For each spoken audio fragment the content of the spoken text has the same meaning as the caption text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | The text of the captions doesn't correspond to the spoken text

### Step 8

Test mode: [automatic][AUTO]

Check to see is a speaker is presented in a fixed frame with unchanging background ('talking head' video).

For each frame check if the image is similar to the other frames.

| Outcome  | Passed
|----------|-----
| Testcase | SC 1.2.2 video

NOTE: not sure if we should add this step, but if this step can be done fully automatic with frame scanning, we can skip additional manual steps.

### Step 9

Test mode: [manual][MANUAL]

Check for each sound if it is important and has a timecode and descriptive text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Important sound not explained in the caption
| Pointer  | video-id and timecode

### Step 10

Test mode: [manual][MANUAL]

Check for each background fragment if it is important and has a captioned text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Location not explained in the caption
| Pointer  | videoid and timecode

### Step 11

Test mode: [manual][MANUAL]

Check for each speaker fragment if it has a captioned identification

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Speaker not identified in the captions

### Step 12

Test mode: [manual][MANUAL]

Check for each emotion if it is important and has a captioned text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Emotion not explained in the caption

| Outcome  | Passed
|----------|-----
| Testcase | SC 1.2.2 video

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual