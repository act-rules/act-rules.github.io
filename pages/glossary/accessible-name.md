---
title: Accessible Name
key: accessible-name
---

The programmatically determined name of a user interface element that is included in the accessibility tree.

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description](https://www.w3.org/TR/svg-aam/#mapping_additional).


#### Examples

##### Example 1

This `button` has an accessible name given by its text content.

```html
<button>My button</button>
```

##### Example 2

This link has an accessible name given by its `title` attribute.

```html
<a href="http://www.w3.org/WAI" title="This is a link"><img src="#"/></a>
```

##### Example 3

This `div` has an accessible name given by its `aria-label` attribute.

```html
<div aria-label="Empty element"></div>
```

##### Example 4

This `img` has an accessible name given by `aria-labelledby`.

```html
<div id="label-cat-cucumber">A cat being afraid of a cucumber</div>
<img aria-labelledby="label-cat-cucumber" src="cat-cucumber.jpg">
```

##### Example 5

This `input` as an accessible name given by its `value` attribute.

```html
<input type="submit" value="Submit" />
```

##### Example 6

This `img` has an accessible name given by its `alt` attribute.

```html
<img alt="A cat being afraid of a cucumber" src="cat-cucumber.jpg">
```

##### Example 7

This `button` does not have an accessible name, since `value` attribute is only for `input`

```html
<button type="button" value="read more"></button>
```