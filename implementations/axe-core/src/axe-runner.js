const { AxePuppeteer } = require('axe-puppeteer')
const { readFileSync } = require('fs')
const { axeReporterEarl, earlUntested } = require('./axe-reporter-earl')
const { version } = require('axe-core')

const axeSource = readFileSync(require.resolve('axe-core'), 'utf8')
const ignores = [
  'Meta-refresh no delay',
]

/**
 * Run axe-pupppeteer in a given page, with a success criterion
 */
module.exports.axeRunner = async function axeRunner (page, {
  url = '', success_criterion = '', ruleName
}) {
  // Work out if axe knows how to test this page
  const tags = getTagsFromSC(success_criterion)
  if (
    ignores.includes(ruleName) || 
    url.substr(-4) === '.svg' ||
    tags.length === 0
  ) {
    return earlUntested({ url, version })
  }

  // Get the page and make sure it loads correctly
  await page.goto(url)
  const html = await page.$eval(':root', e => e.outerHTML);
  if (html.includes('Not Found')) {
    console.log(`Not Found ${url}`)
    return earlUntested({ url, version })
  }

  // Setup axe-puppeteer with the correct SC
  const axeRunner = new AxePuppeteer(page, axeSource)
  axeRunner.options({ reporter: 'raw' })
  axeRunner.withTags(tags)

  /* Run axe and return EARL */
  async function analyze () {
    const raw = await axeRunner.analyze()
    return axeReporterEarl({ raw, env: { url, version }})
  }

  return Promise.race([
    // Run axe to completion
    analyze(),
    // or, timeout after 5s
    timeoutReject(5000, `Timeout for page ${url}`)
  ])
}

/* Reject with a message after a certain time */
function timeoutReject(t, msg) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(msg)), t)
  })
}

/* Map Success criteria numbers to axe-core tags */
function getTagsFromSC (success_criterion) {
  return (success_criterion || []).map(sc => 'wcag' + sc.replace(/\./g, ''))
}
