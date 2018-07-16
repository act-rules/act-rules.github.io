---
name: Form field has accessible name
description: |
  Each form field element has an accessible name

success_criterion:
- 3.3.2 # Labels or Instructions

test_aspects:
- DOM Tree

authors:
- Anne Thyme Nørregaard
- Bryn Anderson
---

## Test procedure

### Applicability

This rule applies to any element that is [exposed to assistive technologies](#exposed-to-assistive-technologies) and that has one of the following [semantic roles](#semantic-role): `checkbox`, `combobox` (`select` elements), `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider, spinbutton`, `switch`, `textbox`.

**Note**: The list of roles is derived by taking all the [ARIA](https://www.w3.org/TR/wai-aria-1.1/) 1.1 roles that:
- have a [semantic roles](#semantic-role) that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.
- The `option` role is not part of the list of applicable roles, because it does not meet the definition of a [User interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). This means [WCAG 2.1](https://www.w3.org/TR/WCAG21/) does not require it to have an accessible name.

### Expectation

Each target element has an [accessible name](#accessible-name) that is [non-empty](#non-empty).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Certain assistive technologies can be set up to ignore the title attribute, which means that to some users the title attribute will not act as an accessible name.

## Background

- https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html

## Test cases

### Passed

```html
<!-- implicit role with implicit label -->
<label>
  first name
  <input />
</label>
```

```html
<!-- implicit role with aria-label -->
<input aria-label="last name" disabled />
```

```html
<!-- implicit role with explicit label -->
<label for="country">Country</label>
<select id="country">
  <option></option>
</select>
```

```html
<!-- implicit role with aria-labelledby -->
<div id="country">Country</div>
<textarea aria-labelledby="address"></textarea>
```

```html
<!-- explicit role -->
<div aria-label="country" role="combobox" aria-disabled="true">England</div>
```

### Failed

```html
<!-- No accessible name -->
<input />
```

```html
<!-- Non-focusable still need an accessible name -->
<input tabindex="-1" />
```

```html
<!-- aria-label with empty text string -->
<div aria-label=" " role="combobox">England</div>
```

```html
<!-- Label does not exist -->
<div aria-labelledby="non-existing" role="combobox">England</div>
```

```html
<!-- Implicit label not supported on div elements -->
<label>
  first name
  <div role="textbox"></div>
</label>
```

```html
<!-- Explicit label not supported on div elements -->
<label for="lastname">first name</label>
<div role="textbox" id="lastname"></div>
```

### Inapplicable 

```html
<!-- Hidden to everyone -->
<input aria-label="firstname" style="display:none;" />
```

```html
<!-- Hidden to assistive technologies -->
<input aria-hidden="true" aria-label="firstname" />
```
 
```html
<!-- Explicitly set the role to something that isn't a form field -->
<input role="presentation" />
```

```html
<!-- option inherits from input, but has a required context role of listbox which inherits from select. We should therefore not consider option as applicable. -->
<select role="none">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
</select>
```
