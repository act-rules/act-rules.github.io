---
id: 73f2c2
name: '`autocomplete` attribute has valid value'
rule_type: atomic
description: |
  This rule checks that the HTML `autocomplete` attribute has a correct value.
accessibility_requirements:
  wcag21:1.3.5: # Identify Input Purpose (AA)
    forConformance: true
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
---

## Applicability

The rule applies to any HTML `input`, `select` and `textarea` element with an `autocomplete` attribute that is a set of one or more [space separated tokens](https://html.spec.whatwg.org/#set-of-space-separated-tokens), except if one of the following is true:

- The element is not [visible](#visible), and not [included in the accessibility tree](#included-in-the-accessibility-tree)
- The element is an `input` element with a `type` [attribute value][] of either `hidden`, `button`, `submit` or `reset`
- The element has an `aria-disabled` [attribute value][] of `true`
- The element is not part of [sequential focus navigation](https://html.spec.whatwg.org/#sequential-focus-navigation) and has a [semantic role](#semantic-role) that is not a [widget role](https://www.w3.org/TR/wai-aria-1.1/#widget_roles).

## Expectation 1

The `autocomplete` attribute is a single term, or a space separated list of terms.

## Expectation 2

The autocomplete term(s) follow the [HTML specification - Autofill detail tokens](https://html.spec.whatwg.org/#autofill-detail-tokens), which requires that it/they match the following in the correct order:

1. Has a value that starts with "section-" _(optional)_
2. Has either "shipping" or "billing" _(optional)_
3. Has either "home", "work", "mobile", "fax" or "pager" _(optional, only for "email", "impp", "tel" or "tel-\*")_
4. Has a [correct autocomplete field](#correct-autocomplete-field) _(required)_

**Note:** Autocomplete terms are case insensitive. When multiple terms are used, they must be used in the correct order.

## Expectation 3

The [correct autocomplete field](#correct-autocomplete-field) is an [appropriate field for the form control](#appropriate-field-for-the-form-control).

## Assumptions

For this rule, it is assumed that the `autocomplete` attribute is not used on form fields that do not correspond to an autocomplete field described in the HTML 5.2 specification. If the `autocomplete` field is used to describe "custom" taxonomy, rather than that described in the specification, this rule may produce incorrect results.

## Accessibility Support

- While `autocomplete` in a promising technique for supporting personalization in HTML, support for this is fairly limited.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Some user agents treat the value of the `aria-disabled` attribute as case-sensitive.

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to support personalization. Many users may find it easier to fill out forms if those can be styled or laid out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does.

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [Definition: programmatically determined (programmatically determinable)](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable)
- [Autofill](https://html.spec.whatwg.org/#autofill)

## Test Cases

### Passed

#### Passed Example 1

Single autocomplete term.

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

Single autocomplete term for select.

```html
<select autocomplete="bday-month">
	<option>January</option>
	<option>...</option>
</select>
```

#### Passed Example 3

Autocomplete term, only valid for textarea.

```html
<textarea autocomplete="Street-Address"></textarea>
```

#### Passed Example 4

Two autocomplete terms.

```html
<label>Work email<input autocomplete="Work Email"/></label>
```

#### Passed Example 5

Autocomplete using section-\*

```html
<label>Email<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

Triple autocomplete terms.

```html
<label>Address<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

Full length autocomplete terms.

```html
<label>Email<input autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

This `input` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `textbox` due to [Presentational Roles Conflict Resolution][]. It has a single autocomplete term.

```html
<label>Username<input role="none" autocomplete="username"/></label>
```

#### Passed Example 9

The `input` element does not participates in sequential focus navigation, but still has a semantic role that is a widget role, and has a single autocomplete term.

```html
<label>Username<input tabindex="-1" autocomplete="username"/></label>
```

#### Passed Example 10

The `input` element does not have a semantic role that is a widget role, but still participates in sequential focus navigation because of the [`tabindex` attribute](https://html.spec.whatwg.org/#the-tabindex-attribute), and has a single autocomplete term.

```html
<label>Username<input role="banner" tabindex="0" autocomplete="username"/></label>
```

### Failed

#### Failed Example 1

Unknown autocomplete term.

```html
<label>Username<input autocomplete="badterm"/></label>
```

#### Failed Example 2

Term `work` not allowed before `photo`.

```html
<label>Photo<input autocomplete="work photo"/></label>
```

#### Failed Example 3

Invalid order of terms.

```html
<label>Email<input autocomplete="work shipping email"/></label>
```

#### Failed Example 4

Comma separated rather than space separated list.

```html
<label>Email<input autocomplete="work,email"/></label>
```

#### Failed Example 5

Autocomplete is inappropriate for the type of field.

```html
<label>Email<input type="number" autocomplete="email"/></label>
```

### Inapplicable

#### Inapplicable Example 1

Inapplicable element.

```html
<button autocomplete="username"></button>
```

#### Inapplicable Example 2

Autocomplete attribute is empty ("").

```html
<label>Username<input autocomplete=""/></label>
```

#### Inapplicable Example 3

The element is hidden through `display:none`.

```html
<label>Username<input autocomplete="username" style="display:none"/></label>
```

#### Inapplicable Example 4

The `input` element has a `type` attribute that is in the `button` state.

```html
<label>Username<input type="button" autocomplete="username"/></label>
```

#### Inapplicable Example 5

The `input` element has a `type` attribute that is in the `hidden` state.

```html
<label>Username<input type="hidden" autocomplete="username"/></label>
```

#### Inapplicable Example 6

The `input` element has an HTML `disabled` attribute.

```html
<label>Username<input autocomplete="username" disabled/></label>
```

#### Inapplicable Example 7

The `input` element has an `aria-disabled` attribute with value `true`.

```html
<label>Username<input autocomplete="username" aria-disabled="true"/></label>
```

#### Inapplicable Example 8

Non-widget element that does not participate in sequential focus navigation.

```html
<label>Username<input type="button" role="none" disabled autocomplete="username"/></label>
```

#### Inapplicable Example 9

Autocomplete attribute contains no tokens.

```html
<label>Username<input autocomplete=" "/></label>
```

[attribute value]: #attribute-value 'Definition of Attribute Value'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
