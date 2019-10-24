---
title: Accessible Name
key: accessible-name
---

The programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

#### Examples

The `span` element with an `id` of `"target"` has an accessible name of "ACT rules" given by the `aria-labelledby` attribute and both associated elements. The fact that the element with an `id` of `"label-1"` is hidden to all users does not prevent it from giving an accessible name to other elements.

```html
<span id="label-1" style="display: none">ACT</span>
<span id="label-2">rules</span>
<span id="target" aria-labelledby="label-1 label-2"></span>
```

This `span` element has an accessible name of "ACT rules" given by its `aria-label` attribute.

```html
<span aria-label="ACT rules"></span>
```

This `img` element has an accessible name of "ACT rules" given by its `alt` attribute.

```html
<img src="#" alt="ACT rules" />
```

The `span` element has an accessible name of "ACT rules:" given by the enclosing `label` element (implicit `label`)

```html
<label>ACT rules:<span></span></label>
```

The `span` element has an accessible name of "ACT rules:" given by the associated `label` element (explicit `label`)

```html
<label for="act-rules">ACT rules:</label><span id="act-rules"></span>
```

This `a` element has an accessible name of "ACT rules" given from its content. Note that not all [semantic roles][#semantic-role] allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

This `span` element has an empty accessible name (`""`) because `span` does not allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<span>ACT rules</span>
```

**Note**: when the same element can have an accessible name from several sources, the order of precedence is: `aria-labelledby`, `aria-label`, own attributes, `label` element, name from content. The examples here are listed in the same order.

**Note**: For more examples of accessible name computation, including many tricky cases, check the [Accessible Name Testable Statements](https://www.w3.org/wiki/AccName_1.1_Testable_Statements)
