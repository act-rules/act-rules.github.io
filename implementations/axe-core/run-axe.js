const root = '../..'
const puppeteer = require('puppeteer')
const StaticServer = require('static-server');
const { testcases } = require(`${root}/public/testcases.json`)
const { getRuleMapping } = require(`${root}/build/auto-mapping/get-rule-mapping`)
const { mappingReport } = require(`${root}/build/auto-mapping/mapping-report`)
const writeFile = require('util').promisify(require('fs').writeFile)
const path = require('path')

const args = process.argv.slice(2)
const start = +args[0] || 0
const size = +args[1] || (start ? 1 : undefined)
const port = 1338
const rootPath = './public'

;(async function main () {
  const server = new StaticServer({ rootPath, port })
  const browser = await puppeteer.launch()
  const mappings = new Map()
  
  let page = await browser.newPage()
  await page.setBypassCSP(true)
  server.start()

  const ruleTests = Object.values(testcases.reduce((ruleTest, tc) => {
    if (!ruleTest[tc.ruleId]) {
      ruleTest[tc.ruleId] = []
    }
    ruleTest[tc.ruleId].push(tc)
    return ruleTest
  }, {}))

  const tests = ruleTests.slice(start, start + size || undefined)
  
  for (cases of tests) {
    try {
      const mapping = await getRuleMapping(page, cases, port, tests.indexOf(cases) + start)
      const actrRule = {
        ruleId: cases[0].ruleId,
        ruleName: cases[0].ruleName,
        accReq: cases[0].success_criterion
      }
      mappings.set(actrRule, mapping)
    } catch (e) {
      console.error(e.message, e.stack)
      page = await browser.newPage()
    }
  }

  await saveReport(mappings)
  server.stop();
  await page.close()
  await browser.close()
})()

async function saveReport (mappings) {
  try {
    const report = mappingReport(mappings, 'Axe-core')
    const reportPath = path.resolve(__dirname, './axe-core-report.md')
    await writeFile(reportPath, report, 'utf-8')
    console.log(`Saved report to ${reportPath}`)
  } catch (e) {
    console.error(e.stack)
  }
}