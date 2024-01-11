---
id: exuqdg
name: Target is visible
rule_type: definition-test
description: |
  This rule tests the "visible" definition
input_aspects:
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Jean-Yves Moyen
  assets:
    - The text of the examples is excerpt from the lyrics of the song "I'm the invisible man" (written by Brian May / Freddie Mercury / John Deacon / Roger Taylor).
---

## Applicability

This rule applies to any element with an `id` of `target`.

## Expectation

Each target element is [visible][]

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

This "rule" does not check any accessibility requirement. It is meant to provide examples of the "[visible][]" definition in a programmatic and testable way, so that tool implementers can easily verify that they correctly implement the definition. This "rule" should not be used in any kind of audit and is only meant as a way for implementers to test parts of their tools that are not directly tested by any of the actual rules.

## Test Cases

### Passed Examples

#### Passed Example 1

This `span` element is visible (by default, elements are visible).

```html
<span id="target">Now you can see me!</span>
```

### Failed Examples

#### Failed Example 1

This `span` element is not visible because of the CSS `visibility` property.

```html
<span id="target" style="visibility: hidden">I'm the invisible man</span>
```

#### Failed Example 2

This `span` element is not visible because of the CSS `display` property.

```html
<span id="target" style="display: none">I'm the invisible man</span>
```

#### Failed Example 3

This `span` element is not visible because it is positioned off-screen.

```html
<span id="target" style="position: absolute; top: -9999px; left: -9999px;">Incredible how you can</span>
```

#### Failed Example 4

This `span` element is not visible because it is positioned off-screen.

```html
<span id="target" style="position: absolute; top: -9999px">See right through me</span>
```

#### Failed Example 5

This `span` element is not visible because it is positioned off-screen.

```html
<span id="target" style="position: absolute; left: -9999px;">When you hear a sound</span>
```

#### Failed Example 6

This `span` element is not visible because it contains only whitespace and line breaks.

```html
<span id="target">
	<br />
	&nbsp;
</span>
```

#### Failed Example 7

This `span` element is not visible because its text content has size 0.

```html
<span id="target" style="font-size: 0px">That you just can't place</span>
```

#### Failed Example 8

This `span` element is not visible because it has the exact same color as its background.

```html
<span id="target" style="color: #00F; background: #00F;">Feel something move</span>
```

#### Failed Example 9

This `span` element is not visible because it has no opacity.

```html
<span id="target" style="opacity: 0">That you just can't trace</span>
```

#### Failed Example 10

This `span` element is not visible because it's text is fully transparent.

```html
<span id="target" style="color: transparent">When something sits</span>
```

#### Failed Example 11

This `span` element is not visible because it's size is reduced to zero, and any overflow is hidden.

```html
<span id="target" style="height: 0px; width: 0px; overflow: hidden">On the end of your bed</span>
```

#### Failed Example 12

This `span` element is not visible because its content is fully indented out of it, and any overflow is hidden.

```html
<span id="target" style="text-indent: -200%; overflow: hidden">Don't turn around</span>
```

#### Failed Example 13

This `span` element is not visible because it is clipped to zero size.

```html
<span id="target" style="clip-path: inset(50%)">When you hear me tread</span>
```

#### Failed Example 14

This `div` element is not visible because it is scaled to 0%.

```html
<div id="target" style="transform: scale(0%)">I'm the invisible man</div>
```

#### Failed Example 15

This `div` element is not visible because it is translated out of screen.

```html
<div id="target" style="transform: translate(-100%)">I'm the invisible man</div>
```

### Inapplicable Examples

#### Inapplicable Example 1

There is no element with an `id` of `target`.

```html
<span style="display: none">Hello World</span>
```

[visible]: /glossary/#visible
