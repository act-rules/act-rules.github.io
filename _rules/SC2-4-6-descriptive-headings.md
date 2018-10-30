---
name: Heading is descriptive
test_type: atomic

description: |
   This rule checks that headings describe the topic or purpose of the content.
   
success_criterion:
- 2.4.6 # Headings and labels

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
- Carlos Duarte
---

## Test procedure

### Applicability

This rule applies to any element with the [semantic role](#semantic-role) of heading that is either [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: This rule only applies to elements with the [semantic role](#semantic-role) of heading. Thus, it is a partial check for WCAG 2.0 success criterion 2.4.6, which applies to all headings. "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.

### Expectation

Each target element describes the topic or purpose of the subsequent section.

**Note**: Heading content defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself). A section is a self-contained portion of written content that deals with one or more related topics or thoughts. A section may consist of one or more paragraphs and include graphics, tables, lists and sub-sections.

**Note**: Headings do not need to be lengthy. A word, or even a single character, may suffice.

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

Heading marked up with `h` element that describes the topic or purpose of the following section of content.

```html
<h1 class="target">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 2

Heading marked up with `role="heading"` that describes the topic or purpose of the following section of content.

```html
<span role="heading">Opening Hours</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 3

Heading marked up with `h` element with an image that describes the topic or purpose of the following section of content.

```html
<h1 class="target"><img scr="../test-assets/opening_hours_icon.png" alt="Opening hours"></img></h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 4

Heading marked up with `h` element that is a single character that describes the topic or purpose of the following section of content.

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

Heading marked up with `role="heading"` that describes the topic or purpose of the following section of content. The heading is positioned off screen and is included in the Accessibility Tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Passed example 6

Heading marked up with `h` element that describes the topic or purpose of the following section of content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 class="target" aria-hidden="true">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

### Failed

#### Failed example 1

Heading marked up with `h` element that does not describe the topic or purpose of the following section of content.

```html
<h1 class="target">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 2

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following section of content.

```html
<span role="heading">Weather</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 3

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following section of content. The heading is positioned off screen and is included in the Accessibility Tree.

```html
<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
<p style="position: absolute; top: -9999px; left: -9999px;">We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 4

Heading marked up with `h` element that dose not describe the topic or purpose of the following section of content. The heading is visible, but is not included in the Accessibility Tree.

```html
<h1 class="target" aria-hidden="true">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

#### Failed example 5

Empty heading marked up with `h` element.

```html
<h1></h1>
```

#### Failed example 6

Empty heading marked up with `role="heading"`.

```html
<p role="heading" level="1"></p>
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
