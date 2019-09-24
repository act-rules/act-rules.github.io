---
id: 1cd4da
name: Form field visual label is descriptive
rule_type: atomic
description: |
  This rule checks that visual labels describe the purpose of form field elements.
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
- is the [labeled control](https://html.spec.whatwg.org/multipage/forms.html#labeled-control) of a [visible][] `label` element.

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an [accessible name][].

**Note**: "Label" in WCAG is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within web content. That is, "label" in WCAG is not restricted to the `label` element of HTML or SVG.

## Expectation

The [visible][] `label` element describes the purpose of the associated form field element. The [visual context][] of the element can be used to differentiate the purpose from other form fields on the same page.

**Note:** In this case, [visual context][] can be created by headings, field sets and legends, text that is near the control, etc.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

Having a differentiating [context][] that is not [programmatically determinable](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria. For example, using text that has not been marked up as headings in order to split a form into different sections is a violation of [success criterion 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships). This rule assumes, however, that this is allowed under [success criterion 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)

## Test Cases

### Passed

#### Passed Example 1

The [visible][] `label` element describes the purpose of the associated element.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" />
```

#### Passed Example 2

The implicit label, that is coded with the `label` element, describes the purpose of the associated element.

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed Example 3

The headings provide a [visual context][] that differentiates the purpose of the otherwise identically named form fields, [visual context][] does not need to be [included in the accessibility tree][].

```html
<h2 aria-hidden="true">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2 aria-hidden="true">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

#### Passed Example 4

The [visible][] `label` element describes the form field.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" aria-label="Fill in:" />
```

#### Passed Example 5

The [visible][] `label` element describes the form field.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" aria-label="" />
```

### Failed

#### Failed Example 1

The label that is coded with the `label` element does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label> <input id="fname" type="text" name="fname" />
```

#### Failed Example 2

The implicit label that is coded with the `label` element does not describe the purpose of the associated element.

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed Example 3

The `label` in itself does not describe the purpose of the form field. While the [context][] can be relied upon to differentiate form fields from each other, it cannot be relied upon for describing the entire purpose of the form field.

```html
<h2>Name</h2>
<label>Fill in: <input id="name" type="text" name="name"/></label>
```

#### Failed Example 4

The [visible][] `label` is not descriptive.

```html
<label for="fname">Fill in:</label> <input id="fname" type="text" name="fname" aria-label="First name:" />
```

#### Failed Example 5

Since the headings are not [visible][], they do not provide any [visual context][] to help disambiguate between identical `label` elements.

```html
<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

### Inapplicable

#### Inapplicable Example 1

The `label` element is not [visible][] to users.

```html
<label for="fname" style="display:none;">First name:</label> <input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 2

The `label` element is associated with an HTML element that does not have a form field [semantic role][].

```html
<label for="fname">First name:</label>
<p id="fname"></p>
```

#### Inapplicable Example 3

There is no `label` element.

```html
<input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 4

There is no `label` element, even though a `p` element in close proximity to the form field appears as a visible label.

```html
<p>First name:</p>
<input id="fname" type="text" name="fname" />
```

#### Inapplicable Example 5

There is no `label` element, even though the `p` element both appears as a [visible][] label and provides an [accessible name](#accessible-name).

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

[context]: #context 'Definition of context'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
