---
id: 9bd38c
name: Non-visual reference alternative
rule_type: atomic
description: |
  This rule checks that when there is a visual reference of content, there are also non-visual indicators of the location.
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
  -  DOM Tree
  -  Language
authors:
  -  Brian Bors
  -  Daniël Strik
  -  Wilco Fiers
---

## Applicability

Any text node that includes one of the [visual reference words](#visual-reference-words), that is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each target that describes any [web content](https://www.w3.org/TR/WCAG21/#dfn-content) through the use of the [visual reference words](#visual-reference-words), is included in a [section of the content](#section-of-content) that also describes that [web content](https://www.w3.org/TR/WCAG21/#dfn-content) by a non-visual property, except if the target is not part of an instruction about [web content](https://www.w3.org/TR/WCAG21/#dfn-content) or the visual reference word is included in the described content.

**Note**: The expectation doesn't mention the fact that the non-visual property description should be visible and included in the accessibility tree. This rule can be passed with alternatives that are not visible and included in the accessibility tree, but those sorts of content would fail other SC.
**Note**: The discribed web content does not have to be positioned on the same web page.

## Assumptions

The rule assumes that instructions are fully included within a single section of content. If an instruction takes up multiple sections of the content, having a sensory characteristic in one section, and a non-sensory characteristic in another is assumed to be too disconnected to satisfy the success criterion. 

The rule assumes that visual reference words are forms of information conveyed through presentation, because of this, failing this rule fails both [Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) and [Sensory Characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics). Presentation is not limited to CSS and includes images such as the image of a circle with text.

The rule assumes that non-visual users will interpret some visual refence words as meaning "ahead" or "backwards" in the reading order. For example in most contexts "see the content below" will mean ahead in the reading order which is not a visual reference and should pass this test.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Understanding WCAG

- [WCAG 2.1 - Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.1 - Understanding Success Criterion 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html)

### Related WCAG Techniques

- [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG21/Techniques/general/G96)
- [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG21/Techniques/failures/F14)
- [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F26)

## Test Cases

### Passed

#### Passed Example 1

The content in the second column is indicated with the word "right" (which is an indicator based on visual perception) but also indicated by referencing the word "howdy".

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
	</style>
</head>
<body>
	<div class="col-container">
		<div class="col">
			<p>Click "howdy" on the right, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```

#### Passed Example 2

The button in the second column is indicated with the word "box" (which is a location indicator based on visual perception) but also indicated by referencing that the content can be found below this content in the DOM order. Note that "below" is also a visual reference word but in this case it can also be accuratly interpretated as "next in the DOM order" which does not rely on visual attributes alone.

```html
<div class="col-container">
  <div class="col">
    <p>Interact with the box below this paragraph, for a surprise</p>
  </div>

  <div class="col">
    <button onclick="alert('Surprise!')">Howdy</button>
  </div>
</div>
```

#### Passed Example 3

The visual reference made by the word "right" is complemented by the non-visual reference made by the word "menu" to the content identified by the "Menu" heading.

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
			</ul>
					
		</div>
	</div>
</body>
```


#### Passed Example 4

This document is using the word "square" but in this case it is no instruction.

```html
	<p>In mathemathics a square is the result of multiplying a number by itself.</p>
```

#### Passed Example 5

The following text is tilted and describes web content. But the block of content also includes this word "this" which makes it apparent that the describtion is about the same block of content.

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

The images are indicated by the words wide and narrow but the accessible names of the images also include the words wide and narrow.

```html
	<p>The wide image is awesome. But the narrow image isn't.</p>
	<img scr="/test-assets/images/awesome_wide.jfif" alt="Wide photo of an awesome landscape.">
	<img scr="/test-assets/images/Non_awesome_narrow.jpg" alt="Narrow photo of a dull landscape.">
	</div>
```

#### Passed Example 8

This document is using the word "triangle" but in this case the triangle menu is on a different page and has a heading "triangle menu".

```html
	<p>On the <a href="/test-assets/SC1.3.3-triangle-menu-with-heading.html">information page</a> you can find more examples within the triangle menu</p>
```

#### Passed Example 9

This document is using the word "star" but in this case the star is in an 'iframe' and has a heading "examples".

```html
<body>
<p>More examples can be found when you look underneath the star or you can search for the "Examples" heading</p>
<iframe src="/test-assets/SC1.3.3-star-with-heading.html"></iframe>
</body>
```

#### Passed Example 10

This document is using the word "circle" but in this case it is no instruction. Also note that the text is not visible, but still applicable.

```html
	<p style="position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;">A circle is nice.</p>
```

#### Passed Example 11

This document is using the word "circle" but in this case it is no instruction. Also note that the text is not included in the accessibility tree, but still applicable.

```html
	<p aria-hidden="true">A circle is nice.</p>
```

### Failed

#### Failed Example 1

The user is told to find the menu on the right (which is a visual indicator word) but the menu is not identified in any way.

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
	</style>
</head>
<body>
	<div class="col-container">
		<div class="col">
			<p>Find the menu on the right, to navigate</p>
		</div>
		<div class="col">
			<ul>
				<li>
					<a href="https://www.w3.org/Consortium/contact">Contact</a>
				</li>
				<li>
					<a href="https://www.w3.org/Help/">Help and FAQ</a>
				</li>
			</ul>
					
		</div>
	</div>
</body>
```

#### Failed Example 2

The user is told to find the navigation on the right (which is a visual indicator word) and the navigation has a navigation element, but there are 2 navigation elements on the page so the user doesn't know which one to use.

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
	</style>
</head>
<body>
	<nav>
		<ul>
			<li>
				<a href="https://www.w3.org/">W3C homepage</a>
			</li>
			<li>
				<a href="https://www.w3.org/standards/">Standards</a>
			</li>
		</ul>
	</nav>
	<div class="col-container">
		<div class="col">
			<p>Find the navigation on the right, for the non-essential links</p>
		</div>
		<nav>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.w3.org/Consortium/contact">Contact</a>
					</li>
					<li>
						<a href="https://www.w3.org/Help/">Help and FAQ</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</body>
```

#### Failed Example 3

The button is indicated with the word "box" (which is a shape indicator based on visual perception) and is also indicated by referencing the word "howdy", but the word "howdy" is in a different paragraph than the word "box".

```html
<p>Click the box, for a surprise!</p>
<p>If you can't find the box here is a hint: it says "Howdy"!</p>
<button onclick="alert('Surprise!')">Howdy</button>
```

#### Failed Example 4

This document is using the word "triangle" and the triangle menu is on a different page. No other indication is present.

```html
<body>
	<p>On the <a href="/test-assets/SC1.3.3-triangle-menu-without-heading.html">information page</a> you can find more examples within the triangle menu</p>
</body>
```

#### Failed Example 5

This document is using the word "star" and there is no other indication. The content described is in an iframe.

```html
<body>
<p>More examples can be found when you look underneath the star</p>
<iframe src="/test-assets/SC1.3.3-star-without-heading.html"></iframe>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The content is indicated with the word "button" which is not a visual reference word.

```html
<p>Click the button, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```

#### Inapplicable Example 2

The content in the second column is indicated with the word "box", but this indication is hidden with 'display:none'.

```html
<p style="display:none">Click the box, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```
