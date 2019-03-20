---
name: Heading is descriptive
rule_type: atomic

description: |
   This rule checks that headings describe the topic or purpose of the content.
   
success_criterion:
- 2.4.6 # Headings and labels

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Dagfinn Rømen
- Geir Sindre Fossøy
- Carlos Duarte
---

## Test procedure

### Applicability

This rule applies to any element with the [semantic role](#semantic-role) of `heading` that is either [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree), and that either has [visible](#visible) [content](https://www.w3.org/TR/WCAG21/#dfn-content), or has an accessible name that does not only consist of Unicode separator characters.

**Note**: This rule only applies to elements with the [semantic role](#semantic-role) of heading. Thus, it is a partial check for WCAG 2.0 success criterion 2.4.6, which applies to all headings. "Heading" is used in its general sense and includes headlines and other ways to add a heading to different types of content. This includes elements that are not marked up as headings in the code, but still act visually as headings, e.g. by larger and/or bolder text. 

### Expectation 1

The [visible](#visible) [content](https://www.w3.org/TR/WCAG21/#dfn-content) of each target element describes the topic or purpose of the entirety or a part of its [section of the content](#section-of-content), or the `heading` has no section of the content.

**Note**: Headings do not need to be lengthy. A word, or even a single character, may suffice.

### Expectation 2

The [accessible name](#accessible-name) of each target element describes the topic or purpose of the entirety or a part of its [section of the content](#section-of-content), or the `heading` has no section of the content.

**Note:** Usually the accessible name will be the same as the visible content of the `heading`, but in some cases the two might be different, and in these cases both versions of the `heading` need to be evaluated.

## Assumptions
_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html) 
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
- [HTML 5.2 Standard - Heading content](https://www.w3.org/TR/html52/dom.html#heading-content)

## Test Cases

### Passed

#### Passed example 1

Heading marked up with `h` element that describes the topic or purpose of its section of the content.

```html
<h1 class="target">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 2

Heading marked up with `role="heading"` that describes the topic or purpose of its section of the content.

```html
<span role="heading">Opening Hours</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 3

Heading marked up with `h` element with an image that describes the topic or purpose of its section of the content.

```html
<h1 class="target"><img scr="../test-assets/opening_hours_icon.png" alt="Opening hours"></img></h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 4

Heading marked up with `h` element that is a single character that describes the topic or purpose of its section of the content.

```html
<h1 class="target">A</h1>
<dl>  
<dt>airplane</dt>
  <dd>a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.</dd>
 <dt>apple</dt>
  <dd>the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.</dd>
</dl>
```

#### Passed example 5

Heading marked up with `role="heading"` that describes the topic or purpose of its section of the content. The heading is positioned off screen and is included in the Accessibility Tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 6

Heading marked up with `h` element that describes the topic or purpose of its section of the content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 class="target" aria-hidden="true">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 7

Heading marked up with `h` element that describes the topic or purpose of a part of its section of the content.

```html
<h1 class="target">Oranges</h1>
<p>I really like oranges.</p>
<p>Apples are great too, though.</p>
```

#### Passed example 8

Heading marked up with `h` element that doesn't have a section of content.

```html
<h1 class="target">Oranges on sale</h1>
```

#### Passed example 9

Heading marked up with `h` element where both the visible text nodes as well as the accessible name describes the content, though the two are different.

```html
<h1 class="target" aria-label="Office opening hours">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 10

Visible heading is made up by an image of text, that also has an accessible name. Both visible content and accessible name is descriptive.

```html
<h1><img src="../test-assets/SC2-4-6-descriptive-headings/oranges.png" "alt="Oranges"></h1>
<p>I really like oranges.</p>
```

### Failed

#### Failed example 1

Heading marked up with `h` element that does not describe the topic or purpose of its section of the content.

```html
<h1 class="target">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 2

Heading marked up with `role="heading"` that does not describe the topic or purpose of its section of the content.

```html
<span role="heading">Weather</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 3

Heading marked up with `role="heading"` that does not describe the topic or purpose of its section of the content. The heading is positioned off screen and is included in the Accessibility Tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 4

Heading marked up with `h` element that does not describe the topic or purpose of its section of the content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 class="target" aria-hidden="true">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 5

Heading marked up with `h` element where the visible text nodes describe the content, but the accessible name doesn't.

```html
<h1 aria-labelledby="id1">Opening hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
<p id="id1">Weather</p>
```

#### Failed example 6

Heading marked up with `h` element where the accessible name describes the content, but the visible text nodes don't.

```html
<h1 aria-label="Opening hours">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

### Inapplicable

#### Inapplicable example 1

No heading.

```html
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Inapplicable example 2

Heading that is neither visible to users, nor included in the accessibility tree.

```html
<h1 style="display: none;">Opening hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Inapplicable example 3

Heading does not contain text nodes that do not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), or has an accessible name that does not only consist of Unicode separator characters.

```html
<h1></h1>
```

#### Inapplicable example 4

Heading does not contain text nodes that do not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), or has an accessible name that does not only consist of Unicode separator characters.

```html
<h1 aria-label=" "></h1>
```
