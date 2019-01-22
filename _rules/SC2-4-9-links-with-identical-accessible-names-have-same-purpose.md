---
name: Links with identical accessible names have same purpose
test_type: atomic

description: |
  This rule checks that identical accessible names are only used for links that have the same purpose

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

This rule applies to any two or more HTML or SVG elements that have the [semantic role](#semantic-role) of link, are [included in the accessibility tree](#included-in-the-accessibility-tree) and that have the same [non-empty](#non-empty) [accessible name](#accessible-name).

### Expectation

When activated, the links in each set of target elements resolve to resources that fulfill the same purpose indicated by the [accessible names](#accessible-name) of the link.

**Note:** Resolving the links includes potential redirects.

**Note:** Web pages and documents (e.g. PDFs, office formats etc.) may fulfil the same purpose in relation to the link, even if the resources:
* are located on different URLs, including different domains
* present different navigation options, e.g. through bread crumbs or local sub menus
* contain different amounts of information and/or differently worded information
* use different layouts.

**Note:** If the same content is presented in different formats, the format itself is often part of the link purpose, e.g. an article as both HTML and PDF.

**Note:** If the [normalized](#url-normalisation) value of the ´href´ is identical, the resources are identical, thus fulfilling the same purpose. [Relative URLs](https://url.spec.whatwg.org/#syntax-url-relative) first need to be resolved to full URLs before doing the comparison.

## Assumptions

* This rule assumes that the purpose of the links for links with identical link texts would not be ambiguous to users in general.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [URL normalization](#url-normalisation)

## Test Cases

### Passed

#### Passed example 1

Identical link text leads to identical URLs:

```html
<a href="/test-assets/link-purpose/index.html">Link text</a>
<a href="/test-assets/link-purpose/index.html">Link text</a>
```

#### Passed example 2

Links resolves to same page due to case-insensitivity on server:

```html
<a href="/Test-Assets/Link-Purpose/index.html">Link text</a>
<a href="/test-assets/link-purpose/index.html">Link text</a>
```

#### Passed example 3

Links resolves to same page after redirect:

```html
<a href="/test-assets/link-purpose/index.html">Link text</a>
<a href="/test-assets/link-purpose/redirect.html>Link text</a>
```

#### Passed example 4

Identical pages are located on different URLs:

```html
<a href="/test-assets/link-purpose/index.html">Link text</a>
<a href="/test-assets/link-purpose/index-copy.html>Link text</a>
```

#### Passed example 5

Same link text used for links going to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy:

```html
<a href="/test-assets/link-purpose/about/contact.html">Link text</a>
<a href="/test-assets/link-purpose/careers/contact.html>Link text</a>
```

#### Passed example 6

URLs differ due to trailing slashes:

```html
<a href="/test-assets/link-purpose/link-purpose">Link text</a> 
<a href="/test-assets/link-purpose/link-purpose/">Link text</a>
```

#### Passed example 7

Pages contain different amounts of information and/or differently worded information, but fulfils same purpose in relation to the link:

```html
<a href="/test-assets/link-purpose/page1.html">Link text</a>
<a href="/test-assets/link-purpose/page2.html">Link text</a>
```

#### Passed example 8

Has the same content but use different layouts:

```html
<a href="/test-assets/link-purpose/page1.html">Link text</a>
<a href="/test-assets/link-purpose/page3.html">Link text</a>
```

#### Passed example 9

Links created via scripting with explicit role of link: 

```html
<span role="link"
   onclick="location='/test-assets/link-purpose/link-purpose/index.html.html'">
Link text
</span>

<span role="link"
   onclick="location='/test-assets/link-purpose/link-purpose/index.html'">
Link text
</span>
```

### Failed

#### Failed example 1

Same link text used for links going to different resources:

```html
<a href="http://facebook.com">Follow us</a> 
<a href="http://twitter.com">Follow us</a>
```

#### Failed example 2

Same link text used for links going to web pages with same name, but with different information:

```html
<a href="/test-assets/link-purpose/social-sciences/contact.html">Contact us</a> 
<a href="/test-assets/link-purpose/humanities/contact.html">Contact us</a>
```

#### Failed example 3

Case-sensitivity in file name:

```html
<a href="/test-assets/link-purpose/page1.html">Link text</a> 
<a href="/test-assets/link-purpose/Page1.html">Link text</a>
```

#### Failed example 4

Links created via scripting with explicit role of link: 

```html
<span role="link"
   onclick="location='/test-assets/link-purpose/link-purpose/page1.html'">
Link text
</span>

<span role="link"
   onclick="location='/test-assets/link-purpose/link-purpose/contact.html'">
Link text
</span>
```

### Inapplicable 

#### Inapplicable example 1

´a´ and ´area´ elements without ´href´ attribute:

```html
<a>Link text</a>
<area aria-label="Link text">
```

#### Inapplicable example 2

No identical link texts:

```html
<a href="/test-assets/link-purpose">Link text 1</a>
<a href="/test-assets/link-purpose">Link text 2</a>
```

#### Inapplicable example 3

Link is not exposed to assistive technologies;

```html
<a href="/test-assets/link-purpose" style="display:none">Link text 1</a>
<a href="/test-assets/link-purpose">Link text 2</a>
```

#### Inapplicable example 4

Links created via scripting, but doesn't have semantic role of link:

```html
<span
   onclick="location='/test-assets/link-purpose/link-purpose/page1.html'">
Link text
</span>

<span
   onclick="location='/test-assets/link-purpose/link-purpose/contact.html'">
Link text
</span>
```
