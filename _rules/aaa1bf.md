---
name: No auto-play audio lasts more than 3 seconds
test_type: atomic

description: |
  This rule checks that each auto-play audio or video elements does not have any audio that last more than 3 seconds.

success_criterion: 
- 1.4.2 # Audio Control

test_aspects:
- DOM Tree
- CSS Styling
- Audio output

authors:
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to any HTML `audio` or `video` element that has a `duration` of more than 3 seconds, or is set to `loop`, and that is not `paused` or `muted`. 

## Expectation

For each test target, there is no audio playing, or the audio does not last more than 3 seconds.
 
## Assumptions

## Accessibility Support

## Test Cases

### Passed

### Failed

### Inapplicable
