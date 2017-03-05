---
layout: default
title: Tests for SC1-1-1-decorative-images
---

When running the rule against the code snippet, an issue that matches the ID in the header is returned, with a pointer that refers to `#target`

## selector

### applicable


### inapplicable



## Result: step1-fail

Expect the following tests to return the result with id `step1-fail`:

### it returns with aria-describedby

    <img alt="" aria-describedby="myelm" id="target">

### it returns with longdesc

    <img alt="" aria-longdesc="myelm" id="target">

## Result: step2-fail

- In step 2, answer `yes`.
- Expect the following test to return the result with id `step2-fail`:

### It fails when the user answers yes

    <img alt="" id="target">

## Result: step2-pass

- Expect the following tests to return the result with id `step2-pass`:
- In step 2, answer `no`.

### It passes when the user answers no

    <img alt="" id="target">