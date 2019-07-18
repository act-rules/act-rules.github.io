---
id: e086e5
name: Form field has accessible name
rule_type: atomic
description: |
  Each form field element has an accessible name
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
authors:
  - Anne Thyme Nørregaard
  - Bryn Anderson
---

## Applicability

This rule applies to any element that is [included in the accessibility tree](#included-in-the-accessibility-tree), and that has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider, spinbutton`, `switch`, `textbox`.

**Note**: The list of roles is derived by taking all the [ARIA](https://www.w3.org/TR/wai-aria-1.1/) 1.1 roles that:

- have a [semantic roles](#semantic-role) that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.
- The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an [accessible name](#accessible-name).

## Expectation

Each target element has an [accessible name](#accessible-name) that is not only [whitespace](#whitespace).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Certain assistive technologies can be set up to ignore the title attribute, which means that to some users the title attribute will not act as an [accessible name](#accessible-name).

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html
- https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html

**Note**: This rule does not fail 3.3.2 as there are sufficient techniques within 3.3.2 that don't need the elements to have an [accessible name](#accessible-name). For example "G131: Providing descriptive labels" **AND** "G162: Positioning labels to maximize predictability of relationships" would be sufficient.

## Test Cases

### Passed

#### Passed Example 1

Implicit role with implicit label.

```html
<label>
	first name
	<input />
</label>
```

#### Passed Example 2

Implicit role with aria-label

```html
<input aria-label="last name" disabled />
```

#### Passed Example 3

Implicit role with explicit label

```html
<label for="country">Country</label>
<select id="country">
	<option></option>
</select>
```

#### Passed Example 4

Implicit role with `aria-labelledby`.

```html
<div id="country">Country</div>
<textarea aria-labelledby="country"></textarea>
```

#### Passed Example 5

Explicit role.

```html
<div aria-label="country" role="combobox" aria-disabled="true">England</div>
```

#### Passed example 6

The [accessible name](#accessible-name) is not only whitespace.

```html
<label>
	:-)
	<input />
</label>
```

### Failed

#### Failed Example 1

No [accessible name](#accessible-name).

```html
<input />
```

#### Failed Example 2

Non-focusable element still needs an [accessible name](#accessible-name).

```html
<input tabindex="-1" />
```

#### Failed Example 3

`aria-label` with empty text string

```html
<div aria-label=" " role="combobox">England</div>
```

#### Failed Example 4

The label does not exist.

```html
<div aria-labelledby="non-existing" role="combobox">England</div>
```

#### Failed Example 5

The implicit label is not supported on `div` elements.

```html
<label>
	first name
	<div role="textbox"></div>
</label>
```

#### Failed Example 6

The explicit label is not supported on `div` elements.

```html
<label for="lastname">first name</label>
<div role="textbox" id="lastname"></div>
```

#### Failed example 7

The [accessible name](#accessible-name) is only whitespace.

```html
<label> <input /></label>
```

### Inapplicable

#### Inapplicable Example 1

Hidden to everyone.

```html
<input aria-label="firstname" style="display:none;" />
```

#### Inapplicable Example 2

Hidden to assistive technologies.

```html
<input aria-hidden="true" aria-label="firstname" />
```

#### Inapplicable Example 3

Role has explicitely been set to something that isn't a form field.

```html
<input role="presentation" />
```

#### Inapplicable Example 4

Option inherits from input, but has a required context role of listbox which inherits from select. We should therefore not consider option as applicable.

```html
<select role="none">
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="opel">Opel</option>
</select>
```
