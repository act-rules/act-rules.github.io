Back to Success Criterion [[1.4.2 Audio Control]]


## Description
This test checks that there isn't an automatically started sound after the web page is loaded. If the sound plays automatically this test checks that the sound is no longer than 3 seconds or that there is at the top of the web page a mechanism to control the sound.


## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G60 G60: Playing a sound that turns off automatically within three seconds]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G170 G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G171 G171: Playing sounds only on user request]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F23 F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F93 F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays]


## Assumptions
- The test assumes that audio is rendered in the <audio> element. Therefore this test checks exclusive audio content in the <audio> element.
- The test assumes that video is rendered in the <video> element. Therefore this test checks exclusive video content in the <video> element.
- This test states that the links or buttons for the mechanism to control the sound is one of the first five links or buttons on the web page. This is more specific then the WCAG documentation.


## Test properties
| Property          | Value
|-------------------|----
| Test name         | Audio control
| Test requirement  | SC 1.4.2
| Test mode         | SemiAuto
| Test environment  | DOM
| Test subject      | Single web page
| User profile      | Requires hearing


## Test procedure

### Selector
Test method: [automatic]

`//*[self::audio or self::video]`

### Step 1
Test method: [automatic]

Check if the <audio> or <video> is paused. Check `paused` property.

If true, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-pass1

Else continue with [[#Step 2]]

### Step 2
Test method: [automatic]

Check if the sound is muted. Check `muted` property.

If true, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-pass2

Else continue with [[#Step 3]]

### Step 3
Test method: [automatic]

Check that the sound is no longer than 3 seconds.

Check `duration` property is no longer than 3 seconds.

If true, continue with [[#Step 4]]

Else continue with [[#Step 5]]

### Step 4
Test method: [automatic]

Check if the sound has a loop. Check `loop` property.

If true, continue with [[#Step 5]]

Else, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-pass3

### Step 5
Test method: [manual]

Check if the video plays audio.

**User Input Question:**
| Property             | Value
|----------------------|---------
| Presented item       | Web page with an automatically started sound.
| Requires context     | yes
| Requires Interaction | no
| Question             | Is there audio playing on the web page?
| Help                 | There should not be audio playing automatically on the web page loads.

If yes, continue with [[#Step 6]].

Else, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-pass4

### Step 6
Test method: [manual]

Check if a mechanism to control the sound is provided as one of the first five links or buttons on the web page.

**User Input Question:**
| Property             | Value
|----------------------|---------
| Presented item       | Web page with an automatically started sound.
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the web page provide a mechanism to control the sound as one of the first five links or buttons?
| Help                 | A mechanism to pause or stop the video or audio, or control the volume or mute the audio must be available on the web page. The mechanism must be located as one of the first five links or buttons of the web page. This way people (with screen readers) can turn off the sound before reading the web page. To inspect this, use the tab key to navigate through the web page.

If yes, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-pass5

Else, return:

| Outcome  | Failed
|----------|-----
| Testcase | SC1-4-2-audio-control
| ID       | SC1-4-2-audio-control-fail1
| Error    | No mechanism to control the automaticaly started sound available at the top of the web page.

