---
id: c487ae
name: Links have an accessible name
description: |
  Each link has an accessible name
success_criterion:
  - 4.1.2 # Name, Role, Value
  - 2.4.4 # Link Purpose (In Context)
  - 2.4.9 # Link Purpose (Link Only)
test_aspects: # Remove what is not applicable
  - DOM Tree
  - CSS Styling
authors:
  - Wilco Fiers
  - Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML element with the [semantic role](#semantic-role) of `link` that is [included in the accessibility tree](#included-in-the-accessibility-tree).

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

#### Passed example 1

`<a>` element with accessible name through content.

```html
<a href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

#### Passed example 2

Element with eplicit role of link with accessible name through content.

```html
<div role="link">Web Accessibility Initiative (WAI)</div>
```

#### Passed example 3

`Button` with the role of `link`.

```html
<button role="link">Click me!</button>
```

#### Passed example 4

Accessible name for link via `aria-label`

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-label="This is a link"/></a>
```

#### Passed example 5

Link named via `title` om link.

```html
<a href="http://www.w3.org/WAI" title="This is a link"><img src="#"/></a>
```

#### Passed example 6

Link named via `title` on image.

```html
<a href="http://www.w3.org/WAI"><img src="#" title="This is a link"/></a>
```

#### Passed example 7

Link with both `image` and `text`.

```html
<a href="http://www.w3.org/WAI"><img src="#" />This is my link text</a>
```

#### Passed example 8

Accessible name for link via `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
<div id="id1">This is my link text</div>
```

#### Passed example 9

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
		<a class="offScreenLink" href="http://www.w3.org/WAI">
			Web Accessibility Initiative (WAI)
		</a>
	</body>
</html>
```

### Failed

#### Failed example 1

Image link without accessible name.

```html
<a href="http://www.w3.org/WAI"><img src="#"/></a>
```

#### Failed example 2

Image link where image is marked as decorative.

```html
<a href="http://www.w3.org/WAI"><img src="#" alt=""/></a>
```

#### Failed example 3

Link with icon inserted via font-awesome.

```html
<a href="http://www.w3.org/WAI"><i class="fa fa-download"></i></a>
```

#### Failed example 4

Link with image that has empty title.

```html
<a href="http://www.w3.org/WAI"><img src="#" title=""/></a>
```

#### Failed example 5

Link with image that has empty `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledy="id1"/></a>
<div id="id1"></div>
```

#### Failed example 6

Aria-labelledby references to a non-existing id.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
```

#### Failed example 7

Non-visible link.

```html
<a href="http://www.w3.org/WAI" style="left: -9999px; position: absolute;"
	><img src="#"
/></a>
```

### Inapplicable

#### Inapplicable example 1

`<a>` element that has had its role changed.

```html
<a href="http://www.w3.org/WAI" role="button"
	>Web Accessibility Initiative (WAI)</a
>
```

#### Inapplicable example 2

Not included in the accessibility tree due to `display:none`.

```html
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#"/></a>
```

#### Inapplicable example 3

Not included in the accessibility tree due to `visibility: hidden`.

```html
<a href="http://www.w3.org/WAI" style="visibility: hidden;">Some text</a>
```

#### Inapplicable example 10

Not included in the accessibility tree due to `aria-hideden="true"`.

```html
<a aria-hidden="true" href="http://www.w3.org/WAI">
	Web Accessibility Initiative (WAI)
</a>
```
