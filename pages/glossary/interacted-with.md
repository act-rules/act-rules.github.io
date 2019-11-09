---
title: Interacted with
key: interacted-with
---

Any HTML element:

- with one of the following [semantic roles][semantic role]: `checkbox`, `combobox`, `listbox`, `menuitemcheckbox`, `menuitemradio`, `radio`, `searchbox`, `slider`, `spinbutton`, `switch` and `textbox`;
- that, either through user interaction or programmatically, has had its [dirty value flag][] set to true.

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1][] roles that:

- inherit from the [abstract][] `input` or `select` role, and
- do not have a [required context][] role that itself inherits from one of those roles.


[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[dirty value flag]: https://www.w3.org/TR/html52/sec-forms.html#input-dirty-value-flag
[required context]: https://www.w3.org/TR/wai-aria/#scope
[semantic role]: #semantic-role 'Definition of semantic role'