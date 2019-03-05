function getComponent(type) {
  const map = {
    'glossary': './src/templates/glossary.js',
    'rules': './src/templates/rule.js',
  }

  if(Object.keys(map).includes(type)) {
    return map[type]
  }
  
  return './src/templates/default.js'
}

module.exports = getComponent