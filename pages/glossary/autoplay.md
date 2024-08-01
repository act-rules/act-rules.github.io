---
title: Autoplay
key: Autoplay
unambiguous: true
objective: false
---

An `audio` or `video` element _autoplays_ if the included media starts playing without the user interacting with the element.

#### Accessibility Support

User agents do not always automatically play media, even when an `autoplay` attribute is present. This is done to avoid autoplaying media interrupting the user when they do not want to, especially when the media is likely to contain sound. The decision to respect the `autoplay` attribute or not depends on user settings and previous behavior (interaction with the site).