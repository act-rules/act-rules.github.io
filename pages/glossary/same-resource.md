---
title: Same resource
key: same-resource
unambiguous: true
objective: false
---

Two or more resources can be the _same resource_ even though the URLs for them are different. This can be due to URL parsing, server settings, redirects and DNS aliasing.

If the [parsed URLs](https://html.spec.whatwg.org/#resolving-urls) for two resources are identical, the resources are the same resource.

Depending on the server, URLs can either be case-sensitive or case-insensitive, meaning that `<a href="page1.html">` and `<a href="Page1.html">` lead to either the same or two different pages.

Fully parsed URLs can be different, but still lead to the same resource after making the HTTP request, due to redirects and DNS aliasing. For example, these URLs are all fully normalized: http://example.com/, http://www.example.com/, https://www.example.com/. The server can however be configured to serve the same site for http and https, and the same site for example.com and www.example.com. This is common, but not guaranteed.

Some types of redirects are also caused by user agents, e.g. ensuring that http://example.com/ and http://example.com resolve to the same resource.

On the other hand, identical relative URLs do not necessarily resolve to the same resource, even if they are in the same [web page (HTML)](#web-page-html). This happen because external content can be included through `iframe` and URLs in or out of it will resolve relatively to different base URLs.
