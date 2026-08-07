---
id: b49b2e
name: Heading is relevant
rules_format: 1.1
rule_type: atomic
description:
  This rule checks that headings are relevant to a specific topic, purpose or page.
accessibility_requirements:
  wcag20:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Armağan Tekdöner
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability
This rule applies to semantic heading elements that are [included in the accessibility tree](included-in-the-accessibility-tree "Definition of included in the accessibility tree"), as well as to any HTML element that is styled as a heading. Elements that are styled as a heading may include features such as a larger font-size than nearby text, bolding or changing of the font, or the use of whitespace or shapes that visually distinguish the element text, as well as an image of text such as a text banner displayed like a heading as the first visible element on the page.

### Applicability Type Designation:
Rule contains subjective applicability, depending on whether the element evaluated as a heading by implementers should be considered a heading.

## Expectations

Each heading is relevant to the specific page or section where it appears and it is sufficiently intelligible.

## Background
Headings are normally marked as semantic headings using `<h1>` to `<h6>` elements or using generic elements with correct ARIA roles that convert them into semantic headings. On the other hand, on websites that are not adhering to HTML5 semantic coding practices, or that are intended to apply semantics in the code while containing errors in the usage of ARIA roles for example, other elements can be observed that function as headings. Sometimes a heading is a list item, sometimes a figcaption, sometimes a table caption, sometimes another element that is not normally a heading.

Under this rule, "content" refers to any textual or non-textual element presented on the web page, including sections, paragraphs, forms, user interface components, media galleries, lists, or hyperlinks.

To pass, a heading must be relevant to its associated content. (Headings consisting of placeholder text or uninformative character strings fail this rule inherently.)

### Assumptions
This rule assumes that testers evaluating the content possess the necessary language proficiency and contextual comprehension required to assess the relationship between the headings and their associated content. Web pages containing content in multiple languages (e.g., a heading in one language preceding content in another) where the tester does not possess professional working proficiency in all languages present is a limitation.  
Live, dynamic content fields (e.g., streaming data feeds, live social walls, or active chat interfaces) where the content updates at a rate that prevents static evaluation against its structural headings or content that is highly specialized, academic, or artistic are exceptions when the evaluator does not posess the necessary know-how to determine whether the heading is relevant.

This rule is designed as a test-to-pass evaluation and failures should be reserved for exceptional cases. Testers should default to a passing or not applicable result when in doubt.

### Accessibility Support
This rule does not rely on the support for particular accessibility features by different assistive technologies and user agents. 

### Other Resources
- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [Understanding Success Criterion 2.4.10 Section Headings](https://www.w3.org/WAI/WCAG21/Understanding/section-headings)
- [Use headings to convey meaning and structure](https://www.w3.org/WAI/tips/writing/#use-headings-to-convey-meaning-and-structure)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)
