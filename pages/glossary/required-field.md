---
title: Required Field
key: required-field
---

Any HTML element:

- with one of the following [semantic roles][semantic role]: `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`;
- that prevents the successful submission or processing of the input when empty.

If the element is part of a form, having the [`required`](https://html.spec.whatwg.org/#the-required-attribute) attribute, on elements that allow it, makes it a required control for form submission.

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1][] roles that:

- inherit from the [abstract][] `input` or `select` role, and
- do not have a [required context][] role that itself inherits from one of those roles.

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[required context]: https://www.w3.org/TR/wai-aria/#scope
[semantic role]: #semantic-role 'Definition of semantic role'