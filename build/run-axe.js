const { AxePuppeteer } = require('axe-puppeteer')
const puppeteer = require('puppeteer')
const StaticServer = require('static-server');
const { testcases } = require(`../public/testcases.json`)

const port = 1338
const rootPath = './public'

const server = new StaticServer({ rootPath, port });
const ignores = [
  'Meta-refresh no delay',
]

;(async () => {
  server.start()

  const browser = await puppeteer.launch()
  let page = await browser.newPage()
  await page.setBypassCSP(true)

  const ruleTests = Object.values(testcases.reduce((ruleTest, tc) => {
    if (!ruleTest[tc.ruleId]) {
      ruleTest[tc.ruleId] = []
    }
    ruleTest[tc.ruleId].push(tc)
    return ruleTest
  }, {}))

  const tests = ruleTests.slice(0, 3)
  for (cases of tests) {
    try {
      const out = await runRuleTests(page, cases)
      if (Array.isArray(out)) {
        out.forEach(d => {
          console.log(d)
        })
      }
    } catch (e) {
      console.error(e.message)
      page = await browser.newPage()
    }
  }

  server.stop();
  await page.close()
  await browser.close()
})()

async function runRuleTests (page, testcases) {
  console.log(`\n\ntesting ${testcases[0].ruleName} (${testcases[0].ruleId})`)
  const testResults = []
  for (testcase of testcases) {
    const results = await runTestCase(page, testcase)
    process.stdout.write('.');
    if (typeof results !== 'object') {
      process.stdout.write(' - abort\n');
      return
    }
    testResults.push({ testcase, results })
  }

  process.stdout.write('\n');
  return processTestResults(testResults)
}

async function runTestCase (page, { url, ruleName, success_criterion}) {
  if (ignores.includes(ruleName)) {
    return
  }
  const localUrl = url.replace('https://act-rules.github.io/', '')
  const tags = (success_criterion || []).map(sc => 'wcag' + sc.replace(/\./g, ''))
  if (tags.length === 0) {
    return;
  }
  if (localUrl.includes('.svg')) {
    return
  }

  await page.goto(`http://127.0.0.1:${port}/${localUrl}`)
  const html = await page.$eval(':root', e => e.outerHTML);
  if (html.includes('Not Found')) {
    console.log(`Not Found http://127.0.0.1:${port}/${localUrl}`)
    return;
  }
  const axeRunner = new AxePuppeteer(page)
  axeRunner.withTags(tags)

  // TODO: Properly handle timeout
  const t = setTimeout(() => {
    console.log(`Timed out on http://127.0.0.1:${port}/${localUrl}`)
  }, 1000)

  const results = await axeRunner.analyze()
  clearTimeout(t);
  return results;
}

const keys = ['violations', 'inapplicable', 'passes']
const typeMapping = {
  violations: 'failed',
  passes: 'passed'
}

function processTestResults (testResults) {
  const ruleData = {}
  for ({ results, testcase } of testResults) {
    keys.forEach(type => results[type].forEach(result => {
      if (!ruleData[result.id]) {
        ruleData[result.id] = []
      }
      ruleData[result.id].push({
        expected: testcase.expected,
        actual: typeMapping[type] || type,
        url: testcase.url.replace('https://act-rules.github.io/testcases/', ' http://127.0.0.1:8080/')
        // ...testcase
      })
    }))
  }

  const ruleAsserts = Object.keys(ruleData).reduce((ruleAsserts, ruleId) => {
    return [...ruleAsserts, {
      ruleId,
      ...mappingState(ruleData[ruleId])
    }]
  }, [])

  return ruleAsserts.filter((assert) => {
    if (assert.mapping === false) {
      return false;
    }
    if (
      assert.complete === false && 
      ruleAsserts.includes(({ complete }) => complete === true)
    ) {
      return false;
    }

    return true
  })
}

const allowedResults = {
  failed: ['failed', 'incomplete'],
  passed: ['passed', 'incomplete', 'inapplicable'],
  inapplicable: ['passed', 'incomplete', 'inapplicable'],
}
function mappingState (assertions) {
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
    return !allowedResults[expected].includes(actual)
  })
  const fullAuto = undefined
  
  return { complete, incorrect }
}