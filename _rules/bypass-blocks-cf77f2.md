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
  - 306c8a
  - 5effbb
  - b40fd1
  - e53727
authors:
- Jean-Yves Moyen
- Anne Thyme Nørregaard
---

## Applicability

This rule applies to any [document](#https://www.w3.org/TR/dom/#concept-document) where the [document element](#https://www.w3.org/TR/dom/#document-element) is an HTML `<html>` element.

## Expectation

- There is at least one [focusable](#focusable) element within the test target that passes rule [First focusable elements are internal links](https://act-rules.github.io/rules/e53727); and
- Each [focusable](#focusable) element within the test target that passes rule [First focusable elements are internal links](https://act-rules.github.io/rules/e53727) also passes rule [Link text is descriptive](https://act-rules.github.io/rules/5effbb)




For each test target, either the outcome of at least one of the following rules is passed:

- [First focusable elements are internal links](https://act-rules.github.io/rules/e53727)
- (G123: Adding a link at the beginning of a block of repeated content to go to the end of the block)
- [HTML page has a main landmark](https://act-rules.github.io/rules/b40fd1)
- (H69: Providing heading elements at the beginning of each section of content)
- (SCR28: Using an expandable and collapsible menu to bypass block of content)

or the outcome of both these rules is passed:
- (H70: Using frame elements to group blocks of repeated material)
- [Each frame in a frameset has an accessible name](https://act-rules.github.io/rules/306c8a)

> Note to selves: can we have "set of documents/DOM trees" as input aspect?
=> probably not. Try and make people angry.

> Note to selves: H70 is about using `frame` as part of `frameset`, which is deprecated in HTML5. H64 is exactly "Iframe has an accessible name - cae760" but is here used `frame` instead of `iframe`. cae760 specifically rules out `frame` because they are deprecated… Should we consider them as deprecated and ignore this technique (and that will go in the catch all "this rule assume that no other technique is used")?
=> Do it with frames. See what happen.

> Note to selves: Both G123 and H69 require something at the start of each block of content. This is going to be annoying to figure out what exactly is a block of content that needs such a think…
=> H69 is essentially same as "heading is descriptive".
=> G123 is just a big manual mess.

> Note to selves: For SCR28, it is (relatively) easy to check if there is collapsible content in a page, but, as always, not to automatically check if it is "repeated content". There could be a semi-auto rule that first ask where is the repeated content and then auto-check if it's collapsible. However, that would put the question as the very first check and thus ask it for each page, which is rather annoying. Might be bearable if answers can be given at a site wide level and not on a per page basis.
=> try set of pages as input. Write rule as "for each repeated, there exist a button/link"

## Assumptions

This rule assumes that the document has blocks of content that are repeated in multiple documents within the same website. If this is not the case, there is no requirement for the type of mechanism tested in this rule.

This rule assumes that one of the techniques listed here is used to comply to WCAG.

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
