---
id: acsmtl
name: Orientation scrolls do not exist at 320 CSS pixels without a content exception
rules_format: 1.1
rule_type: atomic
description: |
  This rule checks content does not require a scroll in the orientation of the text when the viewport is set to 320 CSS pixels.
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

This rule applies to any element containing visible content that is rendered when the viewport is set to 320 CSS pixels in the orientation of the text. The user can scroll in the orientation of the text (for example, horizontal scrolling in left-to-right text).

## Expectation (1)

Each target element:
- Does not require scrolling in the direction of reading to access content when viewed at 320 CSS pixels; or
- Scrolls only where the content meets a valid exception, where a two-dimensional layout is required for meaning or functionality.

## Background

This rule supports WCAG 2.1 Success Criterion 1.4.10 Reflow, which requires that content can be presented without loss of information or functionality and without requiring scrolling in two dimensions at a width equivalent to 320 CSS pixels. For horizontally written languages, users should be able to scroll vertically only, without needing horizontal scrolling to read text. Exceptions exist for content that inherently requires a two-dimensional layout, such as maps, data tables, or code blocks.

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

## Examples

### Passed

#### Passed Example 1

Text content reflows and only vertical scrolling is required.

```html
<div style="max-width: 100%;">
  <p>
    This paragraph wraps correctly within the viewport and can be read
    using vertical scrolling only.
  </p>
</div>
```

#### Passed Example 2

Flexible layout prevents horizontal scrolling.

```html
<style>
  .container {
	display: flex;
	flex-direction: column;
	width: 100%;
  }
</style>
<div class="container">
  <p>
	All content reflows into a single column.
  </p>
</div>
```

#### Passed Example 3

Navigation collapses into a menu at smaller viewport sizes. Meaning no horizontal scrolling is required in the reading direction.

```html
<button>Menu</button>
<nav hidden>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

#### Passed Example 4

Scrollable exception isolated to a data table. Meaning scrolling is limited to an exception (table requiring two-dimensional layout).

```html
<div style="overflow-x: auto;">
  <table style="min-width: 600px;">
	<tr><th>Name</th><th>Value</th></tr>
	<tr><td>Example</td><td>Data</td></tr>
  </table>
</div>
```

#### Passed Example 5

The carousel scrolls horizontally, but each panel fits the viewport. Each panel is readable without requiring scrolling within the panel itself.

```html
<div style="display: flex; overflow-x: auto;">
  <div style="min-width: 320px;">Panel 1</div>
  <div style="min-width: 320px;">Panel 2</div>
</div>
```

#### Passed Example 6

Long text wraps without forcing horizontal scroll.

```html
<p style="word-break: break-word;">
  ThisIsAnExtremelyLongWordThatWrapsCorrectlyInsteadOfForcingScrolling.
</p>
```

#### Passed Example 7

Large data table requiring two-dimensional layout.

```html
<table>
  <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
  <tr><td>Data</td><td>Data</td><td>Data</td></tr>
</table>
```

#### Passed Example 8

Map or graphical content.

```html
<div class="map">
  <!-- map content -->
</div>
```

#### Passed Example 9

Video player with controls.

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

#### Passed Example 10

Canvas or game interface requiring two-dimensional interaction.

```html
<canvas width="800" height="600"></canvas>
```

### Failed

#### Failed Example 1

The page requires horizontal scrolling to read text.

```html
<div style="width: 600px;">
  <p>
    This paragraph does not wrap and requires horizontal scrolling.
  </p>
</div>
```

#### Failed Example 2

Unbreakable text forces scrolling.

```html
<p style="white-space: nowrap;">
  ThisTextDoesNotWrapAndForcesTheUserToScrollHorizontallyToRead.
</p>
```

#### Failed Example 3

Overflow causes horizontal scroll in reading direction.

```html
<div style="overflow-x: scroll;">
  <p style="width: 500px;">
    Users must scroll horizontally to read this text.
  </p>
</div>
```

#### Failed Example 4

Navigation requires horizontal scrolling. Primary navigation requires scrolling in the reading direction.

```html
<nav style="display: flex; overflow-x: auto;">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>
```

#### Failed Example 5

Content partially off-screen and requires scrolling to reveal.

```html
<div style="position: relative;">
  <p style="position: absolute; left: 350px;">
    This text is خارج the viewport and requires horizontal scrolling.
  </p>
</div>
```

#### Failed Example 6

Multiple scroll directions required on page.

```html
<div style="width: 600px; height: 200px; overflow: scroll;">
  <p style="width: 800px;">
    This content requires both horizontal and vertical scrolling.
  </p>
</div>
```

#### Failed Example 7

Text inside the container requires sideways scrolling. Exceptions are incorrectly applied to text content.

```html
<div style="overflow-x: auto;">
  <p style="min-width: 500px;">
    The paragraph itself requires horizontal scrolling to read.
  </p>
</div>
```

### Inapplicable

#### Inapplicable Example 1

Preformatted code requiring horizontal scrolling.

```html
<pre>
function example() {
    console.log("This line may require horizontal scrolling");
}
</pre>
```
