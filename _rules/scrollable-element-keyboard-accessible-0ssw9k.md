---
id: 0ssw9k
name: Scrollable content can be reached with sequential focus navigation
rule_type: atomic
description: |
  This rule checks that scrollable elements or their descendants can be reached with sequential focus navigation so that they can be scrolled by keyboard
accessibility_requirements:
  wcag20:2.1.1: # Keyboard (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag20:2.1.3: # Keyboard (No Exceptions) (AAA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
  wcag-technique:G202: # Ensuring keyboard control for all functionality
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgments:
  authors:
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML element][] that has [visible][] [children][] in the [flat tree][], and for which at least one of the following is true:

- the element has a [horizontal scroll distance][scrollable] greater than the [computed][] [left][padding-left] or [right padding][padding-right] of the element; or
- the element has a [vertical scroll distance][scrollable] greater than the [computed][] [top][padding-top] or [bottom padding][padding-bottom] of the element.

## Expectation

Each test target is either included in [sequential focus navigation][] or has a [descendant][] in the [flat tree][] that is included in [sequential focus navigation][].

## Assumptions

This rule assumes that all [scrollable elements][scrollable] with visible content need to be keyboard accessible. [Scrollable elements][scrollable] that do not need to be keyboard accessible, perhaps because their content is [purely decorative][], the scroll area is whitespace, or because scroll can be controlled in some other keyboard accessible way such as through a button or custom scrollbar, may fail this rule but still satisfy [success criterion 2.1.1 Keyboard][].

## Accessibility Support

Some browsers will automatically make any [scrollable element][scrollable] focusable to ensure keyboard accessibility. However, the browser does not include these elements in [sequential focus navigation][] when it has a negative number as a tabindex [attribute value][].

Some browsers restrict scrolling to the [content box](https://drafts.csswg.org/css-box-4/#content-box) of elements; while others allow to scroll the full [border box](https://drafts.csswg.org/css-box-4/#border-box), hence including the element's padding. This results in some elements being scrollable with a browser but not with another.

## Background

To ensure there is some element from which arrow keys can be used to control the scroll position, focus must be on or in a scrollable region. If scripts are used to prevent the keyboard events from reaching the scrollable region, this could still cause a keyboard accessibility issue. This must be tested separately.

This rule only applies to elements who scroll content in the same document. Elements such as iframes that embed other documents may also be scrollable, but for them it is the embedded document that scrolls, not the content in the same document. Such scenarios are tested separately with rules such as [Iframe with negative tabindex has no interactive elements](https://www.w3.org/WAI/standards-guidelines/act/rules/akn7bn/).

### Bibliography

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG22/Techniques/general/G202)

## Test Cases

### Passed

#### Passed Example 1

This [scrollable][] `section` element is included in [sequential focus navigation][] because it has a `tabindex` attribute set to `0`.

```html
<section style="height: 100px; width: 500px; overflow: scroll;" tabindex="0">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Passed Example 2

This [scrollable][] `section` element contains a link that is included in [sequential focus navigation][].

```html
<section style="height: 100px; width: 500px; overflow: scroll;">
	<h1>
		<a href="https://www.w3.org/TR/WCAG22/#abstract">
			WCAG 2.1 Abstract
		</a>
	</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

### Failed

#### Failed Example 1

This [vertically scrollable][scrollable] `section` element is not included in [sequential focus navigation][], nor does it have any [descendants][descendant] that are.

```html
<section style="height: 100px; width: 500px; overflow-y: scroll">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Failed Example 2

This [horizontally scrollable][scrollable] `section` element is not included in [sequential focus navigation][], nor does it have any [descendants][descendant] that are.

```html
<style>
	section {
		height: 100px;
		width: 400px;
		overflow-y: auto;
		white-space: nowrap;
	}
	section > img {
		display: inline-block;
		width: 80px;
	}
</style>
<h1>Our sponsors:</h1>
<section>
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
</section>
```

### Inapplicable

#### Inapplicable Example 1

This `section` element has a [computed][] [overflow][] of `visible`. Because of this its [scroll distance][scrollable] will be 0, regardless of the element's content.

```html
<section style="height: 95px; width: 500px;">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Inapplicable Example 2

This `section` element has a [scroll distance][scrollable] of 0 in both directions.

```html
<section style="height: 95px; width: 500px; overflow: auto;">
	<p>
		<a href="https://www.w3.org/TR/WCAG22/#abstract">
			WCAG 2.1 Abstract
		</a>
	</p>
</section>
```

#### Inapplicable Example 3

This `section` element is not [scrollable][] because it has a [computed][] [overflow][] of `hidden`.

```html
<h1>
	<a href="https://www.w3.org/TR/WCAG22/#abstract">
		WCAG 2.1 Abstract
	</a>
</h1>
<section style="height: 95px; width: 500px; overflow: hidden;">
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Inapplicable Example 4

This [scrollable][] `section` element has no [visible][] content.

```html
<p>This is what a scrollbar looks like:</p>
<section style="height: 20px; width: 500px; overflow-x:scroll;">
	<div style="width: 1000px; height: 1px;"></div>
</section>
```

#### Inapplicable Example 5

This `section` element has a [horizontal scroll distance][scrollable] that is less than its horizontal [padding][], and [vertical scroll distance][scrollable] that is less than its vertical [padding][].

```html
<section style="height: 210px; width: 530px; overflow: scroll; padding: 30px 0 30px 30px;">
	<div role="heading" aria-level="1">WCAG 2.1 Abstract</div>
	<div style="width: 520px">
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</div>
</section>
```

#### Inapplicable Example 6

This `iframe` element is not a scrollable element, but instead contains a nested browsing context that is scrollable. These must be tested separately.

```html
<iframe src="https://www.w3.org/TR/WCAG22/#abstract" width="500" height="200"></iframe>
```

[visible]: #visible
[scrollable]: #scrollable-element
[attribute value]: #attribute-value
[children]: https://dom.spec.whatwg.org/#concept-tree-child 'DOM child, 2020/04/03'
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM descendant, 2020/04/03'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML sequential focus navigation, 2020/04/03'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/04/03'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow]: https://www.w3.org/TR/CSS22/visufx.html#overflow
[padding]: https://www.w3.org/TR/CSS22/box.html#propdef-padding
[padding-left]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-left
[padding-right]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-right
[padding-top]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-top
[padding-bottom]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-bottom
[purely decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration
[success criterion 2.1.1 keyboard]: https://www.w3.org/TR/WCAG22/#keyboard
[html element]: #namespaced-element
