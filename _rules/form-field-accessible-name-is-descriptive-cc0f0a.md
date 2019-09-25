---
id: cc0f0a
name: Form accessible name is descriptive
rule_type: atomic
description: |
  This rule checks that accessible names describe the purpose of form field elements.
accessibility_requirements:
  wcag21:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Anne Thyme Nørregaard
  - Jean-Yves Moyen
previous_authors:
  - Dagfinn Rømen
  - Geir Sindre Fossøy
---

## Applicability

This rule applies to any HTML or SVG element that:

- has one of the following [semantic roles][semantic role]: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`; and
- is [visible][] or [included in the accessibility tree][]; and
- has an [accessible name][].

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an [accessible name][].

## Expectation

Each test target has an [accessible name][] that describes its purpose. Both the [visual context][] of the test target, and its [programmatically determined context][] [included in the accessibility tree][] can be used to differentiate the purpose from other form fields on the same page.

**Note:** In this case, [visual context][] can be created by headings, fieldsets and legends, text that is near the control, etc.

## Assumptions

Having a differentiating [context][] that is not [programmatically determinable](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria. For example, using text that has not been marked up as headings in order to split a form into different sections is a violation of [success criterion 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships). This rule assumes, however, that this is allowed under [success criterion 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

The form field has a descriptive [accessible name][] given by the `label` element.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" />
```

#### Passed Example 2

The form field has a descriptive [accessible name][] given by the `aria-labelledby` attribute.

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Passed Example 3

The form field has a descriptive [accessible name][] given by the implicit `label` element.

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed Example 4

The form field has a descriptive [accessible name][] given by the `aria-labelledby` attribute, even if the `p` element referenced is not [included in the accessibility tree][].

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Passed Example 5

The form field has a descriptive [accessible name][] given by the `aria-labelledby` attribute, even if the `p` element referenced is not [visible][].

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Passed Example 6

The headings provide both a [programmatically determined context][] and a [visual context][] that differentiates the purpose of the otherwise identically named form fields.

```html
<h2>Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2>Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

#### Passed Example 7

The [accessible name][] created through `aria-label` describes the purpose of the associated element.

```html
<input aria-label="First name" id="fname" type="text" name="fname" />
```

#### Passed Example 8

Even though the [accessible names][accessible name] (given by the implicit `label` elements) of several fields are the same, the headings provide a [visual context][] to differentiate them. Since the headings are not [included in the accessibility tree][] (because of the `aria-hidden` attribute), they do not provide any [programmatically determined context][]. [Visual context][visual context] alone is sufficient to pass this rule.

```html
<h2 aria-hidden="true">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2 aria-hidden="true">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

#### Passed Example 9

Even though the [accessible names][accessible name] (given by the `aria-label` attributes) of several fields are the same, the headings provide a [programmatically determined context][] to differentiate them. Since the headings are not [visible][] (because of their position), they do not provide any [visual context][]. [Programmatically determined context][programmatically determined context] alone is sufficient to pass this rule.

```html
<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
<input aria-label="Name" id="shipping-name" type="text" name="name" />
<input aria-label="Street" id="shipping-street" type="text" name="street" />

<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
<input aria-label="Name" id="billing-name" type="text" name="name" />
<input aria-label="Street" id="billing-street" type="text" name="street" />
```

#### Passed Example 10

The `p` element is neither [visible][] nor [included in the accessibility tree][], but still provides an [accessible name][] to the input field through the `aria-labelledby` attribute.

```html
<p id="label_fname" style="display:none;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

### Failed

#### Failed Example 1

The label that is coded with the `label` element provides an [accessible name][] which does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label> <input id="fname" type="text" name="fname" />
```

#### Failed Example 2

The label that is coded with the `p` element and associated by the `aria-labelledby` attribute provides an [accessible name][] which does not describe the purpose of the associated element.

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Failed Example 3

The implicit label that is coded with the `label` element provides an [accessible name][] which does not describe the purpose of the associated element.

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed Example 4

The label that is coded with the `p` element and associated by the `aria-labelledby` attribute provides an [accessible name][] (even though it is not [included in the accessibility tree][]) which does not describe the purpose of the associated element.

```html
<p id="label_fname" aria-hidden="true">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Failed Example 5

The [accessible name][] created through `aria-label` does not describe the purpose of the associated element.

```html
<input aria-label="Menu" id="fname" type="text" name="fname" />
```

#### Failed Example 6

The `label` provides an [accessible name][] which in itself does not describe the purpose of the form field. While the [context][] can be relied upon to differentiate form fields from each other, it cannot be relied upon for describing the entire purpose of the form field.

```html
<h2>Name</h2>
<label>Fill in: <input id="name" type="text" name="name"/></label>
```

#### Failed Example 7

The [accessible name][] is provided by the `aria-label` attribute (which takes precedence over the `label` element). It does not describe the form field.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" aria-label="Fill in:" />
```

### Inapplicable

#### Inapplicable Example 1

The `label` is [hidden](https://www.w3.org/TR/accname-1.1/#dfn-hidden) to all users and since it is not referenced by an `aria-labelledby` or `aria-describedby` attribute, it does not provide an [accessible name][]. Thus, the form field has no [accessible name][] and the rule is inapplicable.

```html
<label for="fname" style="display:none;">First name:</label> <input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 2

There is no element with any of the required [semantic roles][semantic role].

```html
<label for="fname">First name:</label>
<p id="fname"></p>
```

#### Inapplicable Example 3

The form field has no [accessible name][].

```html
<input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 4

The form field has no [accessible name][], even though a `p` element in close proximity to the form field appears as a visible label.

```html
<p>First name:</p>
<input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 5

The form field has no [accessible name][] since the empty `aria-label` attribute overrides it.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" aria-label="" />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[context]: #context 'Definition of context'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[programmatically determined context]: #programmatically-determined-context 'Definition of programmatically determined context'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
