---
id: 9bd38c
name: Content has alternative for visual reference
rule_type: atomic
description: |
  This rule checks that when content is identified through a visual reference, there are also non-visual references identifying the same content.
accessibility_requirements:
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
  - Accessibility Tree
  - CSS Styling
  - DOM Tree
  - Language
acknowledgments:
  authors:
    - Brian Bors
    - Daniël Strik
    - Jean-Yves Moyen
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [text node][] that is either [visible][] or [included in the accessibility tree][].

## Expectation

For each test target, either it contains none of the [visual reference words][], or it does not identify any [web content][] through the use of any [visual reference words][], or it does identify some [web content][] and at least one of the following is true:

- **non-visual reference**: the test target is on the same [web page][] as a [textual][text] instruction that also identifies that [web content][] without any [visual reference word][]; or
- **non-sensory meaning**: at least one of the [visual reference words][] that identifies the [web content][] is used with a non-sensory meaning; or
- **visible words**: each [visual reference word][] in the test target is included in the [visible text content][] of the identified content; or
- **accessible words**: each [visual reference word][] in the test target is included in the [accessible name][] of the identified content; or
- **no instruction**: the test target does not give instructions about it through the use of any of the [visual reference words][].

## Assumptions

This rule assumes that [visual reference words][] are forms of information conveyed through visual presentation. Therefore, failing this rule fails [Success Criterion 1.3.3 Sensory Characteristics][sc133]. Visual presentation is not limited to CSS and includes images such as the image of a circle with text.

## Accessibility Support

There are no accessibility support issues known.

## Background

[Visual reference words][] that can be interpreted with the non-sensory meaning include, in English, expressions like "right after this" where "right" is a [visual reference word][] used with the meaning "immediately"; or words like "below" that is often used with the meaning "further in reading order".

The rule doesn't require the non-visual characteristic description to be included in the accessibility tree. If the alternatives are not included in the accessibility tree, only [Success Criteria 1.3.1 Info and Relationships][sc131] would fail instead of [Success Criterion 1.3.3 Sensory Characteristics][sc133]. Hence, the rule passes in these cases as it is not a failure of the accessibility requirements of this rule.

The identified web content does not have to be positioned on the same web page and doesn't need to be linked to from the tested web page.

### Bibliography

- [WCAG 2.2 - Understanding Success Criterion 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)
- [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG22/Techniques/general/G96)
- [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG22/Techniques/failures/F14)
- [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/WAI/WCAG22/Techniques/failures/F26)

## Test Cases

### Passed

#### Passed Example 1

This paragraph includes the [visual reference word][] "right". The content in the second column is identified with the word "right" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 1 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Click the button labelled "howdy", on the right, for a surprise</p>
			</div>
			<div class="col">
				<button onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 2

This paragraph includes the [visual reference word][] "below" which can here be accurately interpreted as "further in the reading order". Hence, the paragraph matches the **non-sensory meaning** condition.

```html
<html lang="en">
	<p>Interact with the button below this paragraph, for a surprise</p>
	<button onclick="alert('Surprise!')">Howdy</button>
</html>
```

#### Passed Example 3

This paragraph includes the [visual reference word][] "right". The visual reference made by the word "right" is complemented by the non-visual reference made by the word "menu" to the content identified by the "Menu" heading, thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 3 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
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
</html>
```

#### Passed Example 4

This text includes the [visual reference word][] "tilted" and identifies web content (namely itself). But the text also includes the word "this" which makes it apparent that the description is about the same content, thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 4 9bd38c</title>
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
		<div class="tilt">Search this pieCe of tiLted text fOr clueS on whEre to find The monster.</div>
	</body>
</html>
```

#### Passed Example 5

This paragraph includes the [visual reference word][] "round". The button is identified by this word which is also included in the [visible text content][] of the element, thus matching the **visible words** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 5 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Click the round button, for a surprise</p>
			</div>
			<div class="col">
				<button style="border-radius: 50%; height: 100px; width: 100px;" onclick="alert('Surprise!')">
					Round button
				</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 6

This paragraph includes the [visual reference word][] "triangle" which is included in the heading of the menu, thus matching the **visible words** condition. The fact that the described content is on another page of the same website does not restrict this rule.

```html
<html lang="en">
	<p>
		On the
		<a href="/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-with-heading.html">information page</a>
		you can find more examples within the triangle menu.
	</p>
</html>
```

#### Passed Example 7

This paragraph includes the [visual reference words][] "wide" and "narrow". The images are indicated by these words which are also included in the [accessible names][accessible name] of the images, thus matching the **accessible words** condition.

```html
<html lang="en">
	<p>The wide image is awesome. The narrow image isn't.</p>
	<img
		scr="/test-assets/non-visual-reference-alternative-9bd38c/awesome_wide.jfif"
		alt="Wide photo of an awesome landscape."
	/>
	<img
		scr="/test-assets/non-visual-reference-alternative-9bd38c/non_awesome_narrow.jpg"
		alt="Narrow photo of a dull landscape."
	/>
</html>
```

#### Passed Example 8

This paragraph includes the [visual reference words][] "square" and "right" but in this case they are not identifying any [web content][].

```html
<html lang="en">
	<p>A square is a regular quadrilateral with four equal sides and four right angles.</p>
</html>
```

#### Passed Example 9

This paragraph includes the [visual reference word][] "circle" but in this case it is not an instruction about any [web content][], thus matching the **no instruction** condition.

```html
<html lang="en">
	<p>
		This circle is nice.
		<span
			role="presentation"
			style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;"
		>
		</span>
	</p>
</html>
```

#### Passed Example 10

This paragraph includes the [visual reference word][] "star" but there is also a heading "examples" that can be referenced, thus matching the **non-visual references** condition. The fact that the identified content is in an `iframe` does not restrict this rule.

```html
<html lang="en">
	<p>More examples can be found when you look underneath the star or you can search for the "Examples" heading</p>
	<iframe title="star" src="/test-assets/non-visual-reference-alternative-9bd38c/star-with-heading.html"></iframe>
</html>
```

#### Passed Example 11

This paragraph includes the [visual reference word][] "right". The content in the second column is identified with the word "right" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition. Note that, despite the fact that the text is not visible, this example is applicable because it is included in the accessibility tree.

```html
<html lang="en">
	<head>
		<title>Passed example 11 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p style="position:absolute; top:-9999em">Click the button labelled "howdy", on the right, for a surprise</p>
			</div>
			<div class="col">
				<button onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 12

This paragraph includes the [visual reference word][] "green". The content in the second column is identified with the word "green" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition. Note that, despite the fact that the text is not included in the accessibility tree, this example is applicable because it is visible.

```html
<html lang="en">
	<head>
		<title>Passed example 12 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p aria-hidden="true">Click the green button labelled "howdy" for a surprise</p>
			</div>
			<div class="col">
				<button style="background-color: green" onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 13

This paragraph includes the [visual reference word][] "right". The user is told to find the navigation on the right and the navigation is also correctly identified by a `nav` element whose [accessible name][] contains the word "navigation", thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 13 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
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
</html>
```

#### Passed Example 14

No [text node][] on this page includes any of the [visual reference words][].

```html
<html lang="en">
	<p>Click the button, for a surprise</p>
	<button onclick="alert('Surprise!')">Howdy</button>
</html>
```

#### Passed Example 15

No [text node][] on this page includes any of the [visual reference words][]. The word "square" in French (the language of the page) never has the meaning of the geometrical figure. Hence, it is not the translation of any of the [visual reference words][]. The sentence means "After school, he's taking his kids to the public garden."

```html
<html lang="fr">
	<p>
		Après l'école, il emmène ses enfants jouer au square.
	</p>
</html>
```

### Failed

#### Failed Example 1

This paragraph includes the [visual reference word][] "right". The user is told to find the menu on the right but the menu is not identified in any other way.

```html
<html lang="en">
	<head>
		<title>Failed example 1 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
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
</html>
```

#### Failed Example 2

This paragraph includes the [visual reference word][] "right". The user is told to find the navigation on the right and the navigation is correctly identified by a `nav` element, but there are 2 `nav` elements on the page so the user doesn't know which one to use (the non-visual reference is ambiguous and does not identify a specific [web content][]).

```html
<html lang="en">
	<head>
		<title>Failed example 2 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
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
</html>
```

#### Failed Example 3

This paragraph includes the [visual reference word][] "triangle" (which is not included in the identified content) and no other indication is present so the rule fails. The fact that the triangle menu is on a different page of the same website does not restrict the rule.

```html
<html lang="en">
	<body>
		<p>
			On the
			<a href="/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-without-heading.html"
				>information page</a
			>
			you can find more examples within the triangle menu
		</p>
	</body>
</html>
```

#### Failed Example 4

This paragraph includes the [visual reference word][] "star" (which is not included in the identified content) and there is no other indication. The content described is in an `iframe`.

```html
<html lang="en">
	<body>
		<p>More examples can be found when you look underneath the star</p>
		<iframe src="/test-assets/non-visual-reference-alternative-9bd38c/star-without-heading.html"></iframe>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This image link contains no [text node][].

```html
<html lang="en">
	<a href="https://act-rules.github.io/"><img src="test-assets/shared/act-logo.png" alt="ACT rules"/></a>
</html>
```

#### Inapplicable Example 2

This document contains no [text node][] that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<div style="display:none">
		<p>Click the box, for a surprise</p>
		<button onclick="alert('Surprise!')">Howdy</button>
	</div>
</html>
```

[accessible name]: #accessible-name 'Definition of Accessible Name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc133]: https://www.w3.org/TR/WCAG22/#sensory-characteristics 'Success Criterion 1.3.3 Sensory Characteristics'
[text node]: https://dom.spec.whatwg.org/#text 'Specification of Text Node'
[visible]: #visible 'Definition of Visible'
[visible text content]: #visible-text-content 'Definition of Visible Text Content'
[visual reference words]: #visual-reference-words 'Definition of Visual Reference Words'
[visual reference word]: #visual-reference-words 'Definition of Visual Reference Words'
[text]: https://www.w3.org/TR/WCAG22/#dfn-text 'WCAG definition of Text'
[web content]: https://www.w3.org/TR/WCAG22/#dfn-content 'WCAG definition of Web Content'
[web page]: https://www.w3.org/TR/WCAG22/#dfn-web-page-s 'WCAG definition of Web Page'
