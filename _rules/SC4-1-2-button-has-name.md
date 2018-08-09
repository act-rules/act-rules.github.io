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

The rule applies to elements that are [visible on the page](#visible-on-the-page) or [exposed to assistive technologies](#exposed-to-assistive-technologies) with the [semantic role](#semantic-role) of `button`, except for `input` elements of `type="image"`.

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty)

## Assumptions

- The rule assumes that all buttons are user interface components as defined by WCAG 2.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
- [https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv](https://www.w3.org/WAI/WCAG20/quickref/?showtechniques=412#qr-ensure-compat-rsv)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
- [https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html](https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html)

# Test cases

## Passed

```html
<!-- Regular button -->
<button>My button</button>
```

```html
<!-- Value attribute as the accessible name -->
<input type="submit" value="Submit">
```

```html
<!-- aria-label for the accessible name -->
<button aria-label="My button"></button>
```

```html
<!-- span tag with role button and has name defined by aria-label -->
<span role="button" aria-label="My button"></button>
```

```html
<!-- summary element has a default semantic role of button -->
<summary>Press Here</summary>
```

```html
<!-- disabled elements are also applicable -->
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
    <!-- Off screen elements should be tested -->
    <button class='notInPage'>Save</button>
  </body>
</html>
```

## Failed

```html
<!-- value attribute does NOT give an accessible name, only for input elements -->
<button type="button" value="read more"></button>
```

```html
<!-- aria-hidden buttons should be tested -->
<button aria-hidden="true"></button>
```

```html
<!-- span tag with role button with no name -->
<span role="button"></span>
```

```html
<!-- off screen element with out an accessible name -->
<html>
  <style>
    .notInPage {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }
  </style>
  <body>
    <button class='notInPage' value='delete'></button>
  </body>
</html>
```

## Inapplicable

```html
<!-- Image buttons are tested in a different rule -->
<input type='image' value='download'>
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
    <!-- not visible in page and not exposed to assistive technologies -->
    <button class='notInPage' aria-hidden='true'>Confirm</button>
  </body>
</html>
```

```html
<!-- inapplicable: role overridden to link for button element -->
<button role='link'>take me somewhere</button>
```
