---
title: Section of repeated
key: section-of-repeated-content
unambiguous: true
objective: false
---

A [section of content][] of an [HTML web page][html web page] is a _section of repeated content_ if there exists almost identical [sections of content][] in other [HTML web pages][html web page] in a given set of [HTML web pages][html web page].

Any kind of difference (content, presentation, styling, …) experienced by a given user makes two [sections of content][] not identical. However, non identical [sections of content][] may still be sections of repeated content if the differences are not related to their key purpose. If the text content is the same and the sections differ only in visual presentation, or the state of their components, then they are sections of repeated content. If the text contents are different but the differences are not related to the key purpose of the sections, then they are sections of repeated content.

For example:

- sections whose only difference is the background or foreground color of the text are sections of repeated content because the difference is only in visual presentation;
- navigational sections whose only difference is a timestamp are sections of repeated content because the difference is not related to the key purpose of the section (providing navigation links);
- even through the difference between breadcrumbs can be rather minimal, their purpose lies in this difference and they are not sections of repeated content;
- site maps may appear on several pages with a "you are here" mention making each of these unique, they are still sections of repeated content because the difference is not related to the key purpose of the section (providing a site map).

**Note:** The set of [HTML web pages][html web page] under consideration depends on the context in which the test is performed. If the [test subject][] contains several pages, then it is this set. If it contains a single page, then testers should judge whether a [section of content][] is repeated by comparing with others pages from the same website.

[html web page]: #web-page-html 'Definition of HTML web page'
[section of content]: #section-of-content 'Definition of section of content'
[sections of content]: #section-of-content 'Definition of section of content'
[test subject]: https://www.w3.org/TR/act-rules-format/#test-subject 'Definition of test subject'
