---
id: b49b2e
name: Heading is descriptive
rule_type: atomic
description: |
  This rule checks that headings describe the topic or purpose of the content.
accessibility_requirements:
  wcag20:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgements:
  authors:
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Carlos Duarte
---

## Applicability

This rule applies to any element with the [semantic role][] of heading that is either [visible][] or [included in the accessibility tree][].

**Note:** This rule only applies to elements with the [semantic role][] of heading. Thus, it is a partial check for WCAG 2.0 success criterion 2.4.6, which applies to all headings. "Heading" is used in its general sense and includes headlines and other ways to add a heading to different types of content. This includes elements that are not marked up as headings in the code, but still act visually as headings, e.g. by larger and/or bolder text.

## Expectation

Each target element describes the topic or purpose of its [section of the content][].

**Note:** Headings do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][].
- Some browsers expose elements which are [focusable][] but have an `aria-hidden="true"` attribute, while some hide them.

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed

#### Passed Example 1

Heading marked up with `h1` element that describes the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 2

Heading marked up with `role="heading"` that describes the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 3

Heading marked up with `role="heading"` that describes the topic or purpose of its [section of the content][], with a default aria-level assigned.

```html
<html lang="en">
	<span role="heading">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 4

Heading marked up with `h1` element with an image that describes the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<h1>
		<img scr="/test-assets/descriptive-heading-b49b2e/opening_hours_icon.png" alt="Opening hours" />
	</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 5

Heading marked up with `h1` element that is a single character that describes the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<h1>A</h1>
	<dl>
		<dt>airplane</dt>
		<dd>
			a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.
		</dd>
		<dt>apple</dt>
		<dd>
			the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.
		</dd>
	</dl>
</html>
```

#### Passed Example 6

Heading marked up with `role="heading"` that describes the topic or purpose of its [section of the content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Passed Example 7

Heading marked up with `h1` element that describes the topic or purpose of its [section of the content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

### Failed

#### Failed Example 1

Heading marked up with `h1` element that does not describe the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

Heading marked up with `role="heading"` that does not describe the topic or purpose of its [section of the content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

Heading marked up with `role="heading"` that does not describe the topic or purpose of its [section of the content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

Heading marked up with `h1` element that does not describe the topic or purpose of its [section of the content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

No heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

Heading that is neither [visible][] to users, nor [included in the accessibility tree][].

```html
<html lang="en">
	<h1 style="display: none;">Opening hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 3

Empty heading marked up with `h1` is not [visible][].

```html
<html lang="en">
	<h1></h1>
</html>
```

#### Inapplicable Example 4

Empty heading marked up with `role="heading"` is not [visible][].

```html
<html lang="en">
	<p role="heading" aria-level="1"></p>
</html>
```

[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[section of the content]: #section-of-content 'Definition of section of content'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
