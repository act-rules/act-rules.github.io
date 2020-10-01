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

The rule applies to any HTML `input`, `select` and `textarea` element with an `autocomplete` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][], except if one of the following is true:

- **hidden**: the element is not [visible][], and not [included in the accessibility tree][]; or
- **disabled**: the element has an `aria-disabled` [attribute value][] of `true`; or
- **fixed value**: the element is an `input` element with a `type` [attribute value][] of either `hidden`, `button`, `submit` or `reset`; or
- **static**: the element is not part of [sequential focus navigation][] and has a [semantic role][] that is not a [widget role][].

## Expectation 1

Each test target's `autocomplete` [attribute value][] is a [space separated][] list of one or more tokens that follow the [HTML specification for Autofill detail tokens][], which requires that the token list match the following in the correct order:

1. An optional token that starts with "section-"; then
2. An optional token of either "shipping" or "billing"; then
3. An optional token of either "home", "work", "mobile", "fax" or "pager", only if the last token is "email", "impp", "tel" or "tel-\*"; then
4. A required token from the [correct autocomplete field][].

## Expectation 2

Each test target's `autocomplete` [attribute value][] has a [correct autocomplete field][] that is [appropriate][appropriate field for the form control] for that test target.

## Assumptions

The `autocomplete` attribute is used on form fields that correspond to [Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG21/#input-purposes) and collect information about the user.

If the `autocomplete` field is used to describe "custom" taxonomy, rather than that described in the list of `input` purposes, or the form fields do not collect information about the user, success Criterion [1.3.5 Identify Input Purpose][sc135] may be satisfied even if this rule failed.

The `type` attribute is used correctly according to the intended purpose of `input` elements. If an incorrect `type` attribute is used for `input` elements, this rule may fail elements that satisfy success Criterion [1.3.5 Identify Input Purpose][sc135]. For example if an `input` element has a `type` of `number`, but is expecting an e-mail address.

The `aria-disabled` state is used on `input` elements which are not part of [sequential focus navigation][] and are not otherwise [operable](https://www.w3.org/TR/wai-aria-1.2/#dfn-operable). If this is not the case, this rule may be inapplicable on elements that are still [operable](https://www.w3.org/TR/wai-aria-1.2/#dfn-operable) and require a valid `autocomplete` attribute to satisfy success Criterion [1.3.5 Identify Input Purpose][sc135].

## Accessibility Support

- While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in assistive technologies is fairly limited.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Some user agents treat the value of the `aria-disabled` attribute as case-sensitive.
- In some user agents, querying the value of the `autocomplete` property returns an empty string ("") even when the attribute was set according to the rule's expectations. It affects assistive technologies which rely on this property to personalize input fields collecting information about the user.

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to support personalization. Many users may find it easier to fill out forms if those can be styled or laid out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does.

The auto-completing feature of the `autocomplete` attribute benefits many users, but it is not required to satisfy success Criterion [1.3.5 Identify Input Purpose][sc135]. Setting `autocomplete="off"` on the element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) prevents the user agent from completing it, but it does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [Definition: programmatically determined (programmatically determinable)](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable)
- [Autofill](https://html.spec.whatwg.org/#autofill)

## Test Cases

### Passed

#### Passed Example 1

This `autocomplete` [attribute value][] only has the required token, and is valid for an `input` element which has a default type of `text`.

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

This `autocomplete` [attribute value][] only has the required token, and is valid for a `select` element. Even though the element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) has `autocomplete="off"`, thus preventing the user agent from completing it, it does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

```html
<form autocomplete="off">
	<select autocomplete="bday-month">
		<option>January</option>
		<option>...</option>
	</select>
</form>
```

#### Passed Example 3

This `autocomplete` [attribute value][] only has the required token, and is valid for a `textarea` element. Mixing upper and lower case letters is allowed for `autocomplete` attributes.

```html
<textarea autocomplete="Street-Address"></textarea>
```

#### Passed Example 4

This `autocomplete` [attribute value][] list includes a `work` token, allowed because it is used before `email`. The `email` token is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Work email<input autocomplete="Work Email"/></label>
```

#### Passed Example 5

This `autocomplete` [attribute value][] list includes a `section-` token, which can preface any [correct autocomplete field][]. The `email` token is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Email<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

This `autocomplete` [attribute value][] list includes `section-` and `billing` tokens. These tokens can preface any [correct autocomplete field][].

```html
<label>Address<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

This `autocomplete` [attribute value][] list includes all allowed types of tokens in the correct order. The `email` token is allowed on `input` elements with a `type` [attribute value][] of `text`.

```html
<label>Email<input type="text" autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

The `autocomplete` attribute value is on an `input` element that does not have a semantic role that is a widget role, but still participates in [sequential focus navigation][] because of the `tabindex` attribute.

```html
<label>Username<input role="banner" tabindex="0" autocomplete="username"/></label>
```

### Failed

#### Failed Example 1

This `autocomplete` [attribute value][] has an unknown term that is not a [correct autocomplete field][].

```html
<label>Username<input autocomplete="badterm"/></label>
```

#### Failed Example 2

This `autocomplete` [attribute value][] has the `work` token on a [correct autocomplete field][], however `work` can not be used with `photo`.

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

This `autocomplete` [attribute value][] is not appropriate for the field. The form field's implied purpose is to input a quantity (a number) which cannot be a e-mail.

```html
<label>Quantity<input type="number" autocomplete="email"/></label>
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

This `autocomplete` [attribute value][] is on an element that is not [visible][] through `display:none`.

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

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/08/12'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[appropriate field for the form control]: #appropriate-field-for-the-form-control 'Definition of Appropriate field for the form control'
[correct autocomplete field]: #correct-autocomplete-field 'Definition of Correct autocomplete field'
[html specification for autofill detail tokens]: https://html.spec.whatwg.org/#autofill-detail-tokens 'HTML Autofill Detail, 2020/08/12'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc135]: https://www.w3.org/TR/WCAG21/#identify-input-purpose 'WCAG 2.1 success criterion 1.3.5 Identify Input Purpose'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/08/12'
[space separated]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'HTML Set of space separated tokens 2020/08/12'
[visible]: #visible 'Definition of Visible'
[widget role]: https://www.w3.org/TR/wai-aria-1.1/#widget_roles 'WAI-ARIA widget roles'
