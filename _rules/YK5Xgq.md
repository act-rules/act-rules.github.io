---
name: CSS Orientation Lock

rule_type: composite

description: |
  This rule checks that page content is not locked to any specific display orientation, and the content is operable in all display orientations.

success_criterion:
- 1.3.4 # (Orientation)

atomic_rules:
- 8e8G5z
- Kj3fQk

authors:
- Audrey Maniez
- Jey Nandakumar
---

## Aggregation Definition

### Applicability

The rule applies to any `element` that is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree) of the [page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s).

### Expectation

For each test target, the outcome of at least one of the following rules is passed:
- [CSS orientation lock via show/hide controls](https://auto-wcag.github.io/auto-wcag/rules/8e8G5z.html) 
- [CSS orientation lock via media queries](https://auto-wcag.github.io/auto-wcag/rules/Kj3fQk.html)


## Assumptions

* This test assumes that a specific display orientation is not [essential](https://www.w3.org/TR/WCAG21/#dfn-essential), which is listed as a valid exception to [SC 1.3.4]((https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)). Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.

## Accessibility support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [MDN Orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation)

## Test Cases

### Passed

#### Passed example 1

A page where the content is adaptable based on orientation. In this case, a switch button can be activated to display the respective page content based on orientation.

```html
<html lang="en">
  <head>
  </head>
  <body>
    <button id='switch-button'>
      Switch Orientation
    </button>
    <section id='show-me-portrait'>
        I am operable in PORTRAIT
    </section>
    <section id='show-me-landscape'>
        I am operable in LANDSCAPE
    </section>
    <script>
      var switchButton = document.getElementById('switch-button');
      var portraitContent = document.getElementById('show-me-portrait');
      var landscapeContent = document.getElementById('show-me-landscape');
      var currentOrientation;
      function setUpOrientation(orientation) {
        if(orientation === 'portrait') {
          portraitContent.style.display = 'block';
          landscapeContent.style.display = 'none';
        }
        if(orientation === 'landscape') {
          portraitContent.style.display = 'none';
          landscapeContent.style.display = 'block';
        }
        currentOrientation = orientation;
      }
      // register event
      switchButton.addEventListener('click', function() {
        if(currentOrientation === 'portrait') {
          return setUpOrientation('landscape')
        }
        if(currentOrientation === 'landscape') {
          return setUpOrientation('portrait')
        }
      })
      // on page load
      setUpOrientation('portrait')
    </script>
  </body>
</html>
```

### Failed

#### Failed example 1

A page, where orientation is locked via `style` specified on the `head`.

```html
<html lang="en">
  <head>
    <!--
      1. The style from the stylesheet applies `transform`
    -->
    <style>
      @media (orientation: portrait) {
        body {
          transform: rotate(-90deg);
        }
      }
    </style>
  </head>
  <body>
      Page Content
  </body>
</html>
```

### Inapplicable

#### Inapplicable example 1

A page where there are no `stylesheets`, `styles`, or `control` that can modify the content of the base respective to `orientation`.

```html
<html lang="en">
  <body>
    I am a simple page
  </body>
</html>
```