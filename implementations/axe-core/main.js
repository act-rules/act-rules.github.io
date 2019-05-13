const path = require('path')
const puppeteer = require('puppeteer')
const writeFile = require('util').promisify(require('fs').writeFile)
const { axeRunner } = require('./src/axe-runner')
const { concatReport } = require('./src/axe-reporter-earl')
const { runTestCases } = require('../../build/run-test-cases')

// Setup options
const args = process.argv.slice(2)
const start = +args[0] || 0
const size = +args[1] || (start ? 1 : undefined)
const options = { start, size }

async function main (runTC = runTestCases) {
  const browser = await puppeteer.launch()
  let page = await browser.newPage()
  await page.setBypassCSP(true)

  const testResults = await runTC(options, (args) => {
    return axeRunner(page, args)
  })
  await page.close()
  await browser.close()
  
  // Save EARL
  const earlResults = concatReport(testResults)
  const earlPath = path.resolve(__dirname, './axe-earl-results.json')
  await writeFile(earlPath, JSON.stringify(earlResults, null, 2), 'utf-8')
  console.log(`Saved report to ${earlPath}`)
}

if (!module.parent) {
  module.exports.default = main
} else {
  main().catch(e => {
    console.error(e)
    process.exit(1)
  })
}