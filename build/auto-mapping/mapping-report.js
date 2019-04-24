const markdownTable = require('markdown-table')

module.exports.mappingReport = function mappingReport (mappings, tool) {  
  const completed = [['ACT-R ID', 'Rule Name', `${tool} Rules`]]
  const incomplete = [['ACT-R ID', 'Rule Name', `${tool} Rules`]]
  const incorrect = []

  for ([ actrRule, mapping ] of mappings) {
    const ruleId = actrRule.ruleId;
    const ruleName = truncate(actrRule.ruleName);
    const mappedRules = mapping.map(({ ruleId }) => ruleId).join(' + ');

    if (isCompleted(mapping)) {
      completed.push([ruleId, ruleName, mappedRules])

    } else if (isCorrect(mapping)) {
      incomplete.push([ruleId, ruleName, mappedRules])

    } else {
      incorrect.push([actrRule, mapping])
    }
  }

  return [
    `# Mapping for ${tool}`,
    getMarkdown('Implemented Rules', completed),
    getMarkdown('Partially Implemented Rules', incomplete),
    incorrectMarkdown(incorrect, tool)
  ].join('\n') + '\n'
}

function getMarkdown (heading, content) {
  let body = (content.length > 1
    ? markdownTable(content)
    : 'Nothing in implementation\n'
  )
  return `\n## ${heading}\n\n${body}`
}

function incorrectMarkdown (incorrect, tool) {
  let text = '\n## Incorrect results'

  incorrect.forEach(([ actrRule, mapping ]) => {
    if (
      mapping.length === 0 ||
      mapping.every(({ incorrect }) => !incorrect)
    ) {
      return
    }

    text += `\n\n### ${actrRule.ruleName} (${actrRule.ruleId})`
    mapping.forEach(({ ruleId, incorrect }) => {
      if (!incorrect) {
        return
      }

      text += `\n\n${tool} "${ruleId}" rule failed:\n`
      incorrect.forEach(url => {
        text += '\n- ' + url
      })
    })
  })
  return text
}

const isCompleted = mapping => {
  return mapping.some(({ complete, incorrect }) => complete && incorrect.length === 0)
}

const isCorrect = mapping => {
  return mapping.some(({ incorrect }) => Array.isArray(incorrect) && incorrect.length === 0)
}


function truncate(str, max = 50) {
  return (str.length > max
    ? str.substr(0, max - 3) + '...'
    : str
  )
}