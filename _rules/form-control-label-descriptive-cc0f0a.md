---
id: cc0f0a
name: Form control label is descriptive
rule_type: atomic
description: |
  This rule checks that accessible names describe the purpose of form field elements.
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
  - Jean-Yves Moyen
previous_authors:
  - Dagfinn Rømen
  - Geir Sindre Fossøy
---

## Applicability

This rule applies to any HTML or SVG element that:

- has one of the following [semantic roles][semantic role]: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`; and
- is [visible][]; and
- is [included in the accessibility tree][]; and
- has a [label][].

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1][aria11] roles that:

- inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it has a required context role that inherits from the `select` role. Furthermore, `option` does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means that [WCAG 2.1][wcag21] does not require it to have an [accessible name][].

**Note**: [Labels][label] are not restricted to the `label` element of HTML and can be any element.

**Note**: [Labels][label] have to be presented to all users. Therefore, [accessible names][accessible name] or elements that are not [included in the accessibility tree][] do not qualify as [labels][] (unless coupled with similar content provided for other users).

## Expectation

The [label][] describes the purpose of the test target. The [context][] of the [label][] can be used to differentiate the purpose from other test targets in the same test subject.

**Note**: If the [label][] is not associated in a [programmatically determinable][] way with the form field element, this is likely a violation of [Success Criterion 1.3.1: Info and Relationships][sc131] but neither of this rule nor of [Success Criterion 2.4.6: Heading and Labels][sc246].

**Note**: It is possible for a test target to have an [accessible name][] without having an accurate [label][]. In that case, it would pass [Success Criterion 4.1.2: Name, Role and Value][sc412] but still fail this rule and [Success Criterion 2.4.6: Heading and Labels][sc246].

**Note**: While the [label][] has to be presented to all users, this is not necessarily the case for the [context][], if any. However, if [context][] is needed by some users to differentiate the purpose from one test target to another, it is likely that similar [context][] will be needed for all users.

## Assumptions

Having a differentiating [context][] that is not [programmatically determinable][] might be a violation under other [WCAG 2.1][wcag21] success criteria. For example, using text that has not been marked up as headings in order to split a form into different sections is a violation of [Success Criterion 1.3.1: Info and Relationships][sc131]. This rule assumes, however, that this is allowed under [success criterion 2.4.6: Headings and Labels][sc246].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [ARIA 1.1][aria11]
- [Understanding Success Criterion 1.3.1: Info and Relationships][usc131]
- [Understanding Success Criterion 2.4.6: Headings and Labels][usc246]
- [Understanding Success Criterion 4.1.2: Name, Role and Value][usc412]
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

The implicit `label` element acts as a [label][] and it is descriptive.

```html
<label>First name:<input id="fname" type="text" name="first_name"/></label>
```

#### Passed Example 2

The explicit `label` element acts as a [label][] and it is descriptive.

```html
<label for="fname">First name:</label> <input id="fname" type="text" name="first_name" />
```

#### Passed Example 3

The `span` element acts as a [label][] and it is descriptive. Even if it is not associated to the form field in a [programmatically determinable][] way, it is still presented to all users and thus qualifies as a [label][].

```html
<span>First name:</span> <input type="text" name="first_name" />
```

#### Passed Example 4

Even through the `span` element is not [included in the accessibility tree][], it is associated to the form field in a [programmatically determinable][] way and gives it an [accessible name][]. Therefore, it is presented to all users and qualifies as a [label][].

```html
<span id="label_fname" aria-hidden="true">First name:</span>
<input aria-labelledby="label_fname" type="text" name="first_name" />
```

#### Passed Example 5

For users of assistive technologies, the `aria-label` attribute take precedence over the `label` element to provide an [accessible name][]. While they are not strictly equal, the `label` element and the `aria-label` attribute are consistent and thus form a [la bel][]. This [label][] is descriptive.

```html
<label>Enter your first name:<input type="text" aria-label="First name" name="first_name"/></label>
```

#### Passed Example 6

The [labels][label], provided by the `label` elements, are not descriptive enough (because they are repeated over several fields). However, the headings provide both a [programmatically determined context][] and a [visual context][] that differentiates the purpose of the otherwise identically named form fields.

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

The implicit `label` element acts as a [label][] and it is not descriptive.

```html
<label>City:<input id="fname" type="text" name="first_name"/></label>
```

#### Failed Example 2

The explicit `label` element acts as a [label][] and it is not descriptive.

```html
<label for="fname">City:</label> <input id="fname" type="text" name="first_name" />
```

#### Failed Example 3

The `span` element acts as a [label][] and it is not descriptive. Even if it is not associated to the form field in a [programmatically determinable][] way, it is still presented to all users and thus qualifies as a [label][].

```html
<span>City:</span> <input type="text" name="first_name" />
```

#### Failed Example 4

Even through the `span` element is not [included in the accessibility tree][], it is associated to the form field in a [programmatically determinable][] way and gives it an [accessible name][]. Therefore, it is presented to all users and qualifies as a [label][]. It is not descriptive.

```html
<span id="label_fname" aria-hidden="true">City:</span>
<input aria-labelledby="label_fname" type="text" name="first_name" />
```

#### Failed Example 5

The `span` element is presented to all users and thus qualifies as a [label][]. It is not descriptive. The [accessible name][], provided by the `aria-label` attribute, is descriptive but it is only presented to users of assistive technologies. Thus is does not qualify as a [label][].

```html
<span>City:</span><input type="text" aria-label="First name" name="first name" />
```

#### Failed Example 6

The [labels][label], provided by the `label` elements, are not descriptive enough. The headings provide a [visual context][] but they are not [included in the accessibility tree][]. Therefore, users of assistive technologies have only access to the [label][] with no differentiating [context][].

```html
<h2 aria-hidden="true">Shipping address</h2>
<label>Name<input id="shipping-name" type="text" name="name"/></label>
<label>Street<input id="shipping-street" type="text" name="street"/></label>

<h2 aria-hidden="true">Billing address</h2>
<label>Name<input id="billing-name" type="text" name="name"/></label>
<label>Street<input id="billing-street" type="text" name="street"/></label>
```

#### Failed Example 7

The [labels][label], provided by the `label` elements, are not descriptive enough. The headings provide a [programmatically determined context][] but they are not [visible][]. Therefore, users without assistive technologies have only access to the [label][] with no differentiating [context][].

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

There is no element with any of the required [semantic roles][semantic role].

```html
<label for="fname">First name:</label>
<p id="fname"></p>
```

#### Inapplicable Example 2

The `label` element is [hidden](https://www.w3.org/TR/accname-1.1/#dfn-hidden) to all users and thus does not qualifies as a [label][].

```html
<label for="fname" style="display:none;">First name:</label> <input id="fname" type="text" name="first_name" />
```

#### Inapplicable Example 3

The form field is not [visible][].

```html
<label
	>First name:<input style="position: absolute; top: -9999px; left: -9999px;" type="text" name="first_name"
/></label>
```

#### Inapplicable Example 4

The form field is not [included in the accessibility tree][].

```html
<span>First name:</span><input aria-hidden="true" type="text" name="first_name" />
```

#### Inapplicable Example 5

The `span` element is not [visible][]. Therefore, it is not presented to all users and does not qualify as a [label][]. The form field has no [label][], even though at has an [accessible name][].

```html
<span id="label_fname" style="position: absolute; top: -9999px; left: -9999px;">First name:</span>
<input aria-labelledby="label_fname" type="text" name="first_name" />
```

#### Inapplicable Example 6

The `aria-label` attribute is only presented to users of assistive technologies and therefore does not qualifies as a [label][].

```html
<input aria-label="First name" id="fname" type="text" name="first_name" />
```

#### Inapplicable Example 7

The [accessible name][] is provided by the `aria-label` attribute (which takes precedence over the `label` element). Therefore user of assistive technologies are not presented with the same information as other users, and nothing qualifies as a [label][].

```html
<label>City:<input type="text" name="first_name" aria-label="First name"/></label>
```

#### Inapplicable Example 8

The `span` element is not presented to users of assistive technologies. Therefore, it does not qualifies as a [label][].

```html
<span aria-hidden="true">First name:</span><input type="text" name="first name" />
```

[accessible name]: #accessible-name 'Definition of accessible name'
[aria11]: https://www.w3.org/TR/wai-aria-1.1/ 'Accessible Rich Internet Applications 1.1'
[context]: #context 'Definition of context'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'Definition of label'
[programmatically determinable]: https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable 'Definition of programmatically determinable'
[programmatically determined context]: #programmatically-determined-context 'Definition of programmatically determined context'
[sc131]: https://www.w3.org/WAI/WCAG21/#info-and-relationships 'Understanding SC 1.3.1: Info and Relationships'
[sc246]: https://www.w3.org/WAI/WCAG21/#headings-and-labels.html 'Understanding SC 2.4.6: Heading and Labels'
[sc412]: https://www.w3.org/WAI/WCAG21/#name-role-value 'Understanding SC 4.1.2: Name, Role and Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[usc131]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships 'Understanding SC 1.3.1: Info and Relationships'
[usc246]: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html 'Understanding SC 2.4.6: Heading and Labels'
[usc412]: https://www.w3.org/WAI/WCAG21/Understanding/name-role-value 'Understanding SC 4.1.2: Name, Role and Value'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
[wcag21]: https://www.w3.org/TR/WCAG21/ 'Web Content Accessibility Guidelines 2.1'
