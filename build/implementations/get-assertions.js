/**
 * Get assertions from framed reports
 * 
 * @param {Object|Array<Objects>} framedReports implementation reports
 */
const getAssertions = framedReports => {
  const reports = Array.isArray(framedReports)
    ? framedReports
    : [framedReports]

  return reports.reduce((out, report) => {
    out.push(...report[`@graph`])
    return out
  }, [])
}

module.exports = getAssertions;