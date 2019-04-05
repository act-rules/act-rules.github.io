---
title: Included characters
key: included-characters
---

A sequence of [encoded characters](#encoded-character) is considered included in another if the latter includes any consecutive sequence of encoded characters that are equal character-by-character to the former one, after 
- removing leading and trailing [space characters](https://www.w3.org/TR/html/infrastructure.html#space-characters), 
- replacing remaining occurrences of one or more space characters with a single space, and 
- ignoring any differences in letter casing.
