---
id: 825ule
name: Non-visual location reference alternative
rule_type: atomic

description: |
  This rule checks that when there is a references to a visual location of content, there are also non-visual indicators of the location.

accessibility_requirements:
  wcag20:1.3.1: # Info and Relationships (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

  wcag20:1.3.3: # Sensory Characteristics (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

  wcag-technique:G96: # Providing textual identification of items that otherwise rely only on sensory information to be understood.
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed

input_aspects:
  -  (DOM Tree, CSS Styling, Accessibility Tree, etc.,)

authors:
  -  Brian Bors
  -  Daniël strik
  -  Wilco Fiers
---

## Applicability

Any text node that includes one of the [visual reference words](), that is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each target that describes any [web content](https://www.w3.org/TR/WCAG21/#dfn-content) through the use of the [visual reference words](), is included in a [section of the content](#section-of-content) that also describes that [web content](https://www.w3.org/TR/WCAG21/#dfn-content) by a non-visual property, except if the target is not part of an instruction about [web content](https://www.w3.org/TR/WCAG21/#dfn-content) or the visual reference word is included in the described content.

## Assumptions

The rule assumes that instructions take up the entirity of a single section of the content. If an instruction takes up multiple sections of the content, having a sensory characteristics in one section, and a non-sensory characteristic in another is assumed to be too disconnected to satisfy the success criterion. 

The rule assumes that visual reference words are forms of information conveyed trough presentation, because of this, failing this rule fails both [Info and Relationships] and [Sensory Characteristics]. Presentation is not limited to CSS and includes images such as the image of a circle with text.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Understanding WCAG

- [WCAG 2.1 - Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.1 - Understanding Success Criterion 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html)

### Related WCAG Techniques

- [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG21/Techniques/general/G96)
- [F14: due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG21/Techniques/failures/F14)

## Test Cases

TODO

== Passed ==
Visual reference word is included in the alt text of the image
Describes something on a different page
Describes something in a frame

== Failed ==
Menu on the right (if there is no role or landmark)
Menu on the right (if there are 2 menu roles)
Box but also howdy, but howdy is in a different paragraph
Describes something on a different page
Describes something in a frame

== Inapplicable ==
Text does not include a visual reference word
Text includes a visual reference word that is hidden

### Passed

#### Passed Example 1

The content in the column on the right is indicated with the word "box" (which is a shape indicator based on visual perception) but also indicated by referencing the word "howdy".

```html
<head>
	<style>
	.col-container {
		display: table;
		width: 100%;
	}
	.col {
		display: table-cell;
		padding: 16px;
	}
	button {
		background: #FAA;
	}
	</style>
</head>
<body>
	<div class="col-container">
		<div class="col">
			<p>Click the "howdy" box on the right, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```

#### Passed Example 2

The content in the column on the right is indicated with the word "right" (which is a location indicator based on visual perception) but also indicated by referencing that the content can be found below this content in the DOM order.

```html
<head>
<style>
.col-container {
  display: table;
}
.col {
  display: table-cell;
  padding: 16px;
}
</style>
</head>
<body>

<div class="col-container">
  <div class="col">
    <p>Read the content in the right column (or below this paragraph) about the fuzzyness of cats</p>
  </div>

  <div class="col">
    <p>Cats are usually fuzzy.</p>
  </div>
</div>

</body>
```

#### Passed Example 3

The content in the column on the right is a menu. The user is told to find the menu on the right (which is a visual indicator word) but the menu is also identified with the help of the "menu" heading above the content.

```html
<head>
	<style>
	.col-container {
		display: table;
		width: 100%;
	}
	.col {
		display: table-cell;
		padding: 16px;
	}
	button {
		background: #FAA;
	}
	</style>
</head>
<body>
	<div class="col-container">
		<div class="col">
			<p>Find the menu on the right, to navigate</p>
		</div>
		<div class="col">
			<h1>Menu</h1>
			<ul>
				<li>
					<a href="https://www.w3.org/Consortium/contact">Contact</a>
				</li>
				<li>
					<a href="https://www.w3.org/Help/">Help and FAQ</a>
				</li>
				<li>
					<a href=https://www.w3.org/Consortium/sponsor/">Donate</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/siteindex">Sitemap</a>
				</li>
			</ul>
					
		</div>
	</div>
</body>
```


#### Passed Example 4

This document is using the word "square" but in this case it is no instruction.

```html
<body>
	<p>In mathemathics a square is the result of multiplying a number by itself.</p>
</body>
```

#### Passed Example 5

The following text is tilted.

```html
<head>
	<style> 
		div.tilt {
			height: 750px;
			width: 150px;
			-ms-transform: rotate(20deg); /* IE 9 */
			-webkit-transform: rotate(20deg); /* Safari 3-8 */
			transform: rotate(20deg);
			}
	</style>
</head>
<body>
	<div class="tilt">This text is tilted.</div>
</body>
```

#### Passed Example 6

The button is indicated by the word "round". But the word is also included in the text of the element.

```html
<head>
	<style>
	.col-container {
		display: table;
		width: 100%;
	}
	.col {
		display: table-cell;
		padding: 16px;
	}
	button {
		background: #FAA;
		border-radius: 50%;
	}
	</style>
</head>
<body>
	<div class="col-container">
		<div class="col">
			<p>Click the round button, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Round button</button>
		</div>
	</div>
</body>
```

#### Passed Example 7

The image is indicated by the word narrow but the alt text of the image also includes the word narrow.

```html
<body>
	<p>The wide image is awesome. But the narrow image isn't.</p>
	<img scr="awesome_wide.jpg" alt="Wide photo of an awesome landscape.">
	<img scr="Non_awesome_narrow.jpg" alt="Narrow photo of a dull landscape.">
	</div>
</body>
```


### Failed

#### Failed Example 1

The content in the column on the right is indicated with the word "right" (which is a location indicator based on visual perception) and there is no other indication of where to find the content.

```html
<head>
<style>
.col-container {
  display: table;
}
.col {
  display: table-cell;
  padding: 16px;
}
button {
  background: red;
}
</style>
</head>
<body>
<div class="col-container">
  <div class="col">
    <p>Click the "howdy" button on the left, for a surprise</p>
  </div>
  <div class="col">
    <button onclick="alert('Surprise'!)">Howdy</button>
  </div>
</div>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The content in the column on the right is not indicated with a location indicator based on visual perception.

```html
<head>
<style>
.col-container {
  display: table;
}
.col {
  display: table-cell;
  padding: 16px;
}
</style>
</head>
<body>

<div class="col-container">
  <div class="col">
    <p>Read the content below about the fuzzyness of cats.</p>
  </div>

  <div class="col">
    <p>Cats are usually fuzzy.</p>
  </div>
</div>

</body>
```

#### Inapplicable Example 2
The content in the column on the right is indicated with the word "right" (which is a location indicator based on visual perception) and there is no other indication of where to find the content. However the indicator is both visually hidden and not included in the accessibility tree.

```html
<head>
<style>
.col-container {
  display: table;
}
.col {
  display: table-cell;
  padding: 16px;
}
</style>
</head>
<body>

<div class="col-container">
  <div class="col">
    <p style="display:none;">Read the content in the right column about the fuzzyness of cats.</p>
  </div>

  <div class="col">
    <p>Cats are usually fuzzy.</p>
  </div>
</div>

</body>
```
