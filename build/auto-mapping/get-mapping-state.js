const allowedResults = {
  failed: ['failed', 'incomplete', 'inapplicable'],
  fail: ['failed', 'incomplete', 'inapplicable'],
  passed: ['passed', 'incomplete', 'inapplicable'],
  pass: ['passed', 'incomplete', 'inapplicable'],
  inapplicable: ['passed', 'incomplete', 'inapplicable'],
}

module.exports.getMappingState = function getMappingState (assertions) {
  const mapping = assertions.some(({ actual, expected }) => 
    expected === 'failed' && actual === 'failed')

  console.log(assertions)
  if (!mapping) {
    return { mapping: false };
  }

  const complete = assertions.every(({ expected, actual }) => {
    return expected !== 'failed' || actual === 'failed'
  })

  const incorrect = assertions.filter((data) => {
    const { expected, actual } = data
    if (!allowedResults[expected]) {
      throw new TypeError(`Unknown result type ${expected}`)
    }

    return !allowedResults[expected].includes(actual)
  }).map(({ url }) => url)
  const fullAuto = undefined
  
  return { complete, incorrect }
}