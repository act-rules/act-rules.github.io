---
title: Rule Design
---

The WCAG-ACT-RULES-CG rule design builds on WCAG 2.x and its supporting documents. To achieve the goals the following approach is based on [ACT Rules Format](https://www.w3.org/TR/act-rules-format/):

1. **[Rule properties](#rule-properties)**: Define the test subject and its environment. Includes identifier, name, type and description, as well as other meta data.

2. **[Applicability](#applicability)**: Identify which elements on a page (if any) are to be tested using the rule.

3. **[Expectations](#expectations)**: Assert what must be true about the target elements, in order for them to pass the rule.

4. **[Background](#background)**: Provide information on relevant resources referenced when developing the rule.

5. **[Assumptions](#assumptions)**: Explicitly state all assumptions made by the rule to ensure accountability of the results.

6. **[Accessibility Support](#accessibility-support)**: Provide information on any known feature support issues from assistive technologies or user agents.

7. **[Test cases](#test-cases)**: Define a range of code examples that demonstrate pass, fail and inapplicable outcomes for readers and for validating implementations.

8. **Glossary**: A list of any defined terms used within the rule file.

## Rule Properties

A rule file should have a unique hyphenated filename, created from condensing the name and the unique identifier of the rule, and usually starting with the test target, _e.g. "aria-attr-defined-5f99a7"_. A rule file should also have the following metadata properties at the top of the file.

For more details, see [ACT Rules Format: Structure](https://www.w3.org/TR/act-rules-format/#act-rule-structure).

### Rule identifier

The 6-character identifier is created using a random alpha-numeric generator, such as [random.org/strings](https://www.random.org/strings/?num=1&len=6&digits=on&loweralpha=on&format=html&rnd=new). The identifier remains the same if the rule name changes.

### Rule name

The rule name is its descriptive title. The agreed conventions for naming of rules are as follows:

- Be succinct, direct and declarative, and avoid unnecessary words, _e.g. an, the_.
- Use declarative verbs, _e.g. has, have, is_.
- Identify code as an element or attribute as appropriate, _e.g. title element, title attribute_.
- Use sentence case, _e.g. "Heading is descriptive"_, including for code, _e.g. "Id attribute value is unique"_, or initials, _e.g. "HTML page has title"_.
- Use singular tense so that necessary plurals stand out, _e.g. "Video element has captions"_.
- Front load the applicable thing, _e.g. "Button has accessible name"_.
- Refer to each applicable thing in a consistent way across rules, especially when related or checking the same applicable thing.
- Describe the passing condition, _e.g. "Id attribute value is unique", rather than "page has no duplicate id attributes"_.
- Do not use hyphens or dashes unless correct for code, _e.g. aria-\*_.
- Do not use camelCase unless correct for code, _e.g. iframe not iFrame, feImage in SVG_.
- If unsure, refer to WCAG language used.
- Aim to be unique, which should happen if title includes the applicable thing and passing condition.

### Rule type

The rule type is either atomic or composite.

For more details, see [ACT Rules Format: Rule Types](https://www.w3.org/TR/act-rules-format/#rule-types).

### Description

The description is a short synopsis of what the rule does. This should be declarative rather than negative. It should begin with "This rule checks that..." or similar. It should use plain language, and be a well-formed grammatically correct sentence that finishes with a full stop/period.

> _For example: "This rule checks that each ARIA state or property has a valid value."_

### Accessibility requirements

List all accessibility requirements that are not satisfied if one or more outcomes of a rule fails. For example, this could be one or more WCAG success criteria, or a WAI-ARIA rule. Each requirement should indicate the associated conformance level, and map the implications of each outcome, such as "satisfied", "not satisfied", or "further testing needed".

Accessibility requirements should be listed as secondary if the requirement is related to the rule. There are four scenarios:

1. The requirement is less strict than the rule. If this occurs, and some but not all failed examples of the rule pass the accessibility requirement, the following text should be used:

   > This success criterion is **less strict** than this rule. This is because {reason}. Some of the failed examples satisfy this success criterion.

1. The requirement is more strict than the rule. If this occurs, and some but not all passed examples of the rule fail the accessibility requirement, the following text should be used:

   > secondary: This success criterion is **more strict** than this rule. This is because {reason}. Some of the passed examples do not satisfy this success criterion.

1. The requirement is related to, but different from the rule. This often happens when there is overlap between two accessibility requirements. If this occurs, and some but not all the failed examples of the rule fail the accessibility requirement, the following text should be used:
   > This success criterion is **related** to this rule. This {is because / happens for} {reason}. Most failed examples satisfy this success criterion.

1) Atomic rules used in composite rules should list the requirements from the composite rule as "more strict" secondary requirements.

Secondary requirements are optional and are only necessary when a requirement fails some of the passed examples or passes some of the failed examples. If there are no such examples, it is generally not necessary to include secondary requirements.

**Note**: When linking to WCAG or other sources that may have several versions, use the version number where the relevant requirement was first introduced.

For more details, see [ACT Rules Format: Accessibility Requirements Mapping](https://www.w3.org/TR/act-rules-format/#accessibility-requirements-mapping).

### Input aspects or rules

What of a test subject must be available in order to properly run the test. For composite rules this will be the unique identifiers of the applicable atomic rules. For atomic rules the ACT Rules Format defines the following:

- HTTP Messages: All messages sent through HTTP(S)
- DOM Tree: The tree that HTML is parsed into
- CSS Styling: CSS applied to lay out and style the DOM Tree
- Accessibility Tree: The tree that user agents expose to the accessibility API

Other aspects may be necessary for testing. These can be added as long as they are sufficiently defined.

For more details, see [ACT Rules Format: Input](https://www.w3.org/TR/act-rules-format/#input).

### Acknowledgments

While optional, this can provide information on authors, previous authors, and other contributors who have helped with creation of a rule. When listing authors or other acknowledgments, names must be an exact match of names under the `contributors` property in `package.json`. Note: If an author does not exist in `package.json`, they should be added to that file as part of the relevant PR. Authors should be listed in alphabetical order of their given name.

## Applicability

Applicability describes which (elements of) web pages should be tested using the rule. These elements are known as test targets. Applicability must be written in plain language, as well-formed grammatically correct sentences, so that it can be used by QA testers. Applicability must rely on well defined properties of the technologies that are tested. For instance, a rule may be applicable to all `video` elements, but it can not be applicable to all `object` elements used to show video, unless the term "video" is further defined.

Use objective, unambiguous definitions within applicability. Finding objective definitions to use in rules can be difficult, if not outright impossible in some cases. The intent here is to ensure repeatability of the rule. Not everything in WCAG testing is entirely repeatable, but when it comes to rule applicability, this is a hard requirement.

> _For example:_ A rule testing that page titles are descriptive should only apply to specific `title` elements and this could be stated as _"This rule applies to the first HTML `title` element that is a descendant of the `html` element of a web page, and contains children that are text nodes that are not only whitespace."_.

For more details, see [ACT Rules Format: Applicability](https://www.w3.org/TR/act-rules-format/#applicability).

## Expectations

The applicability help the testers (or test tools) identify what has to be checked. Following that, the expectations are statements that must be true for the applicable elements to pass the rule. Expectations must be written in plain language, as well-formed grammatically correct sentences, so that it can be used by QA testers. If any of the expectations is false, than the target element failed the rule.

Use unambiguous definitions within expectations, even where subjective human judgment may be required to determine conformance. Each expectation exposes a reason why an element may not meet a particular conformance requirement. The expectations can be "linked", in that one has to be met before a second can be tested.

> _For example:_ A rule testing link names may have as its first expectation _"The target element has an accessible name."_, and as a second expectation _"Expectation 1 is true for the target element, and the accessible name describes the function of the target element"_.

For more details, see [ACT Rules Format: Expectations](https://www.w3.org/TR/act-rules-format/#expectations).

## Assumptions

Many accessibility evaluations (especially automated tools) make assumptions about the structure of the web content and the way in which (web) technologies are used. Such assumptions influence the outcome of a test. If the assumptions are made implicitly, it will be difficult to interpret the test result. Comparability and reproduction of results by other tools are limited. Therefore the WCAG-ACT-RULES-CG test include a list of all assumptions, limitations and exceptions made in the design of the rule.

> _For example:_ A rule for 1.4.1 Use of Color has to make an assumption which CSS-properties are used to make a link visually evident. Typically something like `background`, `border`, `color`, `font`, or `text-decoration`.

While most assumptions relate to the rule itself, there are some assumptions that apply at other stages of the evaluation:

- It is assumed that the tested web page is the one that has to conform to WCAG 2.2 and that there is no [conforming alternative version](https://www.w3.org/TR/WCAG22/#dfn-conforming-alternate-version).

- It is assumed that the following technologies are accessibility supported: HTML, CSS, WAI-ARIA, ... (See also WCAG-ACT-RULES-CG's [explanation on Accessibility Support](accessibility-support.html)).

For more details, see [ACT Rules Format: Assumptions](https://www.w3.org/TR/act-rules-format/#assumptions).

## Accessibility Support

Sometimes a feature relevant to a rule is not fully supported by assistive technology and user agents. Include information on any known support issues for a feature relevant to the rule.

For more details, see [ACT Rules Format: Accessibility Support](https://www.w3.org/TR/act-rules-format/#accessibility-support).

## Background

While optional, this provides background information relevant to the development of the rule. Any document cited in the rule should be included here, along with any applicable success criterion, understanding or technique documents, other specifications, and any other relevant reading.

For more details, see [ACT Rules Format: Background](https://www.w3.org/TR/act-rules-format/#background).

## Test cases

The test cases are snippets of code that help with understanding and can be used for validating implementations of the rule. There must be at least one example for **pass**, **fail** and **inapplicable** outcomes, with reasonable coverage of all logically possible cases. All examples should demonstrate good practice, with allowances for omitting code not directly relevant for the rule, so as to be succinct. Additionally, a failing example should clearly fail in only one demonstrated aspect relevant for that rule.

> _For example_: a passing example of a page with a `title` element might omit the `lang` attribute on the `html` element, and the `head` and `body` elements in order to be succinct. A failing example might also omit the `title` element. Meanwhile a passing example of a descriptive `title` element would include the `lang` attribute because it is relevant.

Each test case must be named in the format "Passed/Failed/Inapplicable Example X", where X is a number sequentially increasing for each of the three kinds of outcome, _e.g. "Passed Example 1"_. Each must also include a brief description that explains why the example has the outcome it claims to have.

The description should:

- use declarative plain language in the format: _This \[test target\] \[meets / does not meet condition\] \[because optional reasons\]._;
- fully qualify the relevant test target, such as a particular element, or element with id, or first such element, or absent element;
- state that the example _has_ or _does not have_ or _contains_ the necessary condition to be met, and optionally any clarifying reasons;
- use sentences that are well-formed, grammatically correct and finish with a full stop/period; and
- use back ticks around any words from code and identify them as elements or attributes.

> _For example: "This page has a `title` element with content."_

For a detailed description on what to write test cases for see [test case design](../test-cases). For more details, see [ACT Rules Format: Test Cases](https://www.w3.org/TR/act-rules-format/#test-cases).

## Listed conditions

Applicability and expectations, often have multiple conditions that need to be met for something to be applicable / passed. When there are more than three conditions, listing them all in the running text can be difficult to read and understand. Instead, use a bullet-point list following this format:

> Some condition... for which (all | one of) the following is true:
>
> - (**label 1**:) the (X) has condition A; (and | or)
> - (**label 2**:) the (X) has condition B; (and | or)
> - (**label 3**:) the (X) has condition C.

This phrasing is designed to be easily readable, but may not work in every situation. In all cases prefer readability over prescriptive formatting. Additionally to this, keep the following in mind when listing conditions:

- The phrasing "for which (all | at least one of) the following is" can be modified based on use, such as "to achieve at least one of the following objectives".
- Labels are optional, not recommended for lists of 2, and recommended for lists of 4 or more conditions. Keep the labels short, 1 or 2 words. If the label does not help clarify the list, don't use them even for longer lists (for example when the condition is short and the label would just repeat it). If you use labels, all items in the list need to have a label.
- The subject must be referenced in some way in each conditional. For example by starting with "the element has", or by using phrasing like "The innerText of the element has...". The subject must be a single word that is referenced in the phrase preceding the conditional list. Exception: When using element or attribute names, include what it is in the referenced, e.g. "`img` element".
- Tend towards using a list if there are more than three conditions. Keep the most important condition(s) in the phrase, not in the list. For example, if something is about `img` elements, use "Each `img` element for which all the following is true, instead of putting "`img` element" in the condition list itself.
- Put things in order of how common they likely are. Even for unordered lists, this helps understand the list.
- Avoid nested conditional lists. These are difficult to read. Instead try to restructure the conditionals. This can be done by either moving some of the list items into the condition phrase, or putting all the subconditions in a single phrase in the condition item. In expectations, use multiple conditions.
- Group similar concepts into the same list item. For example, if something can have `absolute` or `fixed`, these two are closely related so putting them down as one item helps limit the number of conditions.
- Write test cases that check each condition of the list individually. This helps understand why that specific condition is needed.
- Refer to the labels of the condition in the test case description to make the link explicit.
- Order the test cases in the same order than the conditions they check, with conditions ordered from most important to least important, this implies that test cases are also ordered by importance.
