---
id: 87e6e4
name: Form field label is descriptive
rule_type: composite
description: |
  This rule checks that labels describe the purpose of form field elements.
accessibility_requirements: 
  wcag21:2.4.6: # Headings and labels (AA)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_rules:
- 1cd4da
- e0ca31
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

**Note**: The list of applicable [semantic roles](#semantic-role) is derived by taking all the [ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/) roles that:
- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

**Note**: "Label" in WCAG is used in its general sense and includes text or other components with a text alternative that is presented to a user to identify a component within web content. That is, "label" in WCAG is not restricted to the `label` element of HTML or SVG.

## Expectation 

For each test target, the [outcome](#outcome) of none of the following rules is "failed":
- [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da)
- [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31)

## Assumptions

This rule assumes that while having a differentiating [context](#context) that is not [programatically determinable](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable) might be a violation under other [WCAG](https://www.w3.org/TR/WCAG21/) success criteria (e.g. [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)), if text that has not been marked up as headings is used to split a form into different sections), this is allowed under [success criterion 2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels).

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

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Passed Example 2

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<p id="label_fname">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 3

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<label>First name:<input id="fname" type="text" name="fname"/></label>
```

#### Passed Example 4

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<p id="label_fname" aria-hidden="true">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 5

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Passed Example 6

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed" (for all test targets), the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed" (for all test targets).

```html
<h2>Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2>Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

#### Passed Example 7

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<input aria-label="First name" id="fname" type="text" name="fname"/>
```

#### Inapplicable Example 5

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "inapplicable".

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname" aria-label=""/>
```

#### Passed Example 8

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed" (for all test targets), the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed" (for all test targets).

```html
<h2 aria-hidden="true">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name" aria-label="(Shipping) Name" /></label>
<label>Street<input id="shipping-street" type="text" name="street" aria-label="(Shipping) Street" /></label>

<h2 aria-hidden="true">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name" aria-label="(Billing) Name"/></label>
<label>Street<input id="billing-street" type="text" name="street" aria-label="(Billing) Name" /></label>
```

#### Passed Example 9

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<p id="label_fname" style="display:none;">First name:</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

### Failed

#### Failed Example 1

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "failed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<label for="fname">Menu</label>
<input id="fname" type="text" name="fname"/>
```

#### Failed Example 2

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<p id="label_fname">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 3

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "failed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<label>Menu<input id="fname" type="text" name="fname"/></label>
```

#### Failed Example 4

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<p id="label_fname" aria-hidden="true">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 5

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<p id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">Menu</p>
<input aria-labelledby="label_fname" type="text" name="fname"/>
```

#### Failed Example 6

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<input aria-label="Menu" id="fname" type="text" name="fname"/>
```

#### Failed Example 7

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "failed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<h2>Name</h2>
<label>Fill in: <input id="name" type="text" name="name"/></label>
```

#### Failed Example 8

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "passed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "failed".

```html
<label for="fname">First name:</label>
<input id="fname" type="text" name="fname" aria-label="Fill in:"/>
```

#### Failed Example 9

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "failed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<label for="fname">Fill in:</label>
<input id="fname" type="text" name="fname" aria-label="First name:"/>
```

#### Failed Example 10

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "failed", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "passed".

```html
<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name" /></label>
<label>Street<input id="shipping-street" type="text" name="street" /></label>

<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name" /></label>
<label>Street<input id="billing-street" type="text" name="street" /></label>
```

### Inapplicable

#### Inapplicable Example 1

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "inapplicable".

```html
<label for="fname" style="display:none;">First name:</label>
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable Example 2

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "inapplicable".

```html
<label for="fname">First name:</label>
<p id="fname"/>
```

#### Inapplicable Example 3

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "inapplicable".

```html
<input id="fname" type="text" name="fname"/>
```

#### Inapplicable Example 4

The outcome of [Form field visual label is descriptive](https://act-rules.github.io/rules/1cd4da) is "inapplicable", the outcome of [Form field accessible name is descriptive](https://act-rules.github.io/rules/e0ca31) is "inapplicable".

```html
<p>First name:</p> <input id="fname" type="text" name="fname"/>
```
