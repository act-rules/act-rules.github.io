---
title: Marked as Decorative
key: marked-as-decorative
unambiguous: true
objective: true
---

An element is _marked as decorative_ if it has a [semantic role][] of `none` or `presentation`.

The most common ways of marking an element as decorative are to explicitly set `role="none"`, or `role="presentation"`, or, for images, `alt=""`.

**Note:** an element should only be marked as decorative if it is [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration) and removing it does not cause a loss of information to the user.

**Note:** The [semantic role][] of `none` has been introduced in ARIA 1.1 and has less support than the synonym [role][semantic role] of `presentation`. Therefore, authors are encouraged to use `role="none presentation"` to keep the fallback option ([WAI-ARIA description of `presentation` role](https://www.w3.org/TR/wai-aria-1.1/#presentation)).

#### Accessibility Support for definition of marked as decorative

- Images with an empty `alt` attribute should have a role set to `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a role of either `img` or `graphic`.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` with some technology but be exposed with their [implicit role][] with others. Especially, [presentational roles conflict resolution] only consider elements whose [explicit role][]is `none` or presentation`but do not consider images marked as decorative through an empty`alt` attribute. Some browsers and assistive technologies choose to apply the conflict resolution to these images while other don’t.

[explicit role]: #explicit-role ’Definition of explicit role’
[implicit role]: #implicit-role ’Definition of implicit role’
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of semantic role'
