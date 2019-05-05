const path = require('path')
const puppeteer = require('puppeteer')
const writeFile = require('util').promisify(require('fs').writeFile)
const { implementationTest, mappingReport } = require('../../build/auto-mapping')
const { axeRunner } = require('./src/axe-runner')

// Setup options
const args = process.argv.slice(2)
const start = +args[0] || 0
const size = +args[1] || (start ? 1 : undefined)
const options = { start, size }

;(async function main () {
  const browser = await puppeteer.launch()
  let page = await browser.newPage()
  await page.setBypassCSP(true)

  const mapping = await implementationTest(options, (args) => {
    return axeRunner(page, args)
  })
  await saveReport(mapping)

  await page.close()
  await browser.close()
})()

async function saveReport (mappings) {
  try {
    // Save JSON
    const jsonPath = path.resolve(__dirname, './reports/axe-act-rules.json')
    await writeFile(jsonPath, JSON.stringify(mappings, null, 2), 'utf-8')
    console.log(`Saved report to ${jsonPath}`)
    
    // Save MD
    const mdReport = mappingReport(mappings, 'Axe-core')
    const mdPath = path.resolve(__dirname, './reports/axe-act-rules.md')
    await writeFile(mdPath, mdReport, 'utf-8')
    console.log(`Saved report to ${mdPath}`)

  } catch (e) {
    console.error(e.stack)
  }
}
