---
title: Accessible Name
key: accessible-name
---

The programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note**: As per the [accessible name and description computation](https://www.w3.org/TR/accname), each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note**: As per the [accessible name and description computation](https://www.w3.org/TR/accname), accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support

- Because the [accessible name and description computation](https://www.w3.org/TR/accname) is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).

#### Examples

**Note**: The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and help implementers of ACT rules understand it.

The `input` elements have an accessible name of, respectively, "Billing Name" and "Billing Address". These accessible names are given by the `aria-labelledby` attributes and associated elements.

```html
<div id="myBillingId">Billing</div>

<div>
	<div id="myNameId">Name</div>
	<input type="text" aria-labelledby="myBillingId myNameId" />
</div>
<div>
	<div id="myAddressId">Address</div>
	<input type="text" aria-labelledby="myBillingId myAddressId" />
</div>
```

This `button` element has an accessible name of "Share ACT rules" given by its `aria-label` attribute.

```html
<button aria-label="Share ACT rules">Share</button>
```

This `img` element has an accessible name of "ACT rules" given by its `alt` attribute.

```html
<img src="#" alt="ACT rules" />
```

The `button` element has an accessible name of "Share ACT rules" given by the enclosing `label` element (implicit `label`)

```html
<label>Share ACT rules<button>Share</button></label>
```

The `button` element has an accessible name of "Share ACT rules" given by the associated `label` element (explicit `label`)

```html
<label for="act-rules">Share ACT rules</label><button id="act-rules"></button>
```

This `a` element has an accessible name of "ACT rules" given from its content. Note that not all [semantic roles](#semantic-role) allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

This `span` element has an empty accessible name (`""`) because `span` does not allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<span>ACT rules</span>
```

This `span` element has an empty accessible name (`""`) because `span` is not a [labelable element](https://html.spec.whatwg.org/#category-label).

```html
<label>ACT rules<span></span></label>
```

**Note**: When the same element can have an accessible name from several sources, the order of precedence is: `aria-labelledby`, `aria-label`, own attributes, `label` element, name from content. The examples here are listed in the same order.

**Note**: For more examples of accessible name computation, including many tricky cases, check the [Accessible Name Testable Statements](https://www.w3.org/wiki/AccName_1.1_Testable_Statements).
