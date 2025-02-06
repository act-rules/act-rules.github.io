---
title: Clearly labeled location
key: clearly-labeled-location
unambiguous: true
objective: false
---

Secondary information and alternative controls of functionality are often not displayed together with primary information or functionality. For example, an option to change a web page to dark mode may be placed on an options page instead of being available on every page and page state of a website. Another example is a maps application, where, instead of using GPS, an option is available in a dropdown menu to set the current location of the device. Such content should be placed in a clearly labeled location.

The location of a target is said to be _clearly labeled_ when the target can be found by activating "identifiable" [instruments][instrument] which either lead the user to find the target, or to another [page][web page] or page state from which this action can be repeated until the target is found.

Whether or not the content is "clearly labeled" depends on the starting point of the search. If page A has a link which clearly "identifies" some piece of content, then the location of the content is clearly labeled. Page B, which can be in the same website, may not have such a link or may have a link with a link text that does not "identify" target content or which can be interpreted to "identify" more than one target, and so the location of the content starting from page B is not clearly labeled.

For the purpose of this definition, an [instrument][] is _identifiable_ if any text or other content with a [text alternative][], allows any user to identify an element with a [semantic role][] that inherits from `widget`.

A [web page][] changes state when the [document's body][body] changes without a change in the [document's URL][url].

[body]: https://html.spec.whatwg.org/#dom-document-body
[url]: https://url.spec.whatwg.org/#concept-url
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[semantic role]: #semantic-role 'Definition of semantic role'
[text alternative]: https://www.w3.org/TR/WCAG22/#dfn-text-alternative 'Definition of text alternative'
[web page]: #web-page-html 'Definition of web page'
