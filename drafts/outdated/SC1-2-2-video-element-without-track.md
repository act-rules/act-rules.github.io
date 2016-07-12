
# SC1-2-2-video-element-without-track

Back to Success Criterion [[1.2.1_Audio-only_and_Video-only_(Prerecorded)]]


## Description
This test checks that for prerecorded video-only content an alternative text or audio version exists, which is relevant and descriptive for the video-only content.

## Background
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G159 G159: Providing an alternative for time-based media for video-only content]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G166 G166: Providing audio that describes the important video content and describing it as such]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F30 F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)]
- [http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F67 F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information]

## Assumptions
- The video is not a media alternative for another media
- The test does not check for programmatic determinability of the media alternative or a reference such as "The description can be found in text below" from the short text alternative of the video to it.

## Test properties

| Property          | Value
|-------------------|----
| Test name         | Alternate version of prerecorded video-only
| Test requirement  | [[1.2.1 Audio-only and Video-only (Prerecorded)]]
| Test mode         | Manual
| Test environment  | Rendered page + server connection
| Test subject      | Single web page
|User expertise and skills |no prior knowledge
| User profile      | Requires vision, Requires hearing


## Test procedure

### Selector
Test method: [manual]
All pages including elements capable of playing video.

Those can be identified by including elements having an attribute value containing a media file format, such as  .mov, .rm, .ram, .asf, .swf, .dcr, .avi, .mpg, .mpeg, .mp4, .m4v, .webm, .flv, .isma

XPath: `//*[contains(@*,'.mov') or contains(@*,'.rm') or ... ]`

{{Open question
|text = There may be other sources of time-based media,
e.g. animated `<canvas>`: [[http://randomibis.com/coolclock This clock]]
or `<svg>`: [[http://codecanyon.net/item/animatrix-creative-drawing-svg-animations-plugin/full_screen_preview/10853599?ref=jqueryrain&ref=jqueryrain&clickthrough_id=466882247&redirect_back=true This animation]]

### Step 1
Test method: [manual]

Check that the content is video-only.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Media content
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the media consist of only video?
| Help                 | Please check that the audio is not muted. If there is no audio content in the media, select “Yes”. Else select “No”.

If yes, continue with [[#Step 2]]

else return:

| Outcome  | Inapplicable
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-inapplicable1

### Step 2
Test method: [manual]

Check that the video-only content is prerecorded.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Whole page
| Requires context     | yes
| Requires Interaction | yes
| Question             | Is the video-only content prerecorded?
| Help                 | Usually live content is explicitly marked as such. You can also try to navigate to the end of the media. On live content you will be able to navigate . If the content is prerecorded, select “Yes”. Else select “No”.

If yes, continue with [[#Step 3]]

else return:

| Outcome  | Inapplicable
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-inapplicable2

### Step 3
Test method: [manual]

Check that the prerecorded video-only content is not purely decorative and has relevant information for the context of the web page.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Whole page
| Requires context     | yes
| Requires Interaction | yes
| Question             | Is the video-only content solely for decorative purposes and does not contain information?
| Help                 | If the video-only content is purely decorative and does not contain relevant information for the context of the web page select “Yes”. Else select “No”.

If yes, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-pass1

else continue with [[#Step 4]]

### Step 4
Test method: [manual]

Check that there is an alternative version available for the prerecorded video-only content.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | Whole page
| Requires context     | yes
| Requires Interaction | yes
| Question             | Is there an alternative version for the video-only content available?
| Help                 | The alternative version may be a textual alternative or an audio alternative. If such is available directly near the video-only content select “Yes”. Else select “No”.

If yes, continue with [[#Step 5]]

else return:

| Outcome  | Failed
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-fail1
| Error    | Missing alternative version.

### Step 5
Test method: [manual]

Check that the alternative version has the same information presented as the video-only content.

**User Input Question:**

| Property             | Value
|----------------------|---------
| Presented item       | The video-only content and the alternative version
| Requires context     | yes
| Requires Interaction | yes
| Question             | Does the alternative version sufficiently describe and convey all information of the the video-only content?
| Help                 | The alternative version needs to tell the same story and present the same information as the prerecorded video-only content. It should not contain more information than the video-only content itself. If both is true select "Yes". Else select "No".

If yes, return:

| Outcome  | Passed
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-pass2

else return:

| Outcome  | Failed
|----------|-----
| Testcase | SC1-2-1-video-only-alternative
| ID       | SC1-2-1-video-only-alternative-fail2
| Error    | Alternative version not sufficiently descriptive.
