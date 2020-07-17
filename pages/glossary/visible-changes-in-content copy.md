---
title: Visible changes in content
key: visible-changes-in-content
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

A _[event][] originated change in the content_ of a [web page][] occurs when, by comparing the [web page][] before and after the event [firing][] the rendered pixels change in any part of the document that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling.

- If the [web page][] is rendering time-based media, rendered pixels and audio will be changing as part of the playback. The comparison in this instance should compare the pixels and audio that are rendered if the event is not fired, with the ones that are rendered if the event is fired.

**Assumptions:**

- This definition assumes that there are no changes in the content of the [web page][] caused by another [event][]. If this is not the case, changes may be attributed to the wrong event.

[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[web page]: #web-page-html 'Definition of web page'
