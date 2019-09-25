---
title: Mapping To Rule
---

## Implementation Scoping

An implementation does not need to be a one-to-one mapping to ACT-R rules. A single implementation can test multiple ACT-R. In manual test procedures, it is common to test multiple things at once. For instance, a test procedure looking at the language of a page will simultaniously test whether or not the `<html>` element has a `lang` attribute, if the value of the `lang` attribute is valid, and if the value matches the language of the page. This is 3 separate rules, covered in a single test procedure of an implementation.

<figure role="figure" aria-label="Single implementation, mapping to two ACT-R Rules">
  <figcaption>Single implementation, mapping to two ACT-R Rules</figcaption>
  <img src="./images/impl-large-scope.svg" alt="">
</figure>

An tool or methodology can also have multiple implementations that when combined, map to a single ACT-R rule. It is common in automated test tools to split up certain rules, to build up more appropriate remediation advise. While ACT-R may have a single rule to test that all elements with the `img` role have an accessible name, an automated tool may implement testing `img` elements separate from `role="img"`, so that it gives different remediation advise for elements that can have an `alt` attribute, from elements that can't.

<figure role="figure" aria-label="Single ACT-R rule, mapping to two implementation rules">
  <figcaption>Single ACT-R rule, mapping to two implementation rules</figcaption>
  <img src="./images/impl-small-scope.svg" alt="">
</figure>

## Automated Mapping

The correctness of an implementation is based on the results from running the [test cases](../testcases/) in a tool or test procedure. The three types of test cases have a range of outcomes that are allowed:

| Test Case Type | Allowed outcomes                                   |
| -------------- | -------------------------------------------------- |
| Passed         | `passed`, `cantTell` or `inapplicable`             |
| Failed         | `failed` or `cantTell`                             |
| Inapplicable   | `inapplicable`, `cantTell`, `passed` or `untested` |

An implementation that returns one of the allowed outcomes for all test cases in an ACT-R rule is a _correct implementation_. An implementation that has all passed and inapplicable test cases correct, but only has some of the failed test cases correct is called a _partial implementation_. If a tool or methodology has partial implementations for an ACT-R rule that together get all failed test cases correct, this _set of implementations_ is considered a _correct implementation_.

An implementations can be _automated_, _semi-automated_ or _manual_. This is based on the **[mode](https://www.w3.org/TR/EARL10-Schema/#mode)** of the test and whether or not any of the outcomes is `cantTell`. An implementation is _automated_ if the test mode is "[automatic](https://www.w3.org/TR/EARL10-Schema/#automatic)" and none of the outcomes are `cantTell`. An implementation is _manual_ if one or more of the mode is "[manual](https://www.w3.org/TR/EARL10-Schema/#manual)". In all other cases, the implementation is considered _semi-automated_. If the test mode is not provided in the results, the implementation's default will be assumed.
