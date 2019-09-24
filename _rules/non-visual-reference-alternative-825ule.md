---
id: 825ule
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
  -  Daniël strik
  -  Wilco Fiers
---

## Applicability

Any text node that includes one of the [visual reference words](#visual-reference-words), that is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each target that describes any [web content](https://www.w3.org/TR/WCAG21/#dfn-content) through the use of the [visual reference words](#visual-reference-words), is included in a [section of the content](#section-of-content) that also describes that [web content](https://www.w3.org/TR/WCAG21/#dfn-content) by a non-visual property, except if the target is not part of an instruction about [web content](https://www.w3.org/TR/WCAG21/#dfn-content) or the visual reference word is included in the described content.

## Assumptions

The rule assumes that instructions are fully included within a single section of content. If an instruction takes up multiple sections of the content, having a sensory characteristics in one section, and a non-sensory characteristic in another is assumed to be too disconnected to satisfy the success criterion. 

The rule assumes that visual reference words are forms of information conveyed trough presentation, because of this, failing this rule fails both [Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) and [Sensory Characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics). Presentation is not limited to CSS and includes images such as the image of a circle with text.

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

The content in the second column is indicated with the word "box" (which is a shape indicator based on visual perception) but also indicated by referencing the word "howdy".

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
			<p>Click the "howdy" box on the right, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```

#### Passed Example 2

The content in the second column is indicated with the word "right" (which is a location indicator based on visual perception) but also indicated by referencing that the content can be found below this content in the DOM order.

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
    <p>Interact with the content on the right (below this paragraph), for a surprise</p>
  </div>

  <div class="col">
    <button onclick="alert('Surprise!')">Howdy</button>
  </div>
</div>

</body>
```

#### Passed Example 3

The content in the second column is a menu. The user is told to find the menu on the right (which is a visual indicator word) but the menu is also identified with the help of the "menu" heading above the content.

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
				<li>
					<a href="https://www.w3.org/Consortium/sponsor/">Donate</a>
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
	<img scr="/test-assets/images/awesome_wide.jfif" alt="Wide photo of an awesome landscape.">
	<img scr="/test-assets/images/Non_awesome_narrow.jpg" alt="Narrow photo of a dull landscape.">
	</div>
</body>
```

#### Passed Example 8

This document is using the word "triangle" but in this case the triangle menu is on a different page and has a heading "triangle menu".

```html
<body>
	<p>On the <a href="/test-assets/SC1.3.3-triangle-menu-with-heading.html">information page</a> you can find more examples within the triangle menu</p>
</body>
```

#### Passed Example 9

This document is using the word "star" but in this case the star is in an iframe and has a heading "examples".

```html
<body>
<p>More examples can be found when you look underneath the star or underneath the heading examples</p>
<iframe src="/test-assets/SC1.3.3-star-with-heading.html"></iframe>
</body>
```

### Failed

#### Failed Example 1

The content in the second column is a menu. The user is told to find the menu on the right (which is a visual indicator word) but the menu is not identified with the help of the "menu" heading, nor landmark, nor role.

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
				<li>
					<a href="https://www.w3.org/Consortium/sponsor/">Donate</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/siteindex">Sitemap</a>
				</li>
			</ul>
					
		</div>
	</div>
</body>
```

#### Failed Example 2

The content in the second column is part of the navigation. The user is told to find the navigation on the right (which is a visual indicator word) and the navigation has a navigation element, but there are 2 navigation elements on the page so the user doesn't know which one to use.

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
			<li>
				<a href="https://www.w3.org/participate/">Participate</a>
			</li>
			<li>
				<a href="https://www.w3.org/Consortium/membership">Membership</a>
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
					<li>
						<a href="https://www.w3.org/Consortium/sponsor/">Donate</a>
					</li>
					<li>
						<a href="https://www.w3.org/Consortium/siteindex">Sitemap</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</body>
```

#### Failed Example 3

The content in the second column is indicated with the word "box" (which is a shape indicator based on visual perception) and is also indicated by referencing the word "howdy", but the word "howdy" is in a different paragraph than the word "box".

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
			<p>Click the box on the right, for a surprise</p>
			<p>If you can't find the box here is a hint: it says "Howdy"!</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```

#### Failed Example 4

This document is using the word "triangle" but in this case the triangle menu is on a different page.

```html
<body>
	<p>On the <a href="/test-assets/SC1.3.3-triangle-menu-without-heading.html">information page</a> you can find more examples within the triangle menu</p>
</body>
```

#### Failed Example 5

This document is using the word "star" but in this case the star is in an iframe.

```html
<body>
<p>More examples can be found when you look underneath the star or underneath the heading examples</p>
<iframe src="/test-assets/SC1.3.3-star-without-heading.html"></iframe>
</body>
```

### Inapplicable

#### Inapplicable Example 1

The content in the second column is indicated with the word "button" which is not a visual reference word.

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
			<p>Click the button on the right, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```

#### Inapplicable Example 2

The content in the second column is indicated with the word "box", but this indication is hidden with display:none.

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
			<p style="display:none">Click the box on the right, for a surprise</p>
		</div>
		<div class="col">
			<button onclick="alert('Surprise!')">Howdy</button>
		</div>
	</div>
</body>
```
