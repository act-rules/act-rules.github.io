---
id: nqzcj8
name: Text inside HTML widget has minimum contrast
rule_type: atomic
description: |
  This rule checks that, for text in native HTML widgets, the highest possible contrast of every text character with its background meets the minimal contrast requirement.
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

This rule applies to any HTML element, character in a [text node][] and set of [widget pseudo-classes][] for which all of the following are true:

- (**widget**) the element has a [semantic role][] that inherit from `widget`; and
- (**ancestor**) the element is an [ancestor][] in the [flat tree][] of the text node, and is its closest [ancestor][] with a [semantic role][] that inherit from `widget`; and
- (**visible**) the character is [visible][]; and
- (**enabled**) the element is not [disabled][]; and
- (**ignored transient states**) the set of [widget pseudo-classes][] contains `:active` and `:hover`; and
- (**matching**) the element matches all of the classes in the set of [widget pseudo-classes][], except possibly `:active` and `:hover`; and
- (**only matching**) the element does not match any [widget pseudo-class][] out of the set.

Note: `:active` and `:hover` ignored as they are normally rather short (especially `:active`) and not clear that bad contrast when `:active` or `:hover` will fail WCAG.

Note: (**enabled**) effectively prevent `:disabled` to be in the set.

Note: ARIA widgets (e.g. `<span role="link">`), won't match most of the pseudo classes. They might match `:focus`. They will nonetheless be considered with the set containing only `:focus` and `:hover`, ignoring them through the (**matching**) condition… Except from possibly `:focus`, they won't be tested in other states, e.g. if a `onclick` change their CSS class to change their appearance, the rule will ignore that.

## Expectation

For each test target, the [highest possible contrast][] between the [foreground colors][] and [background colors][] of the character is at least 4.5:1 or 3.0:1 for [larger scale text][], except if the test target is part of a [text node][] that is [purely decorative][] or does not express anything in [human language][].

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] has exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes][text node] that should be ignored are [disabled][] or hidden from assistive technologies. If this isn't the case, the text node could fail this rule while the success criterion could still be satisfied.

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] also has an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes][text node], the text node could fail while the success criterion could still be satisfied.

- Text that has the same foreground and background color (a contrast ratio of 1:1) is not considered to be "visual presentation of text", making it inapplicable to the success criterion. Text hidden in this way can still cause accessibility issues under other success criteria, depending on the content.

## Accessibility Support

- Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility, which is why this is out of scope for this rule.

When the text color or background color is not specified in the web page, colors from other [origins][] will be used. Testers must ensure colors are not affected by styles from a [user origin][], such as a custom style sheet. Contrast issues cause by specifying the text color but not the background or vise versa, must be tested separately from this rule.

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
[foreground colors]: #foreground-colors-of-text 'Definition of Foreground Color of Text'
[highest possible contrast]: #highest-possible-contrast 'Definition of Highest Possible Contrast'
[human language]: https://www.w3.org/TR/WCAG21/#dfn-human-language-s 'WCAG 2.1 definition of Human language'
[larger scale text]: #large-scale-text 'Definition of Large Scale Text'
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
