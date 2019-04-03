---
name: Autocomplete valid
description: |
  This rule checks that the HTML autocomplete attribute has a correct value

success_criterion:
- 1.3.5 # Identify Input Purpose

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Wilco Fiers
---

## Test Procedure

### Applicability

The rule applies to any HTML `input`, `select` and `textarea` element with a `autocomplete` attribute that is not empty (""), except if one of the following is true:

- The element is not [visible on the page](#visible-on-the-page), and not [included in the accessibility tree](#included-in-the-accessibility-tree)
- The element is an `input` element with a `type` property of `hidden`, `button`, `submit` or `reset`
- The element has a `disabled` or `aria-disabled="true"` attribute
- The element does not participate in [sequential focus navigation](https://www.w3.org/TR/html/editing.html#sec-sequential-focus-navigation) and has a [semantic role](#semantic-role) that is not a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles).

### Expectation 1

The `autocomplete` attribute is a single term, or a space separated list of terms.

### Expectation 2

The autocomplete term(s) follow the [HTML 5.2 specification](https://www.w3.org/TR/html52/sec-forms.html#autofill-detail-tokens), which requires that it/they match the following in the correct order:

1. Has a value that starts with "section-" _(optional)_
2. Has either "shipping" or "billing" _(optional)_
3. Has either "home", "work", "mobile", "fax" or "pager" _(optional, only for "email", "impp", "tel" or "tel-*")_
4. Has a [correct autocomplete field](#correct-autocomplete-field) _(required)_

**Note**: Autocomplete terms are case insensitive. When multiple terms are used, they must be used in the correct order.

### Expectation 3

The [correct autocomplete field](#correct-autocomplete-field) is an [appropriate field for the form control](#appropriate-field-for-the-form-control).

## Assumptions

For this rule, it is assumed that the `autocomplete` attribute is not used on form fields that do not correspond to a autocomplete field described in the HTML 5.2 specification. If the `autocomplete` field is used to describe "custom" taxonomy, rather than that described in the specification, this rule may produce incorrect results.

## Accessibility support

While `autocomplete` in a promising technique for supporting personalisation in HTML, support for this is fairly limited. 

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to suport personalization. Many users may find it easier to fill out forms if those can be styled or layed out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does. 

- [https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable)
- [https://www.w3.org/TR/html52/sec-forms.html#sec-autofill](https://www.w3.org/TR/html52/sec-forms.html#sec-autofill)

## Test Cases

### Passed

#### Passed example 1

Single autocomplete term.

```html
<input autocomplete="username" />
```

#### Passed example 2

Single autocomplete term for select.

```html
<select autocomplete="bday-month">
  <option>January</option>
  <option>...</option>
</select>
```

#### Passed example 3

Autocomplete term, only valid for textarea.

```html
<textarea autocomplete="Street-Address"></textarea>
```

#### Passed example 4

Two autocomplete terms.

```html
<input autocomplete="Work EMail" />
```

#### Passed example 5

Autocomplete using section-*

```html
<input autocomplete="section-partner email" />
```

#### Passed example 6

Triple autocomplete terms.

```html
<input type="text" autocomplete="section-primary billing address-line1" />
```

#### Passed example 7

Full length autocomplete terms.

```html
<input autocomplete="section-primary shipping work email" />
```

#### Passed example 8

The `input` element does not have a semantic role that is a widget, but still participates in sequential focus navigation, and has a single autocomplete term.

```html
<input role="none" autocomplete="username" />
```

#### Passed example 9

The `input` element does not participates in sequential focus navigation, but still has a semantic role that is a widget, and has a single autocomplete term.

```html
<input tabindex="-1" autocomplete="username" />
```

#### Passed example 8

The `input` element does not have a semantic role that is a widget, but still participates in sequential focus navigation since the [`tabindex` attribute](https://www.w3.org/TR/html/editing.html#the-tabindex-attribute) value is not a [valid integer](https://www.w3.org/TR/html/infrastructure.html#valid-integer), and has a single autocomplete term.

```html
<input role="none" tabindex="-1.5" autocomplete="username" />
```

### Failed

#### Failed example 1

Unknown autocomplete term.

```html

<input autocomplete="badterm" />
```

#### Failed example 2

Term `work` not allowed before `photo`.

```html
<input autocomplete="work photo" />
```

#### Failed example 3

Invalid order of terms.

```html
<input autocomplete="work shipping email" />
```

#### Failed example 4

Comma seperated rather than space separated list.

```html
<input autocomplete="work,email" />
```

#### Failed example 5

Autocomplete is inappropriate for the type of field.

```html
<input type="number" autocomplete="email" />
```

#### Failed example 6

Autocomplete is not empty, but does not have any terms specified.

```html
<input autocomplete=" " />
```

### Inapplicable

#### Inapplicable example 1

Inapplicable element.

```html
<button autocomplete="username"></button>
```

#### Inapplicable example 2

Autocomplete attribute is empty ("").

```html
<input autocomplete="">
```

#### Inapplicable example 3

The element is hidden through `display:none`.

```html
<input autocomplete="username" style="display:none">
```

#### Inapplicable example 4

The element is positioned off screen and hidden to assistive technologies

```html
<input autocomplete="username" aria-hidden="true" style="position:absolute; top:-9999em">
```

#### Inapplicable example 5

The `input` element is in the `button` state.

```html
<input type="button" autocomplete="username">
```

#### Inapplicable example 6

The `input` element is in the `hidden` state.

```html
<input type="hidden" autocomplete="username">
```

#### Inapplicable example 7

The `input` element has an HTML `disabled` attribute.

```html
<input autocomplete="username" disabled>
```

#### Inapplicable example 8

The `input` element has an `aria-disabled` attribute with value `true`.

```html
<input autocomplete="username" aria-disabled="true">
```

#### Inapplicable example 9

Non-widget element that does not participate in sequential focus navigation.

```html
<input type="button" role="none" tabindex="-1" autocomplete="username">
```

#### Inapplicable example 10

Non-widget element that does not participate in sequential focus navigation.

```html
<input type="button" role="none" tabindex="-2" autocomplete="username">
```
