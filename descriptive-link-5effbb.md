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

**Note:** There may be situations where the purpose of the link is supposed to be unknown or obscured. In those situations, the success criteria will still be met, even if the link's purpose is not described by it.

## Assumptions

_There are currently no assumptions._

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

Link text describes the purpose of the link.

```html
<a href="#desc">See the description of this product</a> 

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 2

Accessible name describes the purpose of the link.

```html
<a href="#main" aria-label="Go to the main content of the page"></a>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Passed Example 3

Link text together with its context describe the purpose of the link.

```html
<p>To see the description of this product <a href="#desc">click here</a></p>

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 4

Both link text together with its context and accessible name describe the purpose of the link.

```html
<p><a href="#" aria-label="Place item in cart">Place item</a><span aria-hidden="true"> in shopping cart</span></p>
```

#### Passed Example 5

Accessible name describes the purpose of the link.

```html
<div role="link" aria-label="Skip to main content" onclick="document.location+='#main';return false;"></div>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Passed Example 6

Link text describes the purpose of the link.

```html
<span role="link" onclick="document.location+='#desc';return false;">See description of the product</span>

<p id="desc">This product consists of several web pages</p>
```

#### Passed Example 7

The context afforded by the list and the link text describe the purpose of the links.

```html
<ul>
  <li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">Ulysses</a></li>
  <li><a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">EPUB format</a></li>
  <li><a href="https://www.gutenberg.org/files/4300/4300-0.txt">Plain text</a></li>
</ul>
```

#### Passed Example 8

The context afforded by the table header and the link text describe the purpose of the links.

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


### Failed

#### Failed Example 1

Link text, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<a href="#desc">More</a>

<p id="desc">This product consists of several web pages</p>
```

#### Failed Example 2

Accessible name, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<a href="#main" aria-label="Go"></a>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Failed Example 3

Link text, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<div role="link" onclick="document.location+='#main';return false;">More</div>

<main>
 <p id="main">This is the main content</p>
</main>
```

#### Failed Example 4

Accessible name, together with the absence of programatically determined link context, does not describe the purpose of the link.

```html
<div role="link" aria-labelledby="id1" onclick="document.location+='#main';return false;"></div>
<div id="id1">Go</div>

<main>
 <p id="main">This is the main content</p>
</main>
```


### Inapplicable 

#### Inapplicable Example 1

`<a>` with its role changed from `link` to another role.

```html
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

#### Inapplicable Example 2

Link that is not included in the accessibility tree.

```html
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#" /></a>
```

#### Inapplicable Example 3

Link with accessible name that consists only of whitespace.

```html
<a href="http://www.w3.org/WAI"><img src="#" alt=" " /></a>
```

#### Inapplicable Example 4

`a` element without the `link` role.

```html
<a>placeholder</a>
```
