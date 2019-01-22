/**
 * Enable filtering and sorting for table using `List.js`
 */
function enableFilteringAndSortingInTable() {
  // enable sorting and filtering in rules table
  var ruleTable = new List('rules-table', {
    valueNames: [
      'ludate',
      { name: 'name', attr: 'data-rule-name' },
      'description',
    ]
  })
  ruleTable.sort('ludate', { order: 'desc' })
}

/**
 * Construct status of implementation per rule
 * @param {Object} implementationData implementation data
 */
function buildImplementationStatusColumn(implementationData) {
  var implementationCells = document.getElementsByClassName(
    'implementation-status'
  )

  if (!implementationCells) {
    // no rules
    return
  }

  for (var cell of implementationCells) {
    var cellP = $(cell)
    var ruleId = cellP.data('rule-id')

    var implementationCount = 0
    implementationData.forEach(function(data) {
      var graph = data['@graph']
      if (!graph || !graph.length) {
        return
      }
      const testcases = graph.filter(function(tc) {
        var tcId = tc.subject['@id']
        return tcId.indexOf(ruleId) !== -1
      })
      if (testcases.length) {
        implementationCount++
      }
    })
    var status
    if (implementationCount < 1) {
      status = 'New'
    }
    if (implementationCount >= 1 && implementationCount < 3) {
      status = 'In Progress'
    }
    if (implementationCount >= 3) {
      status = 'Done'
    }
    cellP.html(status)
    cellP.removeClass('loader')
  }
}

// dom ready
$(function() {
  // filering and sorting
  enableFilteringAndSortingInTable()

  // get implementations data
  getTestToolImplementations({
    callback: function(result) {
      buildImplementationStatusColumn(result)
    }
  })
})
