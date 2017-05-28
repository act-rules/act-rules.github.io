---
rule_id: SC1-4-2-audio-control-audio
name: Audio control
test_mode: semi-automatic
environment: DOM Structure

success_criterion:
- 1.4.2 # Audio Control (level A)

authors:
- Frank Berker
---

## Description

This test checks that there isn't an automatically started sound after the web page is loaded. If the sound plays automatically this test checks that the sound is no longer than 3 seconds or that there is at the top of the web page a mechanism to control the sound.

## Background

- [G60: Playing a sound that turns off automatically within three seconds](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G60)
- [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G170)
- [G171: Playing sounds only on user request](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G171)
- [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F23)
- [F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F93)

## Assumptions

- The test assumes that audio is rendered in the `audio` element. Therefore this test checks exclusive audio content in the `audio` element.
- The test assumes that video is rendered in the `video` element. Therefore this test checks exclusive video content in the `video` element.
- This test states that the links or buttons for the mechanism to control the sound is one of the first five links or buttons on the web page. This is more specific then the WCAG documentation.

## Test procedure

### Selector

Select all elements that match the following XPATH selector(s):

- `//*[self::audio` or
- `self::video]`

### Step 1

Check if the `audio` or `video` is paused. Check `paused` property.

If true, return [step1-pass](#step1-pass)

Else continue with [step 2][#step-2]

### Step 2

Check if the sound is muted. Check `muted` property.

If true, return [step2-pass](#step2-pass)

Else continue with [step 3][#step-3]

### Step 3

Check that the sound is no longer than 3 seconds.

Check `duration` property is no longer than 3 seconds.

If true, continue with [step 4][#step-4]

Else continue with [Step 5](#step-5)

### Step 4

Check if the sound has a loop. Check `loop` property.

If true, continue with [Step 5](#step-5)

Else, return [step4-pass](#step4-pass)

### Step 5

Check if the video plays audio.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Web page with an automatically started sound.
| question     | Is there audio playing on the web page?
| help         | There should not be audio playing automatically on the web page loads.
| user_profile | Requires hearing
| context      | yes
| interaction  | no

If yes, continue with [Step 6](#step-6).

Else, return [step5-pass](#step5-pass)

### Step 6

Check if a mechanism to control the sound is provided as one of the first five links or buttons on the web page.

**User Input Question:**

| Property     | Value
|--------------|---------
| highlight    | Web page with an automatically started sound.
| question     | Does the web page provide a mechanism to control the sound as one of the first five links or buttons?
| help         | A mechanism to pause or stop the video or audio, or control the volume or mute the audio must be available on the web page. The mechanism must be located as one of the first five links or buttons of the web page. This way people (with screen readers) can turn off the sound before reading the web page. To inspect this, use the tab key to navigate through the web page.
| user_profile | Requires hearing
| context      | yes
| interaction  | yes

If yes, return [step6-pass](#step6-pass)

Else, return [step6-fail](#step6-fail)

## Outcome

The resulting assertion is as follows,

| Property | Value
|----------|----------
| type     | Assertion
| test     | auto-wcag:{{ page.rule_id }}
| subject  | *the selected element*
| mode     | auto-wcag:{{ page.test_mode }}
| result   | <One TestResult from below>

### step1-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step2-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step4-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step5-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step6-pass

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Passed
| description |

### step6-fail

| Property    | Value
|-------------|----------
| type        | TestResult
| outcome     | Failed
| description | No mechanism to control the automaticaly started sound available at the top of the web page.
