---
title: Visible changes in presentation or content
key: visible-changes-in-presentation-or-content
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An [event][] originates _visible changes in the presentation or the content_ of a [web page][] when, by comparing the [web page][] before and after the event [firing][] the rendered pixels change in any part of the document that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling.

If the [web page][] is rendering time-based media, rendered pixels will be changing as part of the playback. The comparison in this instance should compare the pixels that are rendered if the event is not fired, with the ones that are rendered if the event is fired.

[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[web page]: #web-page-html 'Definition of web page'