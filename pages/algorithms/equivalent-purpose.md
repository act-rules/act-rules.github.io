---
title: Equivalent purpose 
key: equivalent-purpose 
---

For two resources to serve an equivalent purpose, they can either be identical, or both/all deliver on the promise that was made when sending the user to the resources.

Resources can be identical even though the links to them are different. 

If the [parsed URLs](https://www.w3.org/TR/html52/infrastructure.html#parsing-urls) for two resources are identical, the resources themselves are identical, thus serving an equivalent purpose. 

Depending on the server, URLs can either be case-sensitive or case-insenstive, meaning that `<a href="page1.html">` and `<a href="Page1.html">` leads to either the same or two different pages.

Fully parsed URLs can be different, but still lead to identical resources after making the HTTP request, due to redirects and DNS aliasing. For example, these URLs are all fully normalised: http://example.com/, http://www.example.com/, https://www.example.com/. The server can however be configured to serve the same site for http and https, and the same site for example.com and www.example.com. This is common, but not guaranteed. 

**Note:** Whereas parsing is very quick to do automatically, resolving HTTP aliases is slow. It can take 5 seconds or longer per request. 

Resources that are not identical can still serve an equivalent purpose by both/all living up to the expectation that was created when sending the user to the resources. This would usually involve that the advertised key content is the same.  

Web pages and documents (e.g. PDFs, office formats etc.) may however fulfil an equivalent purpose, even if the resources:
* are located on different URLs, including different domains
* present different navigation options, e.g. through bread crumbs or local sub menus
* contain different amounts of information and/or differently worded information
* use different layouts.

If both/all resources cover the user expectations created by e.g. the link name equally well, the resources are considered to serve an equivalent purpose. 

**Note:** If the same content is presented in different formats, the format itself is often part of the link purpose, e.g. an article as both HTML and PDF, or an image in different sizes. If getting the same content in different formats is the purpose of having seperate links, the resources do not serve an equivalent purpose.

