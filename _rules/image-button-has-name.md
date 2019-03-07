---
name: Image button has accessible name
rule_type: atomic
description: | 
  This rule checks that each image button element has an accessible name 

success_criterion: 
- 1.1.1 # Non-Text Content (A)
- 4.1.2 # Name, Role, Value (A)

test_aspects: # Remove what is not applicable
- DOM Tree
- CSS Styling

authors:
- Anne Thyme Nørregaard
---

## Test procedure

### Applicability

The rule applies to any HTML `input` element with a `type` attribute in the `Image Button` state, that is [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note:** The specification of the `[type](https://www.w3.org/TR/html/sec-forms.html#element-attrdef-input-type)` attribute describes in detail how to map the value of the attribute to its corresponding state.

### Expectation

Each target element has an [accessible name](#accessible-name) that contains [textual content](#textual-content).

## Assumptions

- This rule assumes that all image buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name](#accessible-name).

## Background

- [WCAG Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)

## Test Cases

### Passed

#### Passed example 1

Image button element with accessible name through `alt` attribute

```html
<input type="image" name="submit" src="button.gif" alt="Submit" />
```

#### Passed example 2

Image button element with accessible name through `aria-label`

```html
<input type="image" name="submit" src="button.gif" aria-label="Submit" />
```

#### Passed example 3

Image button element with accessible name through `title` attribute

```html
<input type="image" name="submit" src="button.gif" title="Submit" />
```

#### Passed example 4

Image button element with accessible name through `aria-labelledby`

```html
<input type="image" name="submit" src="button.gif" aria-labelledby="id1" />
<div id="id1">Submit</div>
```

### Failed

#### Failed example 1

Image button element with no attributes to give accessible name

```html
<input type="image" name="submit" src="button.gif" />
```

#### Failed example 2

Image button element with empty `alt` attribute

```html
<input type="image" name="submit" src="button.gif" alt="" />
```

### Failed example 3

Image button with aria-labelledby that does not reference an id that exists in the same document

```html
<input type="image" name="submit" src="button.gif" aria-labelledby="id1" />
```

### Inapplicable

#### Inapplicable example 1

HTML `button` element is not an image button

```html
<button>My button</button>
```

#### Inapplicable example 2

HTML `input` element with type with a `type` attribute in the `Button` state is not an image button

```html
<input type="button">My button</input>
```

#### Inapplicable example 3

Button with image inside is not an image button

```html
<button><img src="button.gif" /></button>
```

#### Inapplicable example 4

Image is not a button image

```html
 <img alt="W3C logo" />
```

#### Inapplicable example 4

Image button is not included in the accessibility tree

```html
<input type="image" name="submit" src="button.gif" alt="Submit" aria-hidden="true" />
```
