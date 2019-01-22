---
title: Content (element type)
key: content
---

1. A node in the DOM tree is considered `content` when it is a text node that does not consist of exclusively whitespace characters and that is not a descendant of a `head`, `script` or `style` element.

2. Elements that match the following CSS selector are also considered text nodes:

      img:not([role]):not([alt=""]):not([title]),
      img[title=""]:not([role]):not([alt=""]),
      *[aria-label],
      *[aria-labelledby],
      iframe, object, video, audio, svg, math,
      textarea, input:not(type="hidden"), select, button,
      keygen, progress, meter
