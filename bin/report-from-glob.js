const glob = require('glob')
const readFile = require('util').promisify(require('fs').readFile)

module.exports = function reportFromGlob (local) {
  return new Promise((resolve, reject) => {
    glob(local, async (err, files) => {
      if (err) {
        reject(err)
      }

      let reports = []
      for (const file of files) {
        const report = await readFile(file, 'utf-8')
        reports.push(JSON.parse(report))
      }
      resolve(reports)
    })
  })
}