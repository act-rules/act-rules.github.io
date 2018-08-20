---
name: Identical URLs for identical accessible names on links
description: |
  This rule checks that identical accessible names are not used for links with different URLs

success_criterion:
- 2.4.9 # Link Purpose (Link Only)

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test Procedure

### Applicability

The rule applies to any ´a´ or ´area´ element with an ´href´ attribute that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and has an [accessible name](#accessible-name), and where the accessible name is identical to the accessible name of another ´a´ or ´area´ element that is exposed to assistive technologies and has a ´href´ attribute.

Note: Leading and trailing whitespace and difference in case sensitivity should be ignored when deciding whether the [accessible names](#accessible-name) are identical.

### Expectation

For each of the sets of applicable elements that have identical [accessible names](#accessible-name), the [normalized](#url-normalization) value of the ´href´ is identical. [Relative URLs](https://www.w3.org/TR/WD-html40-970917/htmlweb.html#relative-urls) first need to be resolved to full URLs before doing the comparison. 

## Assumptions

*There are currently no assumptions*

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- Uniform Resource Identifier (URI): Generic Syntax: https://tools.ietf.org/html/rfc3986#section-6.2
- Wikipedia article on URL normalization: https://en.wikipedia.org/wiki/URL_normalization 

## Test Cases

### Pass example 1

Identical link text leads to identical URLs

```html
<a href="http://example.com">Link text</a>
<a href="http://example.com>Link text</a>
```

### Pass example 2

Normalizing URLs by converting the scheme and host to lower case.

```html
<a href="HTTP://www.Example.com/">Link text</a>
<a href="http://www.example.com/">Link text</a>
```

### Pass example 3

Normalizing URLs by capitalizing letters in escape sequences.

```html
<a href="http://www.example.com/a%c2%b1b">Link text</a>
<a href="http://www.example.com/a%C2%B1b">Link text</a>
```

### Pass example 4

Normalizing URLs by decoding percent-encoded octets of unreserved characters

```html
<a href="http://www.example.com/%7Eusername/">Link text</a>
<a href="http://www.example.com/~username/">Link text</a>
```

### Pass example 5

Normalizing URLs by removing the default port

```html
<a href="http://www.example.com:80/bar.html">Link text</a>
<a href="http://www.example.com/bar.html">Link text</a>
```

### Failure example 1

Same link text used for links going to different resources

```html
<a href="http://facebook.com">Follow us</a> 
<a href="http://twitter.com">Follow us</a>
```

### Failure example 2

Same link text used for links going to web pages with same name, but placed in different directory

```html
<a href="http://www.example.com/about/contact.html">Contact us</a> 
<a href="http://www.example.com/careers/contact.html">Contact us</a>
```

### Failure example 3

Case-sensitivity in file name

```html
<a href="http://www.example.com/page.html">Link text</a> 
<a href="http://www.example.com/Page.html">Link text</a>
```

### Failure example 4

URLs differ due to trailing slashes

```html
<a href="http://www.example.com/alice">Link text</a> 
<a href="http://www.example.com/alice/">Link text</a>
```

### Inapplicable example 1

´a´ and ´area´ elements without ´href´ attribute.

```html
<a>Link text</a>
<area aria-label="Link text"></area>
```

### Inapplicable example 2

No identical link texts

```html
<a href="http://example.com">Link text 1</a>
<a href="http://example.com>Link text 2</a>
```
