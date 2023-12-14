---
title: Can be target by a pointer event
key: can-be-targeted-by-pointer-event
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An element _can be targeted by pointer events_ when both the following conditions are true:

- the element is a [semantic `widget`][semantic role]; and
- the element is [focusable][]; and
- the element's [clickable area][] is not empty.

#### Background

This definition tries to capture which HTML elements can actually react to pointer events. It is not possible to have an exact definition of these for two main reasons:

- Sometimes, the element that handles the event is not the element that appear to react to it, but an ancestor (or descendant) capturing the event during propagation or bubbling. In the most extreme case, the `body` element of a page could be the only one with an event handler, acting differently depending on where the event actually occurred. In such a case, a button would be perceived by users as something that can be targeted by a pointer event, while technically it is the `body` element which is targeted.
- It is not possible to query the list of event listeners on a given elements. Some User Agents offer way to monitor events fired at a given element, but none offer a way to query for event listeners. Additionally, an event listener might ultimately do nothing and thus, for users, the corresponding element wouldn't look like it can be targeted by pointer events (since it effectively wouldn't react to them).

As a consequence, this definition has these two known limitations:

- Not all HTML elements that can actually be targeted by a pointer event match this definition. For example, an author may build custom buttons without giving them an appropriate role or making them [focusable][]. Elements that can be targeted by pointer events but do not match this definition likely fail either [Success Criterion 4.1.2 Name, Role, Value][sc412] or [Success Criterion 2.1.1 Keyboard][sc211].
- Not all HTML elements that match this definition can actually be targeted by a pointer event. For example, when the element has an event handler that does nothing. Elements that match this definition but cannot be targeted by pointer events likely fail [Success Criterion 2.5.6 Concurrent Input Mechanisms][sc256].

[clickable area]: #clickable-area 'Definition of Clickable Area'
[focusable]: #focusable 'Definition of Focusable'
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc256]: https://www.w3.org/TR/WCAG22/#concurrent-input-mechanisms 'Success Criterion 2.5.6 Concurrent Input Mechanisms'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[visible]: #visible ' Definition of Visible'
