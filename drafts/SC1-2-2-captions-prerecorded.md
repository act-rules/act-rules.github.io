# SC1-2-2-captions_prerecorded

## Description
This test checks that prerecorded synchronized media (almost video) contains captions, which are a complete substitute of the audio content.

## Background
- [Captions (Prerecorded): Understanding SC 1.2.2](http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)
* [G93: Providing open (always visible) captions](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G93)
* [G87: Providing closed captions](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G87)
* [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F8)
* [F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F75)
* [F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F74)

## Assumptions
- The synchronized media is not a media alternative for another media
- The test does not check for programmatic determinability of the media alternative or a reference such as "The description can be found in text below" from the short text alternative of the video to it.

## Test properties
|Property|Value
|-|-|
|Test name|Captions on prerecorded synchronized media|
|Test requirement|SC1-2-2-captions_prerecorded|
|Test mode|manual|
|Test environment|rendered page + server connection|
|Test subject|single web page|
|User expertise and skills|no prior knowledge|
|User profile|Requires vision + hearing|
## Test procedure

### Selector
{{mode-manual}}
All pages including elements capable of playing video.

Those can be identified by including elements having an attribute value containing a media file format, such as  .mov, .rm, .ram, .asf, .swf, .dcr, .avi, .mpg, .mpeg, .mp4, .m4v, .webm, .flv, .isma

XPath: <code>//*[contains(@*,'.mov') or contains(@*,'.rm') or ... ]</code>

{{Open question
|text = There may be other sources of time-based media, 
e.g. animated <code><canvas></code>: [[http://randomibis.com/coolclock This clock]]
or <code><svg></code>: [[http://codecanyon.net/item/animatrix-creative-drawing-svg-animations-plugin/full_screen_preview/10853599?ref=jqueryrain&ref=jqueryrain&clickthrough_id=466882247&redirect_back=true This animation]]
}}

### Step 1
{{mode-manual}}
Check that the content is a video containing an audio-track.

{{UserInput
|presented-item = Media content
|requires-context = yes
|requires-interaction = yes
|question = Does the media consist of video combined with audio?
|help = Please check that the audio is not muted. If there is audio content in the media, select “Yes”. Else select “No”.
}}

If yes, continue with [[#Step 2]]

else return: 
{{Inapplicable
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-inapplicable1
}}

=## Step 2=
{{mode-manual}}
Check that the video-only content is prerecorded.

{{UserInput
|presented-item = Whole page
|requires-context = yes
|requires-interaction = yes
|question = Is the video-only content prerecorded?
|help = Usually live content is explicitly marked as such. You can also try to navigate to the end of the media. On live content you will not be able to. If the content is prerecorded, select “Yes”. Else select “No”.
}}

If yes, continue with [[#Step 3]]

else return: 
{{Inapplicable
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-inapplicable2
}}

=## Step 3=
{{mode-manual}}
Check that the prerecorded video-only content is not purely decorative and has relevant information for the context of the web page.

{{UserInput
|presented-item = Whole page
|requires-context = yes
|requires-interaction = yes
|question = Is the video-only content solely for decorative purposes and does not contain information?
|help = If the video-only content is purely decorative and does not contain relevant information for the context of the web page select “Yes”. Else select “No”.
}}

If yes, return: 
{{Passed
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-pass1
}}

else continue with [[#Step 4]]

=## Step 4=
{{mode-manual}}
Check that there is an alternative version available for the prerecorded video-only content.

{{UserInput
|presented-item = Whole page
|requires-context = yes
|requires-interaction = yes
|question = Is there an alternative version for the video-only content available?
|help = The alternative version may be a textual alternative or an audio alternative. If such is available directly near the video-only content select “Yes”. Else select “No”.
}}

If yes, continue with [[#Step 5]]

else return: 
{{Failed
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-fail1
|error = Missing alternative version.
}}


=## Step 5=
{{mode-manual}}
Check that the alternative version has the same information presented as the video-only content.

{{UserInput
|presented-item = The video-only content and the alternative version
|requires-context = yes
|requires-interaction = yes
|question = Does the alternative version sufficiently describe and convey all information of the the video-only content?
|help = The alternative version needs to tell the same story and present the same information as the prerecorded video-only content. It should not contain more information than the video-only content itself. If both is true select "Yes". Else select "No".
}}

If yes, return:
{{Passed
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-pass2
}}

else return:
{{Failed
|testcase = SC1-2-2-manual
|id = SC1-2-2-manual-fail2
|error = Alternative version not sufficiently descriptive.
}}
