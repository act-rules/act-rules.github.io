---
title: Blocked event
key: blocked-event
unambiguous: true
objective: true
---

A _blocked event_ makes no [changes in content][] on the [web page][] resulting from that [event][] within a 1 minute time span of the [event firing][].

**Note:** The 1 minute time span is an arbitrary limit which is not included in WCAG. Results that happen after this period will not fail this rule but may nonetheless fail the success criteria being tested. The accessibility problem tends to be less severe for longer time periods, and without a time limit, testing this rule consistently would be impractical.

[event]: https://dom.spec.whatwg.org/#event
[event firing]: https://dom.spec.whatwg.org/#concept-event-fire
[changes in content]: #changes-in-content 'Definition of changes in content'
[web page]: #web-page-html 'Definition of web page'