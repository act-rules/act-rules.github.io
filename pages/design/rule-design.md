---
title: Rule Design
---

The WCAG-ACT-RULES-CG rule design builds on WCAG 2.x and its supporting documents. To achieve the goals the following approach is based on [ACT Rules Format 1.0](https://www.w3.org/TR/act-rules-format/):


1. **[Rule properties](#rule-properties)**: Define the test subject and its environment. Includes identifier, name, type and description, as well as other meta data.

2. **[Applicability](#applicability)**: Identify which elements on a page (if any) are to be tested using the rule.

3. **[Expectations](#expectations)**: Assert what must be true about the target elements, in order for them to pass the rule.

4. **[Assumptions](#assumptions)**: Explicitly state all assumptions made by the rule to ensure accountability of the results.

5. **[Accessibility Support](#accessibility-support)**: Provide information on any known feature support issues.

6. **[Background](#background)**: Provide information on relevant resources referenced when developing the rule.

7. **[Test cases](#test-cases)**: Define a range of code examples that demonstrate pass, fail and inapplicable outcomes for readers and for validating implementations.


## Rule Properties

A rule file should have a unique hyphenated filename, created from condensing the name and the unique identifier of the rule, _e.g. "aria-attr-defined-5f99a7"_. A rule file should also have a number of metadata properties at the top of the file.

For more details, see [ACT Rules Format: Structure](https://www.w3.org/TR/act-rules-format/#act-rule-structure)

### Rule identifier

The 6-digit identifier is created using a random hex generator, such as https://www.browserling.com/tools/random-hex. The identifier remains the same if the rule name changes.

### Rule name

The agreed conventions for naming of rules are as follows:

- Be succinct, direct and declarative, and avoid unnecessary words, _e.g. an, the_.
- Use declarative verbs, _e.g. has, have, is_.
- Use back ticks to indicate words from code, _e.g. `label` v. Label_.
- Identify code as an element or attribute as appropriate, _e.g. `title` element, `title` attribute_.
- Use sentence case, _e.g. "Heading is descriptive"_, unless using code, _e.g. "`id` attribute value is unique"_, or initials, _e.g. "HTML page has title"_. Note: names starting with a backtick also need to be wrapped with quotes for the parser. 
- Use singular tense so that necessary plurals stand out, _e.g. "`video` element has captions"_.
- Front load the applicable thing, _e.g. "Button has accessible name"_.
- Refer to each applicable thing in a consistent way across rules, especially when related or checking the same applicable thing.
- Describe the passing condition, _e.g. "`id` attribute value is unique", rather than "page has no duplicate `id`s"_.
- Do not use hyphens or dashes unless correct for code, _e.g. `aria-*`_.
- Do not use camelCase unless correct for code, _e.g. `iframe` not iFrame, `feImage` in SVG_.
- If unsure, refer to WCAG language used.
- Aim to be unique, which should happen if title includes the applicable thing and passing condition.

### Rule type

The rule type is either atomic or composite.

### Description

A brief description of what the rule does. This should be declarative rather than negative. It should begin with "This rule checks that..." or similar. It should use plain language, and be a well-formed grammatically correct sentence that finishes with a full stop/period. 

> _For example: "This rule checks that each ARIA state or property has a valid value."_

### Accessibility requirements

A list of all accessibility requirements that are not satisfied if one or more outcomes of a rule fails. This could be one or more WCAG success criteria, or a WAI-ARIA rule, for example.

For more details, see [ACT Rules Format: Accessibility Requirements Mapping](https://www.w3.org/TR/act-rules-format/#accessibility-requirements-mapping)

### Input aspects or rules

What of a test subject must be available in order to properly run the test. For composite rules this will be the unique identifiers of the applicable atomic rules. For atomic rules the ACT Rules Format defines the following:

- HTTP Messages: All messages sent through HTTP(S)
- DOM Tree: The tree that HTML is parsed into
- CSS Styling: CSS applied to lay out and style the DOM Tree
- Accessibility Tree: The tree that user agents expose to the accessibility API

Other aspects may be necessary for testing. These can be added as long as they are sufficiently defined.

For more details, see [ACT Rules Format: Input](https://www.w3.org/TR/act-rules-format/#input)

### Authors

Names of the Authors. These must be an exact match of names in `contributors` property in `package.json`.

## Applicability

Applicability describes which (elements of) web pages should be tested using the rule. These elements are known as test targets. Applicability must be written in plain language, as well-formed grammatically correct sentences, so that it can be used by QA testers. Applicability must rely on well defined properties of the technologies that are tested. For instance, a rule may be applicable to all `video` elements, but it can not be applicable to all `object` elements used to show video, unless the term "video" is further defined.

Finding objective definitions to use in rules can be difficult, if not outright impossible in some cases. The intent here is to ensure repeatability of the rule. Not everything in WCAG testing is entirely repeatable, but when it comes to rule applicability, this is a hard requirement.

> _For example:_ A rule testing button accessible names could apply to elements other than the `button` element and this could be stated as _"The rule applies to elements that are included in the accessibility tree with the semantic role of button, except for `input` elements of `type="image"`."_.

For more details, see [ACT Rules Format: Applicability](https://www.w3.org/TR/act-rules-format/#applicability)

## Expectations

The applicability help the testers (or test tools) identify what has to be checked. Following that, the expectations are statements that must be true for the applicable elements to pass the rule. Expectations must be written in plain language, as well-formed grammatically correct sentences, so that it can be used by QA testers. If any of the expectations is false, than the target element failed the rule.

Each expectation exposes a reason why an element may not meet a particular conformance requirement. The expectations can be "linked", in that one has to be met before a second can be tested.

> _For example:_ A rule testing link names may have as its first expectation _"The target element has an accessible name."_, and as a second expectation _"Expectation 1 is true for the target element, and the accessible name describes the function of the target element"_.

For more details, see [ACT Rules Format: Expectations](https://www.w3.org/TR/act-rules-format/#expectations)

## Assumptions

Many accessibility evaluations (especially automated tools) make assumptions about the structure of the web content and the way in which (web) technologies are used. Such assumptions influence the outcome of a test. If the assumptions are made implicitly, it will be difficult to interpret the test result. Comparability and reproduction of results by other tools are limited. Therefore the WCAG-ACT-RULES-CG test include a list of all assumptions, limitations and exceptions made in the design of the rule.

> _For example:_ A rule for 1.4.1 Use of Color has to make an assumption which CSS-properties are used to make a link visually evident. Typically something like `background`, `border`, `color`, `font`, or `text-decoration`.

While most assumptions relate to the rule itself, there are some assumptions that apply at other stages of the evaluation:

- It is assumed that the tested web page is the one that has to conform to WCAG 2.1 and that there is no [conforming alternative version](https://www.w3.org/TR/WCAG21/#dfn-conforming-alternate-version).

- It is assumed that the following technologies are accessibility supported: HTML, CSS, WAI-ARIA, ... (See also WCAG-ACT-RULES-CG's [explanation on Accessibility Support](accessibility-support.html)).

For more details, see [ACT Rules Format: Assumptions](https://www.w3.org/TR/act-rules-format/#assumptions)

## Accessibility Support

Sometimes a feature relevant to a rule is not fully supported by assistive technology and user agents. Include information on any known support issues for a feature relevant to the rule.

For more details, see [ACT Rules Format: Accessibility Support](https://www.w3.org/TR/act-rules-format/#accessibility-support)

## Background

While optional, this provides background information relevant to the development of the rule. Any document cited in the rule should be included here, along with any applicable success criterion, understanding or technique documents, other specifications, and any other relevant reading. 

For more details, see [ACT Rules Format: Background](https://www.w3.org/TR/act-rules-format/#background)

## Test cases

The test cases are snippets of code that help with understanding and can be used for validating implementations of the rule. There must be at least one example for **pass**, **fail** and **unapplicable** outcomes. 

Each test case should be simply and uniquely named, _e.g. "Passed Example 1"_. Each example must also include a brief declarative description that uses plain language, and is a well-formed grammatically correct sentence that finishes with a full stop/period. Words from code should use back ticks and be identified as elements or attributes.

> _For example:_ "This page has two `title` elements."

For more details, see [ACT Rules Format: Test Cases](https://www.w3.org/TR/act-rules-format/#test-cases)
