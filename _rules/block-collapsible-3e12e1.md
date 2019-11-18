---
id: 3e12e1
name: Block of content is expandable and collapsible
rule_type: atomic
description: |
  This rule checks that repeated blocks of content are expandable and collapsible
accessibility_requirements:
  wcag-technique:SCR28: # Using an expandable and collapsible menu to bypass block of content
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
acknowledgements:
  authors:
    - Jean-Yves Moyen
---

## Applicability

This rule applies to any [document][] where the [document element][] is an `html` element.

## Expectations

For each [section of repeated content][] in the test target, there exists some [user interface component][] which:

- is [visible][]; and
- is [included in the accessibility tree][]; and
- allows to toggle both [visibility][visible] and [inclusion in the accessibility tree][included in the accessibility tree] of this [section of repeated content][].

## Assumptions

This rule assumes that [sections of repeated content][section of repeated content] have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

## Test Cases

### Passed

#### Passed Example 1

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Passed Example 2

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Passed Example 3

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

### Failed

#### Failed Example 1

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 2

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 3

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 4

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

#### Failed Example 5

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element][] of this [document][] is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[document element]: https://dom.spec.whatwg.org/#document-element 'Definition of document element'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[section of repeated content]: #repeated-content 'Definition of section of repeated content'
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components 'Definition of user interface component'
[visible]: #visible 'Definition of visible'
