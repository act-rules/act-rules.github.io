---
title: Keyboard Actionable Element
key: keyboard-actionable-element
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

An HTML element is _keyboard actionable_ if all the following are true:

- the element is part of [sequential focus navigation][]; and
- the element is [visible][] when [focused][]; and
- the element can be [activated][]; and
- the element can be [activated][] by use of keyboard.

When it is not [focused][], an actionable element might be visible or not, this is not important as long at the element is [visible][] when it is [focused][]. Similarly, it doesn't matter whether or not the element can be [activated][] by mouse or other input device as long as it can be [activated][] by keyboard.

[activated]: https://html.spec.whatwg.org/#activation 'HTML definition of Activation'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML definition of Sequential Focus Navigation'
[visible]: #visible 'Definition of Visible'
