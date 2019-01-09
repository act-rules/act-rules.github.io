/**
 * Draws an HTML table of implementors
 * @param {Object} implementationData implementation reports data
 */
function buildTable(implementationData) {
  // generate table data
  var tableData = implementationData.reduce(function(out, data) {
    var graph = data['@graph']
    if (!graph || !graph.length) {
      return
    }
    var assertedBy = graph[0]['assertedBy']
    var rowData = {
      vendorName: assertedBy['vendor']['foaf:name'],
      vendorTool: assertedBy['vendorTool'],
      vendorToolVersion: assertedBy['@id'].split('/').reverse()[0],
      reportUrl: data.reportUrl
    }
    out.push(rowData)
    return out
  }, [])

  // draw table
  if (!tableData.length) {
    return
  }

  // get DOM for table
  var tbl = document.getElementById('pageImplementationsTblBody')

  // render rows
  tableData.forEach((rowData, index) => {
    var tr = document.createElement('tr')

    var tdIndex = document.createElement('td')
    tdIndex.appendChild(document.createTextNode(index + 1))
    tr.appendChild(tdIndex)

    var tdTestToolName = document.createElement('td')
    tdTestToolName.appendChild(
      document.createTextNode(rowData.vendorTool)
    )
    tr.appendChild(tdTestToolName)

    var tdTestToolVersion = document.createElement('td')
    tdTestToolVersion.appendChild(
      document.createTextNode(rowData.vendorToolVersion)
    )
    tr.appendChild(tdTestToolVersion)

    var tdVendorName = document.createElement('td')
    tdVendorName.appendChild(
      document.createTextNode(rowData.vendorName)
    )
    tr.appendChild(tdVendorName)

    var tdViewReport = document.createElement('td')
    var viewAnchor = document.createElement('a')
    viewAnchor.setAttribute('href', rowData.reportUrl)
    viewAnchor.setAttribute('target', '_blank')
    viewAnchor.textContent = 'View Report'
    tdViewReport.appendChild(viewAnchor)
    tr.appendChild(tdViewReport)

    tbl.appendChild(tr)
  })
}

// run - when DOM ready
$(function() {
  // get implementations data
  getTestToolImplementations({
    callback: function(result) {
      buildTable(result)
    }
  })
})
