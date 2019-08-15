---
id: 5e4949
name: Visible heading is descriptive
rule_type: atomic

description: |
   This rule checks that each visible heading describe the topic or purpose of the content.
   
accessibility_requirements:
- wcag20:2.4.6 # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Dagfinn Rømen
- Geir Sindre Fossøy
- Carlos Duarte
---

## Applicability

This rule applies to any [visible](#visible) element with the [semantic role](#semantic-role) of `heading`.

**Note:**** Headings with only [whitespace](#whitespace) are not [visible](#visible).

**Note**: This rule only applies to elements with the [semantic role](#semantic-role) of `heading`. Thus, it is a partial check for WCAG 2.0 success criterion 2.4.6, which applies to all headings regardless of semantic programming. In the success criteria "heading" is used in the general sense and includes elements that are not marked up as headings in the code, but still act visually as headings, e.g. by larger and/or bolder text.

## Expectation

The [visible](#visible) heading of each target element describes the topic or purpose of its [visible](#visible) [section of the content](#section-of-content) in part or in its entirety, or the `heading` has no [visible](#visible) [section of the content](#section-of-content).

**Note**: Headings do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions
This rule assumes that while having a heading that has no section of content might be a WCAG violation under other success criteria (e.g. 1.3.1 Info and Relationships, if the heading markup has been misused for purely presentational purposes), this is allowed under success criterion 2.4.6 Headings and Labels: Headings and labels describe topic or purpose.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html) 
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
- [HTML 5.2 Standard - Heading content](https://www.w3.org/TR/html52/dom.html#heading-content)

## Test Cases - UPDATE IN PROGRESS

### Passed

#### Passed Example 1

The heading marked up with an `h` element describes the topic or purpose of its section of the content.

```html
<h1>Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 2

The heading marked up with `role="heading"` describes the topic or purpose of its section of the content.

```html
<span role="heading">Opening Hours</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 3

The heading marked up with `h` element contains an image and an accessible name that describes the topic or purpose of its section of the content.

```html
<h1><img scr="../test-assets/opening_hours_icon.png" alt="Opening hours"></h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 4

The heading marked up with `h` element is a single character that describes the topic or purpose of its section of the content.

```html
<h1>A</h1>
<dl>  
<dt>airplane</dt>
  <dd>a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.</dd>
 <dt>apple</dt>
  <dd>the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.</dd>
</dl>
```

#### Passed Example 5

The heading marked up with `role="heading"` describes the topic or purpose of its section of the content. The heading is positioned off screen and is included in the accessibility tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 6

The heading marked up with `h` element describes the topic or purpose of its section of the content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 aria-hidden="true">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 7

The heading marked up with `h` element describes the topic or purpose of a part of its section of the content.

```html
<h1>Oranges</h1>
<p>I really like oranges.</p>
<p>Apples are great too, though.</p>
```

#### Passed Example 8

The heading marked up with `h` element doesn't have a section of content.

```html
<h1>Oranges on sale</h1>
```

#### Passed Example 9

The heading marked up with `h` element has visible text nodes and an accessible name that both describe the content, though the two are different.

```html
<h1 aria-label="Office opening hours">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed Example 10

The visible heading is made up of an image of text, that also has an accessible name. Both the visible content and the accessible name describe the content.

```html
<h1><img src="../test-assets/SC2-4-6-descriptive-headings/oranges.png" "alt="Oranges"></h1>
<p>I really like oranges.</p>
```

#### Passed Example 11

heading visible + incl. in acc. tree
content not visible but included in the acc. tree


#### Passed Example 11

heading incl. in acc. tree
content only visible

#### Passed Example 11

heading both visible and included in the acc. tree
part of content is visible, part of it is incl. in acc. tree

#### Passed Example 12

heading is visible, but not included in accessibility tree
content is not visible, but included in the a accessibility tree
heading is not descriptive, but it doesn't matter

#### Passed Example 13

heading is included in accessibility tree, but not visible
content is visible, but not included in accessibility tree
heading is not descriptive, but it doesn't matter

### Failed

#### Failed Example 1

The heading marked up with `h` element does not describe the topic or purpose of its section of the content.

```html
<h1>Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed Example 2

The heading marked up with `role="heading"` does not describe the topic or purpose of its section of the content.

```html
<span role="heading">Weather</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed Example 3

The heading marked up with `role="heading"` does not describe the topic or purpose of its section of the content. The heading is positioned off screen and is included in the Accessibility Tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Failed Example 4

The heading marked up with `h` element does not describe the topic or purpose of its section of the content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 aria-hidden="true">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed Example 5

The heading marked up with `h` element has visible text nodes that describe the content, but the accessible name doesn't.

```html
<h1 aria-labelledby="id1">Opening hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
<p id="id1">Weather</p>
```

#### Failed Example 6

The heading marked up with `h` element has an accessible name that describes the content, but the visible text nodes don't.

```html
<h1 aria-label="Opening hours">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

### Failed Example 7

heading visible 
part of content visible, and heading doesn't describe it

### Failed Example 8

heading is included in the acc. tree
part of content is included in acc. tree and heading doesn't describe it

### Inapplicable

#### Inapplicable Example 1

No heading.

```html
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Inapplicable Example 2

The heading is neither visible to users, nor included in the accessibility tree.

```html
<h1 style="display: none;">Opening hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Inapplicable Example 3

The heading marked up with `h` element does not contain visible content or has an accessible name that is not only [whitespace](#whitespace).


```html
<h1></h1>
```

#### Inapplicable Example 4

The heading marked up with `role="heading"` does not contain visible content or has an accessible name that is not only [whitespace](#whitespace).

```html
<span role="heading"  aria-label=" "></span>
```

#### Inapplicable Example 5 

A heading with only breaks is not [visible](#visible).

```html
<h1><br><br><br></h1>
```
