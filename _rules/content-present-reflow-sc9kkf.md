---
id: sc9kkf
name: Content is not missing at 320 CSS pixels
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks content is not missing when the viewport is set to 320 CSS pixels in the orientation of the text.
accessibility_requirements:
  wcag21:1.4.10: # Reflow (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    -  Helen Burge
  previous_authors:
    - 
---

## Applicability

This rule applies to any non-[decorative][] HTML [content][] that is [visible][] in a [viewport][] of 1280 by 1024 [CSS pixels][], and not [visible][] in a [viewport][] of 320 by 256 [CSS pixels][].

## Expectation

For each target element, when the [viewport][] is set to 320 by 256 CSS pixels, the [content][] is not cut off, removed, or obscured by another element, except if one of the following is true:

- the hidden content can be scrolled into view, or
- an [instrument][] is available to reveal the content.

## Background

This rule supports the Success Criterion [1.4.10 Reflow][sc1410], which requires that content be presented without loss of information or functionality at a width equivalent to 320 [CSS pixels][]. When content is missing at smaller [viewport][] sizes, users may lose access to [essential][] information or controls, even if the layout appears functional. Responsive design should reposition or adapt content, not remove it entirely, unless an equivalent [mechanism][] provides access. 

### Assumptions

The person testing the [content][] is aware of the requirements to allow word wrap and specific spacing, for example, a programming language like Python.

### Accessibility Support

There are no accessibility support issues known.

## Examples

### Passed

#### Passed Example 1

The [content][] remains fully available after reflow.

```html
<div style="max-width: 100%;">
  <p>
    All text content remains visible and accessible when the viewport is reduced.
  </p>
</div>
```

#### Passed Example 2

Navigation collapses into a menu but remains accessible. The [content][] is not removed, only not immeditately visible behind an accessible control.

```html
<button aria-expanded="false">Menu</button>
<nav hidden>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

#### Passed Example 3

The [content][] is visually hidden on the first view but remains available programmatically and visual in a sub page.

```html
<p>
   <a href="instructions.html">Read full instructions</a>
</p>
```

#### Passed Example 4

The [content][] is moved in the layout but still present.

```html
<style>
  .sidebar {
    order: 2;
  }
</style>
<div class="sidebar">
  <p>Sidebar content is still available, just repositioned.</p>
</div>
```

#### Passed Example 5

Images resize but are still visible.

```html
<img src="example.jpg" style="max-width: 100%;">
```

#### Passed Example 6

Form fields collapse in an accordian but remain accessible when expanded.

```html
<form>
  <label for="name">Name</label>
  <input id="name" type="text">
</form>
```

#### Passed Example 7

The [content][] is requiring two-dimensional layout (covered under reflow exceptions).

```html
<table>
  <tr><th>Column</th><th>Column</th></tr>
</table>
```

#### Passed Example 8

Python code that allows a scroll as cannot include a word wrap to function.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Passing Code Reflow</title>
    <style>
        /* Prevents wrapping and allows scrolling at 320px wide */
        pre {
            max-width: 320px;
            overflow-x: auto;
            white-space: pre;
            background: #f4f4f4;
            padding: 10px;
        }
        /* Visual cue for keyboard users */
        pre:focus { outline: 2px solid #005a9c; }
    </style>
</head>
<body>
    <!-- tabindex="0" ensures keyboard-only users can scroll the long line -->
    <pre tabindex="0" role="region" aria-label="Python code"><code>def check_data(items):
    for item in items:
        if item.status == "active" and item.value > 100:
            print(f"Valid ID: {item.id} with high value.")</code></pre>
</body>
```

### Failed

#### Failed Example 1

Static [content][] removed completely at smaller viewport.

```html
<style>
  @media (max-width: 400px) {
    .important-content {
      display: none;
    }
  }
</style>
<div class="important-content">
  This content disappears on smaller screens.
</div>
```

#### Failed Example 2

Navigation items removed instead of adapted.

```html
<style>
  @media (max-width: 400px) {
    nav li:nth-child(n+3) {
      display: none;
    }
  }
</style>
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>
```

#### Failed Example 3

The [content][] is visually clipped and inaccessible.

```html
<div style="height: 50px; overflow: hidden;">
  <p>
    Important content is hidden and cannot be accessed or revealed.
  </p>
</div>
```

#### Failed Example 4

The [content][] is moved off-screen and not reachable when it should be visible.

```html
<div style="position: absolute; left: -9999px;">
  Hidden content that cannot be accessed by users.
</div>
```

#### Failed Example 5

Interactive element missing at smaller [viewport][].

```html
<style>
  @media (max-width: 400px) {
    button {
      display: none;
    }
  }
</style>
<button>Submit</button>
```

#### Failed Example 6

Image removed without alternative.

```html
<style>
  @media (max-width: 400px) {
    img {
      display: none;
    }
  }
</style>
<img src="important-diagram.png" alt="Important diagram">
```

#### Failed Example 7

Collapsed [content][] has no mechanism to access it.

```html
<div style="display: none;">
  <p>This content is permanently hidden.</p>
</div>
```

### Inapplicable

#### Inapplicable Example 1

The [content][] is explicitly hidden from all users.

```html
<div hidden>
  Hidden content not intended for display.
</div>
```

#### Inapplicable Example 2

The [content][] is outside the user viewport by design (e.g. off-canvas patterns before interaction).

```html
<div aria-hidden="true" class="offscreen-menu">
  Menu content appears only when activated.
</div>
```

[instrument]: #instrument 'Definition of instrument'
[decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[content]: https://www.w3.org/TR/WCAG22/#dfn-content 'WCAG definition of Content (Web content)'
[visible]: #visible 'Definition of visible'
[viewport]: https://www.w3.org/TR/WCAG22/#dfn-viewport 'WCAG definition of Viewport'
[css pixels]: https://www.w3.org/TR/css3-values/#reference-pixel 'CSS 3 definition, reference pixel'
[sc1410]: https://www.w3.org/TR/WCAG22/#reflow 'WCAG 2.2 Success Criterion 1.4.10 Reflow'
[essential]: https://www.w3.org/TR/WCAG22/#dfn-essential 'WCAG definition of Essential'
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG definition of Mechanism'
