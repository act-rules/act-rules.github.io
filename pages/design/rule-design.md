---
title: Rule Design
---

The WCAG-ACT-RULES-CG rule design builds on WCAG 2.x and its supporting documents. To achieve the goals the following approach is suggested:

1. **[Rule properties](#rule-properties)**: Define the test subject and its environment, as well as other meta data.

2. **Description**: Brief description of what the rule does

3. **Background**: A list of resources that support the workings of the rule.

4. **[Assumptions](#assumptions)**: Explicitly state all assumptions made by the rule to ensure accountability of the results.

5. **[Applicability](#applicability)**: Identify which elements on a page (if any) are to be tested using the rule.

6. **[Expectations](#expectations)**: Assert what must be true about the target elements, in order for them to pass the rule.

## Rule Properties

### Rule name and identifier

The rule must have a unique name, preferably a two or three word topic, as well as an identifier. This uses the following format: **SC#-#-#-identifier**

- **SC#-#-#**: This is an identifier for the criterion to which the test case applies. #-#-# stands for the number of that criterion, such as SC4-1-2.

- **+SC#-#-#**: This can be used if the test case applies to multiple success criteria, such as SC1-1-1+SC4-1-2-identifier. The numbers are in the same order as they are used in WCAG.

- **identifier**: This must be a lower case identifier of the test, preferably no more then 3 words. It can only contain alphanumeric values or a dash (-).

### Test aspects

A test aspect is a part of a test subject that must be available in order to properly run the test. The ACT Rules Format defines the following:

- HTTP Messages: All messages sent through HTTP(S)
- DOM Tree: The tree that HTML is parsed into
- CSS Styling: CSS applied to lay out and style the DOM Tree
- Accessibility Tree: The tree that user agents expose to the accessibility API

Other aspects may be necessary for testing. These can be added as long as they are sufficiently defined.

### Authors

Names of the Authors. These must be an exact match of names in `contributors` property in `package.json`.

## Assumptions

Many accessibility evaluations (especially automated tools) make assumptions about the structure of the web content and the way in which (web) technologies are used. Such assumptions influence the outcome of a test. If the assumptions are made implicitly, it will be difficult to interpret the test result. Comparability and reproduction of results by other tools are limited. Therefore the WCAG-ACT-RULES-CG test include a list of all assumptions made by the design of the rule.

> _For example:_ A rule for 1.4.1 Use of Color has to make an assumption with CSS-properties are used to make a link visually evident. Typically something like `background`, `border`, `color`, `font`, or `text-decoration`.

While most assumptions relate to the rule itself, there are some assumptions that apply at other stages of the evaluation:

- It is assumed that the tested web page is the one that has to conform to WCAG 2.0 and that there is no [conforming alternative version](http://www.w3.org/TR/WCAG20/#conforming-alternate-versiondef).

- It is assumed that the following technologies are accessibility supported: HTML, CSS, WAI-ARIA, ... (See also WCAG-ACT-RULES-CG's [explanation on Accessibility Support](accessibility-support.html)).

## Applicability

Applicability describes which (elements of) web pages should be tested using the rule. These elements are known as test targets. Applicability must be written in plain language, so that it can be used by QA testers. Applicability must rely on well defined properties of the technologies that are tested. For example, a rule may be applicable to all `video` elements, but it can not be applicable to all `object` elements used to show video, unless the term "video" is further defined.

Finding objective definitions to use in rules can be difficult, if not outright impossible in some cases. The intent here is to ensure repeatability of the rule. Not everything in WCAG testing is entirely repeatable, but when it comes to rule applicability, this is a hard requirement.

For more details, see [ACT Rules Format: Applicability](https://w3c.github.io/wcag-act/act-rules-format.html#applicability)

## Expectations

The applicability help the testers (or test tools) identify what has to be checked. Following that, the expectations are statements that must be true for the applicable elements to pass the rule. If any of the expectations is false, than the target element failed the rule.

Each expectation exposes a reason why an element may not meet a particular conformance requirement. The expectations can be "linked", in that one has to be met before a second can be tested. For example, a rule testing link names may have as its first expectation "Target element has an accessible name", and as a second expectation "Expectation 1 is true for the target element, and the accessible name describes the function of the target element".

For more details, see [ACT Rules Format: Expectations](https://w3c.github.io/wcag-act/act-rules-format.html#expectations)
