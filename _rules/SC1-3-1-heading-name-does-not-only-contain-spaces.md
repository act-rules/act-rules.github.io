---
name: Heading does not only consist of seperators or breaks
rule_type: atomic
description: | 
  This rule checks that heading elements do not have Unicode separator characters or `br` or `wbr` elements as their only content.

success_criterion: 
- 1.3.1 # Info and Relationships (A)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
- Kasper Isager
---

## Test procedure

### Applicability

This rule applies to any HTML element with the [semantic role](#semantic-role) of `heading` that is [included in the accessibility tree](#included-in-the-accessibility-tree).

### Expectation

The target element either:
- contains text nodes that do not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), or 
- does not contain any HTML `<br>` or `<wbr>` elements, or 
- has an accessible name that does not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153).

## Assumptions

This rule assumes that having an element that unintentionally shows up programmatically to a user of assistive technologies as a heading element, but is not shown visually as a heading on the page, is a violation of WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

Handling of headings containing only spaces, space characters, carriage returns, newlines, tabs, and form-feeds varies between different assistive technologies and browsers. This means that even though the outcome of this rule is *failed*, users of certain assistive technology and browser combinations might not experience an issue.

## Background

- In some screen reader and browser combinations, headings containing only spaces, space characters, carriage returns, newlines, tabs, and form-feeds will show up as empty headings, confusing the user experience. For a screen reader user it will be hard to get an overview of the heading structure of the page, if "unused" headings are included in the heading structure, and it can be hard to know if the heading is just white space that has accidentally been marked up as a heading, or if it is an actual heading that for some reason doesn't have an accessible name. Since this is a case where the programmatically determinable structure of the page doesn't match the visual presentation, this is a violation of success criterion [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [The br element](https://www.w3.org/TR/html/textlevel-semantics.html#the-br-element)
- [Unicode Characters in the 'Separator, Space' Category](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

## Test Cases

### Passed

#### Passed example 1

`h2` element is empty.

```html
<h2></h2>
```

#### Passed example 2

Element with the semantic role of heading is empty.

```html
<div role="heading"></div>
```

#### Passed example 3

`h2` element has other content than `br` or `wbr` elements or unicode characters in the seperator categories.

```html
<h2>' </h2>
```

#### Passed example 4

`h2` element has an `aria-label` that is relevant for the accessible name calculation.

```html
<h2 aria-label="Orange harvesting season"> </h2>
```

#### Passed example 5

`h2` element has content that is relevant for the accessible name calculation.

```html
<h2><img src="#" alt="Orange harvesting season"> </h2>
```

#### Passed example 6

`h2` element contains `<span>` as only content, and this does not affect accessible name computation.

```html
<h2><span></span></h2>
```

### Failed

#### Failed example 1

`h2` element contains `br` element as only content.

```html
<h2><br /></h2>
```

#### Failed example 2

`h2` contains `&nbsp;`(no break space character) as only content.

```html
<h2>&nbsp;</h2>
```

#### Failed example 3

`h2` element only contains a space.

```html
<h2> </h2>
```

#### Failed example 4

`h2` element contains `&#32;` (space) character as only content.

```html
<h2>&#32;</h2>
```

#### Failed example 5

`h2` element contains `&ensp;` (en-space) character as only content.

```html
<h2>&ensp;</h2>
```

#### Failed example 6

`h2` element contains `&emsp;` (em-space) character as only content.

```html
<h2>&emsp;</h2>
```

#### Failed example 7

`h2` element contains `&thinsp;` (thin space) character as only content.

```html
<h2>&thinsp;</h2>
```

#### Failed example 8

`h2` element contains `<br />` as only content that affects the accessible name computation.

```html
<h2><span><br /></span></h2>
```

#### Failed example 9

`h2` element has an image as content, but it is marked as decorative and as such not relevant for the accessible name computation.

```html
<h2><img src="#" alt=""> </h2>
```

### Inapplicable

#### Inapplicable example 1

Element does not have the semantic role of heading.

```html
<div></div>
```

#### Inapplicable example 2

`h2` element is not included in the accessibility tree.

```html
<h2 aria-hidden="true"></h2>
```
