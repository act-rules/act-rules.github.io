---
title: Clickable area
key: clickable-area
unambiguous: true
objective: false
input_aspects:
  - CSS styling
  - DOM tree
---

The _directly clickable area_ of an element is the set of all viewport coordinates for which the element is the [topmost event target][]

The _clickable area_ of an element is the union of its _directly clickable area_ and that of its [implicit][implicit label] or [explicit label][].

> **Comment:** implicit label = `<label><input /></label>`, explicit label = `<label for="…">`.

> Old attempt:
> The _directly clickable area_ of a text node is the smallest rectangle that contains all its visible pixels. <- also needs to be `getBoundingClientRect`, which requires building a range.
>
> The _directly clickable area_ of an element is the result of calling `getBoundingClientRect` on it.
>
> The _clickable area_ of an element is the union of the directly clickable area of all its inclusive descendants, and the clickable area of its [implicit][implicit label] or [explicit label][].
>
> **Comment:** This is larger than the actual clickable area by omitting:
>
> - `border-radius`: the rounded corners are not clickable.
> - Any kind of clipping done by (inclusive) ancestors, both `clip-path` and `overflow`
> - other elements obscuring the content (and not being scrollable away)
>
> This is OK as a first try, and to focus on the other points of the rule, but we probably shouldn't publish the rule until this is improved. Especially, this does not really allow to get "Target Size (minimum)" working because we need to more accurately detect the center of the clickable area.

> Working notes:
> recursively: getBoundingClientRect(s) (rounding corners, ...) + overflowing text - obscuring content (in the same scroll layer, but different stacking context (absolute/relative positioning))
>
> also include explicit and implicit label.
>
> also need to consider parent clipping the element.
> also may consider CSS clipping.

[topmost event target]: https://w3c.github.io/uievents/#topmost-event-target 'CSS definition of Topmost Event Target'
