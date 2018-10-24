---
name: Label is descriptive
test_type: atomic

description: |
  This rule checks that labels describe the purpose of the interface components.

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

This rule applies to any `label` element or HTML element referenced by aria-labelledby that is 
- [visible](#visible) and included in the accessibility tree.
- associated with an HTML element that has one of the form field roles in the list further down.

The form field [semantic roles](#semantic-role) to be considered for this rule are: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider, spinbutton`, `switch` and `textbox`.

**Note**: The list of form field roles is derived by taking all the [ARIA](https://www.w3.org/TR/wai-aria-1.1/) 1.1 roles that:
- have a [semantic roles](#semantic-role) that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.
- The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

**Note**: This rule is a partial check for WCAG 2.0 success criterion 2.4.6, which applies to all labels. "Label" is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within Web content.

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

Label that is coded with the `<label>` element and describes the purpose of the associated element.

```html
<label for ="fname">First name:</label>
<input id="fname" type="text" name="fname"/>
```

### Failed

#### Failed example 1

Description...

```html
<!-- code -->
```

### Inapplicable

#### Inapplicable example 1

Description...

```html
<!-- code -->
```
