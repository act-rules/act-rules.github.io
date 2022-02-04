---
id: rdzs6q
name: Widget has non-empty accessible name
rule_type: atomic
description: |
  This rule checks that each widget has a non-empty accessible name.
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
  funding:
    - WAI-Tools
---

## Applicability

This rule applies to any element that is [included in the accessibility tree](#included-in-the-accessibility-tree) and has a [semantic role][] that is one of the following [semantic roles][]:

- `button`; or
- `checkbox`; or
- `combobox`; or
- `link`; or
- `listbox`; or
- `menuitem`; or
- `menuitemcheckbox`; or
- `menuitemradio`; or
- `radio`; or
- `searchbox`; or
- `slider`; or
- `spinbutton`; or
- `switch`; or
- `textbox`.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

- Certain assistive technologies can be set up to ignore the title attribute, which means that to some users the title attribute will not act as an [accessible name][].
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The list of roles in the applicability considers elements that meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). It comprises the `button`, `link` and `menuitem` roles, plus all the roles from [WAI-ARIA Specifications](#wai-aria-specifications) that:

- have [semantic roles][] that inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and
- do not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

Elements with the `option` role are not tested in this rule because they do not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). If these elements are presented as user interface components, these need to be tested separately from this rule.

### Related rules

- [Image button has non-empty accessible name](https://act-rules.github.io/rules/59796f)
- [Link has non-empty accessible name](https://act-rules.github.io/rules/c487ae)

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

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

**Note**: While the `placeholder` attribute is sufficient to provide an [accessible name][], a [visible][] [label][] that does not disappear when a user starts to enter data is still required for [success criterion 3.3.2 Labels or Instructions][sc332].

```html
<input placeholder="Your search query" /> <button type="submit">search</button>
```

#### Passed Example 6

This [semantic][semantic role] `combobox` element has an [accessible name][] because of its `aria-label` attribute.

```html
<div>Country</div>
<div aria-label="country" role="combobox" aria-disabled="true">England</div>
```

#### Passed Example 7

This [semantic][semantic role] `checkbox` element has the text content as its [accessible name][].

```html
<div role="checkbox">I agree to the terms and conditions.</div>
```

#### Passed Example 8

This `button` element has an [accessible name][] because of its text content.

```html
<button>My button</button>
```

#### Passed Example 9

This `input` element has an [accessible name][] because of its `value` attribute.

```html
<input type="submit" value="Submit" />
```

#### Passed Example 10

This element with a `button` role has an [accessible name][] because of its `aria-label` attribute.

```html
<span role="button" aria-label="My button"></span>
```

#### Passed Example 11

This `input` element has an [accessible name][] because of the default accessible name for an `input` element with a `type` attribute set to `reset`.

```html
<input type="reset" />
```

#### Passed Example 12

The image button has an [accessible name][] through the `alt` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Search" />
```

#### Passed Example 13

This `a` element has an [accessible name][] from its content.

```html
<a href="https://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

#### Passed Example 14

This `area` element has a [semantic role][] of `link` and an [accessible name][] via `alt`.

```html
<img src="/test-assets/c487ae/planets.jpg" width="145" height="126" alt="Planets" usemap="#planetmap" />

<map name="planetmap">
	<area shape="rect" coords="0,0,30,100" href="sun.htm" alt="Sun" />
</map>
```

#### Passed Example 15

This element with the `menuitem` role has an [accessible name][] because of its text content.

```html
<div role="menu">
	<button role="menuitem">New file</button>
</div>
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

This [semantic][semantic role] `textbox` element has an empty (`""`) [accessible name][]. The parent `label` element does not give it an [accessible name][], this only works for native form fields.

```html
<label>
	first name
	<div role="textbox"></div>
</label>
```

#### Failed Example 6

This [semantic][semantic role] `textbox` element has an empty (`""`) [accessible name][]. The `label` element does not give it an [accessible name][], this only works for native form fields.

```html
<label for="firstname">first name</label>
<div role="textbox" id="firstname"></div>
```

#### Failed Example 7

This [semantic][semantic role] `textbox` element has an empty (`""`) [accessible name][]. The text content of the element serves as its value, not as an [accessible name][].

```html
<div role="textbox">first name</div>
```

#### Failed Example 8

This `button` element has no [accessible name][]. The `value` attribute does not provide an [accessible name][] for `button` elements, only when an `input` element's [state of the `type` attribute](https://html.spec.whatwg.org/multipage/input.html#states-of-the-type-attribute) is `button`, `submit` or `reset`.

```html
<button type="button" value="read more"></button>
```

#### Failed Example 9

This `button` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<button role="none"></button>
```

#### Failed Example 10

This `a` element has an empty [accessible name][].

```html
<a href="http://www.w3.org/WAI"></a>
```

#### Failed Example 11

This `a` element with an image has an empty [accessible name][]. The image is decorative because it has a `role` [attribute value][] of `none`.

```html
<a href="http://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" role="none"/></a>
```

#### Failed Example 12

This element with the `menuitem` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<div role="menu">
	<button role="menuitem">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
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

This `select` element is not [included in the accessibility tree][] because it is `disabled` and has a `role` attribute value of "none".

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
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[semantic roles]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of Visible'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'WCAG definition of Labels'
