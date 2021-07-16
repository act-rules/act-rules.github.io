---
title: Valid Language Tag
key: valid-language-tag
unambiguous: true
objective: true
---

A [language tag][] is _valid_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. Thus, this definition intentionally differs from the strict [RFC 5646 syntax][language tag] (and ABNF grammar) as user agents and assistive technologies are more lenient in what they accept. The definition is however consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][]. For example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. As a consequence of this definition, however, [grandfathered tags][] are not correctly recognized as valid language subtags.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Hence comparison with the [language subtag registry][] must be done in a case insensitive way.

[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
