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
  - DOM Tree
  - Language
acknowledgements:
  authors:
    - Brian Bors
    - Daniël Strik
    - Wilco Fiers
---

## Applicability

Any text node that includes one of the [visual reference words](#visual-reference-words), that is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each test target that describes any [web content](https://www.w3.org/TR/WCAG21/#dfn-content) through the use of the [visual reference words](#visual-reference-words), is on the same [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) with a [textual](https://www.w3.org/TR/WCAG21/#dfn-text) instruction that also describes that [web content](https://www.w3.org/TR/WCAG21/#dfn-content) by a non-visual characteristic, except if:

- The target is not part of an instruction about [web content](https://www.w3.org/TR/WCAG21/#dfn-content); or
- The visual reference word is [visible](#visible) in the described content.

**Note**: The expectation doesn't mention the fact that the non-visual characteristic description should be included in the accessibility tree. This rule can be passed with alternatives that are not included in the accessibility tree. Those sorts of solutions would only fail Success Criteria 1.3.1 instead of both 1.3.3 and 1.3.1.

**Note**: The described web content does not have to be positioned on the same web page.

## Assumptions

- This rule assumes that [visual reference words](#visual-reference-words) are forms of information conveyed through presentation, because of this, failing this rule fails both [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships) and [Success Criterion 1.3.3: Sensory Characteristics](https://www.w3.org/TR/WCAG21/#sensory-characteristics). Presentation is not limited to CSS and includes images such as the image of a circle with text.

- This rule assumes that non-visual users will interpret some visual reference words as meaning "ahead" or "backwards" in the reading order. For example in most contexts "see the content below" will mean ahead in the DOM tree reading order which is not a visual reference and should pass this test. Note however that the DOM tree reading order can be different from the visual order of things, which could result in "see the content below" only referring to the visual order of things in which case it is not a correct reference.

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

The content in the second column is indicated with the word "right" (a visual reference word) but also indicated by referencing the word "howdy".

```html
<head>
	<title>Passed example 1 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
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

The button in the second column is indicated with the word "box" (a visual reference word) but also indicated by referencing that the content can be found below this content in the DOM order. Note that "below" is also a visual reference word but in this case it can also be accurately interpreted as "further in the DOM tree order" which does not rely on visual attributes alone.

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
	<title>Passed example 3 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
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

This document is using the word "square" but in this case it is not describing web content.

```html
<p>A square is a regular quadrilateral with four equal sides and four right angles.</p>
```

#### Passed Example 5

The following text is tilted and describes web content. But the [section of content](#section-of-content) also includes this word "this" which makes it apparent that the description is about the same content.

```html
<head>
	<title>Passed example 5 9bd38c</title>
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
	<div class="tilt">look at this pieCe of tiLted text fOr clueS on whEre to find The monster.</div>
</body>
```

#### Passed Example 6

The button is indicated by the word "round". But the word is also included in the text of the element.

```html
<head>
	<title>Passed example 6 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
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

The images are indicated by the visual indicator words "narrow" and "wide". These words are also included in the accessible names of the images. Even through that indication is not visible, it is included in the accessibility tree which is sufficient to pass this rule.

```html
<p>The wide image is awesome. But the narrow image isn't.</p>
<img scr="/test-assets/images/awesome_wide.jfif" alt="Wide photo of an awesome landscape." />
<img scr="/test-assets/images/Non_awesome_narrow.jpg" alt="Narrow photo of a dull landscape." />
```

#### Passed Example 8

This document is using "triangle" which is included in the heading of the menu; the fact that the described content is one another page does not restrict this rule.

```html
<p>
	On the <a href="/test-assets/SC1.3.3-triangle-menu-with-heading.html">information page</a> you can find more examples
	within the triangle menu
</p>
```

#### Passed Example 9

This document is using "star" but there is also a heading "examples" that can be referenced; the fact that the described content is in an iframe does not restrict this rule.

```html
<p>More examples can be found when you look underneath the star or you can search for the "Examples" heading</p>
<iframe src="/test-assets/SC1.3.3-star-with-heading.html"></iframe>
```

#### Passed Example 10

This document is using the word "circle" but in this case it is no instruction so it passes.

```html
<p>
	This circle is nice.
	<span style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;">
	</span>
</p>
```

#### Passed Example 11

This document is using the word "circle" but in this case it is no instruction so it passes. Note that this example is not inapplicable despite the fact that the text is not visible.

```html
<p style="position:absolute; top:-9999em">
	This circle is nice.
	<span style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;">
	</span>
</p>
```

#### Passed Example 12

This document is using the word "circle" but in this case it is no instruction so it passes. Note that this example is not inapplicable despite the fact that the text is not in the accessibility tree.

```html
<p aria-hidden="true">
	This circle is nice.
	<span style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;">
	</span>
</p>
```

#### Passed Example 13

The user is told to find the navigation on the right (a visual reference word) and the navigation is correctly identified by a `nav` element.

```html
<head>
	<title>Failed example 13 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
</head>
<body>
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

#### Passed Example 13

The user is told to find the navigation on the right (a visual reference word) and the navigation is correctly identified by a `nav` element.

```html
<head>
	<title>Passed example 13 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
</head>
<body>
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

### Failed

#### Failed Example 1

The user is told to find the menu on the right (a visual reference word) but the menu is not identified in any other way.

```html
<head>
	<title>Failed example 1 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
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

The user is told to find the navigation on the right (a visual reference word) and the navigation is correctly identified by a `nav` element, but there are 2 `nav` elements on the page so the user doesn't know which one to use.

```html
<head>
	<title>Failed example 2 9bd38c</title>
	<link rel="stylesheet" type="text/css" href="../test-assets/9bd38c/columns.css" />
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

This document is using the word "triangle" and no other indication is present so the rule fails. The fact that the triangle menu is on a different page does not restrict the rule. 

```html
<body>
	<p>
		On the <a href="/test-assets/SC1.3.3-triangle-menu-without-heading.html">information page</a> you can find more
		examples within the triangle menu
	</p>
</body>
```

#### Failed Example 4

This document is using the word "star" and there is no other indication. The content described is in an iframe.

```html
<body>
	<p>More examples can be found when you look underneath the star</p>
	<iframe src="/test-assets/SC1.3.3-star-without-heading.html"></iframe>
</body>
```

### Inapplicable

#### Inapplicable Example 1

There is no visual reference word on the page.

```html
<p>Click the button, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```

#### Inapplicable Example 2

The content is indicated with the word "box" (a visual reference word), but this indication is hidden and not included in the accessibility three because it has 'display:none'.

```html
<p style="display:none">Click the box, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```
