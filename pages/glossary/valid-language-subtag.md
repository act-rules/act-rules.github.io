---
title: Valid Language Subtag
key: valid-language-subtag
---

A language tag consist of a [primary language subtag][] from the [language subtag registry][], optionally followed by a hyphen (`-`) and any sequence of characters.

_Note:_ This definition intentionally differs from the [BCP 47][] syntax as user agents and assistive technologies are more lenient in what they accept. The definition is however consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][]. For example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [BCP 47][]. As a consequence of this definition, however, [grandfathered tags][] are not correctly recognized as valid language subtags.

[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[primary language subtag]: https://tools.ietf.org/html/bcp47#section-2.2.1
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[subtag]: https://tools.ietf.org/html/bcp47#section-2.2
