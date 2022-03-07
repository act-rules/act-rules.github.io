---
title: Mapping To Rule
---

## Implementation Scoping

An implementation procedure does not need to be a one-to-one mapping to an ACT rule. A single implementation procedure can test multiple ACT rules. In manual test procedures, it is common to test multiple things at once. For instance, a procedure looking at the language of a page will simultaneously test whether or not the `<html>` element has a `lang` attribute, if the value of the `lang` attribute is valid, and if the value matches the language of the page. These are 3 separate rules, covered in a single test procedure of an implementation.

<figure role="figure" aria-label="Single implementation, mapping to two ACT Rules">
  <figcaption>Single implementation, mapping to two ACT Rules</figcaption>
  <img src="./images/impl-large-scope.svg" alt="">
</figure>

An accessibility tool or methodology can also have multiple implementation procedures that when combined, map to a single ACT rule. It is common in automated test tools to split up certain rules to build up more appropriate remediation advice. For example there can be a single ACT rule to test that all elements with the `img` role have an accessible name. An automated tool may implement testing `img` elements separate from `role="img"`, so that remediation advice for elements that can have an `alt` attribute will differ from elements that can't.

<figure role="figure" aria-label="Single ACT rule, mapping to two implementation rules">
  <figcaption>Single ACT rule, mapping to two implementation rules</figcaption>
  <img src="./images/impl-small-scope.svg" alt="">
</figure>

## Automated Mapping

The correctness of an implementation procedure is based on the results from running the [test cases](../testcases/) in a tool or test procedure. The three types of test cases have a range of outcomes that are allowed:

| Test Case Type | Allowed outcomes                       |
| -------------- | -------------------------------------- |
| Passed         | `passed`, `cantTell` or `inapplicable` |
| Failed         | `failed` or `cantTell`                 |
| Inapplicable   | `inapplicable`, `cantTell` or `passed` |

An implementation procedure that returns one of the allowed outcomes for all test cases in an ACT rule is a _correct implementation_. A procedure that has all passed and inapplicable test cases correct, but only has some of the failed test cases correct is called a _partial implementation_. If a tool or methodology has partial implementations for an ACT rule that together get all failed test cases correct, this _implementation procedure set_ is considered a _correct implementation_.

An implementation procedure can be _automated_, _semi-automated_ or _manual_. This is based on the **[mode](https://www.w3.org/TR/EARL10-Schema/#mode)** of the test and whether or not any of the outcomes is `cantTell`. An implementation is _automated_ if the test mode is "[automatic](https://www.w3.org/TR/EARL10-Schema/#automatic)" and none of the outcomes are `cantTell`. An implementation is _manual_ if one or more of the mode is "[manual](https://www.w3.org/TR/EARL10-Schema/#manual)". In all other cases, the procedure is considered _semi-automated_. If the test mode is not provided in the results, the implementation's default will be assumed.
