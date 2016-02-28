## Status
{{status|0: Draft|288}}

## Description

This test checks captions in video elements without a track element.

There are three different situations when a track element is not required
- Video is a media alternative for text and labelled as such
- Audio describing video-only content
- Video contains open captions

This procedure describes those situations

## Background

- http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html

## Assumptions
- Test device renders html5 video (phantomJS doesn't render)

## Test properties

| Property         | Value
|------------------|----
|Success Criterion | 1.2.2
|Test mode         | SemiAuto
|Test environment  | DOM and CSS + media API to render frames as images
|Test subject      | DOM document fragment
|User expertise and skills |  no prior knowledge
|User profile      | *For manual tests only:<br/>any additional requirements, such as language skills, use of AT etc.


## Test procedure

### Selector

|Mode- automatic

<VIDEO> not containing a TRACK attribute

### Step 1

|Mode- Manual


- Check if the main content contains text (hl: this could be an extra, automatic, step)
- IF the main content doesn't have text.
** GO TO step 2
- IF the Video is labelled a media alternative for the text.
** IF the Video contains more information than the text
*** RETURN SC122media-not-alternative-for-text
** ELSE
*** RETURN SC122media-alternative-for-text

There is currently no technology to make the label programmatically determinable.
hl: is this - in theory - not possible using aria-labelledby or zria-describedby?

{{Passed
|testcase = SC122media-alternative-for-text
}}

{{Failed
|testcase = SC122media-not-alternative-for-text
|info = F75: media presents more information than is presented on the page
}}

### Step 2

|Mode- manual

- Listen to the audio
- IF the audio is describing video-only content
** RETURN SC122-video-only-added-audio

QUESTION: how can we automatic determine video-only content if audio is added?

{{Passed
 |testcase = SC122-video-only-added-audio
 }}

### Step 3

|Mode- automatic

First check if the video doesn't contain text at all.
- Check if any of the video frames (may use samples nth seconds) includes text
- IF none
** RETURN SC122-video-no-open-captions

{{Failed
 |testcase = SC122-video-no-open-captions
 |error = no caption provided with the video
 }}

### Step 4

|Mode- semi-automatic

- FOR EACH spoken audio fragment
** FOR EACH of the corresponding video frames
*** IF the corresponding video frame contains text
**** NEXT audio fragment
**  (NO text found in all frames for this audio fragment)
*** RETURN SC122video-all-dialogs

Probably more forgiving: 80% of spoken audio fragments should include text?

{{Failed
 |testcase = SC122video-all-dialogs
 |error = Not all dialogs are covered in the captions
 }}

### Step 5
|Mode- manual


- FOR EACH spoken audio fragment
** IF the content of the spoken text has NOT the same meaning as the caption text
*** RETURN SC122-video-caption-meaning
{{Failed
 |testcase = SC122-video-caption-meaning
 |error = The text of the captions doesn't correspond to the spoken text
 }}

### Step 6
From this step we will check if non spoken visual information captured, captions are more than subtitles.

|Mode- semi-automatic

Check to see is a speaker is presented in a fixed frame with unchanging background ('talking head' video).
- FOR EACH frame (between intro frame and end screen)
** IF the frame contains a head similar to the previous frame.
*** RETURN SC122-video-captions-provided

{{Passed
 |testcase = SC122-video-captions-provided
 }}

NOTE: not sure if we should add this step, but if this step can be done fully automatic with frame scanning, we can skip additional manual steps.

### Step 7
|Mode- manual


Check for each sound if it is important and has descriptive text
{{Failed
 |testcase = SC 1.2.2 video
 |error = Important sound not explained in the caption
 |pointer = video-id and timecode
 }}

### Step 8
|Mode- manual


Check for each background fragment if it is important and the corresponding frame has a captioned text
{{Failed
 |testcase = SC 1.2.2 video
 |error = Location not explained in the caption
 |pointer = videoid and timecode
 }}

### Step 9
|Mode- manual


Check for each speaker fragment if its frame has a captioned identification
{{Failed
 |testcase = SC 1.2.2 video
 |error = Speaker not identified in the captions
 }}

### Step 10
|Mode- manual


Check for each emotion if it is important and the corresponding frame has a descriptive text
{{Failed
 |testcase = SC 1.2.2 video
 |error = Emotion not explained in the caption
 }}

{{Passed
 |testcase = SC 1.2.2 video
 }}
