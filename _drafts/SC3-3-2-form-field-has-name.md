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

This rule applies to:
- any element that is [exposed to assistive technologies](#exposed-to-assistive-technologies), and
- that has a [semantic role](#semantic-role) that inherits from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` role, and 
- does not have a [required context](https://www.w3.org/TR/wai-aria/#scope) role that itself inherits from one of those roles.

**Note**: All elements that are semantic form controls, either implicitly through native HTML elements or explicitly through use of ARIA roles, inherit from the [abstract](https://www.w3.org/TR/wai-aria/#abstract_roles) `input` or `select` roles. The required context role defines the owning container in which a given role is allowed. Form controls with a required context role that is itself a form control, e.g. `<option>` within a `<select>`, are not applicable to this rule as only the top-most form control requires an accessible name.

**Note**: At the time of writing this rule the semantic roles that inherit from the abstract `input` or `select` role and do not have a required context role that itself inherits from one of those roles are: `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider, spinbutton`, `switch`, `textbox`.

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
<input type="text" name="firstname" id="firstname" />
```

### Failed

```html
<input type="text" id="firstname" />
```

### Inapplicable 

```html
<input type="text" name="firstname" id="firstname" style="display:none;" />
```

```html
<input type="text" disabled name="firstname" id="firstname" />
```
 
```html
<!-- option inherits from input, but has a required context role of listbox which inherits from select. We should therefore not consider option as applicable. -->
<select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
</select>
```
