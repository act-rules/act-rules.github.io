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

The rule applies to any `autocomplete` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][], specified on a HTML `input`, `select` or `textarea` element, except if one of the following is true:

- The element is not [visible][], and not [included in the accessibility tree][]; or
- The element is an `input` element with a `type` [attribute value][] of either `hidden`, `button`, `submit` or `reset`; or
- The element has an `aria-disabled` [attribute value][] of `true`; or
- The element is not part of [sequential focus navigation][] and has a [semantic role][] that is not a [widget role][].

## Expectation 1

Each test target is a [space separated][] list of one or more tokens that follow the [HTML specification for Autofill detail tokens][], which requires that the token list match the following in the correct order:

1. An optional token that starts with "section-"; then
2. An optional token of either "shipping" or "billing"; then
3. An optional token of either "home", "work", "mobile", "fax" or "pager", only if the last token is "email", "impp", "tel" or "tel-*"; then
4. A required token from the [correct autocomplete field][].

## Expectation 2

Each test target has a [correct autocomplete field][] that is an [appropriate field for the form control][].

## Assumptions

For this rule, it is assumed that the `autocomplete` attribute is not used on form fields that do not correspond to an autocomplete field described in the HTML 5.2 specification. If the `autocomplete` field is used to describe "custom" taxonomy, rather than that described in the specification, the [1.3.5: Identify Input Purpose][sc135] may be satisfied even if this rule failed.

## Accessibility Support

- While `autocomplete` in a promising technique for supporting personalization in HTML, support for this in assistive technologies is fairly limited.
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

This `autocomplete` [attribute value][] is only has the required token, and is valid for an `input` element which has a default type of `text`.

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

This `autocomplete` [attribute value][] is only has the required token, and is valid for a `select` element.

```html
<select autocomplete="bday-month">
	<option>January</option>
	<option>...</option>
</select>
```

#### Passed Example 3

This `autocomplete` [attribute value][] only has the required token, and is valid for a `textarea` element. Missing upper and lower case letters is allwed for `autocomplete` attributes.

```html
<textarea autocomplete="Street-Address"></textarea>
```

#### Passed Example 4

This `autocomplete` [attribute value][] has a `work` token, allowed because it is used before `email`. The `email` taken is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Work email<input autocomplete="Work Email"/></label>
```

#### Passed Example 5

This `autocomplete` [attribute value][] has a `section-` token, which can preface any [correct autocomplete field][]. The `email` taken is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Email<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

This `autocomplete` [attribute value][] has `section-`  and `billing` tokens. These tokens can preface any [correct autocomplete field][]. The `email` taken is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Address<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

This `autocomplete` [attribute value][] has all allowed types of tokens in the correct order. The `email` taken is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Email<input autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

The `autocomplete` attribute value is on an `input` element that does not have a semantic role that is a widget role, but still participates in sequential focus navigation because of the [`tabindex` attribute](https://html.spec.whatwg.org/#the-tabindex-attribute).

```html
<label>Username<input role="banner" tabindex="0" autocomplete="username"/></label>
```

### Failed

#### Failed Example 1

This `autocomplete` [attribute value][] does not have a [correct autocomplete field][].

```html
<label>Username<input autocomplete="badterm"/></label>
```

#### Failed Example 2

This `autocomplete` [attribute value][] has the `work` token on a [correct autocomplete field][] that does not support this.

```html
<label>Photo<input autocomplete="work photo"/></label>
```

#### Failed Example 3

This `autocomplete` [attribute value][] includes the `work` token before the `shipping` token, instead of the other way around.

```html
<label>Email<input autocomplete="work shipping email"/></label>
```

#### Failed Example 4

This `autocomplete` [attribute value][] is comma separated instead of space using [ASCII whitespace][].

```html
<label>Email<input autocomplete="work,email"/></label>
```

#### Failed Example 5

This `autocomplete` [attribute value][] is not appropriate for the field. It is not possible to type an e-mail using just numbers.

```html
<label>Email<input type="number" autocomplete="email"/></label>
```

### Inapplicable

#### Inapplicable Example 1

This `button` element does not support `autocomplete` attributes.

```html
<button autocomplete="username"></button>
```

#### Inapplicable Example 2

This `autocomplete` [attribute value][] is empty ("").

```html
<label>Username<input autocomplete=""/></label>
```

#### Inapplicable Example 3

This `autocomplete` [attribute value][] contains only [ASCII whitespace][].

```html
<label>Username<input autocomplete=" "/></label>
```

#### Inapplicable Example 4

This `autocomplete` [attribute value][] is on an element is hidden through `display:none`.

```html
<label>Username<input autocomplete="username" style="display:none"/></label>
```

#### Inapplicable Example 5

This `autocomplete` attribute is on an `input` element with a `type` [attribute value][] that does not support autocomplete.

```html
<label>Username<input type="button" autocomplete="username"/></label>
```

#### Inapplicable Example 6

This `autocomplete` attribute is on an `input` element that has the `disabled` attribute.

```html
<label>Username<input autocomplete="username" disabled/></label>
```

#### Inapplicable Example 7

This `autocomplete` attribute is on an `input` element that has the `aria-disabled` [attribute value][] of `true`.

```html
<label>Username<input autocomplete="username" aria-disabled="true"/></label>
```

#### Inapplicable Example 8

This `autocomplete` attribute is ignored because it is on an element with a [semantic role][] of `none`. The `disabled` attribute is required to ensure [presentational roles conflict resolution][] does not cause the `none` role to be ignored.

```html
<label>Username<input type="text" role="none" disabled autocomplete="username"/></label>
```

[ASCII whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/08/12'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[appropriate field for the form control]: #appropriate-field-for-the-form-control 'Definition of Appropriate field for the form control'
[correct autocomplete field]: #correct-autocomplete-field 'Definition of Correct autocomplete field'
[HTML specification for Autofill detail tokens]: https://html.spec.whatwg.org/#autofill-detail-tokens 'HTML Autofill Detail, 2020/08/12'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc135]: https://www.w3.org/TR/WCAG21/#identify-input-purpose 'WCAG 2.1 success criterion 1.3.5 Identify Input Purpose'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/08/12'
[space separated]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'HTML Set of space separated tokens 2020/08/12'
[visible]: #visible 'Definition of Visible'
[widget role]: https://www.w3.org/TR/wai-aria-1.1/#widget_roles 'WAI-ARIA widget roles'
