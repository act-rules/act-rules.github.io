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
  wcag-technique:G131: # Providing descriptive labels
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - DOM Tree
  - CSS Styling
  - Language
acknowledgments:
  authors:
    - Jean-Yves Moyen
    - Wilco Fiers
  previous_authors:
    - Dagfinn Rømen
    - Geir Sindre Fossøy
---

## Applicability

This rule applies to any [programmatic label][] of an element which has one of the following [semantic roles][semantic role]:

- `checkbox`
- `combobox`
- `listbox`
- `menuitemcheckbox`
- `menuitemradio`
- `radio`
- `searchbox`
- `slider`
- `spinbutton`
- `switch`
- `textbox`

and where both the element and the [programmatic label][] are [visible][].

**Note:** The list of applicable [semantic roles][semantic role] is derived by taking all the roles from [WAI-ARIA Specifications][] that:

- inherit from the [abstract][] `input` or `select` role; and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means that [WCAG 2.1][wcag21] does not require it to have an [accessible name][].

**Note:** [Labels][label] in WCAG are not restricted to the `label` element of HTML and can be any element. This rule is only concerned about actual `label` elements, and elements that are programmatically marked as [labels][label] via the `aria-labelledby` attribute.

## Expectation

Each test target, together with its [visual context][], describes the purpose of the associated element.

**Note:** It is possible for an element to have an [accessible name][] but still have a non-descriptive `label` element (and even a non-descriptive [label][]). In that case, it would pass [Success Criterion 4.1.2: Name, Role and Value][sc412] but still fail this rule and [Success Criterion 2.4.6: Heading and Labels][sc246].

**Note:** Having a [label][] which is not included in the [accessible name][] is a violation of [Success Criterion 2.5.3: Label in Name][sc253] but not of this rule nor of [Success Criterion 2.4.6: Heading and Labels][sc246].

## Assumptions

- This rule assumes that [labels][label] are intended for sighted users, and that hiding a [visible][] [label][] from assistive technologies, is a failure of [Success Criterion 4.1.2: Name, Role and Value][sc412], but not of [Success Criterion 2.4.6: Heading and Labels][sc246].
- This rule assumes that the [programmatic labels][programmatic label] of an element are also part of its [visual context][].
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1][aria11]
- [Understanding Success Criterion 2.4.6: Headings and Labels][usc246]
- [Understanding Success Criterion 4.1.2: Name, Role and Value][usc412]
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

The `label` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<label>First name:<input id="fname" type="text" name="fname"/></label>
</html>
```

#### Passed Example 2

The `label` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<label for="fname">First name:</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Passed Example 3

The `p` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<p id="label_fname">First name:</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Passed Example 4

The `p` element is a [programmatic label][] of the `input` element and describes it. The [programmatic label][] does not need to be [included in the accessibility tree][] for this rule to apply.

```html
<html lang="en">
	<p id="label_fname" aria-hidden="true">First name:</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Passed Example 5

The `label` elements are [programmatic labels][programmatic label] of their respective `input` elements. The `label` elements, are not descriptive enough (because they are repeated over several fields). However, the headings provide a [visual context][] that differentiates the purpose of the otherwise identically named form fields. Within their [visual context][], the `label` elements are descriptive of their respective `input` elements.

```html
<html lang="en">
	<h2>Shipping address</h2>
	<label>Name<input id="shipping-name" type="text" name="name"/></label>
	<label>Street<input id="shipping-street" type="text" name="street"/></label>

	<h2>Billing address</h2>
	<label>Name<input id="billing-name" type="text" name="name"/></label>
	<label>Street<input id="billing-street" type="text" name="street"/></label>
</html>
```

#### Passed Example 6

Both the `div` and the `span` elements are [programmatic labels][programmatic label] of the `input` element. Each of them, within the [visual context][] formed by the other one, is descriptive.

```html
<html lang="en">
	<div id="shipping">Shipping address</div>
	<span id="name">Name</span>
	<input id="shipping-name" type="text" name="name" aria-labelledby="shipping name" />
</html>
```

### Failed

#### Failed Example 1

The `label` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<label>Menu<input id="fname" type="text" name="fname"/></label>
</html>
```

#### Failed Example 2

The `label` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<label for="fname">Menu</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Failed Example 3

The `span` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<p id="label_fname">Menu</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Failed Example 4

The `label` elements are [programmatic labels][programmatic label] of their respective `input` elements. The `label` elements, are not descriptive enough (because they are repeated over several fields). The headings are not [visible][]. Therefore, they do not provide [visual context][].

```html
<html lang="en">
	<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
	<input aria-label="Name" id="shipping-name" type="text" name="name" />
	<input aria-label="Street" id="shipping-street" type="text" name="street" />

	<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
	<input aria-label="Name" id="billing-name" type="text" name="name" />
	<input aria-label="Street" id="billing-street" type="text" name="street" />
</html>
```

#### Failed Example 5

Both the `div` and the `span` elements are [programmatic labels][programmatic label] of the `input` element, but only the `div` is [visible][]. It has no [visual context][], and is not descriptive.

```html
<html lang="en">
	<div id="shipping">Shipping address</div>
	<span id="name" style="display: none">Name</span>
	<input id="shipping-name" type="text" name="name" aria-labelledby="shipping name" />
</html>
```

### Inapplicable

#### Inapplicable Example 1

The `label` element is not a [programmatic label][] of any element.

```html
<html lang="en">
	<label for="fname">First name:</label>
	<p id="fname"></p>
</html>
```

#### Inapplicable Example 2

The `label` element is not [visible][].

```html
<html lang="en">
	<label for="fname" style="display:none;">First name:</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Inapplicable Example 3

The `label` is a [visible][] [programmatic label][] of the `input` element. However, the `input` is not [visible][], hence this rule does not apply.

```html
<html lang="en">
	<label>First name: <input style="position: absolute; top: -9999px; left: -9999px;" type="text" name="fname"/></label>
</html>
```

#### Inapplicable Example 4

The `span` element is not a [programmatic label][] of any element.

```html
<html lang="en">
	<span>First name:</span>
	<input type="text" name="fname" />
</html>
```

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles 'List of abstract roles'
[accessible name]: #accessible-name 'Definition of accessible name'
[aria11]: https://www.w3.org/TR/wai-aria-1.1/ 'Accessible Rich Internet Applications 1.1'
[explicit role]: #explicit-role 'Definition of explicit role'
[focusable]: #focusable 'Definition of focusable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'Definition of label'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatic label]: #programmatic-label 'Definition of programmatic label'
[sc246]: https://www.w3.org/WAI/WCAG21/#headings-and-labels.html 'Success Criterion 2.4.6: Heading and Labels'
[sc253]: https://www.w3.org/WAI/WCAG21/label-in-name 'Success Criterion 2.5.3: Label in Name'
[sc412]: https://www.w3.org/WAI/WCAG21/#name-role-value 'Success Criterion 4.1.2: Name, Role and Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[usc246]: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html 'Understanding SC 2.4.6: Heading and Labels'
[usc412]: https://www.w3.org/WAI/WCAG21/Understanding/name-role-value 'Understanding SC 4.1.2: Name, Role and Value'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[wcag21]: https://www.w3.org/TR/WCAG21/ 'Web Content Accessibility Guidelines 2.1'
