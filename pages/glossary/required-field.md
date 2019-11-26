---
title: Required Field
key: required-field
---

Any HTML element:

- with one of the following [semantic roles][semantic role]: `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`;
- that results in an [error message][] when left empty.

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1][] roles that:

- inherit from the [abstract][] `input` or `select` role, and
- do not have a [required context][] role that itself inherits from one of those roles.

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[error message]: #error-message 'Definition of error message'
[required context]: https://www.w3.org/TR/wai-aria/#scope
[semantic role]: #semantic-role 'Definition of semantic role'
