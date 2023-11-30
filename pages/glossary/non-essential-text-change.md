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

A text change is considered non-essential if it occurs in any of the following scenarios:

- **Carousels**: The text change is part of a fixed set of slides that is updated as part of a carousel; or
- **Rolling Ads**: The text change occurs when an ad replaced with another ad on a timer; or
- **Article feed**: The text change is part of a feed in which new articles are added as they become available such as news articles or posts on a social media site. This does not include chat feeds; or
- **Live data**: The text change is an update of a live event or part of live information such as the scores of a sports match, an exchange rate, and weather measurements; or
- **Countdown timer**: A timer that counts down to an event that occurs at a predetermined time.

**Note**: Other scenarios in which a text change is not essential may exist, but are not covered by this definition. A text change is only "essential" when pausing, stopping or hiding it would fundamentally alter the meaning of information, or the functionality available on the page.

**Note**: While pausing a live feed or live data does change the functionality, it is not a fundamental change. An equivalent alternative for live information would be information along with a particular date and time, to clearly distinguish it from live data. Similarly, a countdown timer is equivalent to providing the exact time at which the event occurs.
