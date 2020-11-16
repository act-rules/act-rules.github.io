---
id: nqzcj8
name: Text inside widget has minimum contrast
rule_type: atomic
description: |
  This rule checks that, for text in widgets, the highest possible contrast of every text character with its background meets the minimal contrast requirement.
accessibility_requirements:
  wcag20:1.4.3: # Contrast (Minimum)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:1.4.6: # Contrast (Enhanced)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any HTML element, character in a [text node][] and set of [widget pseudo-classes][] for which all the following are true:

- **widget**: the element has a [semantic role][] that inherit from `widget`; and
- **ancestor**: the element is an [ancestor][] in the [flat tree][] of the text node, and is its closest [ancestor][] with a [semantic role][] that inherit from `widget`; and
- **visible**: the character is [visible][]; and
- **enabled**: the element is not [disabled][]; and
- **ignored transient states**: the set of [widget pseudo-classes][] contains neither `:active` nor `:hover`; and
- **matching**: the element matches all the classes in the set of [widget pseudo-classes][]; and
- **only matching**: the element does not match any [widget pseudo-class][] out of the set.

## Expectation

For each test target, the [highest possible contrast][] between the [foreground colors][] and [background colors][] of the character is at least 4.5:1 or 3.0:1 for [larger scale text][], except if the test target is part of a [text node][] that is [purely decorative][] or does not express anything in [human language][].

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146] have exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes][text node] that should be ignored are [disabled][] or hidden from assistive technologies. If this isn't the case, the text node could fail this rule while the success criteria could still be satisfied.

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146] also have an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes][text node], the text node could fail while the success criteria could still be satisfied.

- Text that has the same foreground and background color (a contrast ratio of 1:1) is not considered to be "visual presentation of text", making it inapplicable to the success criterion. Text hidden in this way can still cause accessibility issues under other success criteria, depending on the content.

- This rule considers that `:hover` and especially `:active` are transient states and therefore a poor color contrast during the short time when they are matched is not causing any issue. Therefore, the rule does not check widgets in these state. If these states still require a high contrast ratio, it is possible to pass still rule while still failing [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146].

- This rule only checks the various appearances of widgets that correspond to the [widget pseudo-classes][]. Scripting can result in changes of appearance after interaction that are not reflected that way. For example, a `onclick` function could change the CSS classes on an element and thus result in changing the text colors. This rule does not check these and thus can pass while still failing [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146]. Such interactions must be tested separately.

## Accessibility Support

- Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] inheriting from `widget` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The **enabled** condition effectively prevent `:disabled` to be in the set of [widget pseudo-classes][].

Many combinations of [widget pseudo-classes][] are impossible, in the sense that no element can match all of them at the same time. The **matching** condition is thus fairly restrictive in which sets of [widget pseudo-classes][] are applicable to this rule.

The [widget pseudo-classes][] are naturally mapped to the native "HTML widgets" (elements whose [implicit role][] inherits from `widget`) depending on the state of the page. On the other hand, "ARIA widgets" (elements whose [implicit role][] does not inherit from `widget` but with an [explicit role][]) normally can't match any [widget pseudo-class][]. For example, an HTML link (such as an `a` element with an `href` attribute) will always match either the `:link` or `:visited` [widget pseudo-class][], but an ARIA link (such as a `<span role="link">`) will never match any of these. This is a consequence of ARIA's [Non-interference with the Host Language][]. ARIA widgets are nonetheless considered by this rule with an empty set of [widget pseudo-classes][], and sometimes also with `:focus` if the element has been made [focusable][].

Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility, which is why this is out of scope for this rule.

When the text color or background color is not specified in the web page, colors from other [origins][] will be used. Testers must ensure colors are not affected by styles from a [user origin][], such as a custom style sheet. Contrast issues caused by specifying the text color but not the background or vise versa, must be tested separately from this rule.

- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Understanding Success Criterion 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- [CSS Scoping Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-scoping/)

## Test Cases

### Passed

### Failed

### Inapplicable

[ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor 'DOM specification of Ancestor'
[background colors]: #background-colors-of-text 'Definition of Background Color of Text'
[disabled]: #disabled-element 'Definition of Disabled'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree "CSS definition of flat tree (editor's draft)"
[focusable]: #focusable 'Definition of Focusable'
[foreground colors]: #foreground-colors-of-text 'Definition of Foreground Color of Text'
[highest possible contrast]: #highest-possible-contrast 'Definition of Highest Possible Contrast'
[human language]: https://www.w3.org/TR/WCAG21/#dfn-human-language-s 'WCAG 2.1 definition of Human language'
[larger scale text]: #large-scale-text 'Definition of Large Scale Text'
[non-interference with the host language]: https://www.w3.org/TR/wai-aria-1.1/#ua_noninterference 'ARIA Non-interference with the Host Language'
[origins]: https://www.w3.org/TR/css3-cascade/#cascading-origins 'CSS definition of Origin'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'WAI-ARIA definition of the Presentational Roles Conflict Resolution'
[purely decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG 2.1 definition of Purely decorative'
[text node]: https://dom.spec.whatwg.org/#text 'DOM specification of text node'
[sc143]: https://www.w3.org/TR/WCAG21/#contrast-minimum 'WCAG 2.1, Success criterion 1.4.3 Contrast (Minimum)'
[sc146]: https://www.w3.org/TR/WCAG21/#contrast-enhanced 'WCAG 2.1, Success criterion 1.4.6 Contrast (Enhanced)'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[user origin]: https://www.w3.org/TR/css3-cascade/#cascade-origin-user 'CSS definition of User Origin'
[visible]: #visible 'Definition of Visible'
[widget pseudo-class]: #widget-pseudo-classes 'Definition of Widget Pseudo-Classes'
[widget pseudo-classes]: #widget-pseudo-classes 'Definition of Widget Pseudo-Classes'
