const { config: { implementations } } = require('./../package.json')
const getFramedReport = require('./implementations/get-framed-report')
const getImplementation = require('./implementations/get-implementation')
const createFile = require('./../utils/create-file')

/**
 * Create implementation metrics, that can be used in the site, 
 * for each `implementation` provided as configuration in `package.json`.
 */
const init = async () => {
  if (!implementations || !Object.keys(implementations).length) {
    throw new Error('No implementations are specified in `config` of `package.json`')
  }

  for (let item of implementations) {
    const { provider, tool, data } = item

    console.info(`Get implementation data of ${tool} by ${provider}\n`)

    /**
     * fetch report & frame as required
     */
    const framedReport = await getFramedReport(data)

    /**
     * get implementation metrics from report
     */
    const implementation = await getImplementation(framedReport)

    await createFile(
      `public/implementations/${tool}.json`,
      JSON.stringify(implementation, null, 2)
    )
  }
}

init()
  .then(() => console.info(`Implementations data generated.`))
  .catch(err => {
    console.error(err);
    process.exit(1)
  })