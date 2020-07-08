---
id: e086e5
name: Form control has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each form field element has a non-empty accessible name.
accessibility_requirements:
  wcag20:4.1.2: # Name, Role, Value (A)
    forConformance: true
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - Accessibility Tree
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
---

## Applicability

This rule applies to any element that is [included in the accessibility tree](#included-in-the-accessibility-tree), and that has one of the following [semantic roles][]: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch`, `textbox`.

**Note:** The list of roles is derived by taking all the roles from [WAI-ARIA Specifications](#wai-aria-specifications) that:

- have a [semantic roles][] that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note:** The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an [accessible name][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

- Certain assistive technologies can be set up to ignore the title attribute, which means that to some users the title attribute will not act as an [accessible name][].
- Several assistive technologies have a functionality to list all form fields on a page, including the `disabled` ones. Therefore this rule is still applicable to `disabled` form fields. If an assistive technology consistently ignores `disabled` form fields in all its interactions, then it is possible to have a `disabled` form field with no accessible name without creating accessibility issues for the user.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)

**Note:** This rule does not fail 3.3.2 as there are sufficient techniques within 3.3.2 that don't need the elements to have an [accessible name][]. For example "G131: Providing descriptive labels" **AND** "G162: Positioning labels to maximize predictability of relationships" would be sufficient.

## Test Cases

### Passed

#### Passed Example 1

[Implicit role](#implicit-role) with implicit label.

```html
<label>
	first name
	<input />
</label>
```

#### Passed Example 2

[Implicit role](#implicit-role) with aria-label

```html
<input aria-label="last name" disabled />
```

#### Passed Example 3

[Implicit role](#implicit-role) with explicit label

```html
<label for="country">Country</label>
<select id="country">
	<option></option>
</select>
```

#### Passed Example 4

[Implicit role](#implicit-role) with `aria-labelledby`.

```html
<div id="country">Country</div>
<textarea aria-labelledby="country"></textarea>
```

#### Passed Example 5

[Explicit role](#explicit-role).

```html
<div aria-label="country" role="combobox" aria-disabled="true">England</div>
```

#### Passed Example 6

The [accessible name][] is not only [whitespace][].

```html
<label>
	:-)
	<input />
</label>
```

### Failed

#### Failed Example 1

No [accessible name][].

```html
<input />
```

#### Failed Example 2

[Non-focusable](#focusable) element still needs an [accessible name][].

```html
<input tabindex="-1" />
```

#### Failed Example 3

`aria-label` with empty text string

```html
<div aria-label=" " role="combobox">England</div>
```

#### Failed Example 4

`aria-labelledby` with empty text string.

```html
<div id="country"></div>
<div aria-labelledby="country" role="combobox">England</div>
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

#### Failed Example 7

The [accessible name][] is empty.

```html
<label> <input /></label>
```

#### Failed Example 8

This `input` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `textbox` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<input role="none" />
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
<input disabled aria-hidden="true" aria-label="firstname" />
```

#### Inapplicable Example 3

Role has [explicitly](#explicit-role) been set to something that isn't a form field.

```html
<input role="presentation" disabled />
```

#### Inapplicable Example 4

Option inherits from input, but has a required context role of listbox which inherits from select. We should therefore not consider option as applicable.

```html
<select role="none" disabled>
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="opel">Opel</option>
</select>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of focusable'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[semantic roles]: #semantic-role 'Definition of semantic role'
[whitespace]: #whitespace 'Definition of whitespace'
