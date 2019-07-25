---	
title: Layout table	
key: layout-table	
---	

Table that have no tabular mark-up are interpreted by assistive technologies as layout table. According to WCAG this includes, but is not limited to:	

- No header [`cells`](https://www.w3.org/TR/html52/tabular-data.html#cell), that is [`th`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th) elements, or [`td`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td) elements with ARIA roles [`rowheader`](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and [`columnheader`](https://www.w3.org/TR/wai-aria-1.1/#columnheader).	
- No [`caption`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption) element.	
- No (or empty) `summary` attribute.	
- No `scope` or `headers` attribute on table cells.	
- Table with single column or row, or table with less than two rows containing two valid data cells are automatically marked as layout table by assistive technologies. A cell is considered valid:	
  - if its size can be obtained and is between 200 and 16000 pixels, or	
  - if its size can't be obtained and it contains text (Cells only containing graphics are not considered valid).