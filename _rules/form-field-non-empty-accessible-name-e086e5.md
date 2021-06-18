---
id: e086e5
name: Form field has non-empty accessible name
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
  - CSS styling
  - DOM Tree
acknowledgments:
  authors:
    - Anne Thyme Nørregaard
    - Bryn Anderson
---

## Applicability

This rule applies to any element that is [included in the accessibility tree](#included-in-the-accessibility-tree), and that has one of the following [semantic roles][]: `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch`, `textbox`.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

No [user style sheets](https://drafts.csswg.org/css-cascade/#cascade-origin-user) are used and no changes to the [user agent default style sheet](https://drafts.csswg.org/css-cascade/#cascade-origin-ua) are in place, otherwise the test cases might have different outcomes of the ones presented here. 

## Accessibility Support

- Certain assistive technologies can be set up to ignore the title attribute, which means that to some users the title attribute will not act as an [accessible name][].
- Several assistive technologies have a functionality to list all form fields on a page, including the `disabled` ones. Therefore this rule is still applicable to `disabled` form fields. If an assistive technology consistently ignores `disabled` form fields in all its interactions, then it is possible to have a `disabled` form field with no accessible name without creating accessibility issues for the user.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Elements with the `option` role are not tested in this rule because they do not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). If these elements are presented as user interface components, these need to be tested separately from this rule.

## Background

The list of roles in the applicability is derived by taking all the roles from [WAI-ARIA Specifications](#wai-aria-specifications) that:

- have [semantic roles][] that inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

Note that this rule does not test other control-like roles such as `button` and `menuitem`, because these do not inherit from `input` or `select`. These should be tested separately.

This rule does not map to [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG21/#labels-or-instructions) as there are sufficient techniques within 3.3.2 that don't need the elements to have an [accessible name][]. For example "[G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)" **AND** "[G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG21/Techniques/general/G162)" would be sufficient.

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65)

## Test Cases

### Passed

#### Passed Example 1

This `input` element has an [accessible name][] because of its [programmatic label](#programmatic-label).

```html
<label>
	first name
	<input />
</label>
```

#### Passed Example 2

This `input` element has an [accessible name][] because of its `aria-label` attribute.

```html
<div>last name</div>
<input aria-label="last name" disabled />
```

#### Passed Example 3

This `select` element has an [accessible name][] because of its [programmatic label](#programmatic-label).

```html
<label for="country">Country</label>
<select id="country">
	<option>England</option>
	<option>Scotland</option>
	<option>Wales</option>
	<option>Northern Ireland</option>
</select>
```

#### Passed Example 4

This `textarea` element has an [accessible name][] because of its `aria-labelledby` attribute.

```html
<div id="country">Country</div>
<textarea aria-labelledby="country"></textarea>
```

#### Passed Example 5

This `input` element has an [accessible name][] because of its `placeholder` attribute.

**Note**: While the `placeholder` attribute is sufficient to provide an [accessible name][], a [visible][] [label][] that does not disappear when a users starts to enter data is still required for [success criterion 3.3.2 Labels or Instructions][sc332].

```html
<input placeholder="Your search query" /> <button type="submit">search</button>
```

#### Passed Example 6

This element with a `combobox` [role][semantic role] has an [accessible name][] because of its `aria-label` attribute.

```html
<div>Country</div>
<div aria-label="country" role="combobox" aria-disabled="true">England</div>
```

### Failed

#### Failed Example 1

This `input` element does not have an attribute that gives an [accessible name][] to it.

```html
<div>last name</div>
<input />
```

#### Failed Example 2

This disabled `input` element does not have an attribute that gives an [accessible name][] to it.

```html
<input disabled />
```

#### Failed Example 3

This `input` element has an empty (`""`) [accessible name][] because the space in the `aria-label` [attribute value][] is trimmed.

```html
<input aria-label=" " />
```

#### Failed Example 4

This `select` element has an empty (`""`) [accessible name][] because the `div` has no text content.

```html
<div id="country"></div>
<select aria-labelledby="country">
	<option>England</option>
</select>
```

#### Failed Example 5

This element with a `textbox` [role][semantic role] has an empty (`""`) [accessible name][]. The parent `label` element does not give it an [accessible name][], this only works for native form fields.

```html
<label>
	first name
	<div role="textbox"></div>
</label>
```

#### Failed Example 6

This element with a `textbox` [role][semantic role] has an empty (`""`) [accessible name][]. The `label` element does not give it an [accessible name][], this only works for native form fields.

```html
<label for="lastname">first name</label>
<div role="textbox" id="lastname"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `input` element is not [included in the accessibility tree][] because of its `style` attribute which sets `display` to `none`.

```html
<input aria-label="firstname" style="display:none;" />
```

#### Inapplicable Example 2

This `input` element is not [included in the accessibility tree][] because of its `aria-hidden` attribute.

```html
<input disabled aria-hidden="true" aria-label="firstname" />
```

#### Inapplicable Example 3

This `select` element is not [included in the accessibility tree][] because it is `disabled` and has a `role` attribute value of "presentation".

```html
<select role="none" disabled>
	<option value="volvo">Volvo</option>
	<option value="saab">Saab</option>
	<option value="opel">Opel</option>
</select>
```

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[attribute value]: #attribute-value 'Definition of attribute value'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict 
Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[semantic roles]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of Visible'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'WCAG definition of Labels'
[sc332]: https://www.w3.org/TR/WCAG21/#labels-or-instructions
