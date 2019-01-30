---
name: No audio in auto-play
test_type: atomic

description: |
  This rule checks that each auto-play audio or video elements does not have any audio.
success_criterion: 
- 2.4.7 # Focus Visible

test_aspects:
- DOM Tree
- CSS Styling
- 

authors:
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to any HTML `audio` or `video` element that has a `duration` of more than 3 seconds, or is set to `loop`, and that is not `paused` or `muted`. 

## Expectation

For each test target, there is no audio playing.
 
## Assumptions

## Accessibility Support

## Test Cases

### Passed

### Failed

### Inapplicable
