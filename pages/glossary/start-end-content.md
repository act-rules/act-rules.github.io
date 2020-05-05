---
title: Start and end of the content
key: start-end-content
unambiguous: true
objective: true
---

Given a set of nodes S and a node N:

- N is _at the start_ of S if N is located (in tree order) before the first [perceivable content][] in S (included), and after the last [perceivable content][] which is before all [perceivable content][] in S (excluded).
- N is _at the end_ of S if N is located (in tree order) after the last [perceivable content][] in S (excluded), and before the first [perceivable content][] which is after all [perceivable content][] in S (included).

**Note:** Several nodes may be at the start or end of S, especially if there are several non-[perceivable content][] node next to each other.

[perceivable content]: #perceivable-content 'Definition of perceivable content'
