---
name: Buttons have an accessible name

description: |
  Each button element has an accessible name

success_criterion:
- 4.1.2

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
- Stein Erik Skotkjerra
---

## Test procedure

### Applicability

The rule applies to elements that are [visible on the page][] or [exposed to assistive technologies][] with the [semantic role](#semantic-role) of `button`, except for `input` elements of `type="image"`.

### Expectation

Each target element has an [accessible name][] that is [non-empty][].

## Assumptions

- The rule assumes that all buttons are user interface components as defined by WCAG 2.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used)
- [https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html](https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html)
- The WCAG 2.0 Techniques already contain examples and code snippets to illustrate which content passes or fails the test. Whenever possible auto-wcag refers to those. Another source for test cases is the W3C Before and After Demonstration.
- Other references

# Test cases

## Passed

```html
<button>My button</button>
```

```html
<button aria-label='Save Page'>Save Page</button>
```

```html
<input type='submit' value='Submit'>
```

```html
<button aria-label="My button"></button>
```

<!-- pass: span tag with role button and has name defined by aria-label -->
```html
<span role="button" aria-label="My button"></button>
```

<!-- pass: summary element has a default sematic role of button -->
```html
<summary>Press Here</summary>
```

```html
<button disabled>Delete</button>
```

```html
<html>
  <style>
    .notInPage {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
    <button class='notInPage'>Save</button>
  </body>
</html>
```

## Failed

```html
<div>
  <p>
    Some detailed article, but the link to read more is placed with no relevance to the text, thereby the link has lost context.
  </p>
  <p>
    <button type='button' value='read more...'></button>
  </p>
</div>
```

```html
<button aria-hidden='true'>
</button>
```

<!-- fail: span tag with role button with no name -->
```html
<span role="button"></button>
```

<!-- fail: off screen button with no name -->
```html
<html>
  <style>
    .notInPage {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
    <button class='notInPage'></button>
  </body>
</html>
```

## Inapplicable

<!-- inapplicable: input type image -->
```html
<input type='image' value='download'>
```

<!-- inapplicable: not visible in page and not exposed to assistive technologies -->
```html
<html>
  <style>
    .notInPage {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
    <button class='notInPage' aria-hidden='true'>Confirm</button>
  </body>
</html>
```

<!-- inapplicable: role overridden to link for button element -->
```html
<button role='link'>take me somewhere</button>
```

------

[non-empty]: ../pages/algorithms/non-empty.html
[accessible name]: ../pages/algorithms/accessible-name.html 
[exposed to assistive technologies]: ../pages/algorithms/exposed-to-assistive-technologies.html
[visible on the page]: ../pages/algorithms/visible-on-the-page.html
