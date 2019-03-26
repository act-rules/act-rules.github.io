---
name: Form field label is descriptive
rule_type: atomic

description: |
  This rule checks that labels describe the purpose of form field elements.

success_criterion:
- 2.4.6 # Headings and labels

test_aspects:
- DOM Tree
- CSS Styling

authors:
- Dagfinn Rømen
- Geir Sindre Fossøy
---

## Test Procedure

### Applicability

This rule applies to any element that:
- has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`, and
- is [visible](#visible) or [included in the accessibility tree](#included-in-the-accessibility-tree), and 
- has an [accessible name](#accessible-name) or is the [labeled control](https://www.w3.org/TR/html/sec-forms.html#labeled-control) of a `label` element that is either [visible](#visible) or [included in the accessibility tree](#included in the accessibility tree).

**Note**: The list of applicable [semantic roles](#semantic-roles) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:
- inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:**
- The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

**Note**: This rule is a partial check for WCAG 2.1 success criterion 2.4.6, which applies to all labels. "Label" in WCAG is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within Web content.

### Expectation 1

The `label` element, if there is any, together with its context, describe the purpose of the associated form field element.

**Note:** Context in this case could be e.g. headings, fieldsets and legends, text that is located close by etc.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

### Expectation 2

The [accessible name](#accessible-name), if there is any, together with it's context, describe the purpose of the associated form field element.

**Note:** Context in this case could be e.g. headings, fieldsets and legends, text that is located close by etc.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

This rule assumes that while having an important context that is not [programatically determinable](#https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria (e.g. 1.3.1 Info and Relationships, if text that has not been marked up as headings is used to split a form into different sections), this is allowed under success criterion 2.4.6 Headings and Labels: Headings and labels describe topic or purpose.

## Accessibility support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html) 
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed example 1

Label that is coded with the `label` element and describes the purpose of the associated element.

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Passed example 2

Label that is coded with the `p` element and associated by the aria-labelledby attribute. The label describes the purpose of the associated element.

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed example 3

Implicit label that is coded with the `label` element and describes the purpose of the associated element.

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed example 4

Label is visible, but not included in accessibility tree.

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed example 5

Label is included in accessibility tree, but not visible.

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed example 6

Programatically determinable headings provide a context that together with the labels describe the purpose of the form fields.

```html
<h2>Shipping adress</h2>
<label>Name<input id="name" type="text" name="name"/></label>
<label>Street<input id="street" type="text" name="street"/></label>

<h2>Billing adress</h2>
<label>Name<input id="name" type="text" name="name"/></label>
<label>Street<input id="street" type="text" name="street"/></label>
````

#### Passed example 6

Surrounding text provides a context that together with the labels describe the purpose of the form fields.

```html
<div>Shipping adress:</div>
<label>Name<input id="name" type="text" name="name"/></label>
<label>Street<input id="street" type="text" name="street"/></label>

<div>Billing adress</div>
<label>Name<input id="name" type="text" name="name"/></label>
<label>Street<input id="street" type="text" name="street"/></label>
```

#### Passed example 7

Accessible name created through "aria-label" describes the purpose of the associated element.

```html
<input aria-label="First name" id="fname" type="text" name="fname"/>
```

### Failed

#### Failed example 1

Label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label>
<input id="fname" type="text" name="fname"/>
```

#### Failed example 2

Label that is coded with the `p` element and associated by the aria-labelledby attribute. The label does not describe the purpose of the associated element.

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed example 3

Implicit label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed example 4

Label is visible, but not included in accessibility tree, and does not describe the purpose of the associated element.

```html
<p id="label_fname" aria-hidden="true">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed example 5

Label is included in accessibility tree, but not visible, and does not describe the purpose of the associated element.

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed example 6

Accessible name created through "aria-label" does not describes the purpose of the associated element.

```html
<input aria-label="Menu" id="fname" type="text" name="fname"/>
```

### Inapplicable

#### Inapplicable example 1

`Label` that is neither visible to users, nor included in the accessibility tree.

```html
<label for="fname" style:"display:none;">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable example 2

Programatically associated `p` element that is neither visible nor included in the accessibility tree.

```html
<p id="label_fname" style:"display:none;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Inapplicable example 3

The `label` element is associated with an HTML element that does not have a form field semantic role.

```html
<label for="fname" style:"display:none;">First name:</label>
<p id="fname"/>
```

#### Inapplicable example 4

No `label` element or accessible name.

```html
<input id="fname" type="text" name="fname"/>
```
