---
id: cf77f2
name: Bypass Blocks
rule_type: composite
description: |
  This rule checks that each page has a mechanism to bypass blocks of content.
accessibility_requirements:
  wcag20:2.4.1: # Bypass Blocks (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
  - 047fe0
  - 306c8a
  - 5effbb
  - 7b576d
  - b40fd1
  - cefbef
  - e38767
  - e53727
authors:
- Jean-Yves Moyen
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `html` element.

**Note**: Some of the atomic rules apply to sets of two or more documents, while some apply to a single documents which is also a set of one document.

## Expectation

Either at least one of the following conditions is true:
- Each test target passes either [Document has headings](https://act-rules.github.io/rules/047fe0) or [HTML page has a main landmark](https://act-rules.github.io/rules/b40fd1); or
- Each block of content repeated among the test targets passes rule [Link to skip block of content](https://act-rules.github.io/rules/7b576d); or
- Each block of content repeated among the test targets passes rule [Block of content is expandable and collapsible](https://act-rules.github.io/rules/cefbef); or

Or both these conditions are true:
- There is at least one [focusable](#focusable) element within the test target that passes rule [First focusable elements are internal links](https://act-rules.github.io/rules/e53727); and
- Each [focusable](#focusable) element within the test target that passes rule [First focusable elements are internal links](https://act-rules.github.io/rules/e53727) also passes rule [Link text is descriptive](https://act-rules.github.io/rules/5effbb)

Or both these conditions are true:
- Each test target is organised using `frameset`, and the `frame` elements with content repeated among all test targets appear in the same location within each `frameset` of each test target; and
- [Each frame in a frameset has an accessible name](https://act-rules.github.io/rules/306c8a) and passes [Frame title is descriptive](https://act-rules.github.io/rules/e38767)

## Assumptions

This rule assumes that one of the techniques listed here is used to comply to WCAG. Other methods could be used to pass this this SC that are unknown at the time of writing this rule.

## Accessibility Support

Techniques and solutions that identify blocks of content are perfectly valid ways of passing [SC 2.4.1 Bypass blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html). They are, however, directed toward screen readers users and keyboard users will not benefit for these. Techniques and solutions based on links will benefit all users and are therefore recommended. 

Users of Assistive Technologies may have trouble with frames. Additionally, the `frame` element is marked as obsolete in HTML 5. Therefore, if `frameset` are not already used to organise the content, other techniques are preferred to satisfy this rule.

## Background
- [Understanding Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)
- Creating links to skip blocks of content:
  - [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
  - [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)
  - [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)
- Grouping and identifying blocks of content:
  - [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
  - [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
  - [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70) **AND** [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
  - [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

### Passed

### Failed

### Inapplicable
