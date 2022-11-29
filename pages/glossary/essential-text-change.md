---
title: Essential Text Change
key: essential-text-change
unambiguous: true
objective: false
input_aspects:
  - Accessibility tree
  - CSS styling
  - DOM tree
---

An _essential text change_ occurs when the modification of the text content of an HTML element is necessary to convey accurate and timely information to the user. An _essential text change_ may appear in any of the following forms:

1. Providing context - Text is changed to provide users with additional information required to understand the current state of the page. For example, while searching for results, text may change to convey that the page is *loading* to provide context to the user.
2. Live updates of important information - The content automatically updates to show the most recent information available from a data source and should not be ignored by the user. Importance of information is often subjective and requires some amount of human understanding, so we have provided examples below to help illustrate when text should be considered important.

    *Important*
    - Information on the user's browsing session status
    - Information pertaining to the safety of the user, such as a natural disaster alert
    - A change in text when using collaborative systems, such as a chat messenger or forum
    - A change in text triggered by user input, such as selecting an option in a text-based adventure game
    - A change in text that represents a core functionality of the web page, such as a countdown timer for an auction site
    
    *Not Important*
    - Text changes that do not require immediate user action, such as stock ticker information, sport scores, or advertisements
    - "Rolling" updates containing informmation such as job postings or news article titles and links
    - A countdown timer to an event that does not cause a loss of opportunity for the user, such as a countdown to the start of a sporting event

