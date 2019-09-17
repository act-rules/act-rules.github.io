---
id: 5effbb
name: Link in context is descriptive
rule_type: atomic

description: | 
 This rule checks that all links in their context describe their purpose

accessibility_requirements: 
  wcag20:2.4.4: # Link Purpose (In Context) 
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed

input_aspects:
  - DOM Tree
  - CSS Styling
  - Language

authors:
  - Carlos Duarte
  - Marie Trudelle 
  - Ramit Garg
---

## Applicability

This rule applies to any HTML or SVG element with the [semantic role](#semantic-role) of [`link`](https://www.w3.org/TR/wai-aria/#link) or a role that inherits from the `link` role, that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has an [accessible-name](#accessible-name) that does not only consist of [whitespace](#whitespace).

## Expectation

The [visible](#visible) [text content](#text-content) of the target element, together with its [programmatically determined link context](#programmatically-determined-link-context) describe the purpose of the link.

## Assumptions

This rule assumes that the purpose of the link is not ambiguous to users in general when seen in context on the web page, which is the exception mentioned in success criterion [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html). If the link is ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the link out of context which makes it more of a general user experience concern than an accessibility issue.  

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
- [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24)
- [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G53)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)
- [H77: Identifying the purpose of a link using link text combined with its enclosing list item](https://www.w3.org/WAI/WCAG21/Techniques/html/H77)
- [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](https://www.w3.org/WAI/WCAG21/Techniques/html/H78)
- [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells](https://www.w3.org/WAI/WCAG21/Techniques/html/H79)
- [H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested](https://www.w3.org/WAI/WCAG21/Techniques/html/H81)

## Test Cases

### Passed

#### Passed Example 1

The link text describes the purpose of the link.

```html
<a href="#desc">See the description of this product</a> 

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 2

The accessible name describes the purpose of the link.

```html
<a href="#main" aria-label="Go to the main content of the page"></a>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Passed Example 3

The link text together with its context describe the purpose of the link.

```html
<p>To see the description of this product <a href="#desc">click here</a></p>

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 4

Both the link text together with its context and the accessible name describe the purpose of the link.

```html
<p><a href="#" aria-label="Place item in cart">Place item</a><span aria-hidden="true"> in shopping cart</span></p>
```

#### Passed Example 5

The accessible name describes the purpose of the link.

```html
<div role="link" aria-label="Skip to main content" onclick="document.location+='#main';return false;"></div>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Passed Example 6

The link text describes the purpose of the link.

```html
<span role="link" onclick="document.location+='#desc';return false;">See description of the product</span>

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 7

The context provided by the list and the link text describe the purpose of the links.

```html
<ul>
  <li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">Ulysses</a></li>
  <li><a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">EPUB format</a></li>
  <li><a href="https://www.gutenberg.org/files/4300/4300-0.txt">Plain text</a></li>
</ul>
```

#### Passed Example 8

The context provided by the table header and the link text describe the purpose of the links.

```html
<table>
  <tr>
    <th colspan="3">Ulysses</th>
  </tr>
  <tr>
    <td><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">HTML</a></td>
    <td><a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">EPUB</a></td>
    <td><a href="https://www.gutenberg.org/files/4300/4300-0.txt">Plain text</a></td>
  </tr>
</table>
```

#### Passed Example 9

The accessible name describes the purpose of the link.

```html
<p id="instructions">Click on the arrow to go to the main content</p>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
  <a href="#main" aria-labelledby="instructions">
    <path
      style="fill:#1E201D;"
      d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
			C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
			c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
    />
  </a>
</svg>

<main>
  <p id="main">This is the main content</p>
</main>
```

### Failed

#### Failed Example 1

The link text, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<a href="#desc">More</a>

<p id="desc">This product consists of several web pages</p>
```

#### Failed Example 2

The accessible name, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<a href="#main" aria-label="Go"></a>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Failed Example 3

The link text, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<div role="link" onclick="document.location+='#main';return false;">More</div>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Failed Example 4

The accessible name, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<div role="link" aria-labelledby="id1" onclick="document.location+='#main';return false;"></div>
<div id="id1">Go</div>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Failed Example 5

The accessible name, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
  <a href="#main" aria-label="Go">
    <text x="20" y="20">
      Go
    </text>
  </a>
</svg>

<main>
  <p id="main">This is the main content</p>
</main>
```


### Inapplicable 

#### Inapplicable Example 1

An `a` element with its role changed from `link` to another role.

```html
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

#### Inapplicable Example 2

The link is not included in the accessibility tree.

```html
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#" /></a>
```

#### Inapplicable Example 3

Link with accessible name that consists only of whitespace.

```html
<a href="http://www.w3.org/WAI"><img src="#" alt=" " /></a>
```

#### Inapplicable Example 4

An `a` element without the `link` role.

```html
<a>placeholder</a>
```
