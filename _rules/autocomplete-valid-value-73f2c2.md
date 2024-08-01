---
id: 73f2c2
name: Autocomplete attribute has valid value
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
    - Aron Janecki
    - Wilco Fiers
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any [HTML][] `input`, `select` and `textarea` element with an `autocomplete` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][], except if one or more of the following is true:

- <dfn id="73f2c2:toggle">toggle</dfn>: the `autocomplete` attribute consists of a single token that is an [ASCII case-insensitive][] match for the string `off` or the string `on`; or
- <dfn id="73f2c2:disabled">disabled</dfn>: the element is a [disabled element]; or
- <dfn id="73f2c2:fixed-value">fixed value</dfn>: the element is an `input` element with a `type` [attribute value][] of `button`, `checkbox`, `file`, `image`, `radio`, `reset` or `submit`; or
- <dfn id="73f2c2:hidden">hidden</dfn>: the element is not [visible][], and not [included in the accessibility tree][]; or
- <dfn id="73f2c2:static">static</dfn>: the element is not part of [sequential focus navigation][] and has a [semantic role][] that is not a [widget role][].

## Expectation

Each test target's `autocomplete` [attribute value][] is a [space separated][] list of one or more tokens that follow the [HTML specification for Autofill detail tokens][], which requires that the token list match the following in the correct order:

1. An optional token that starts with "section-"; then
2. An optional token of either "shipping" or "billing"; then
3. An optional token of either "home", "work", "mobile", "fax" or "pager", only if the next token is "email", "impp", "tel" or "tel-\*"; then
4. A required token from the [correct autocomplete field][]; then
5. An optional "webauthn" token.

## Assumptions

The `autocomplete` attribute is used on form fields that correspond to [Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG22/#input-purposes) and collect information about the user.

If the `autocomplete` attribute is used to describe "custom" taxonomy, for example using the custom autocomplete value "banner" (`<input type="text" autocomplete="banner" />`), success Criterion [1.3.5 Identify Input Purpose][sc135] may be satisfied even if this rule failed.

The `aria-disabled` state is used on `input` elements which are not part of [sequential focus navigation][] and are not otherwise [operable](https://www.w3.org/TR/wai-aria-1.2/#dfn-operable). If this is not the case, this rule may be inapplicable on elements that are still operable and require a valid `autocomplete` attribute to satisfy success criterion [1.3.5 Identify Input Purpose][sc135].

The purpose of a control is programmatically identifiable even when its `autocomplete` [attribute value][] is not an [appropriate field name for the form control][].

## Accessibility Support

- While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in assistive technologies is fairly limited.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Some user agents treat the value of the `aria-disabled` attribute as case-sensitive.
- In some user agents, querying the value of the `autocomplete` property returns an empty string ("") even when the attribute was set according to the rule's expectations. It affects assistive technologies which rely on this property to personalize input fields collecting information about the user.
- Authors may assign inappropriate `autocomplete` attribute values. Moreover, HTML specifications restrict certain `autocomplete` attribute values to specific form controls. Mismatches between `autocomplete` attribute values and form control types may or may not lead to a failure of [Success Criterion 1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose). However, this rule focuses exclusively on validating valid `autocomplete` attribute values, disregarding their contextual appropriateness.

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to support personalization. Many users may find it easier to fill out forms if those can be styled or laid out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does.

Many browsers provide auto-filling suggestions even when the control's `type` [attribute value][] is not [appropriate][appropriate field name for the form control] for its `autocomplete` [attribute value][]. The same happens when the `autocomplete` property is queried. However, the `autocomplete` property is not programmatically identifiable if the requirements for the optional tokens are not met.

The auto-completing feature of the `autocomplete` attribute benefits many users, but it is not required to satisfy success Criterion [1.3.5 Identify Input Purpose][sc135]. Setting `autocomplete="off"` on the element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) prevents the user agent from completing it, but it does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

The [fixed value](#73f2c2:fixed-value) condition in the Applicability is excluding `input` elements who do not consider the `autocomplete` attribute, based on their `type` [attribute value][]; `input` elements with a `type` [attribute value][] of `hidden` are excluded by the [hidden](#73f2c2:hidden) condition.

On an `input` element with a `type` [attribute value][] of `hidden`, the autocomplete attribute wears the [autofill anchor mantle](https://html.spec.whatwg.org/#autofill-anchor-mantle), describing the meaning of the given value. In all other cases, it wears the [autofill expectation mantle](https://html.spec.whatwg.org/#autofill-expectation-mantle).

### Bibliography

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [Definition: programmatically determined (programmatically determinable)](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable)
- [Autofill](https://html.spec.whatwg.org/#autofill)

## Test Cases

### Passed

#### Passed Example 1

This `autocomplete` [attribute value][] only has the required token "username".

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

The `autocomplete` [attribute value][] of this `select` element has the required token "bday-month". The element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) has `autocomplete="off"`, which prevents the user agent from completing it. It does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

```html
<form autocomplete="off">
	<label
		>Birthday month
		<select autocomplete="bday-month">
			<option>January</option>
			<option>...</option>
		</select>
	</label>
</form>
```

#### Passed Example 3

This `autocomplete` [attribute value][] only has the required token "street-address". Mixing upper and lower case letters is allowed for `autocomplete` attributes.

```html
<label> Street address<textarea autocomplete="Street-Address"></textarea></label>
```

#### Passed Example 4

This `autocomplete` [attribute value][] list includes a `work` token, allowed because it is used before `email`.

```html
<label>Work email<input autocomplete="work email"/></label>
```

#### Passed Example 5

This `autocomplete` [attribute value][] list includes a `section-` token, which can preface any [correct autocomplete field][].

```html
<label>Partner's email address<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

This `autocomplete` [attribute value][] list includes `section-` and `billing` tokens. These tokens can preface any [correct autocomplete field][].

```html
<label>Billing address- first line<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

This `autocomplete` [attribute value][] list includes all allowed types of tokens in the correct order.

```html
<label>Office email<input type="text" autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

This `autocomplete` [attribute value][] has the required token "current-password", followed by the optional "webauthn" token.

```html
<label>
	Password
	<input type="password" autocomplete="current-password webauthn" />
</label>
```

### Failed

#### Failed Example 1

This `autocomplete` [attribute value][] has an unknown term that is not a [correct autocomplete field][].

```html
<label>Username<input autocomplete="badname"/></label>
```

#### Failed Example 2

This `autocomplete` [attribute value][] has the `work` token which is a [correct autocomplete field][]. However, `work` can not be used with `photo`.

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

The `autocomplete` attribute value is on an `input` element that does not have a semantic role that is a widget role, but still participates in [sequential focus navigation][] because of the `tabindex` attribute.

```html
<label>Username<input role="banner" tabindex="0" autocomplete="banner"/></label>
```

#### Failed Example 6

This `autocomplete` attribute does not contain any required token.

```html
<label>Address<input autocomplete="shipping"/></label>
```

#### Failed Example 7

This `autocomplete` attribute contains two of the required tokens, but only one is allowed.

```html
<label>Address<input autocomplete="address-line1 address-line2"/></label>
```

#### Failed Example 8

This `autocomplete` attribute contains a `work` modifier but no required token afterwards.

```html
<label>Email<input autocomplete="work"/></label>
```

#### Failed Example 9

This `autocomplete` attribute contains an extra token after the allowed ones.

```html
<label>Password<input type="password" autocomplete="current-password webauthn invalid"/></label>
```

#### Failed Example 10

This `autocomplete` attribute contains an extra token after the allowed ones.

```html
<label>Email<input autocomplete="email invalid"/></label>
```

### Inapplicable

#### Inapplicable Example 1

This `autocomplete` [attribute value][] is empty ("").

```html
<label>Username<input autocomplete=""/></label>
```

#### Inapplicable Example 2

This `autocomplete` [attribute value][] contains only [ASCII whitespace][].

```html
<label>Username<input autocomplete=" "/></label>
```

#### Inapplicable Example 3

This `autocomplete` [attribute value][] is on an element that is not [visible][] through `display:none`.

```html
<label>Username<input autocomplete="badname" style="display:none"/></label>
```

#### Inapplicable Example 4

This `autocomplete` attribute is on an `input` element that has the `disabled` attribute.

```html
<label>Username<input autocomplete="badname" disabled/></label>
```

#### Inapplicable Example 5

This `autocomplete` attribute is on an `input` element that has the `aria-disabled` [attribute value][] of `true`.

```html
<label>Username<input autocomplete="badname" aria-disabled="true"/></label>
```

#### Inapplicable Example 6

This `autocomplete` attribute is ignored because it is on an element with a [semantic role][] of `none`. The `disabled` attribute is required to ensure [presentational roles conflict resolution][] does not cause the `none` role to be ignored.

```html
<label>Username<input type="text" role="none" disabled autocomplete="badname"/></label>
```

#### Inapplicable Example 7

This `autocomplete` attribute is inapplicable because it has the `off` value.

```html
<label>Friend's first name<input type="text" autocomplete="off"/></label>
```

#### Inapplicable Example 8

This `input` element has a [fixed value](#73f2c2:fixed-value) due to its `type` [attribute value][] of `submit`. `autocomplete` does not apply to Submit buttons.

```html
<input type="submit" autocomplete="email" />
```

#### Inapplicable Example 9

This `input` element is [hidden](#73f2c2:hidden) because of its `type` [attribute value][] of `hidden` (following standard [User Agent style sheet recommendations](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements). Knowing the transaction amount may still be used in other fields, e.g. to suggest a card with sufficient balance; this is not tested by this rule.

```html
<input type="hidden" autocomplete="transaction-amount" value="100.00" />
```

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/08/12'
[ascii case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'definition of ASCII case-insensitive'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[appropriate field name for the form control]: #appropriate-field-for-the-form-control 'Definition of Appropriate field for the form control'
[correct autocomplete field]: #correct-autocomplete-field 'Definition of Correct autocomplete field'
[disabled element]: #disabled-element 'Definition of Disabled Element'
[html specification for autofill detail tokens]: https://html.spec.whatwg.org/#autofill-detail-tokens 'HTML Autofill Detail, 2020/08/12'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc135]: https://www.w3.org/TR/WCAG22/#identify-input-purpose 'WCAG 2.2 success criterion 1.3.5 Identify Input Purpose'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/08/12'
[space separated]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'HTML Set of space separated tokens 2020/08/12'
[visible]: #visible 'Definition of Visible'
[widget role]: https://www.w3.org/TR/wai-aria-1.2/#widget_roles 'WAI-ARIA widget roles'
[html]: #namespaced-element
