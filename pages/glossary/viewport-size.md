---
title: viewport size
key: viewport-size
unambiguous: true
objective: true
---

The viewport size is the width and height at which a page is rendered. The viewport size is equal to the [innerWidth][] and [innerHeight][] of the [window][] of the [top-level browsing context][].

**Note**: The viewport size is not to be confused with the "resolution" of the operating system. Often a browser will be a single window in the operating system, with a width and height different from the resolution of the operating system. Often browsers also include additional user interface components, such as a URL bar, tab bar, and a bookmarks bar. None of these are included in the viewport size. In full screen mode the viewport size might be the same as the resolution of the operating system.

**Note**: The viewport size includes, if rendered, all scrollbars.

[innerwidth]: https://drafts.csswg.org/cssom-view/#dom-window-innerwidth 'CSS working draft, window.innerWidth, 2020/03/30'
[innerheight]: https://drafts.csswg.org/cssom-view/#dom-window-innerheight 'CSS working draft, window.innerHeight, 2020/03/30'
[window]: https://html.spec.whatwg.org/#window 'HTML: window object, 2020/03/30'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'DOM: top-level browsing context, 2020/03/30'
