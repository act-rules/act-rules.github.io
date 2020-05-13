---
title: Clearly labelled location
key: clearly-labelled-location
unambiguous: true
objective: false
---

Secondary information and alternative controls or functionality are often not displayed together with primary information or functionality. For example, an option to change a web page to dark mode may be placed on an options page instead of being available on every page and page state of a website. Another example is a maps application, where, instead of using GPS, an option is available in a dropdown menu to set the current location of the device. Such content should be placed in a clearly labelled location.

The location of a target is said to be **"clearly labelled"** when the target can be found by activating [user interface components][] whose purpose, indicated by their [label], leads the user to find the target or to another [page][web page] or page state from which this action can be repeated until the target is found.

Whether or not the content is "clearly labelled" depends on the starting point of the search. If page A has a clearly labelled link to some piece of important content, it is clearly labelled. Page B, which can be in the same website, may not have such a link or may have a link with an ambiguous link text, and so the location of the content starting from page B is not clearly labelled.

**Note:** A [web page][] changes state when the [document's body][body] changes without a change in the [document's URL][URL].

[body]: https://html.spec.whatwg.org/#dom-document-body
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels
[URL]: https://dom.spec.whatwg.org/#concept-document-url
[user interface components]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[web page]: #web-page-html 'Definition of web page'