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
acknowledgments:
  authors:
    - Carlos Duarte
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Jean-Yves Moyen
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [semantic][semantic role] `heading` element that is [included in the accessibility tree][] and has a non-empty (`””`) [accessible name][].

## Expectation

Each target element describes the topic or purpose of the first [perceivable content][] after the test target that is not [decorative][]. The order of elements is determined by the [flat tree][].

**Note:** Headings do not need to be lengthy. A word, or even a single character, may be sufficient.

## Assumptions

This rule assumes that the [flat tree][] order is close to the reading order as elements are rendered on the page. Due to positioning, it is possible to render a document in an order that greatly differs from the tree order, in which case the content which is visually associated with a heading might not be the content following it in tree order and this rule might fail while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

This rule also assumes that the content the heading is intended to describe is [visible][] and not hidden from assistive technologies. Otherwise, cases such as expandable content using a heading might fail this rule while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `heading` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

Headings that are visible but not in the accessibility tree are a failure of [Success Criterion 1.3.1 Info and Relationships][sc131]. These are not tested by this rule but they can still fail [Success Criterion 2.4.6 Headings and Labels][sc246].

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed

#### Passed Example 1

This `h1` heading element describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 2

This heading marked up with an [explicit role][] of `heading` describes the topic of the following paragraph.

```html
<html lang="en">
	<span role="heading" aria-level="1">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 3

This `h1` heading element with an image describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>
		<img src="/test-assets/descriptive-heading-b49b2e/opening_hours_icon.png" alt="Opening hours" />
	</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 4

This `h1` heading element has a single character text that describes the topic of the following description list.

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

#### Passed Example 5

This heading marked up with an [explicit role][] of `heading` describes the topic of the following paragraph. The heading is positioned off screen but is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
	<p>
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Passed Example 6

This heading describes the first [perceivable content][] after it (the first `p` element). The next [perceivable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>We are open Saturday from 10 to 13</p>
</html>
```

### Failed

#### Failed Example 1

This `h1` heading element does not describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph.

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph. The heading is positioned off screen but is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p>
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

This `h1` heading element does not describe the first [perceivable content][] after it (the first `p` element). The next [perceivable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>It is going to rain tomorrow</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

This `h1` heading element is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 hidden>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 3

This `h1` heading element has an empty [accessible name][].

```html
<html lang="en">
	<h1></h1>
</html>
```

#### Inapplicable Example 4

Semantic heading has an empty [accessible name][].

```html
<html lang="en">
	<p role="heading" aria-level="1"></p>
</html>
```

[decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships ' Success Criterion 1.3.1 Info and Relationships'
[sc246]: https://www.w3.org/TR/WCAG22/#headings-and-labels 'Success Criterion 2.4.6 Headings and Labels'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[accessible name]: #accessible-name 'Definition of accessible name'
[perceivable content]: #perceivable-content 'Definition of perceivable content'
