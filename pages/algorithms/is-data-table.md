## How QUAIL determines if a table is being used for layout or data

Note: This script is written by Kevin Miller and code is under MIT license.
Most of this is informed by an academic paper (http://www2002.org/CDROM/refereed/199/). Note that these tests are ordered by ease of computation to speed things up, if a test says something is a layout table, we stop there. This is all encompassed in the quail.isDataTable method.

### Number of rows

If there is only one row, this is being used as layout.

### Nested tables

If a table has another table element within it, this is probably a layout table. We do check that there is not a consistent use of child tables throughout the parent table. For example, if every third cell in the table has a table element within it, then this is probably a data table. Essentially, data tables are almost always leaf elements.

### Appropriate headers

If a table has made it this far, we look to see if there is an appropriate usage of <th> elements. If there is a group of <th> elements in a <thead> element, and especially if there are <th> elements with a scope attribute, then we are assuming the document author was thinking about a data table, and flag this as a data table.

### Cell spanning

Layout tables almost always have cells spanning different widths, so we convert the table into a matrix representing cell spanning. Column spans are counted up in a given column, and if there are colspans that are not used consistently from row to row, this is a layout table.

### Cell consistency

Data tables tend to have consistent types of information across columns. We again make a matrix representing the table, and compute the length of content compared to others in the column, and the type of data (HTML, text, number) across the column. Number types are inferred by removing repeated words across columns first, so if a unit is used throughout the column (i.e. "4 feet"), it will be ignored. Types are assigned numeric values of 1 for HTML, 2 for plain text, and 3 for numbers so we can use them with standard deviation.

We take a standard deviation for both content length and content type, then make sure that no cells fall out of that deviation. If more than 10% of all cells lie outside the standard deviation of type and/or content length for a given column, this is flagged as a layout table.

## Code

```javascript
isDataTable : function(table) {
    //If there are less than three rows, why do a table?
    if(table.find('tr').length < 3) {
      return false;
    }
    //If you are scoping a table, it's probably not being used for layout
    if(table.find('th[scope]').length) {
      return true;
    }
    var numberRows = table.find('tr:has(td)').length;
    //Check for odd cell spanning
    var spanCells = table.find('td[rowspan], td[colspan]');
    var isDataTable = true;
    if(spanCells.length) {
      var spanIndex = {};
      spanCells.each(function() {
        if(typeof spanIndex[$(this).index()] === 'undefined') {
          spanIndex[$(this).index()] = 0;
        }
        spanIndex[$(this).index()]++;
      });
      $.each(spanIndex, function(index, count) {
        if(count < numberRows) {
          isDataTable = false;
        }
      });
    }
    //If there are sub tables, but not in the same column row after row, this is a layout table
    var subTables = table.find('table');
    if(subTables.length) {
      var subTablesIndexes = {};
      subTables.each(function() {
        var parentIndex = $(this).parent('td').index();
        if(parentIndex !== false && typeof subTablesIndexes[parentIndex] === 'undefined') {
          subTablesIndexes[parentIndex] = 0;
        }
        subTablesIndexes[parentIndex]++;
      });
      $.each(subTablesIndexes, function(index, count) {
        if(count < numberRows) {
          isDataTable = false;
        }
      });
    }
    return isDataTable;
 },
 ```

