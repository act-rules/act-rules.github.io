---
id: 9bd38c
name: Content has non-visual reference alternative
rule_type: atomic
description: |
  This rule checks that when content is identified through a visual reference, there are also non-visual references identifying the same content.
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
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Daniël Strik
    - Wilco Fiers
---

## Applicability

This rule applies to any [text node][] that is either [visible][] or [included in the accessibility tree][].

## Expectation

For each test target that includes at least one of the [visual reference words][], one of the following is true:

- (**no indication**) the test target does not identify any [web content][] through the use of any [visual reference words][]; or
- (**non-visual reference**) the test target is on the same [web page][] as a [textual][wcag text] instruction that also identifies that [web content][] by a non-visual characteristic; or
- (**visible words**) each [visual reference word][] in the test target is included in the [visible text content][] of the identified content; or
- (**accessible words**) each [visual reference word][] in the test target is included in the [accessible name][] of the identified content.

**Note**: The rule doesn't require the non-visual characteristic description to be included in the accessibility tree. If the alternatives are not included in the accessibility tree, only [Success Criteria 1.3.1 Info and Relationships][sc131] would fail instead of both [Success Criterion 1.3.3 Sensory Characteristics][sc133] and [1.3.1][sc131]. Hence, the rule passes in these cases as it is not a failure of all accessibility requirements.

**Note**: The identified web content does not have to be positioned on the same web page and doesn't need to be linked to from the tested web page.

## Assumptions

- This rule assumes that [visual reference words][] are forms of information conveyed through presentation, because of this, failing this rule fails both [Success Criterion 1.3.1 Info and Relationships][sc131] and [Success Criterion 1.3.3 Sensory Characteristics][sc133]. Presentation is not limited to CSS and includes images such as the image of a circle with text.

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

This paragraph holds the visual reference word "right". The content in the second column is identified with the word "right" but also identified by referencing the word "howdy".

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

This paragraph holds the visual reference word "box". The button is identified with the word "box" but also identified by referencing that the content can be found below this content in the DOM order. Note that "below" is also a visual reference word but in this case it can also be accurately interpreted as "further in the DOM tree order" which does not rely on visual attributes alone.

```html
<p>Interact with the box below this paragraph, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```

#### Passed Example 3

This paragraph holds the visual reference word "right". The visual reference made by the word "right" is complemented by the non-visual reference made by the word "menu" to the content identified by the "Menu" heading.

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

This paragraph holds the visual reference word "square" but in this case it is not identifying web content.

```html
<p>A square is a regular quadrilateral with four equal sides and four right angles.</p>
```

#### Passed Example 5

This text holds the visual reference word "tilted" and identifies web content (namely itself). But the text also includes the word "this" which makes it apparent that the description is about the same content.

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

This paragraph holds the visual reference word "round". The button is identified by the word "round". But the word is also included in the text of the element.

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

This paragraph holds the visual reference words "wide" and "narrow". The images are indicated by these visual reference words. These words are also included in the accessible names of the images. Even though that indication is not visible, it is included in the accessibility tree which is sufficient to pass this rule.

```html
<p>Look at the wide image which is awesome. Now compare it with the narrow image which isn't.</p>
<img scr="/test-assets/images/awesome_wide.jfif" alt="Wide photo of an awesome landscape." />
<img scr="/test-assets/images/Non_awesome_narrow.jpg" alt="Narrow photo of a dull landscape." />
```

#### Passed Example 8

This paragraph holds the visual reference word "triangle" which is included in the heading of the menu; the fact that the described content is on another page of the same website does not restrict this rule.

```html
<p>
	On the <a href="/test-assets/SC1.3.3-triangle-menu-with-heading.html">information page</a> you can find more examples
	within the triangle menu.
</p>
```

#### Passed Example 9

This paragraph holds the visual reference word "star" but there is also a heading "examples" that can be referenced; the fact that the identified content is in an `iframe` does not restrict this rule.

```html
<p>More examples can be found when you look underneath the star or you can search for the "Examples" heading</p>
<iframe title="star" src="/test-assets/SC1.3.3-star-with-heading.html"></iframe>
```

#### Passed Example 10

This paragraph holds the visual reference word "circle" but in this case it is not an instruction, so it passes.

```html
<p>
	This circle is nice.
	<span
		style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;"
	>
	</span>
</p>
```

#### Passed Example 11

This paragraph holds the visual reference word "circle" but in this case it is no instruction, so it passes. Note that this example is not inapplicable because, despite the fact that the text is not visible, it is included in the accessibility tree.

```html
<p style="position:absolute; top:-9999em">
	This circle is nice.
	<span
		style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;"
	>
	</span>
</p>
```

#### Passed Example 12

This paragraph holds the visual reference word "circle" but in this case it is no instruction, so it passes. Note that this example is not inapplicable because, despite the fact that the text is not in the accessibility tree, it is visible.

```html
<p aria-hidden="true">
	This circle is nice.
	<span
		style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;"
	>
	</span>
</p>
```

#### Passed Example 13

This paragraph holds the visual reference word "right". The user is told to find the navigation on the right and the navigation is also correctly identified by a `nav` element.

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

This paragraph holds the visual reference word "right". The user is told to find the menu on the right but the menu is not identified in any other way.

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

This paragraph holds the visual reference word "right". The user is told to find the navigation on the right and the navigation is correctly identified by a `nav` element, but there are 2 `nav` elements on the page so the user doesn't know which one to use.

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

This paragraph holds the visual reference word "triangle" and no other indication is present so the rule fails. The fact that the triangle menu is on a different page of the same website does not restrict the rule.

```html
<body>
	<p>
		On the <a href="/test-assets/SC1.3.3-triangle-menu-without-heading.html">information page</a> you can find more
		examples within the triangle menu
	</p>
</body>
```

#### Failed Example 4

This paragraph holds the visual reference word "star" and there is no other indication. The content described is in an `iframe`.

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

The content is indicated with the word "box" (a visual reference word), but this indication is hidden and not included in the accessibility tree because it has 'display:none'.

```html
<p style="display:none">Click the box, for a surprise</p>
<button onclick="alert('Surprise!')">Howdy</button>
```

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc133]: https://www.w3.org/TR/WCAG21/#sensory-characteristics 'Success Criterion 1.3.3 Sensory Characteristics'
[text node]: https://dom.spec.whatwg.org/#text 'Specification of Text Node'
[visible]: #visible 'Definition of Visible'
[visual reference words]: #visual-reference-words 'Definition of Visual Reference Words'
[wcag text]: https://www.w3.org/TR/WCAG21/#dfn-text 'WCAG definition of Text'
[web content]: https://www.w3.org/TR/WCAG21/#dfn-content 'WCAG definition of Web Content'
[web page]: https://www.w3.org/TR/WCAG21/#dfn-web-page-s 'WCAG definition of Web Page'
