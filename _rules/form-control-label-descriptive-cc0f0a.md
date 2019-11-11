---
id: cc0f0a
name: Form control label is descriptive
rule_type: atomic
description: |
  This rule checks that labels describe the purpose of form field elements.
accessibility_requirements:
  wcag20:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS Styling
acknowledgements:
  authors:
    - Dagfinn Rømen
    - Geir Sindre Fossøy
    - Wilco Fiers
---

## Applicability

This rule applies to any HTML `label` element or other element referenced by `aria-labelledby` that, is [visible][] and is programmatically associated with an HTML element that has one of the following [semantic roles][]:

- `checkbox`
- `combobox` (`select` elements)
- `listbox`
- `menuitemcheckbox`
- `menuitemradio`
- `radio`
- `searchbox`
- `slider`
- `spinbutton`
- `switch`
- `textbox`

**Note**: The list of form field roles is derived by taking all the roles from [WAI-ARIA Specifications](#wai-aria-specifications) that:

- have a [semantic role][] that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.
- The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an [accessible name](#accessible-name).

**Note**: This rule is a partial check for WCAG 2.1 success criterion 2.4.6, which applies to all labels. "Label" is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within Web content.

## Expectation

Each target element describes the purpose of the associated form field element.

**Note**: Labels do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

This rule assumes that the [label](https://www.w3.org/TR/WCAG21/#dfn-labels) is intended for sighted users, and that hiding a visible label from assistive technologies, is a failure of [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value), but not of [Success Criterion 2.4.6 Headings and Labels](https://www.w3.org/TR/WCAG21/#headings-and-labels).

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
<label for="fname">First name:</label> <input id="fname" type="text" name="fname" />
```

#### Passed Example 2

Label that is coded with the `p` element and associated by the aria-labelledby attribute. The label describes the purpose of the associated element.

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Passed Example 3

Implicit label that is coded with the `label` element and describes the purpose of the associated element.

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed Example 4

Label is [visible][], but not included in accessibility tree

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

### Failed

#### Failed Example 1

Label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label for="fname">Menu</label> <input id="fname" type="text" name="fname" />
```

#### Failed Example 2

Label that is coded with the `p` element and associated by the aria-labelledby attribute. The label does not describe the purpose of the associated element.

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

#### Failed Example 3

Implicit label that is coded with the `label` element and does not describe the purpose of the associated element.

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed Example 4

Label is [visible][], but not included in accessibility tree, and does not describe the purpose of the associated element.

```html
<p id="label_fname" aria-hidden="true">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname" />
```

### Inapplicable

#### Inapplicable Example 1

`Label` that is not [visible][] to users.

```html
<div style="display:none">
	<label for="bad_label">Menu:</label>
	<input id="fname" type="text" name="bad_label" />
</div>
```

#### Inapplicable Example 2

Programmatically associated `p` element that is not [visible][].

```html
<div style="display:none">
	<p id="bad_label">menu</p>
	<input aria-labelledby="bad_label" type="text" name="fname" />
</div>
```

#### Inapplicable Example 3

The `label` element is associated with an HTML element that does not have a form field semantic role.

```html
<label for="fname">First name</label>
<p id="fname">bob</p>
```

#### Inapplicable Example 4

The element with `aria-labelledby` is not a form field.

```html
<i id="smile">Smile</i> <button aria-labelledby="smile">:-)</button>
```

[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
