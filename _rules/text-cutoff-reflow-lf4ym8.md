---
id: lf4ym8
name: Text is not cutoff at 320 CSS pixels
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

This rule applies to any element containing visible text that is rendered at 320 CSS pixels in the orientation of the text.

## Expectation (1)

Each target element:
- Has all text fully visible within the viewport, without being clipped, truncated, or hidden off-screen when viewed at 320 CSS pixels; and
- Does not require scrolling in the direction of reading to reveal portions of text; and
- Preserves all information and functionality associated with the text content.

## Background

This rule supports WCAG 2.1 Success Criterion 1.4.10 Reflow, which requires that content can be presented without loss of information or functionality and without requiring scrolling in two dimensions at a width equivalent to 320 CSS pixels.

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

## Examples

### Passed

#### Passed Example 1

Text wraps correctly and remains fully visible at 320 CSS pixels.

```html
<div style="max-width: 100%;">
  <p>
    This paragraph reflows and wraps within the viewport,
    ensuring all text is visible without horizontal scrolling.
  </p>
</div>
```

#### Passed Example 2

Responsive layout prevents text cutoff at small viewport sizes.

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
	Content adapts to the viewport and remains fully readable at 320 CSS pixels.
  </p>
</div>
```

#### Passed Example 3

Long words wrap instead of overflowing.

```html
<p style="word-break: break-word;">
  ThisIsAnExtremelyLongWordThatWouldOtherwiseOverflowButNowWrapsCorrectlyWithinTheViewport.
</p>
```

#### Passed Example 4

Content inside a flexible grid reflows to a single column.

```html
<style>
  .grid {
	display: grid;
	grid-template-columns: 1fr;
  }
</style>
<div class="grid">
  <p>All text remains visible and reflows correctly.</p>
</div>
```

#### Passed Example 5

Inline text elements wrap naturally.

```html
<p>
  This is a sentence with <span>inline elements</span> that wrap correctly
  when the viewport is reduced.
</p>
```

#### Passed Example 6

Scrollable container used only for non-text, while text remains fully visible.

```html
<div style="max-width: 100%;">
  <p>
	The text content is fully visible and not clipped, even though other
	components on the page may scroll.
  </p>
</div>
```

#### Passed Example 7

Map with labels. Map content requires spatial positioning that cannot be linearised.

```html
<div id="map"></div>
Passed Example 8
Scrollable code viewer with syntax highlighting. Code formatting and alignment require horizontal structure for readability.
<div style="overflow-x: auto;">
<pre><code>
const veryLongVariableName = "example";
</code></pre>
</div>
```

#### Passed Example 9

Timeline or calendar grid. Temporal relationships depend on a grid-based layout.

```html
<div class="calendar">
  <div>Mon</div>
  <div>Tue</div>
  <div>Wed</div>
</div>
```

#### Passed Example 10

Comic or visual narrative layout. Sequential meaning depends on spatial positioning.

```html
<img src="comic-strip.png" alt="Comic strip">
```

#### Passed Example 11

Whiteboard or drawing canvas. User-generated spatial content cannot be meaningfully reflowed.

```html
<canvas id="whiteboard"></canvas>
```

### Failed

#### Failed Example 1

Text is cut off due to a fixed-width container.

```html
<div style="width: 600px; overflow: hidden;">
  <p>
	This text extends beyond the viewport and is not fully visible.
  </p>
</div>
```

#### Failed Example 2

Text is truncated and not fully readable.

```html
<p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 200px;">
  This is a long line of text that will be cut off.
</p>
```

#### Failed Example 3

Overflow causes text to extend outside the viewport.

```html
<div style="overflow-x: visible;">
  <p style="width: 500px;">
	This text spills خارج the viewport and requires horizontal scrolling to read fully.
  </p>
</div>
```

#### Failed Example 4

Absolute positioning causes text to be partially off-screen.

```html
<div style="position: relative;">
  <p style="position: absolute; left: 350px;">
	Part of this text is pushed خارج the viewport and not visible.
  </p>
</div>
```

#### Failed Example 5

Long unbreakable text does not wrap.

```html
<p style="white-space: nowrap;">
  SupercalifragilisticexpialidociousSupercalifragilisticexpialidocious
</p>
```

#### Failed Example 6

Clipping hides text content.

```html
<div style="height: 40px; overflow: hidden;">
  <p>
	This paragraph contains multiple lines of text but only part of it is visible.
  </p>
</div>
```

#### Failed Example 7

Text overlaps and hides other text when reflowing.

```html
<div style="position: relative;">
  <p style="position: absolute;">First line of text</p>
  <p style="position: absolute; top: 10px;">Second line overlaps and obscures the first</p>
</div>
```

#### Failed Example 8

Text requires horizontal scrolling to be fully read.

```html
<div style="width: 320px; overflow-x: scroll;">
  <p style="width: 600px;">
	This text requires horizontal scrolling to read fully, which fails the requirement.
  </p>
</div>
```

### Inapplicable

#### Inapplicable Example 1

Preformatted content requiring two-dimensional layout.

```html
<pre>
function example() {
	console.log("Horizontal scrolling may be required");
}
</pre>
```

#### Inapplicable Example 2

Element does not present visible text to the user.

```html
<div aria-hidden="true">
  <span style="display:none;">Hidden text</span>
</div>
```

#### Inapplicable Example 3

Mathematical formula requiring spatial layout. The meaning depends on spatial formatting that may not fully reflow without loss of meaning.

```html
<div class="math">
  <span>E = mc<sup>2</sup></span>
</div>
```

#### Inapplicable Example 4

Complex diagram or infographic with embedded text. The text is part of an image that relies on a two-dimensional layout.

```html
<img src="diagram.png" alt="System architecture diagram">
```

#### Inapplicable Example 5

Large chart or graph. Charts require spatial relationships that cannot be preserved through text reflow.

```html
<canvas id="chart"></canvas>
```

#### Inapplicable Example 6

Side-by-side comparison layout where structure conveys meaning. The meaning relies on a two-dimensional comparison layout.

```html
<div class="comparison">
  <div>Before</div>
  <div>After</div>
</div>
```

#### Inapplicable Example 7

Interactive editor with toolbar and content area. The interface may require maintaining layout relationships between controls and content.

```html
<div class="editor">
  <div class="toolbar">Bold | Italic | Underline</div>
  <div class="content">Editable text here</div>
</div>
```
