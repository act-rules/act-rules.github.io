---
rule_id: SC1-2-1-video-only-alternative
name: 
test_mode: semi-automatic

success_criterion:
- 1.2.1 # Audio-only and Video-only (Prerecorded) (Level A)

authors:

---

## Description

This test checks captions in video elements without a track element.
There are three different situations when a track element is not required

- Video is a media alternative for text and labelled as such
- Audio describing video-only content
- Video contains open captions

This procedure describes those situations

## Background

- [Understanding 1.2.1 Audio-only and Video-only (Prerecorded)](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Assumptions

- Test device renders HTML5 video (phantomJS doesn't render)

## Test properties

| Property          | Value
|-------------------|----
| Success Criterion | 1.2.2
| Test mode         | SemiAuto
| Test environment  | DOM and CSS + media API to render frames as images
| Test subject      | DOM document fragment
| User expertise and skills |  no prior knowledge
| User profile      | *For manual tests only:<br/>any additional requirements, such as language skills, use of AT etc.

## Test procedure

### Selector

Test mode: [automatic][AUTO]

`video` element not containing a `track` attribute

For each selected item, go through the following steps:

### Step 1

Test mode: [manual][MANUAL]

- Check if the main content contains text (hl: this could be an extra, automatic, step)
- IF the main content doesn't have text.
  - GO TO step 2
- IF the Video is labelled a media alternative for the text.
  - IF the Video contains more information than the text
    - RETURN SC122media-not-alternative-for-text
  - ELSE
    - RETURN SC122media-alternative-for-text

There is currently no technology to make the label programmatically determinable.

hl: is this - in theory - not possible using aria-labelledby or zria-describedby?

| Outcome  | Passed
|----------|-----
| Testcase | SC122media-alternative-for-text

| Outcome  | Failed
|----------|-----
| Testcase | SC122media-not-alternative-for-text
| Info     | F75: media presents more information than is presented on the page

### Step 2

Test mode: [manual][MANUAL]

- Listen to the audio
- IF the audio is describing video-only content
  - RETURN SC122-video-only-added-audio

QUESTION: how can we automatic determine video-only content if audio is added?

| Outcome  | Passed
|----------|-----
| Testcase | SC122-video-only-added-audio

### Step 3

Test mode: [automatic][AUTO]

First check if the video doesn't contain text at all.

- Check if any of the video frames (may use samples nth seconds) includes text
- IF none
  - RETURN SC122-video-no-open-captions

| Outcome  | Failed
|----------|-----
| Testcase | SC122-video-no-open-captions
| Error    | no caption provided with the video

### Step 4

Test mode: [automatic][AUTO]

- FOR EACH spoken audio fragment
  - FOR EACH of the corresponding video frames
    - IF the corresponding video frame contains text
      - NEXT audio fragment
  -  (NO text found in all frames for this audio fragment)
    = RETURN SC122video-all-dialogs

Probably more forgiving: 80% of spoken audio fragments should include text?

| Outcome  | Failed
|----------|-----
| Testcase | SC122video-all-dialogs
| Error    | Not all dialogs are covered in the captions

### Step 5

Test mode: [manual][MANUAL]

- FOR EACH spoken audio fragment
  - IF the content of the spoken text has NOT the same meaning as the caption text
    - RETURN SC122-video-caption-meaning

| Outcome  | Failed
|----------|-----
| Testcase | SC122-video-caption-meaning
| Error    | The text of the captions doesn't correspond to the spoken text

### Step 6

Test mode: [automatic][AUTO]

From this step we will check if non spoken visual information captured, captions are more than subtitles.

Check to see is a speaker is presented in a fixed frame with unchanging background ('talking head' video).

- FOR EACH frame (between intro frame and end screen)
  - IF the frame contains a head similar to the previous frame.
    - RETURN SC122-video-captions-provided

| Outcome  | Passed
|----------|-----
| Testcase | SC122-video-captions-provided

NOTE: not sure if we should add this step, but if this step can be done fully automatic with frame scanning, we can skip additional manual steps.

### Step 7

Test mode: [manual][MANUAL]

Check for each sound if it is important and has descriptive text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Important sound not explained in the caption
| Pointer  | video-id and timecode

### Step 8

Test mode: [manual][MANUAL]

Check for each background fragment if it is important and the corresponding frame has a captioned text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Location not explained in the caption
| Pointer  | videoid and timecode

### Step 9

Test mode: [manual][MANUAL]

Check for each speaker fragment if its frame has a captioned identification

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Speaker not identified in the captions

### Step 10

Test mode: [manual][MANUAL]

Check for each emotion if it is important and the corresponding frame has a descriptive text

| Outcome  | Failed
|----------|-----
| Testcase | SC 1.2.2 video
| Error    | Emotion not explained in the caption

| Outcome  | Passed
|----------|-----
| Testcase | SC 1.2.2 video

[AUTO]: ../pages/test-modes.html#automatic
[MANUAL]: ../pages/test-modes.html#manual