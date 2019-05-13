module.exports.bestMatchingRules = function bestMatchingRules (ruleAsserts) {
  const mappedRules = ruleAsserts.filter(({ mapping }) => mapping !== false)
  if (mappedRules.length === 0) {
    return
  }

  const completeRules = mappedRules.filter(({ complete }) => complete === true)
  if (completeRules.length === 0) {
    return mappedRules;
  }

  return completeRules;
}
