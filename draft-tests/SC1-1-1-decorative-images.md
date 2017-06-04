---
layout: default
title: Tests for SC1-1-1-decorative-images
---

When running the rule against the code snippet, an issue that matches the ID in the header is returned, with a pointer that refers to `#target`

## selector

### applicable

**To do**

### inapplicable

**To do**

## Result: step1-fail

- In step 1, answer `yes`.
- Expect the following test to return the result with id `step2-fail`:

### It fails when the user answers yes

    <img alt="" id="target">

## Result: step1-pass

- Expect the following tests to return the result with id `step2-pass`:
- In step 1, answer `no`.

### It passes when the user answers no

    <img alt="" id="target">