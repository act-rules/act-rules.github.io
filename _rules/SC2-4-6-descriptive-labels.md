---
name: Label is descriptive
test_type: atomic

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

This rule applies to any HTML `label` element or other element referenced by `aria-labelledby` that is

- [visible](#visible) and included in the accessibility tree.
- associated with an HTML element that has one of the listed form field [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`.

**Note**: The list of form field roles is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:
- have a [semantic roles](#semantic-role) that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.
- The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

**Note**: This rule is a partial check for WCAG 2.1 success criterion 2.4.6, which applies to all labels. "Label" is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within Web content.

### Expectation

Each target element describes the purpose of the associated form field element.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

_There are currently no assumptions._

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

Label that that is coded with the `p` element and associated by the aria-labelledby attribute. The label describes the purpose of the associated element.

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

### Failed

#### Failed example 1

Label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label>
<input id="fname" type="text" name="fname"/>
```

#### Failed example 2

Label that that is coded with the `p` element and associated by the aria-labelledby attribute. The label does not describe the purpose of the associated element.

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

### Inapplicable

#### Inapplicable example 1

Hidden `label` element.

```html
<label for="fname" style:"display:none;">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable example 2

Hidden `p` element that associated by the aria-labelledby attribute.

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

No `label` element.

```html
<input id="fname" type="text" name="fname"/>
```
