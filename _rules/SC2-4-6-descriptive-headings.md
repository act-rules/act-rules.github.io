---
name: Descriptive headings
description: |
This rule checks that headings describe the topic or purpose of the content.

success_criterion: 
- 2.4.6 # Headings and labels

test aspects:
- DOM Tree

authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
- Carlos Duarte
---

## Test procedure

### Applicability

The rule applies to any element with the the [semantic role](#semantic-role) of `heading`.

**Note**: The WCAG 2.0 success criterion 2.4.6 applies to all headings.

**Note**: Heading content defines the header of a section (whether explicitly marked up using sectioning content elements, or implied by the heading content itself).

### Expectation

Each target element describes the topic or purpose of the subsequent content.

**Note**: Headings do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

- Heading markup is covered by success criterion 1.3.1 Info and Relationships.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html
- https://www.w3.org/TR/WCAG20-TECHS/G130.html
- https://www.w3.org/TR/WCAG20-TECHS/H42.html
- https://www.w3.org/TR/WCAG20-TECHS/ARIA12.html
- https://www.w3.org/TR/html52/dom.html#heading-content

## Test Cases

### Passed

```html
<!-- Heading marked up with h-element that describes the topic or purpose of the following section of content -->
<h1 class="target">Opening Hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

```html
<!-- Heading marked up with role="heading" that describes the topic or purpose of the following section of content -->
<span role="heading">Opening Hours</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

```html
<!-- Heading marked up with h-element with an image that describes the topic or purpose of the following section of content -->
<h1 class="target"><img scr="../test-assets/opening_hours_icon.png" alt="Opening hours"></img></h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

```html
<!-- Heading marked up with h-element that is a single character that describes the topic or purpose of the following section of content -->
<h1 class="target">A</h1>
<dl>  
<dt>airplane</dt>
  <dd>a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.</dd>
 <dt>apple</dt>
  <dd>the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.</dd>
</dl>
```

### Failed

```html
<!-- Heading marked up with h-element that does not describe the topic or purpose of the following section of content -->
<h1 class="target">Weather</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```

```html
<!-- Heading marked up with role="heading" that does not describe the topic or purpose of the following section of content -->
<span role="heading">Weather</span>
<p>We are open Monday through Friday from 10 to 16</p>
```

### Inapplicable

```html
<!-- No heading -->
<p>We are open Monday through Friday from 10 to 16</p>
```

```html
<!-- Heading that is not visible to users -->
<h1 style="display: none;">Opening hours</h1>
<p>We are open Monday through Friday from 10 to 16</p>
```
