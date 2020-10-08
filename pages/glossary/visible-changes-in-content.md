---
title: Visible changes in content
key: visible-changes-in-content
unambiguous: true
objective: true
input_aspects:
  - CSS styling
  - DOM tree
---

An _[event][] originated change in the content_ of a [web page][] occurs when any [animation frame callbacks][] resulting from the same event are [processed][run the animation frame callbacks] during the [rendering update][update the rendering] step of the [window event loop][] of the [Window][] object associated the [web page][].

An [animation frame callback][animation frame callback] results from an event when any [steps][] of the [task][] dispatching the event [insert the callback][] in the [map of animation frame callbacks][] of the [Window][] associated with the same [Document][] of the event's [EventTarget][] object.


[animation frame callbacks]: https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames 'Definition of Animation frames'
[Document]: https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window 'Definition of Document'
[EventTarget]: https://dom.spec.whatwg.org/#interface-eventtarget 'Definition of EventTarget'
[insert the callback]: https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe 'Definition of the requestAnimationFrame method'
[map of animation frame callbacks]: https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#list-of-animation-frame-callbacks 'Definition of map of animation frame callbacks'
[run the animation frame callbacks]: https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#run-the-animation-frame-callbacks 'Definition of the run the animation frame callbacks algorithm'
[steps]: https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-steps 'Definition of event loop task steps'
[task]: https://html.spec.whatwg.org/multipage/webappapis.html#concept-task 'Definition of event loop task'
[update the rendering]: https://html.spec.whatwg.org/multipage/webappapis.html#update-the-rendering 'Definition of the update the rendering algorithm in the event loop processing model'
[web page]: #web-page-html 'Definition of web page'
[Window]: https://html.spec.whatwg.org/multipage/window-object.html#window 'Definition of Window'
[window event loop]: https://html.spec.whatwg.org/multipage/webappapis.html#window-event-loop 'Definition of window event loop'