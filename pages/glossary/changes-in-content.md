---
title: Changes in content
key: changes-in-content
unambiguous: true
objective: true
input_aspects:
  - Accessibility tree
  - Audio output
  - CSS styling
  - DOM tree
---

A _[event][] originated change in the content_ of a [web page][] occurs when, by comparing the [web page][] before and 1 minute after the event [firing][], at least one of the following occurs:

- **visible changes:** the rendered pixels change in any part of the document that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling; or
- **accessibility tree changes:** any state, property or event of a node representing an [accessible object][] of the [accessibility tree][] changes, or any node is inserted in, or removed from the [accessibility tree][]; or
- **audible changes:** the audio rendered by the [web page][] changes.

- If the [web page][] is rendering time-based media, rendered pixels and audio will be changing as part of the playback. The comparison in this instance should compare the pixels and audio that are rendered if the event is not fired, with the ones that are rendered if the event is fired.

**Assumptions:**

- This definition assumes that there are no changes in the content of the [web page][] caused by another [event][]. If this is not the case, changes may be attributed to the wrong event.
- This definition assumes that the changes happen within a 1 minute time span after the event firing and therefore the comparison between the page before and after the event firing can be made at any time after that time span elapses. If there are changes after this time span, this definition may not detect them. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG. 

[accessible object]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-object 'Definition of accessible object'
[accessibilitree tree]: https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree 'Definition of accessibility tree'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[web page]: #web-page-html 'Definition of web page'
