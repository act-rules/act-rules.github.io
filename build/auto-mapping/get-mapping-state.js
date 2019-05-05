const assert = require('assert')
const { outcomeMapping } = require('./outcome-mapping')

module.exports.getMappingState = function getMappingState (assertions) {
  const mapping = assertions.some(({ actual, expected }) => 
    expected === 'failed' && actual === 'failed')

  if (!mapping) {
    return { mapping: false };
  }

  const complete = assertions.every(({ expected, actual }) => {
    return expected !== 'failed' || actual === 'failed'
  })

  const incorrect = assertions.filter((data) => {
    const { expected, actual } = data
    assert(outcomeMapping[expected], `Unknown result type ${expected}`)

    return !outcomeMapping[expected].includes(actual)
  }).map(({ url }) => url)
  const fullAuto = undefined
  
  return {
    complete,
    incorrect,
    assertions: assertions.map(({ expected, actual, url }) => {
      return { expected, actual, url }
    })
  }
}