---
name: Links with identical accessible names serve equivalent purpose
test_type: atomic

description: |
  This rule checks that links with identical accessible names serve an equivalent purpose.

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

This rule applies to any set of any two or more HTML or SVG elements that have the [semantic role](#semantic-role) of `link`, or a role that inherits from the `link` role, are [included in the accessibility tree](#included-in-the-accessibility-tree), and that have [matching](#matching-characaters) [accessible names](#accessible-name) that does not only consist of [Unicode separator characters](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153).

**Note:** The test target for this rule is the full set of link elements that share the same [matching](#matching-characters) [accessible name](#accessible-name).

### Expectation

When followed, the links in each set of target elements resolve to the [same resource](#same-resource) or to different resources that fulfill an [equivalent purpose](#equivalent-purpose).

**Note:** Resolving the links includes potential redirects.

## Assumptions

This rule assumes that the purpose of the links with identical names would not be ambiguous to users in general when seen in context on the web page, as users of assistive technologies in this case is not at a disadvantage when viewing the link out of context, e.g. on a list of links in a screen reader.

## Accessibility support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [URL parsing](https://www.w3.org/TR/html52/infrastructure.html#parsing-urls)

## Test Cases

### Passed

#### Passed example 1

A set of two HTML `<a>` elements have the same accessible name and link to the same resource.

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
```

#### Passed example 2

Links resolves to same resource after redirect:

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/redirect.html">Contact us</a>
```

#### Passed example 3

Resources are not the same, since the links resolve to different URLs, but the resources are completely identical, thus serving the same purpose:

```html
<a href="/test-assets/6cbcbe/index.html">Contact us</a>
<a href="/test-assets/6cbcbe/index-copy.html">Contact us</a>
```

#### Passed example 4

Same link text used for links going to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy:

```html
<a href="/test-assets/6cbcbe/about/contact.html">Contact us</a>
<a href="/test-assets/6cbcbe/careers/contact.html">Contact us</a>
```

#### Passed example 5

URLs differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent:

```html
<a href="/test-assets/6cbcbe/">Contact us</a> 
<a href="/test-assets/6cbcbe">Contact us</a>
```

#### Passed example 6

Pages contain different amounts of information and/or differently worded information, but fulfils the same purpose in relation to the link:

```html
<a href="/test-assets/6cbcbe/page1.html">Call us</a>
<a href="/test-assets/6cbcbe/page2.html">Call us</a>
```

#### Passed example 7

Pages have the same advertised key content but use different layouts:

```html
<a href="/test-assets/6cbcbe/page1.html">Contact us</a>
<a href="/test-assets/6cbcbe/page3.html">Contact us</a>
```

#### Passed example 8

Links created via scripting with explicit role of link, but leads to the same resource: 

```html
<span role="link"
   onclick="location='/test-assets/6cbcbe/index.html'">
Link text
</span>

<span role="link"
   onclick="location='/test-assets/6cbcbe/index.html'">
Link text
</span>
```

#### Passed example 9

A set of two SVG `<a>` elements have the same accessible name and link to the same resource. 

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <a href="http://facebook.com" aria-label="Follow us">
    <circle cx="50" cy="40" r="35"/>
  </a>

  <a href="http://facebook.com">
    <text x="50" y="90" text-anchor="middle">
      Follow us
    </text>
  </a>
</svg>
```

### Failed

#### Failed example 1

Same link text used for links going to different resources:

```html
<a href="http://facebook.com">Follow us</a> 
<a href="http://twitter.com">Follow us</a>
```

#### Failed example 2

Same link text used for links going to web pages that are similar, but have different information in their content:

```html
<a href="/test-assets/6cbcbe/about/contact.html">Contact us</a> 
<a href="/test-assets/6cbcbe/admissions/contact.html">Contact us</a>
```

#### Failed example 3

Links created via scripting with explicit role of link, but leads to different resources that offer different content: 

```html
<span role="link"
   onclick="location='/test-assets/6cbcbe/about/contact.html'">
Link text
</span>

<span role="link"
   onclick="location='/test-assets/6cbcbe/admissions/contact.html'">
Link text
</span>
```

#### Failed example 4

Same accessible name used for image links going to different resources:

```html
<a href="http://facebook.com"><img src="facebook.jpg" alt="Follow us" /></a> 
<a href="http://twitter.com"><img src="twitter.jpg" alt="Follow us" /></a>
```

#### Failed example 5

A set of two SVG `<a>` elements have the same accessible name but links to different resources:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <a href="http://facebook.com" aria-label="Follow us">
    <circle cx="50" cy="40" r="35"/>
  </a>

  <a href="http://twitter.com">
    <text x="50" y="90" text-anchor="middle">
      Follow us
    </text>
  </a>
</svg>
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
<a href="/test-assets/6cbcbe/about/contact.html">Contact main office</a>
<a href="/test-assets/6cbcbe/admissions/contact.html">Contact admissions office</a>
```

#### Inapplicable example 3

Link is not included in the accesssibility tree:

```html
<a href="/test-assets/6cbcbe/page1.html" aria-hidden="true" tabindex="-1">Contact Us</a>
<a href="/test-assets/6cbcbe/pabe2.html">Contact Us</a>
```

#### Inapplicable example 4

Links created via scripting, but without the semantic role of link:

```html
<span
   onclick="location='/test-assets/6cbcbe/page1.html'">
Contact Us
</span>

<span
   onclick="location='/test-assets/6cbcbe/page2.html'">
Contact Us
</span>
```

#### Inapplicable example 5

Links do not have accessible names:

```html
<a href="http://facebook.com"></a> 
<a href="http://twitter.com"></a>
```

#### Inapplicable example 6

Image links do not have accessible names:

```html
<a href="http://facebook.com"><img src="facebook.jpg" /></a> 
<a href="http://twitter.com"><img src="twitter.jpg" /></a>
```
