---
id: c487ae
name: Link has accessible name
rule_type: atomic
description: |
  This rule checks that each link has an accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.4: # Link Purpose (In Context) (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.4.9: # Link Purpose (Link Only) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G91: # Providing link text that describes the purpose of a link
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
    - Anne Thyme Nørregaard
htmlHintIgnore:
  # https://www.npmjs.com/package/htmlhint
  # (used with `npm test` to ensure validity of code snippets)
  - 'alt-require'
---

## Applicability

The rule applies to any HTML element with the [semantic role](#semantic-role) of `link` that is [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

## Assumptions

The rule assumes that all links are [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components) as defined by WCAG 2. When the link role is used on elements that do not behave as links, failing this rule might not mean that the success criteria are failed.

## Accessibility Support

- For `area` elements that have a `href` attribute, but are not nested inside a `map` element, there are differences between browsers and assistive technology on whether the `area` is considered [included in the accessibility tree][] or not.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `link` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)
- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89)

## Test Cases

### Passed

#### Passed Example 1

`a` element with [accessible name][] through content.

```html
<a href="http://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

#### Passed Example 2

Element with [explicit role](#explicit-role) of link with [accessible name][] through content.

```html
<div role="link">Web Accessibility Initiative (WAI)</div>
```

#### Passed Example 3

`Button` with an [explicit role](#explicit-role) of `link`.

```html
<button role="link">Click me!</button>
```

#### Passed Example 4

[accessible name][] for link via `aria-label`

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-label="This is a link"/></a>
```

#### Passed Example 5

Link named via `title` on link.

```html
<a href="http://www.w3.org/WAI" title="This is a link"><img src="#"/></a>
```

#### Passed Example 6

Link named via `title` on image.

```html
<a href="http://www.w3.org/WAI"><img src="#" title="This is a link"/></a>
```

#### Passed Example 7

Link with both `image` and `text`.

```html
<a href="http://www.w3.org/WAI"><img src="#" />This is my link text</a>
```

#### Passed Example 8

[accessible name][] for link via `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
<div id="id1">This is my link text</div>
```

#### Passed Example 9

When `link` is off screen.

```html
<html>
	<style>
		.offScreenLink {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<a class="offScreenLink" href="http://www.w3.org/WAI">Web Accessibility Initiative (WAI)</a>
	</body>
</html>
```

#### Passed Example 10

`area` element with `href` attribute has [accessible name][].

```html
<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap" />

<map name="planetmap">
	<area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun" />
</map>
```

#### Passed Example 11

`a` element where [accessible name][] is not empty.

```html
<a href="http://www.w3.org/WAI">:-)</a>
```

### Failed

#### Failed Example 1

Image link with empty [accessible name][].

```html
<a href="http://www.w3.org/WAI"><img src="#"/></a>
```

#### Failed Example 2

Image link where image has a role of `presentation` through empty `alt`.

```html
<a href="http://www.w3.org/WAI"><img src="#" alt=""/></a>
```

#### Failed Example 3

Link with icon inserted via font-awesome.

```html
<a href="http://www.w3.org/WAI"><i class="fa fa-download"></i></a>
```

#### Failed Example 4

Link with image that has empty title.

```html
<a href="http://www.w3.org/WAI"><img src="#" title=""/></a>
```

#### Failed Example 5

Link with image that has empty `aria-labelledby`.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledy="id1"/></a>
<div id="id1"></div>
```

#### Failed Example 6

`aria-labelledby` references a non-existing id.

```html
<a href="http://www.w3.org/WAI"><img src="#" aria-labelledby="id1"/></a>
```

#### Failed Example 7

[Non-visible](#visible) link.

```html
<a href="http://www.w3.org/WAI" style="left: -9999px; position: absolute;">
	<img src="#" />
</a>
```

#### Failed Example 8

Link is completely empty, but still shows up in focus order, so it should have a non-empty [accessible name][].

```html
<a href="http://www.w3.org/WAI"></a>
```

#### Failed Example 9

`area` element with `href` attribute has an empty [accessible name][].

```html
<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap" />

<map name="planetmap">
	<area shape="rect" coords="0,0,82,126" href="sun.htm" />
</map>
```

#### Failed Example 10

`a` element where [accessible name][] through content is empty.

```html
<a href="http://www.w3.org/WAI"> </a>
```

#### Failed Example 11

This `a` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `link` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<a href="http://www.w3.org/WAI" role="none"> </a>
```

### Inapplicable

#### Inapplicable Example 1

`a` element that has had its role changed.

```html
<a href="http://www.w3.org/WAI" role="button">
	Web Accessibility Initiative (WAI)
</a>
```

#### Inapplicable Example 2

Not [included in the accessibility tree][] due to `display:none`.

```html
<a href="http://www.w3.org/WAI" style="display: none;"><img src="#"/></a>
```

#### Inapplicable Example 3

Not [included in the accessibility tree][] due to `visibility: hidden`.

```html
<a href="http://www.w3.org/WAI" style="visibility: hidden;">Some text</a>
```

#### Inapplicable Example 4

`area` element without `href` attribute does not have role of `link`.

```html
<area shape="rect" coords="0,0,82,126" />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of focusable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[whitespace]: #whitespace 'Definition of whitespace'
