const fs = require('fs')

const readFile = path => fs.readFileSync(path, { encoding: 'utf-8' })

module.exports = readFile
