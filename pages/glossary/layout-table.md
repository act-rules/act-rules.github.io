---
title: Layout table
key: layout-table
---

Table that have no tabular mark-up are interpreted by assistive technologies as layout table. According to WCAG this includes:

- No header cells: that is `th` elements, or `td` with ARIA roles rowheader and columnheader.
- No `caption` element.
- No (or empty) `summary` attribute.
- No `scope` or `headers` attributes on table cells.
- Table with single column or row, or table with less than two rows containing two valid data cells are automatically marked as layout table by assistive technologies. A cell is considered valid:
  - if its size can be obtained and is between 200 and 16000 pixels, or
  - if its size can't be obtained and it contains text (Cells only containing graphics are not considered valid).