---
id: f0c5c5
name: Form field label is descriptive
rule_type: atomic
description: |
  This rule checks that labels describe the purpose of form field elements.
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
- Dagfinn Rømen
- Geir Sindre Fossøy
- Jean-Yves Moyen
---

## Applicability

This rule applies to any HTML or SVG element that:
- has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`; and
- is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree); and 
- has an [accessible name](#accessible-name) or is the [labeled control](https://www.w3.org/TR/html/sec-forms.html#labeled-control) of a [visible](#visible) `label` element.

**Note**: The list of applicable [semantic roles](#semantic-roles) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:
- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

**Note**: "Label" in WCAG is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within web content. That is, "label" in WCAG is not restricted to the `label` element of HTML or SVG.

## Expectation 1

The [visible](#visible) `label` element, if there is any, describes the purpose of the associated form field element. The [visible](#visible) [context](#context) of the element can be used to differentiate the purpose from other form fields on the same page.

**Note:** In this case, [context](#context) can be created by headings, fieldsets and legends, text that is near the control, etc. Only [visible](#visible) elements should be considered as context for Expectation 1.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Expectation 2

The [accessible name](#accessible-name), if there is any, describes the purpose of the associated form field element. The [visible](#visible) [context](#context) of the element, or the [context](#context) [included in the accessibility tree](#included-in-the-accessibility-tree) can be used to differentiate the purpose from other form fields on the same page.

**Note:** In this case, [context](#context) can be created by headings, fieldsets and legends, text that is near the control, etc. For Expectation 2, elements that are [included in the accessibility tree](#included-in-the-accessibility-tree) should be considered context as well, e.g. elements connected to the form field through `aria-describedby`, or using WAI-ARIA `group` role with an [accessible name](#accessible-name).

**Note:** If a [context](#context) that is necessary for differentiating form fields from each other is [visible](#visible), but not [included in the accessibility tree](#included-in-the-accessibility-tree), this might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria (e.g. [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)), but this is not considered a failing condition for this rule. For this rule, it is enough that the [context](#context) is there in some form, either [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

This rule assumes that while having a differentiating [context](#context) that is not [programatically determinable](#https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria (e.g. [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)), if text that has not been marked up as headings is used to split a form into different sections), this is allowed under [success criterion 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html) 
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

Label that is coded with the `label` element and describes the purpose of the associated element.

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Passed Example 2

Label that is coded with the `p` element and associated by the aria-labelledby attribute. The label describes the purpose of the associated element.

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 3

Implicit label that is coded with the `label` element and describes the purpose of the associated element.

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed Example 4

Label is visible, but not included in accessibility tree.

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 5

Label is included in accessibility tree, but not visible.

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 6

Programatically determinable headings provide a context that differentiates the purpose of the otherwise identically named form fields.

```html
<h2>Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2>Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
````

#### Passed Example 7

Accessible name created through `aria-label` describes the purpose of the associated element.

```html
<input aria-label="First name" id="fname" type="text" name="fname"/>
```

#### Passed Example 8

Otherwise identically named form fields can be differentiated both visually and in a way that is included in the accessibility tree, though different methods are used for each purpose.

```html
<h2 aria-hidden="true">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name" aria-label="(Shipping) Name" /></label>
<label>Street<input id="shipping-street" type="text" name="street" aria-label="(Shipping) Street" /></label>

<h2 aria-hidden="true">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name" aria-label="(Billing) Name"/></label>
<label>Street<input id="billing-street" type="text" name="street" aria-label="(Billing) Name" /></label>
```

#### Passed Example 9

`p` element that is neither visible nor included in the accessibility tree, but still provides an accessible name to the input field through `aria-labelledby`.

```html
<p id="label_fname" style="display:none;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

### Failed

#### Failed Example 1

Label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label>
<input id="fname" type="text" name="fname"/>
```

#### Failed Example 2

Label that is coded with the `p` element and associated by the `aria-labelledby` attribute. The label does not describe the purpose of the associated element.

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 3

Implicit label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed Example 4

Label is visible, but not included in accessibility tree, and does not describe the purpose of the associated element.

```html
<p id="label_fname" aria-hidden="true">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 5

Label is included in accessibility tree, but not visible, and does not describe the purpose of the associated element.

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 6

Accessible name created through `aria-label` does not describe the purpose of the associated element.

```html
<input aria-label="Menu" id="fname" type="text" name="fname"/>
```

#### Failed Example 7

The `label` in itself does not describe the purpose of the form field. While the context can be relied upon to differentiate form fields from each other, it cannot be relied upon for describing the entire purpose of the form field.

```html
<h2>Name</h2>
<label>Fill in: <input id="name" type="text" name="name"/></label>
```

#### Failed Example 8

While Expectation 1 is met, Expectation 2 fails because the descriptive label coded with the `label` element through the accessible name calculation is overwritten by an `aria-label` that is not descriptive.

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname" aria-label="Fill in:"/>
```

#### Failed Example 9

The non-descriptive label coded with the `label` element is through the accessible name calculation overwritten by an `aria-label` that is descriptive. However, the visible label is still not descriptive.

```html
<label for="fname">Fill in:</label>
<input id="fname" type="text" name="fname" aria-label="First name:"/>
```

### Inapplicable

#### Inapplicable Example 1

`label` that is neither visible to users, nor included in the accessibility tree.

```html
<label for="fname" style="display:none;">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable Example 2

The `label` element is associated with an HTML element that does not have a form field semantic role.

```html
<label for="fname">First name:</label>
<p id="fname"/>
```

#### Inapplicable Example 3

No `label` element or accessible name.

```html
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable Example 4

No `label` element or accessible name, even though a `p`element in close proximity to the form field appears as a visible label. 

```html
<p>First name:</p> <input id="fname" type="text" name="fname"/>
```
