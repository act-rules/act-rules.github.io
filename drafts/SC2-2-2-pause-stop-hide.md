Back to Success Criterion [[2.2.2 Pause, Stop, Hide]]

## Description
This test checks that moving, blinking, scrolling, or auto-updating information doesn’t distract users during their interaction with a web page.

## Background
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G4 G4: Allowing the content to be paused and restarted from where it was paused]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G11 G11: Creating content that blinks for less than 5 seconds]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G152 G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G186 G186: Using a control in the Web page that stops moving, blinking, or auto-updating content]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G187 G187: Using a technology to include blinking content that can be turned off via the user agent]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/G191 G191: Providing a link, button, or other mechanism that reloads the page without any blinking content]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F4 F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F7 F7: Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, that has blinking content without a mechanism to pause the content that blinks for more than five seconds]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F16 F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F47 F47: Failure of Success Criterion 2.2.2 due to using the blink element]
- [http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/F50 F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less]

## Assumptions
This test assumes that the moving, blinking, scrolling, or auto-updating content is not part of an activity where it is essential.

## Test properties

| Property         | Value
|------------------|----
|Test name         |Pause, stop, hide
|Test requirement  |[[2.2.2 Pause, Stop, Hide]]
|Test mode         |SemiAuto
|Test environment  |rendered page
|Test subject      |Single web page
|User profile      |Requires sight


## Test procedure

### Selector
Test method: [manual]
The entire web page.

### Step 1 (F47)
Test method: [semi-automatic]
Check in the code for the presence of the `<blink>` element.

If true:
{{Failed
|testcase = SC2-2-2-pause-stop-hide
|id = SC2-2-2-pause-stop-hide-fail1
|error = Blink element is not allowed.
}}

Else, continue with [[#Step 2 (F4)]]

### Step 2 (F4)
Test method: [semi-automatic]
Check in the code if the `text-decoration:blink` property is set.

If true:
{{Failed
|testcase = SC2-2-2-pause-stop-hide
|id = SC2-2-2-pause-stop-hide-fail2
|error = Text-decoration:blink property is not allowed.
}}

Else, continue with [[#Step 3]]

### Step 3
Test method: [manual]
Check if there is no moving or scrolling content or blinking content longer than 5 seconds.

{{UserInput
|presented-item = Web page.
|requires-context = no
|requires-interaction = no
|question = Is there on the web page moving or scrolling content or blinking content that lasts more than 5 seconds?
|help = Examples of moving or scrolling content are a scrolling banner or a news carousel. Examples of blinking content are animated images, GIF and Flash animations.
}}

If yes, continue with [[#Step 4]].

Else:
{{Passed
|testcase = SC2-2-2-pause-stop-hide
|id = SC2-2-2-pause-stop-hide-pass1
}}

### Step 4
Test method: [manual]
Check if there is a mechanism to pause or stop the moving, scrolling or blinking content.

{{UserInput
|presented-item = Web page.
|requires-context = yes
|requires-interaction = yes
|question = Is there a mechanism to pause or stop the moving, scrolling or blinking content?
|help = Select "Yes" if it is possible to pause or stop the moving, scrolling, blinking content. Else select "No".
}}

If yes:
{{Passed
|testcase = SC2-2-2-pause-stop-hide
|id = SC2-2-2-pause-stop-hide-pass2
}}

Else:
{{Failed
|testcase = SC2-2-2-pause-stop-hide
|id = SC2-2-2-pause-stop-hide-fail3
|error = No mechanism available to pause or stop the moving, scrolling or blinking content.
}}
