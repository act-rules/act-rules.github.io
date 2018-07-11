---
name: Video as a media alternative for text
description: |
  This rule checks non-streaming `video` is a media alternative for text on the page.

test_aspects:
- DOM Tree
- CSS Styling
- [Audio output][]

authors:
- Wilco Fiers
- Brian Bors
---

## Test Procedure

### Applicability

The rule applies to any [non-streaming][] `video` element that is [visible on the page](#visible-on-the-page), where the video contains audio.

### Expectation 1

All the information contained in each target element is available as text (directly or via text alternatives) that is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies).

### Expectation 2

Each target element has a label indicating the `video` is an alternative to text on the page.

### Expectation 3

The label (from expectation 2) is [visible on the page](#visible-on-the-page) and [exposed to assistive technolgies](#exposed-to-assistive-technologies)

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- 

## Test cases

