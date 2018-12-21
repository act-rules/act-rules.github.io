---
name: Document title is descriptive
rule_type: atomic
description: |
  This rule checks that the document title describes the topic or purpose of the document.

success_criterion: 
-	2.4.2 # Page Titled (A)

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
-	Corbb O’Connor 

---

## Test procedure

### Applicability

This rule applies to the first title element containing textual content in a document where the document element is an HTML <html> element.

### Expectation

Each target element describes the topic or purpose of the overall content of the document.

## Assumptions

- (REWRITE) Because browsers only recognize the first title element it is not necessary to check other ones.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)

## Test Cases

### Passed

#### Passed example 1

The <title> tag describes the content of the page. 

```html
<html>
  <head>
    <title>Clementine harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Passed example 1

Two <title> tags where the first one describes the content of the page.

```html
<html>
  <head>
    <title>Clementine harvesting season</title>
    <title>Apple harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Passed example 3

Even though the descriptive <title> tag is not placed in the body, the rule still passes since the browser fixes it, and it doesn't cause any known accessibility issues.

```html
<html>
  <head>
  </head>
  <body>
    <title>Clementine harvesting season</title>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

### Failed

#### Failed example 1

XXX

```html
<html>
  <head>
    <title>Apple harvesting season</title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

### Inapplicable

#### Inapplicable example 1

XXX

```html
<html>
  <head>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Inapplicable example 2

XXX

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>Clementines will be ready to harvest from late October through February.</p>
  </body>
</html>
```

#### Inapplicable example 3

This document has a <title> element but is inapplicable since the document element is an SVG <svg> element:

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```
