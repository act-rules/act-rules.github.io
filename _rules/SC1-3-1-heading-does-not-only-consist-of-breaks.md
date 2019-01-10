---
name: Heading does not only consist of breaks
rule_type: atomic
description: | 
  This rule checks that heading elements do not have `br` elements or unicode separator characters as their only content.

success_criterion: 
- 1.3.1 # Info and Relationships (A)

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

This rule applies to any HTML element with the [semantic role](#semantic-role) of `heading` that is [included in the accessibility tree].

### Expectation 1

None of the target elements has an [accessible name](#accessible-name) that contains only spaces.

**Note:** In the [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te) all carriage returns, newlines, tabs, and form-feeds are replaced with a single space.

## Assumptions

This rule assumes that having an element that unintentionally shows up programatically to a user of assistive technologies as a heading element, but is not shown visually as a heading on the page, is a violation of WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

Handling of headings containing only carriage returns, newlines, tabs, and form-feeds varies between different assistive technologies and browsers. This means that even though the outcome of this rule is *failed*, users of certain assistive technologies might not experience an issue.

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [The br element](https://www.w3.org/TR/html/textlevel-semantics.html#the-br-element)
- [Unicode Character Categories](https://www.fileformat.info/info/unicode/category/index.htm)

## Test Cases

### Passed

#### Passed example 1

`h2` element is empty

```html
<h2></h2>
```

#### Passed example 2

Element with the semantic role of heading is empty

```html
<div role="heading"></div>
```

#### Passed example 3

`h2` element has other content than spaces

```html
<h2>'</h2>
```

### Failed

#### Failed example 1

`h2` contains `br` element as only content

```html
<h2><br /></h2>
```

#### Failed example 2

`h2` contains `&nbsp`(no break space character) as only content

```html
<h2>&nbsp </h2>
```

#### Failed example 3

`h2` element only contains a space

```html
<h2> </h2>
```

### Inapplicable

#### Inapplicable example 1

Element does not have the semantic role of heading

```html
<div></div>
```

#### Inapplicable example 2

`h2`element is not included in the accessibility tree

```html
<h2 aria-hidden="true"></h2>
```
