---
id: c487ae
name: Links have an accessible name
rule_type: atomic
description: |
  Each link has an accessible name
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Wilco Fiers
  - Anne Thyme Nørregaard
---

## Applicability

The rule applies to any HTML element with the [semantic role](#semantic-role) of `link` that is [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

Each target element has an [accessible name](#accessible-name) that is not only [whitespace](#whitespace).

## Assumptions

- The rule assumes that all links are [user interface components](https://www.w3.org/TR/WCAG20/#user-interface-componentdef) as defined by WCAG 2. When the link role is used incorrectly, this assumption may not be true.

## Accessibility Support

For `area` elements that have a `href` attribute, but are not nested inside a `map` element, there are differences between browsers and assistive technology on whether the `area` is considered [included in the accessibility tree](#included-in-the-accessibility-tree) or not.

## Background

- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA7.html)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html)
- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/WCAG20-TECHS/F89.html)

## Test Cases

### Passed

#### Passed Example 1

`<a>` element with accessible name through content.

```html
<a href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

#### Passed Example 2

Element with explicit role of link with accessible name through content.

```html
<div role="link">Web Accessibility Initiative (WAI)</div>
```

#### Passed Example 3

`Button` with the role of `link`.

```html
<button role="link">Click me!</button>
```

#### Passed Example 4

Accessible name for link via `aria-label`

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-label="This is a link"/></a>
```

#### Passed Example 5

Link named via `title` om link.

```html
<a href="http://www.w3.org/WAI" title="This is a link"><img src="#"/></a>
```

#### Passed Example 6

Link named via `title` on image.

```html
<a href="http://www.w3.org/WAI"><img src="#" title="This is a link"/></a>
```

#### Passed Example 7

Link with both `image` and `text`.

```html
<a href="http://www.w3.org/WAI"><img src="#" />This is my link text</a>
```

#### Passed Example 8

Accessible name for link via `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
<div id="id1">This is my link text</div>
```

#### Passed Example 9

When `link` is off screen.

```html
<html>
  <style>
    .offScreenLink {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
		<a class="offScreenLink" href="http://www.w3.org/WAI">Web Accessibility Initiative (WAI)</a>
  </body>
</html>
```

#### Passed example 10

`area` element with `href` attribute has accessible name.

```html
<img src="planets.gif" width="145" height="126" alt="Planets"
usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
</map>
```

#### Passed example 11

`a` element where accessible name does not only consist of whitespace.

```html
<a href="http://www.w3.org/WAI">:-)</a>
```

### Failed

#### Failed Example 1

Image link without accessible name.

```html
<a href="http://www.w3.org/WAI"><img src="#"/></a>
```

#### Failed Example 2

Image link where image is marked as decorative.

```html
<a href="http://www.w3.org/WAI"><img src="#" alt=""/></a>
```

#### Failed Example 3

Link with icon inserted via font-awesome.

```html
<a href="http://www.w3.org/WAI"><i class="fa fa-download"></i></a>
```

#### Failed Example 4

Link with image that has empty title.

```html
<a href="http://www.w3.org/WAI"><img src="#" title=""/></a>
```

#### Failed Example 5

Link with image that has empty `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledy="id1"/></a>
<div id="id1"></div>
```

#### Failed Example 6

`aria-labelledby` references a non-existing id.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
```

#### Failed Example 7

Non-visible link.

```html
<a href="http://www.w3.org/WAI" style="left: -9999px; position: absolute;">
	<img src="#" />
</a>
```

#### Failed example 9

Link is completely empty, but still shows up in focus order, so it should have an accessible name.

```html
<a href="http://www.w3.org/WAI"></a>
```

#### Failed example 10

`area` element with `href` attribute does not have accessible name.

```html
<img src="planets.gif" width="145" height="126" alt="Planets"
usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm">
</map>
```

#### Failed example 11

`a` element where accessible name through content only consist of whitespace.

```html
<a href="http://www.w3.org/WAI"> </a>
```

### Inapplicable

#### Inapplicable Example 1

`<a>` element that has had its role changed.

```html
<a href="http://www.w3.org/WAI" role="button">
	Web Accessibility Initiative (WAI)
</a>
```

#### Inapplicable Example 2

Not included in the accessibility tree due to `display:none`.

```html
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#"/></a>
```

#### Inapplicable Example 3

Not included in the accessibility tree due to `visibility: hidden`.

```html
<a href="http://www.w3.org/WAI" style="visibility: hidden;">Some text</a>
```

#### Inapplicable Example 4

Not included in the accessibility tree due to `aria-hidden="true"`.

```html
<a aria-hidden="true" href="http://www.w3.org/WAI">
	Web Accessibility Initiative (WAI)
</a>
```

#### Inapplicable example 5

`area` element without `href` attribute does not have role of `link`.

```html
<area shape="rect" coords="0,0,82,126">
```
