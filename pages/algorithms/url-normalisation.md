---
title: URL normalisation 
key: url-normalisation 
---

A process to transform URLs in a standardised and consistent way, to make it possible to determine if two syntactically different URLs may be equivalent. (Source: [Wikipedia](https://en.wikipedia.org/wiki/URL_normalisation)).

Several types of URL normalisation exists. Some types of normalisation preserve the semantics of the URL, some usually preserve the semantics, and some types change the semantics. 

For the purpose of ACT rules, we only consider the types of URL normalisation that preserve the semantics of the URL. These normalisation types are: 
- [Case normalisation](https://tools.ietf.org/html/rfc3986#section-6.2.2.1)
- [Percent-Encoding normalisation](https://tools.ietf.org/html/rfc3986#section-6.2.2.2)
- [Scheme-Based normalisation](https://tools.ietf.org/html/rfc3986#section-6.2.3)

[Relative URLs](https://www.w3.org/TR/WD-html40-970917/htmlweb.html#relative-urls) first need to be resolved to full URLs before doing the comparison. 