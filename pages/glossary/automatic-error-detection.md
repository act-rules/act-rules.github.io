---
title: Automatic detection of input errors
key: automatic-error-detection
---

Process that, by evaluating whether the provided user input meets the requirements, results on a message being presented to the user when the input does not meet the requirements.

The requirements include:

- information that is required;
- information that must follow a specific format;
- information that must be above, below or within a specific range of values;
- information that must belong to a set of allowed values;
- information must be a specific value (such as in a CAPTCHA or confirming a password).

The message creation is the result of:

- a process that does not involve communication with a server; or
- a process that uses information received in a server's response to an HTTP request including the user input;
- a process that uses information received from a server in the same uninterrupted connection in which the user input was sent to the server, after the sending of the user input.
