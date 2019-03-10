---
title: Definition of "Done" 1.0
---

## What is this? 

It is important that we in the WCAG-ACT-RULES-CG have a shared understanding of what it means for work to be complete.  The Definition of "Done" can be used to assess when work is complete. ([The Scrum Guide](https://www.scrumguides.org/scrum-guide.html#artifact-transparency-done).

It can be used by rule authors as well as reviewers as a checklist to assess whether a rule is done or if it needs another iteration.

Sticking to the Definition of "Done" ensures a high quality in rules published by the WCAG-ACT-RULES-CG, and ensures transparency in our work. 

The Definition of "Done" is a living document, and might change as the rule writing community develops and matures.

## The Definition of "Done"

- The relation between the rule and its accessibility requirements is as described in the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/) under [Accessibility Requirements](https://www.w3.org/TR/act-rules-format/#structure-accessibility-requirements). 
    - Remember to also check that the rule is in line with supporting documentation, e.g. [Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/) and [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG-TECHS/)
- Applicability (for [atomic](https://www.w3.org/TR/act-rules-format/#test-applicability) / [composed rules](https://www.w3.org/TR/act-rules-format/#aggregation-applicability)) and Expectations (for [atomic](https://www.w3.org/TR/act-rules-format/#test-expectations) / [composed rules](https://www.w3.org/TR/act-rules-format/#aggregation-expectations)) live up to the requirements for these sections in the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/)
- Requirements for use of atomic and composed rules are followed, see [Rule Types](https://www.w3.org/TR/act-rules-format/#rule-types) in the [ACT Rules Format](https://www.w3.org/TR/act-rules-format/)
- The rule follows the WCAG-ACT-RULES-CG [rule template](/design/rule-template.html), especially in relation to headings, styling, test case descriptions, etc.
- The rule is using WCAG-ACT-RULES-CG [Glossary terms]({{ site.url }}/pages/glossary) whenever possible. Be particularly aware of the following much-used algorithms:
    - For the Applicability, consider if the definitions [included in the accessibility tree](#included-in-the-accessibility-tree) and [visible on the page](#visible-on-the-page) should be used to narrow down the scope of the rule.
    - For the Applicability and Expectations, consider if the definition for [semantic role](#semantic-role) (including specifics of explicit and implicit semantic role) could be used to describe the targets of the rule.
- The rule links to any relevant documentation, e.g. [Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/) and [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG-TECHS/), specifications used, etc.
- The name of the rule is written in plain language, with capitalized initial letter
- The file name of the rule follows the WCAG-ACT-RULES-CG naming convention
- The rule has been spellchecked
- All links are working, or the linked files are included in the same pull request
