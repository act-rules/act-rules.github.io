---
title: Non-Essential Text Change
key: non-essential-text-change
unambiguous: true
objective: false
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

A _non-essential text change_ occurs when the modification of the text content of an HTML element is not required for the purpose of providing context or live updated information to the user. A _non-essential text change_ usually occurs for one of the following purposes:

1. **Action Not Required** - Text changes on the page that does not require the immediate action of the user.
2. **No Context Included** - Text changes on the page that do not provide any additional information on the context of the page or provide additional help to the user.

Examples of a _non-essential text change_ would include:

    - Text changes that do not require immediate user action, such as stock ticker information, sport scores, or advertisements.
    - "Rolling" updates containing information such as job postings or news article titles and links.
    - A countdown timer to an event that does not cause a loss of opportunity for the user, such as a countdown to the start of a sporting event. An event like an auction, where timing is a key component, may not be considered a _non-essential text change_.
