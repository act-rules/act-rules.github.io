---
name: Heading does not only consist of breaks
rule_type: atomic
description: | 
  This rule checks that heading elements do not have `br`, `wbr` elements or unicode separator characters as their only content.

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

This rule applies to any element with the [semantic role](#semantic-role) of `heading` that is [included in the accessibility tree](#included-in-the-accessibility-tree), and does not contain unicode characters in other [categories]((https://www.fileformat.info/info/unicode/category/index.htm)) than the seperator categories.

### Expectation 1

The target element does not contain HTML `br` or `wbr` elements.

### Expectation 2

The content of each target element does not contain unicode characters in the seperator categories. 

## Assumptions

This rule assumes that having an element that unintentionally shows up programatically to a user of assistive technologies as a heading element, but is not shown visually as a heading on the page, is a violation of WCAG success criterion 1.3.1 Info and Relationships.

## Accessibility Support

Handling of headings containing only `br` and `wbr` elements and unicode characters in the seperator categories varies between different assistive technologies. This means that even though the outcome of this rule is *failed*, users of certain assistive technologies might not experience an issue.

## Background

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [The br element](https://www.w3.org/TR/html/textlevel-semantics.html#the-br-element)
- [The wbr element](https://www.w3.org/TR/html/textlevel-semantics.html#the-wbr-element)
- [Unicode Character Categories](https://www.fileformat.info/info/unicode/category/index.htm)

## Test Cases

### Passed

#### Passed example 1

`h2` element is empty

```html
<h2></h2>
```

#### Passed example 2

`h2` element only contains a space, not a unicode character in the seperator character categories

```html
<h2> </h2>
```

#### Passed example 3

Element with the semantic role of heading is empty

```html
<div role="heading"></div>
```

### Failed

#### Failed example 1

`h2` contains `br` element as only content

```html
<h2><br /></h2>
```

#### Failed example 2

`h2` contains `wbr` element as only content

```html
<h2><wbr /></h2>
```

#### Failed example 3

`h2` contains `&nbsp`(no break space character) as only content

```html
<h2>&nbsp </h2>
```

### Inapplicable

#### Inapplicable example 1

`h2` element contains unicode characters in other categories than the seperator categories.

```html
<h2>This is a heading</h2>
```

#### Inapplicable example 2

`h2` element contains unicode characters in other categories than the seperator categories.

```html
<h2>#$@&%*!</h2>
```

#### Inapplicable example 3

Element does not have the semantic role of heading

```html
<div></div>
```

#### Inapplicable example 4

`h2`element is not included in the accessibility tree

```html
<h2 aria-hidden="true"></h2>
```
