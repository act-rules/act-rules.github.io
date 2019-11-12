---
title: Automatic detection of input errors
key: automatic-error-detection
---

Automatic detection of input errors is an automatically carried procedure to verify that the provided input meets the requirements. 

The requirements include:

- information that is required
- information that must follow a specific format
- information that must be above, below or within specific values
- information that must belong to a set of allowed values
- information must be a specific value (such as in a CAPTCHA or confirming a password)

The procedures can be:

- Scripts executed in the client or the server;
- Programmatically specified information that allows user agents to detect information that has not been provided or that must conform to a specific format (e.g. dates, phone numbers, etc.)

Examples of how specific formats can be programmatically specified include:

- Specifying the [state][] of the `type` attribute on `input` elements allows the user agent to present input controls that enforce a specific format
- Using the [`pattern`](https://html.spec.whatwg.org/#the-pattern-attribute) attribute on `input` elements allows the user agent to check the value against a format specified with a regular expression

[state]: https://html.spec.whatwg.org/#states-of-the-type-attribute