---
title: Instrument to achieve an objective
key: instrument-to-achieve-an-objective
unambiguous: true
objective: false
---

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

#### Background About Instrument

This definition is a more restrictive version of WCAG's definition of [mechanism][], notably restricting it to the current document. WCAG has a note that "The mechanism needs to meet all success criteria for the conformance level claimed." This includes all the level A criteria such as [Success Criterion 2.1.1 Keyboard][sc211] (the mechanism must be keyboard accessible) or [Success Criterion 4.1.2 Name, Role, Value][sc412] (the mechanism must be exposed to assistive technologies and have an accessible name). This definition, and the rules using it, leaves these extra requirements out. This avoids reporting the same component twice for the same reason (e.g., missing an accessible name) under two different rules and Success Criteria, and helps pinpoint the error related to each Success Criterion. Instruments should nonetheless be fully accessible at the correct conformance level (depending on the rule using them).

[activated]: https://html.spec.whatwg.org/#activation
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[mechanism]: https://www.w3.org/TR/WCAG21/#dfn-mechanism 'WCAG Definition of Mechanism'
[sc211]: https://www.w3.org/TR/WCAG21/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
