---
title: Visible changes in content
key: visible-changes-in-content
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An [event][] originates _visible changes in the content_ of a [web page][] when all the following are true

- the [event][] [queues a task][queuing] in the [task source][] of an [event loop][] of a [Document][] of the [web page][]; and
- the [processing][] of that [task][] causes an [update to the rendering][update the rendering] of the [Document][]; and
- the execution of steps 12 and 15 of the [update the rendering][] algorithm changes the rendered pixels in any part of the [Document][] [associated Window][] object, that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling.

[associated Window]: https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window 'Definition of Window associated to a Document'
[Document]: https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window 'Definition of Document'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[event loop]: https://html.spec.whatwg.org/multipage/webappapis.html#event-loop 'Definition of event loop'
[processing]: https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model 'Definition of the event loops processing model'
[queuing]: https://html.spec.whatwg.org/multipage/webappapis.html#queuing-tasks 'Definition of queuing tasks'
[task]: https://html.spec.whatwg.org/multipage/webappapis.html#concept-task 'Definition of event loop task'
[task source]: https://html.spec.whatwg.org/multipage/webappapis.html#task-source 'Definition of task source'
[update the rendering]: https://html.spec.whatwg.org/multipage/webappapis.html#update-the-rendering 'Definition of the update the rendering algorithm in the event loop processing model'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[web page]: #web-page-html 'Definition of web page'