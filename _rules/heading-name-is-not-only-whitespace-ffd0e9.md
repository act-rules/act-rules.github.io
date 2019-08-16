---
id: ffd0e9
name: Heading name is not only whitespace
rule_type: atomic
description: | 
  This rule checks that each heading does not have an accessible name that is only whitespace.

success_criterion: 
- 1.3.1 # Info and Relationships (A)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Kasper Isager
---

## Applicability

This rule applies to any HTML element with the [semantic role](#semantic-role) of `heading` that is [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

The [accessible name](#accessible-name) of the test target, if there is an accessible name, is not only [whitespace](#whitespace).

**Note:** In the [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te) all carriage returns, newlines, tabs, and form-feeds are replaced with a single space.

## Assumptions

This rule assumes that having an element that unintentionally shows up programmatically to a user of assistive technologies as a heading element, but is not shown visually as a heading on the page, is a violation of WCAG Success Criterion 1.3.1 Info and Relationships.

## Accessibility Support

Handling of headings containing only whitespace characters, carriage returns, newlines, tabs, and form-feeds varies between different assistive technologies and browsers. This means that even though the outcome of this rule is *failed*, users of certain assistive technology and browser combinations might not experience an issue.

## Background

- In some screen reader and browser combinations, headings containing only whitespace characters, carriage returns, newlines, tabs, and form-feeds will show up as empty headings, confusing the user experience. For a screen reader user it will be hard to get an overview of the heading structure of the page if "empty" headings are included in the heading structure. Indeed, it can be hard to know if the heading is just whitespace that has accidentally been marked up as a heading, or if it is an actual heading that for some reason doesn't have an accessible name. Since this is a case where the programmatically determinable structure of the page doesn't match the visual presentation, this is a violation of success criterion [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Test Cases

### Passed

#### Passed Example 1

`h2` element with no accessible name.

```html
<h2></h2>
```

#### Passed Example 2

Element with the semantic role of heading has no accessible name.

```html
<div role="heading"></div>
```

#### Passed Example 3

`h2` element has an accessible name from content that is not only whitespace.

```html
<h2>' </h2>
```

#### Passed Example 4

`h2` element has an accessible name through `aria-label` that is not only whitespace.

```html
<h2 aria-label="Orange harvesting season"> </h2>
```

#### Passed Example 5

`h2` element has an accessible name through the `alt` attribute that is not only whitespace.

```html
<h2><img src="#" alt="Orange harvesting season"> </h2>
```

#### Passed Example 6

`h2` element contains the phrasing content element `<span>` as only content, and this does not affect the accessible name computation.

```html
<h2><span></span></h2>
```

### Failed

#### Failed Example 1

`h2` element contains `br` element as only content. This is translated into a single space in the accessible name computation, which gives an accessible name that is only whitespace.

```html
<h2><br /></h2>
```

#### Failed Example 2

`h2` contains `&nbsp;`(no break space character) as only content. This is translated into a single space in the accessible name computation, which gives an accessible name that is only whitespace.

```html
<h2>&nbsp;</h2>
```

#### Failed Example 3

`h2` element only contains a space as only content, which gives an accessible name that is only whitespace.

```html
<h2> </h2>
```

#### Failed Example 4

`h2` element contains `&#32;` (space) character as only content, which gives an accessible name that is only whitespace.

```html
<h2>&#32;</h2>
```

#### Failed Example 5

`h2` element contains `&ensp;` (en-space) character as only content, which gives an accessible name that is only whitespace.

```html
<h2>&ensp;</h2>
```

#### Failed Example 6

`h2` element contains `&emsp;` (em-space) character as only content, which gives an accessible name that is only whitespace.

```html
<h2>&emsp;</h2>
```

#### Failed Example 7

`h2` element contains `&thinsp;` (thin space) character as only content, which gives an accessible name that is only whitespace.

```html
<h2>&thinsp;</h2>
```

#### Failed Example 8

`h2` element contains `<br />` as only content that affects the accessible name computation. This is translated into a single space in the accessible name computation, which gives an accessible name that is only whitespace.

```html
<h2><span><br /></span></h2>
```

#### Failed Example 9

`h2` element has an image and a space as content, but the image is marked as decorative and as such not relevant for the accessible name computation, which gives an accessible name that is only whitespace.

```html
<h2><img src="#" alt=""> </h2>
```

### Inapplicable

#### Inapplicable Example 1

Element does not have the semantic role of heading.

```html
<div></div>
```

#### Inapplicable Example 2

`h2` element is not included in the accessibility tree.

```html
<h2 aria-hidden="true"></h2>
```
