---
id: 825ule
name: Non-visual location reference alternative
rule_type: atomic

description: |
  This rule checks that when there is a references to a visual location of content, there are also non-visual indicators of the location.

accessibility_requirements:
  wcag20:1.3.3: # Sensory characteristics (A)
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
---

## Applicability

Any text node that includes one of the [visual reference words](), that is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree)

## Expectation

Each target that describes any [web content](https://www.w3.org/TR/WCAG21/#dfn-content) through the use of the [visual reference words](), is included in a [section of the content](#section-of-content) that also describes that [web content](https://www.w3.org/TR/WCAG21/#dfn-content) by a non-visual property, except if the target is not part of an instruction about [web content](https://www.w3.org/TR/WCAG21/#dfn-content).

## Assumptions

The rule assumes that instructions take up the entirity of a single section of the content. If an instruction takes up multiple sections of the content, having a sensory characteristics in one section, and a non-sensory characteristic in another is assumed to be too disconnected to satisfy the success criterion. 

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- TODO We will add links as soon as the new template merges

## Test Cases

### Passed

#### Passed Example 1

The content in the column on the right is indicated with the word "right" (which is a location indicator based on visual perception) but also indicated by referencing the header "Fuzzyness of cats".

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