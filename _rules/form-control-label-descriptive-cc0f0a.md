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
    - Jean-Yves Moyen
    - Wilco Fiers
  previous_authors:
    - Dagfinn Rømen
    - Geir Sindre Fossøy
---

## Applicability

This rule applies to any HTML `label` element or other element referenced by `aria-labelledby` that is [visible][], and is programmatically associated with an HTML element which is [visible][] and has one of the following [semantic roles][semantic role]:

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

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the roles from [WAI-ARIA Specifications](#wai-aria-specifications) that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means that [WCAG 2.1][wcag21] does not require it to have an [accessible name][].

**Note**: [Labels][label] in WCAG are not restricted to the `label` element of HTML and can be any element. This rule is only concerned about actual `label` elements, and elements that are programatically marked as [labels][label] via the `aria-labelledby` attribute.

## Expectation

Each test target, within its [visual context][], describes the purpose of the associated element.

**Note**: It is possible for an element to have an [accessible name][] but still having a non-descriptive `label` (and even a non-descriptive [label][]). In that case, it would pass [Success Criterion 4.1.2: Name, Role and Value][sc412] but still fail this rule and [Success Criterion 2.4.6: Heading and Labels][sc246].

**Note**: Having a [label][] which is not included in the [accessible name][] is a violation of [Success Criterion 2.5.3: Label in Name][sc253] but not of this rule nor of [Success Criterion 2.4.6: Heading and Labels][sc246].

## Assumptions

This rule assumes that [labels][label] are intended for sighted users, and that hiding a [visible][] [label][] from assistive technologies, is a failure of [sc412][], but not of [sc246][].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA 1.1][aria11]
- [Understanding Success Criterion 2.4.6: Headings and Labels][usc246]
- [Understanding Success Criterion 4.1.2: Name, Role and Value][usc412]
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

The implicit `label` element describes the `input` element.

```html
<label>First name:<input id="fname" type="text" name="first_name"/></label>
```

#### Passed Example 2

The explicit `label` element describes the `input` element. The `label` element does not need to be [included in the accessibility tree][] for this rule to apply.

```html
<label for="fname" aria-hidden="true">First name:</label> <input id="fname" type="text" name="first_name" />
```

#### Passed Example 3

The `span` element is marked as a [label][] for the `input` element through the `aria-labelledby` attribute. It describes the `input` element.

```html
<span id="label_fname" aria-hidden="true">First name:</span>
<input aria-labelledby="label_fname" type="text" name="first_name" />
```

#### Passed Example 4

The `label` elements, are not descriptive enough (because they are repeated over several fields). However, the headings provide a [visual context][] that differentiates the purpose of the otherwise identically named form fields. Within their [visual context][], the `label` elements are descriptive of their respective `input` elements.

```html
<h2>Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2>Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

### Failed

#### Failed Example 1

The implicit `label` element does not describe its associated `input` element.

```html
<label>Bad label<input id="fname" type="text" name="first_name"/></label>
```

#### Failed Example 2

The explicit `label` element does not describe its associated `input` element.

```html
<label for="fname">Bad label</label> <input id="fname" type="text" name="first_name" />
```

#### Failed Example 3

The `span` element is marked as a [label][] for the `input` element through the `aria-labelledby` attribute. It does not describe the `input` element.

```html
<span id="label_fname">Bad label</span> <input aria-labelledby="label_fname" type="text" name="first_name" />
```

#### Failed Example 4

The `label` elements, are not descriptive enough. The headings are not [visible][]. Therefore, they do not provide [visual context][].

```html
<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
<input aria-label="Name" id="shipping-name" type="text" name="name" />
<input aria-label="Street" id="shipping-street" type="text" name="street" />

<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
<input aria-label="Name" id="billing-name" type="text" name="name" />
<input aria-label="Street" id="billing-street" type="text" name="street" />
```

### Inapplicable

#### Inapplicable Example 1

The `label` element is not associated with an element having any of the required [semantic roles][semantic role].

```html
<label for="fname">First name:</label>
<p id="fname"></p>
```

#### Inapplicable Example 2

The `label` element is not [visible][].

```html
<label for="fname" style="display:none;">First name:</label> <input id="fname" type="text" name="first_name" />
```

#### Inapplicable Example 3

The form field is not [visible][].

```html
<label
	>First name: <input style="position: absolute; top: -9999px; left: -9999px;" type="text" name="first_name"
/></label>
```

#### Inapplicable Example 4

The `span` element is not referenced by an `aria-labelledby` attribute.

```html
<span>First name:</span><input type="text" name="first name" />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[aria11]: https://www.w3.org/TR/wai-aria-1.1/ 'Accessible Rich Internet Applications 1.1'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'Definition of label'
[sc246]: https://www.w3.org/WAI/WCAG21/#headings-and-labels.html 'Success Criterion 2.4.6: Heading and Labels'
[sc253]: https://www.w3.org/WAI/WCAG21/label-in-name 'Success Criterion 2.5.3: Label in Name'
[sc412]: https://www.w3.org/WAI/WCAG21/#name-role-value 'Success Criterion 4.1.2: Name, Role and Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[usc246]: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html 'Understanding SC 2.4.6: Heading and Labels'
[usc412]: https://www.w3.org/WAI/WCAG21/Understanding/name-role-value 'Understanding SC 4.1.2: Name, Role and Value'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
[wcag21]: https://www.w3.org/TR/WCAG21/ 'Web Content Accessibility Guidelines 2.1'
