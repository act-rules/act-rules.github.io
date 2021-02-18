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

This rule applies to a [visible][] character in a [text node][] for which all the following are true:

- **widget** the [text node][] has an [ancestor][] in the [flat tree][] with a [semantic role][] that inherit from `widget`; and
- **enabled** the closest [ancestor][] of the [text node][] in the [flat tree][] with a [semantic role][] of `widget` is not [disabled][].

### Applicable States

This rule applies whenever the closest [ancestor][] of the [text node][] in the [flat tree][] is in any state [def needed, intention here is "set of CSS pseudo classes matched by an element"] that contains neither `:active` nor `:hover`.

## Expectation

For each test target, the [highest possible contrast][] between its [foreground colors][] and [background colors][] is at least 4.5:1 or 3.0:1 for [larger scale text][], except if the test target is part of a [text node][] that is [purely decorative][] or does not express anything in [human language][].

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146] have exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes][text node] that should be ignored are [disabled][] or hidden from assistive technologies. If this isn't the case, the text node could fail this rule while the success criteria could still be satisfied.

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146] also have an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes][text node], the text node could fail while the success criteria could still be satisfied.

- Text that has the same foreground and background color (a contrast ratio of 1:1) is not considered to be "visual presentation of text", making it inapplicable to the success criterion. Text hidden in this way can still cause accessibility issues under other success criteria, depending on the content.

- The definition of [disabled element][disabled] assumes that when the `aria-disabled` attribute is specified on an element, this element has also been disabled for users that do not rely on [assistive technology][]. If this is not the case, that definition may produce incorrect results and in consequence this rule might be Inapplicable to some text nodes that still require a good contrast ratio.

- This rule considers that `:hover` and especially `:active` are transient states and therefore a poor color contrast during the short time when they are matched is not causing any issue. Therefore, the rule does not check widgets in these states. If these states still require a high contrast ratio, it is possible to pass still rule while still failing [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146].

- This rule only checks the various appearances of widgets that correspond to states [def needed]. Scripting can result in changes of appearance after interaction that are not reflected that way. For example, a `onclick` function could change the CSS classes on an element and thus result in changing the text colors. This rule does not check these and thus can pass while still failing [Success criterion 1.4.3: Contrast (Minimum)][sc143] and [Success criterion 1.4.6: Contrast (Enhanced)][sc146]. Such interactions must be tested separately.

## Accessibility Support

- Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] inheriting from `widget` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The **enabled** condition effectively prevents `:disabled` to be in the state [def needed].

The CSS pseudo-classes are naturally mapped to the native "HTML widgets" (elements whose [implicit role][] inherits from `widget`) depending on the state of the page and according to the [HTML pseudo-classes][]. On the other hand, "ARIA widgets" (elements whose [implicit role][] does not inherit from `widget`, but with an [explicit role][]) normally can't match most pseudo-classes. For example, an HTML link (such as an `a` element with an `href` attribute) will always match either the `:link` or `:visited` [widget pseudo-class][], but an ARIA link (such as a `<span role="link">`) will never match any of these. This is a consequence of ARIA's [Non-interference with the Host Language][]. ARIA widgets are nonetheless considered by this rule with an empty state, and sometimes also with `:focus` if the element has been made [focusable][].

Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility, which is why this is out of scope for this rule.

When the text color or background color is not specified in the web page, colors from other [origins][] will be used. Testers must ensure colors are not affected by styles from a [user origin][], such as a custom style sheet. Contrast issues caused by specifying the text color but not the background or vise versa, must be tested separately from this rule.

- [Text has minimum contrast](https://act-rules.github.io/rules/afw4f7)
- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Understanding Success Criterion 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- [CSS Scoping Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-scoping/)

Due to the various [widget pseudo-classes][] that a given element can match, each example often contains several test targets. For example, a link is applicable with the sets of [widget pseudo-classes][] {`:link`}, {`:link`, `:focus`}, {`:visited`}, and {`:visited`, `:focus`}. Test case descriptions often do not list all of these, unless the example illustrates something about them.

## Test Cases

### Passed

#### Passed Example 1

With default browser styling, the text in this `a` element with an [implicit role][] of `link` has a white background and is blue (`#0000EE`) when matching `:link` and purple (`#551A8B`) when matching `:visited`; whether it matches or not `:focus` doesn't change its color. These colors have a respective contrast ratios of 9.4:1 and 11:1 with the white background.

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 2

With default browser styling, the text in the `span` element inside this link has contrast ratio of 9.4:1 when the `a` element matches `:link`, and 11:1 when it matches `:visited`. The text is not a child of the widget, but is nonetheless a descendant of it.

```html
<a href="https://act-rules.github.io/"><span>ACT rules</span></a>
```

#### Passed Example 3

With default browser styling, the text in this `button` element has a light gray background (`#EFEFEF`) and black text, resulting in a 18.3:1 contrast ratio.

```html
<button>ACT rules</button>
```

#### Passed Example 4

The text in this link, on default white background, has color contrast ratios of 8.6:1, 10:1, 5.1:1, and 5.2:1 in the 4 states listed in the `style` element.

```html
<style>
	:link {
		color: blue;
	}
	:visited {
		color: darkred;
	}
	:link:focus {
		color: green;
	}
	:visited:focus {
		color: #707000;
	}
</style>
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 5

The text in this `input` element, on default white background, has color contrast ratios of 5.1:1, and 8.6:1 when it's focused or not. Note that in modern browsers, the text itself is included in a shadow tree inside the `input` element.

```html
<style>
	input {
		color: blue;
	}
	input:focus {
		color: green;
	}
</style>
<input value="ACT rules" />
```

#### Passed Example 6

The text in this `input` element, on default white background, has color contrast ratios of 5.1:1, and 10:1 when it's focused or not. Note that when the `input` element is matching both the `:placeholder-shown` and the `:focus` [widget pseudo-classes][], the styling defined latest takes precedence. The text keeps a color ratio of 8.6:1 if some value is provided.

```html
<style>
	input {
		color: blue;
	}
	input:placeholder-shown {
		color: darkred;
	}
	input:focus {
		color: green;
	}
</style>
<input placeholder="W3C" />
```

#### Passed Example 7

With default browser styling, the text in this link, has a white background and is blue (`#0000EE`) when matching `:link` and purple (`#551A8B`) when matching `:visited`. These colors have a respective contrast ratios of 9.4:1 and 11:1 with the white background. When the link matches both `:link` and `:active`, the contrast ratio of its text is only 2:1, however, the `:active` [widget pseudo-class][] is ignored by this rule.

```html
<style>
	:link:active {
		color: orange;
	}
</style>
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 8

The dark gray text in this `span` element with an [explicit role][] of `link` has a color contrast ratio of 12.6:1 on the white background. Note that it cannot match any of the [widget pseudo-classes][] and is thus only applicable with the empty set of such pseudo-classes.

```html
<span style="color: #333; background: #FFF;" role="link">
	Some text in a human language
</span>
```

#### Passed Example 9

The dark gray text in this `span` element with an [explicit role][] of `link` has a color contrast ratio of 12.6:1 on the white background. Note that it can only match the `:focus` [widget pseudo-class][] and is thus only applicable with the empty set and with the singleton set {`:focus`}.

```html
<span style="color: #333; background: #FFF;" role="link" tabindex="0">
	Some text in a human language
</span>
```

#### Passed Example 10

The dark gray text in this link has a contrast ratio between 12.6:1 and 9.5:1 on the white to blue gradient background.

```html
<p style="background: linear-gradient(to right, #fff, #00f); width: 500px;">
	<a style="color: #333;" href="https://act-rules.github.io/">ACT rules</a>
</p>
```

#### Passed Example 11

This light gray text in this link has a contrast ratio between 13:1 and 5:1 on the background image.

```html
<p
	style="height: 50px; padding-top: 15px; background: #000 no-repeat -20px -20px url('/test-assets/contrast/black-hole.jpeg');"
>
	<a style="color: #ccc;" href="https://act-rules.github.io/">ACT rules</a>
</p>
```

#### Passed Example 12

The 18pt large black text in this link has a contrast ratio of 3.6:1 on the gray background.

```html
<a style="color: #000; font-size: 18pt; background: #666;" href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 13

The 14pt bold black text in this link has a contrast ratio of 3.6:1 on the gray background.

```html
<a style="color: #000; font-size: 18pt; background: #666;" href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 14

The text in this `button` element does not convey anything in human language.

```html
<button style="color: #000; background: #666;">X</button>
```

### Failed

#### Failed Example 1

The text in this link has a contrast ratio of 3.6:1.

```html
<a style="color: #000; background: #666;" href="https://act-rules.github.io/">ACT rules</a>
```

#### Failed Example 2

The text in this button has a contrast ratio of 3.6:1.

```html
<button style="color: #000; background: #666;">ACT rules</button>
```

#### Failed Example 3

The text in this link, on default white background, has color contrast ratios of 1.5:1, 4:1, 1.3:1, and 2:1 in the 4 states listed in the `style` element.

```html
<style>
	:link {
		color: lightblue;
	}
	:visited {
		color: red;
	}
	:link:focus {
		color: cyan;
	}
	:visited:focus {
		color: orange;
	}
</style>
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Failed Example 4

With default browser styling, the text in this link, has a white background and is blue (`#0000EE`) when matching `:link` and purple (`#551A8B`) when matching `:visited`. These colors have a respective contrast ratios of 9.4:1 and 11:1 with the white background. However, when the link matches both `:visited` and `:focus`, it only has a color contrast ratio of 2:1.

```html
<style>
	a:visited:focus {
		color: orange;
	}
</style>
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Failed Example 5

The text in this `input` element, on default white background, has color contrast ratios of 2:1, and 1.5:1 when it's focused or not.

```html
<style>
	input {
		color: lightblue;
	}
	input:focus {
		color: orange;
	}
</style>
<input value="ACT rules" />
```

#### Failed Example 6

The placeholder text in this `input` element, on default white background, has color contrast ratios of 5.1:1, and 10:1 when it's focused or not. However, when text is entered and the placeholder is not shown, the text has only a 1.5:1 color contrast ratio.

```html
<style>
	input {
		color: lightblue;
	}
	input:placeholder-shown {
		color: darkred;
	}
	input:focus {
		color: green;
	}
</style>
<input placeholder="W3C" />
```

#### Failed Example 7

The light gray text in this `span` element with an [explicit role][] of `link` has a color contrast ratio of 2.3:1 on the white background.

```html
<span style="color: #AAA; background: #FFF;" role="link" tabindex="0">
	Some text in a human language
</span>
```

#### Failed Example 8

The light gray text in this link has a contrast ratio between 1.6:1 and 1.2:1 on the white to blue gradient background.

```html
<p style="background: linear-gradient(to right, #fff, #00f); width: 500px;">
	<a style="color: #CCC;" href="https://act-rules.github.io/">ACT rules</a>
</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no HTML element.

```html
<svg>
	<a href="https://act-rules.github.io/"><text x="0" y="15">ACT rules</text></a>
</svg>
```

#### Inapplicable Example 2

There is no text which is part of a [text node][].

```html
<a href="https://act-rules.github.io/">
	<img scr="/test-assets/shared/act-logo.png" alt="ACT rule" />
</a>
```

#### Inapplicable Example 3

There is no [text node][] with a widget as an [ancestor].

```html
<p>I love ACT rules!</p>
```

#### Inapplicable Example 4

The text in this link is not [visible][] because of `display: none`.

```html
<a style="display: none" href="https://act-rules.github.io/">ACT rules</a>
```

#### Inapplicable Example 5

The text in this link is not [visible][] because it is positioned off-screen.

```html
<a style="position:absolute; top: -999em" href="https://act-rules.github.io/">ACT rules</a>
```

#### Inapplicable Example 6

The text in this link is not [visible][] because the foreground color is the same as the background color.

```html
<a style="color: white; background: white;" href="https://act-rules.github.io/">ACT rules</a>
```

#### Inapplicable Example 7

This text is in a [disabled][] widget.

```html
<button style="color: #000; background: #666;" disabled>ACT rules</button>
```

[ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor 'DOM specification of Ancestor'
[assistive technology]: https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[background colors]: #background-colors-of-text 'Definition of Background Color of Text'
[disabled]: #disabled-element 'Definition of Disabled'
[explicit role]: #explicit-role 'Definition of Explicit Semantic Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree "CSS definition of flat tree (editor's draft)"
[focusable]: #focusable 'Definition of Focusable'
[foreground colors]: #foreground-colors-of-text 'Definition of Foreground Color of Text'
[highest possible contrast]: #highest-possible-contrast 'Definition of Highest Possible Contrast'
[html pseudo-classes]: https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes 'HTML mapping of CSS selectors'
[human language]: https://www.w3.org/TR/WCAG21/#dfn-human-language-s 'WCAG 2.1 definition of Human language'
[implicit role]: #implicit-role 'Definition of Implicit Semantic Role'
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
