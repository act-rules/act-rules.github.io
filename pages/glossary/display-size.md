---
title: Display size
key: display-size
unambiguous: true
objective: true
---

The display size is the width and height at which a page is rendered. The display size is equal to the [clientWidth][] and [clientHeight][] of the [document element][] of the [top-level browsing context][].

**Note**: The display size is not to be confused with the "resolution" of the operating system. Often a browser will be a single window in the operating system, with a width and height different from the resolution of the operating system. Often browsers also include additional user interface components, such as a URL bar, tab bar, and a bookmarks bar. None of these are included in the display size. In full screen mode the display size might be the same as the resolution of the operating system.

**Note**: The display size includes, if rendered, all scrollbars.

[clientwidth]: https://drafts.csswg.org/cssom-view/#dom-element-clientwidth 'CSS working draft, Element.clientWidth, 2020/02/14'
[clientheight]: https://drafts.csswg.org/cssom-view/#dom-element-clientheight 'CSS working draft, Element.clientHeight, 2020/02/14'
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM: documentElement, 2020/02/13'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'DOM: top-level browsing context, 2020/02/13'
