---
id: 2ee8b8
name: Visible label is part of accessible name
rule_type: atomic
description: |
  This rule checks that interactive elements labeled through content have their visible label as part of their accessible name.
accessibility_requirements:
  wcag21:2.5.3: # Label in Name
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G208: # Including the text of the visible label as part of the accessible name
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
    - Dan Tripp
    - Jey Nandakumar
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any element for which all the following is true:

- The element has a [semantic role][] that is a [widget][widget role] that [supports name from content][]; and
- The element has [visible text content][]; and
- The element has an `aria-label` or `aria-labelledby` attribute.

## Expectation

For the target element, the [visible inner text][] is contained within the [accessible name][] according to the [label in name algorithm][].

## Assumptions

This rule assumes that the [visible inner text][] is equal to the [label][https://www.w3.org/WAI/WCAG21/Understanding/label-in-name#dfn-label] in most cases (enough cases to be useful) even though "label" is not precisely defined at this point in history.

This rule assumes that neither the label nor the [visible inner text][] are rearranged with CSS in some way so that they appear to the user in a different order than they do in the DOM.

This rule assumes that all resources needed for rendering the page are properly loaded. Checking if resources are missing is out of the scope of rules. Missing resources may be rendered as text (for example, missing `img` are rendered as their `alt` attribute).

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

This rule applies to elements with a [widget role][] that [support name from content][supports name from content]. This includes the following: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

The understanding document of [2.5.3 Label in Name][understand253] use the term "symbolic text characters" to refer to a type of [non-text content][] that uses text characters as symbols, such as using "x" to mean "close". This rule considers them as "characters expressing non-text content". Unicode emojis are another example of characters expressing non-text content, although these are not "symbolic text characters".


### Bibliography

- [Understanding Success Criterion 2.5.3: Label in Name][understand253]
- [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG21/Techniques/general/G208)

## Test Cases

### Passed

#### Passed Example 1

This link has [visible inner text][] that is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
```

#### Passed Example 2

This link has [visible inner text][] that, ignoring whitespace, is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="  ACT   rules  ">ACT rules</a>
```

#### Passed Example 3

This link has [visible inner text][] that, ignoring case, is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="act Rules">ACT rules</a>
```

#### Passed Example 4

This button has [visible inner text][] that is contained within the [accessible name][] according to the [label in name algorithm][].

```html
<button aria-label="Next Page in the list">Next Page</button>
```

#### Passed Example 5

The "X" is [non-text content][], so it doesn't need to be contained within the [accessible name][].

```html
<button aria-label="close">X</button>
```

#### Passed Example 6

This `button` element has the text "search" rendered as an magnifying glass icon by the font. Because the text is rendered as [non-text content][], the text does not need to be contained within the [accessible name][].

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<style>
	button {
		font-family: 'Material Icons';
	}
</style>
<button aria-label="Find">search</button>
```

#### Passed Example 7 

This button has [visible inner text][] that, according to the [label in name algorithm][], is contained within the [accessible name][].  This example shows why the [label in name algorithm][] uses the [visible inner text][] and not the [visible text content][]: the <p> tags insert whitespace into the result in the former but not the latter.

```html
<button aria-label="Hello world"><p>Hello</p><p>world</p></button>
```

#### Passed Example 8

Similar to the previous example.

```html
<a href="#" aria-label="Some article by John Doe"><h6>Some article</h6><p>by John Doe</p></a>
```

#### Passed Example 9

The [visible inner text][] of this link is "ACT" (with no spaces) because of the explicit styles of "display: inline" on the `p` elements and the absence of whitespace between the `p` elements.  The cases of "display: inline" and "display: block" are handled by the definition of [visible inner text of an element][].  This example shows that the definition agrees with the visual rendering done by the browser.

```html
<a href="#" aria-label="ACT">
	<p style="display: inline">A</p><p style="display: inline">C</p><p style="display: inline">T</p>
</a>
```

#### Passed Example 10

The [visible inner text][] is "Download specification".  The words "the" and "gizmo" aren't part of it.    

```html
<a aria-label="Download specification" href="#">Download <span style="visibility: hidden">the</span> <span style="display: none">gizmo</span> specification</a>
```

#### Passed Example 11

The [visible inner text][] is "Download specification", which includes a space character between the two words due to the second clause of the definition of [visible inner text of a text node][].

```html
<a aria-label="Download specification" href="#"><span>Download</span><span id="space"> </span><span>specification</span></a>
```

#### Passed Example 12

This example shows that the [visible inner text][] isn't always the same as the [innerText][https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute].  The visible inner text is "Download specification".  The innerText is 'Download \ngizmo\nspecification'.  This rule uses the visible inner text - not innerText.

```html
<style>
.visually-hidden {
    /* Source: https://www.tpgi.com/the-anatomy-of-visually-hidden/ */
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
<a aria-label="Download specification" href="#">Download <span class="visually-hidden">gizmo</span> specification</a>
```

#### Passed Example 13

This example shows that the [label in name algorithm][] handles many kinds of whitespace.

```html
<a aria-label="compose email" href="#">compose &nbsp;&nbsp;<br> email</a>
```

#### Passed Example 14

This example passes the rule because "YYYY-MM-DD" is in brackets.  Text in brackets is removed by the [label in name algorithm][], because its not normally spoken by speech-input users.  

```html
<button aria-label="Search by date">Search by date (YYYY-MM-DD)</button>
```

#### Passed Example 15

The passes for two reasons: 1) because the ellipsis ("…") is [non-text content][], and 2) because the ellipsis is neither a letter nor a digit and so is filtered out by the [label in name algorithm][].

```html
<button aria-label="Next">Next…</button>
```

#### Passed Example 16

This passes because the [label in name algorithm][] effectively ignores all punctuation and emoji, in both the visible inner text and the accessible name, as long as they don't break up words.

```html
<button aria-label="💡 Submit 💡">&gt;&gt;&gt; ** Submit ** &lt;&lt;&lt;</button>
```




### Failed

#### Failed Example 1

This link has [visible inner text][] that is very different from the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="WCAG">ACT rules</a>
```

#### Failed Example 2

This button has [visible inner text][] that is only partially contained within the [accessible name][].

```html
<button aria-label="the full">The full label</button>
```

#### Failed Example 3 

This button has [visible inner text][] that is fully contained within the [accessible name][] when viewed as a character-by-character substring.  But that does not satisfy our [label in name algorithm][], which works on full words.  So this fails the rule.

```html
<a href="#" aria-label="Discover Italy">Discover It</a>
```

#### Failed Example 4 

This link's [accessible name][] contains two tokens (according to the[label in name algorithm][]) and the [visible inner text][] contains one token.  So it fails the rule.

```html
<a aria-label="just ice" href="#">justice</a>
```

#### Failed Example 5 

This link has an [accessible name][] which contains a hyphen.  The [label in name algorithm][] breaks up words on hyphens.  So it turns "non-standard" into two tokens: "non" and "standard".  So this fails the rule.

```html
<a href="#" aria-label="non-standard">nonstandard</a>
```

#### Failed Example 6 

The rule has no special handling for acronyms or initialisms.

```html
<a aria-label="WCAG" href="#">W C A G</a>
```

#### Failed Example 7 

The rule has no special handling for abbreviations.

```html
<a aria-label="University Avenue" href="#">University Ave.</a>
```

#### Failed Example 8

This link has [visible inner text][] with mathematical symbols and is not contained within the [accessible name][] because the mathematical symbols are represented as English words (not digits) in the accessible name. This is [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

#### Failed Example 9 

Similar to the previous example.  This rule has no special handling for converting mathematical symbols into words, or vice versa.

```html
<button aria-label="11 times 3 equals 33">11×3=33</button>
```

#### Failed Example 10 

This button's accessible name contains the same tokens that are in the visible label.  But they aren't in the same order, so it fails the sublist check part of the [label in name algorithm][], and so it fails the rule.

```html
<button aria-label="how are you"><span>you</span><span>how</span><span>are</span></button>
```

#### Failed Example 11

This button's accessible name contains the word "the" in the middle of it, which causes the sublist check of the [label in name algorithm][] (in particular: the "consecutive" requirement of that check) to fail.  So it fails the rule.

```html
<button aria-label="Download the specification">Download specification</button>
```

#### Failed Example 12 

This link's accessible name contains the same digits that are in the visible label, and in the same order.  But they have different spaces and punctuation between them, so they are considered separate tokens.  So this fails the rule.

```html
<a aria-label="1 2 3. 4 5 6. 7 8 9 0" href="tel:1234567890">123.456.7890</a>
```

#### Failed Example 13 

This rule has no special handling which tries to guess when number have the same semantic meaning.  It operates on tokens only.

```html
<a href="#2021" aria-label="20 21">2021</a>
```

#### Failed Example 14 

Similar to the previous example.

```html
<a aria-label="fibonacci: 0 1 1 2 3 5 8 13 21 34">fibonacci: 0112358132134</a>
```

#### Failed Example 15 

This rule has no special handling for converting digits into words, or vice versa.

```html
<a href="#2021" aria-label="twenty twenty-one">two thousand twenty-one</a>
```

#### Failed Example 16 

(Same as above.)  This rule has no special handling for converting digits into words, or vice versa.

```html
<a aria-label="two zero two three" href="#">2 0 2 3</a>
```

#### Failed Example 17 

This rule has no special handling for digits that appear next to letters with no spaces in between.

```html
<a aria-label="1a" href="#">1</a>
```

#### Failed Example 18

The definition of [visible inner text][] doesn't treat text any differently if it's excluded from the accessibility tree with aria-hidden.  So this rule effectively ignores aria-hidden.  So this element fails the rule.

```html
<a aria-label="Download specification" href="#">Download <span aria-hidden="true">gizmo</span> specification</a>
```

### Inapplicable

#### Inapplicable Example 1

This `nav` is not a widget, so the [visible inner text][] does not need to match the [accessible name][].

```html
<nav aria-label="main nav">W3C navigation</nav>
```

#### Inapplicable Example 2

This email text field does not need to have its [visible inner text][] match the [accessible name][]. The content of a textfield shows its value instead of its label; it does not [support name from content][supports name from content]. The label is usually adjacent to the textfield instead.

```html
<div>E-mail</div>
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

This `div` element does not have a widget role, so the [visible inner text][] does not need to match the [accessible name][].

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

This link has no [visible inner text][].

```html
<a href="https://w3.org" aria-label="W3C homepage">
	<img src="/test-assets/shared/w3c-logo.png" alt="w3c logo" />
</a>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'WCAG Definition of Non-text content'
[label in name algorithm]: #label-in-name-algorithm 'Definition of Label in Name Algorithm'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic role'
[supports name from content]: https://www.w3.org/TR/wai-aria-1.1/#namefromcontent 'Definition of Supports name from contents'
[visible inner text]: #visible-inner-text 'Definition of Visible inner text'
[visible inner text of a text node]: #visible-inner-text:for-text 'Definition of Visible inner text of a text node'
[visible inner text of an element]: #visible-inner-text:for-element 'Definition of Visible inner text of an element'
[visible text content]: #visible-text-content 'Definition of Visible text content'
[widget role]: https://www.w3.org/TR/wai-aria-1.1/#widget_roles 'Definition of Widget role'
[understand253]: https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html
