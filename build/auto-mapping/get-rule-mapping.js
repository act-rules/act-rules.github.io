const { AxePuppeteer } = require('axe-puppeteer')
const { bestMatchingRules } = require('./best-matching-rules')
const { getMappingState } = require('./get-mapping-state')

const ignores = [
  'Meta-refresh no delay',
]

module.exports.getRuleMapping = async function getRuleMapping (page, testcases, port, index = 0) {
  console.log(`testing #${index}: ${testcases[0].ruleName} (${testcases[0].ruleId})`)
  process.stdout.write('  ');
  const testResults = []

  for (testcase of testcases) {
    const results = await runTestCase(page, port, testcase)
    if (typeof results === 'object') {
      process.stdout.write('.');
      testResults.push({ testcase, results })

    } else {
      process.stdout.write(`?(${testcase.url})`);
      testResults.push({
        testcase,
        results: { untested: [{ id: '*' }] }
      })
    }
  }

  process.stdout.write('\n');
  return processTestResults(testResults)
}

async function runTestCase (page, port, { url, ruleName, success_criterion}) {
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

const keys = ['violations', 'inapplicable', 'passes', 'incomplete', 'untested']
const typeMapping = {
  violations: 'failed',
  passes: 'passed'
}

function processTestResults (testResults) {
  // TODO: This method should flatten the results
  const ruleData = {}
  for ({ results, testcase } of testResults) {
    keys.forEach(type => (results[type] || []).forEach(result => {
      // TODO: Add "untested" data to each ruleData

      if (!ruleData[result.id]) {
        ruleData[result.id] = []
      }

      ruleData[result.id].push({
        expected: testcase.expected,
        actual: typeMapping[type] || type,
        url: localUrl(testcase.url)
      })
    }))
  }

  const ruleAsserts = Object.keys(ruleData).map((ruleId) => {
    return {
      ruleId,
      ...getMappingState(ruleData[ruleId])
    }
  })

  return bestMatchingRules(ruleAsserts)
}

function localUrl (url) {
  return url.replace('https://act-rules.github.io/testcases/', 'http://127.0.0.1:8080/')
}
