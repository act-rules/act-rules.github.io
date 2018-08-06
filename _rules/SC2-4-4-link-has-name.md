---
name: Links have an accessible name
description: |
  Each link has an accessible name

success_criterion:
- 4.1.2 # Name, Role, Value
- 2.4.4

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML element with the [semantic role](#semantic-role) of `link` that is [visible on the page](#visible-on-the-page) or [exposed to assistive technologies](#exposed-to-assistive-technologies).

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty).

## Assumptions

- The rule assumes that all links are [user interface components](https://www.w3.org/TR/WCAG20/#user-interface-componentdef) as defined by WCAG 2. When the link role is used incorrectly, this assumption may not be true.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=244#navigation-mechanisms-refs)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA7.html)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html)
- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/WCAG20-TECHS/F89.html)

## Test Cases

### Passed

```html
<!-- <a> element with accessible name through content -->
<a href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

```html
<!-- element with eplicit role of link with accessible name through content -->
<div role="link"> Web Accessibility Initiative (WAI) </div>
```

```html
<!-- Button with the role of link -->
<button role="link">Click me!</button>
```

```html
<!-- Accessible name for link via aria-label -->
<a href="http://www.w3.org/WAI"><img src="#" aria-label="This is a link"/></a>
```

```html
<!-- Link named via title on link -->
<a href="http://www.w3.org/WAI" title="This is a link"><img src="#" /></a>
```

```html
<!-- Link named via title on image -->
<a href="http://www.w3.org/WAI"><img src="#" title="This is a link"/></a>
```

```html
<!-- Link with both image and text -->
<a href="http://www.w3.org/WAI"><img src="#" />This is my link text</a>
```

```html
<!-- Accessible name for link via aria-labelledby -->
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
<div id="id1">This is my link text</div>
```

```html
<!-- When link is off screen -->
<html>
  <style>
    .offScreenLink {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
		<a class="offScreenLink" href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
  </body>
</html>
```

```html
<!-- Link is not in accessibility tree -->
<a aria-hidden="true" href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

### Failed

```html
<!-- Image link without accessible name-->
<a href="http://www.w3.org/WAI"><img src="#" /></a>
```

```html
<!-- Image link where image is marked as decorative -->
<a href="http://www.w3.org/WAI"><img src="#" alt="" /></a>
```

```html
<!-- Link with icon inserted via font-awesome -->
<a href="http://www.w3.org/WAI"><i class="fa fa-download"></i></a>
```

```html
<!-- Link with image that has empty title -->
<a href="http://www.w3.org/WAI"><img src="#" title=""/></a>
```

```html
<!-- Link with image that has empty aria-labelledby -->
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledy="id1"/></a>
<div id="id1"></div>
```

```html
<!-- Aria-labelledby references to a non-existing id -->
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1" /></a>
```

```html
<!-- Non-visible link-->
<a href="http://www.w3.org/WAI" style="left: -9999px; position: absolute;"><img src="#" /></a>
```

```html
<!-- Not exposed to assistive technologies -->
<a href="http://www.w3.org/WAI" aria-hidden="true"><img src="#" /></a>
```

### Inapplicable

```html
<!-- <a> element that has had its role changed -->
<a href="http://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

```html
<!-- Not visible and not eposed to assistive technologies -->
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#" /></a>
```

```html
<!-- Non-visible link-->
<a href="http://www.w3.org/WAI" style="visibility: hidden;">Some text</a>
```
