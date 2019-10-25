---
title: Automatic detection of input errors
key: automatic-error-detection
---

Automatic detection of [input errors](https://www.w3.org/TR/WCAG21/#dfn-input-error) is the result all verification procedures that may be carried out automatically. These procedures include:

- Scripts executed in the client or the server;
- Programmatically specified information that allows user agents to detect information that has not been provided or that must conform to a specific format (e.g. dates, phone numbers, etc.)

Examples of how specific formats can be programmatically specified include:

- Specifying the [state](https://html.spec.whatwg.org/#states-of-the-type-attribute) of the `type` attribute on `input` elements allows the user agent to present input controls that enforce a specific format
- Using the [`pattern`](https://html.spec.whatwg.org/#the-pattern-attribute) attribute on `input` elements allows the user agent to check the value against a format specified with a regular expression
