---
title: Programmatic Label
key: programmatic-label
unambiguous: true
objective: true
input_aspects:
  - DOM tree
---

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the `aria-labelledby` attribute of T.

For more details, see [examples of programmatic label][].

**Note**: a given element may have more than one programmatic label.

The [labeled control][] L of an element T is its <dfn id="programmatic-label:explicit">explicit label</dfn> if L has a `for` attribute referencing T's `id` attribute.

The [labeled control][] L of an element T is its <dfn id="programmatic-label:implicit">implicit label</dfn> if L has a no `for` attribute and is an ancestor of T in the DOM tree. Note that explicit labels take precedence over implicit label, and that [labeled controls][labelled control] do not cross shadow boundaries nor content documents.

[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
[examples of programmatic label]: https://act-rules.github.io/pages/examples/programmatic-label/
