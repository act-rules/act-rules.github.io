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

Images with an empty `alt` attribute should have a role set to `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a role of either `img` or `graphic`.

[semantic role]: #semantic-role 'Definition of semantic role'
