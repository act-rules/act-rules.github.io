const globby = require('globby')
const glossaryUsages = require('./../_data/glossary-usages.json')
const glossaryFiles = globby.sync([`./pages/glossary/*.md`])
  .map(path =>
    path.replace('./pages/glossary/', '')
  )

describe('has content for all referenced glossary terms', () => {
  test.each(Object.keys(glossaryUsages))('has glossary file `%s`',
    glossaryKey => {
      const filename = `${glossaryKey.replace('#', '')}.md`
      const fileExists = glossaryFiles.includes(filename)

      if(!fileExists) {
        console.log(`glossary missing for ${glossaryKey}, usages below:`)
        console.table(glossaryUsages[glossaryKey])
      }
      expect(fileExists).toBe(true)
    })
})