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

The rule applies to any HTML `input`, `select` and `textarea` element with a [non-empty](#non-empty) `autocomplete` attribute, except if one of the following is true:

- The element is not [visible on the page](#visible-on-the-page) and not [exposed to assistive technologies](#exposed-to-assistive-technologies)
- The element is an `input` element with a `type` property of `hidden`, `button`, `submit` or `reset`
- The element has a `disabled` or `aria-disabled="true"` attribute
- The element has `tabindex="-1"` and has a [semantic role](#semantic-role) that is not a [widget](https://www.w3.org/TR/wai-aria-1.1/#widget_roles)

### Expectation 1

The `autocomplete` attribute is a single term, or a space separated list of terms.

### Expectation 2

The autocomplete term(s) follow the [HTML 5.2 specification](https://www.w3.org/TR/html52/sec-forms.html#autofill-detail-tokens), which requires that it/they match the following in the correct order:

1. Has a value that starts with "section-" _(optional)_
2. Has either "shipping" or "billing" _(optional)_
3. Has either "home", "work", "mobile", "fax" or "pager" _(optional, only for "email", "impp", "tel" or "tel-*")_
4. Has a [correct autocomplete field](#correct-autocomplete-field) _(required)_

**Note**: Autocomplete terms are case insensitive. When multiple terms are used, they must be used in the correct order.

### Exepctation 3

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

```html
<!-- single autocomplete term -->
<input autocomplete="username" />
```

```html
<!-- single autocomplete term for select -->
<select autocomplete="bday-month">
  <option>January</option>
  <option>...</option>
</select>
```

```html
<!-- Autocomplete term, only valid for textarea -->
<textarea autocomplete="Street-Address"></textarea>
```

```html
<!-- Two autocomplete terms -->
<input autocomplete="Work EMail" />
```

```html
<!-- Autocomplete using section-* -->
<input autocomplete="section-partner email" />
```

```html
<!-- Tripple autocomplete terms -->
<input type="text" autocomplete="section-primary billing street-address />
```

```html
<!-- Full length autocomplete terms -->
<input autocomplete="section-primary shipping work email" />
```

### Failed

```html
<!-- Unknown autocomplete term -->
<input autocomplete="badterm" />
```

```html
<!-- "work" not allowed before "photo" -->
<input autocomplete="work photo" />
```

```html
<!-- invalid order of terms -->
<input autocomplete="work shipping email" />
```

```html
<!-- comma seperated rather than space separated list -->
<input autocomplete="work,email" />
```

```html
<!-- Autocomplete is inappropriate for the type of field -->
<input type="number" autocomplete="email" />
```

### Inapplicable

```html
<!-- Incorrect element -->
<button autocomplete="username"></button>
```

```html
<!-- Empty attribute -->
<input autocomplete="">
```

```html
<!-- Hidden through display:none -->
<input autocomplete="username" style="display:none">
```

```html
<!-- Off screen and hidden to assistive technologies -->
<input autocomplete="username" aria-hidden="true" style="position:absolute; top:-9999em">
```

```html
<!-- input button -->
<input type="button" autocomplete="username">
```

```html
<!-- hidden -->
<input type="hidden" autocomplete="username">
```

```html
<!-- native disabled -->
<input autocomplete="username" disabled>
```

```html
<!-- ARIA disabled -->
<input autocomplete="username" aria-disabled="true">
```

```html
<!-- non-widget element -->
<input type="button" role="none" tabindex="-1" autocomplete="username">
```
