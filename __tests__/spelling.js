const retext = require('retext')
const spell = require('retext-spell')
const dictionary = require('dictionary-en-gb')
const reporter = require('vfile-reporter')

const describeRule = require('../test-utils/describe-rule')
const describePage = require('../test-utils/describe-page')

const temp = () => {
	return new Promise((resolve, reject) => {
		retext()
			.use(spell, dictionary)
			.process(body, function(err, file) {
				if (err) {
					reject(err)
				}
				resolve(file)
				done()
			})
	})
}
/**
 * Validate `Rules` and `Pages` for spelling/ typos.
 */
describePage('Validate text for spelling mistakes', () => {
	describeRule('Spellcheck Rules', async ruleData => {
		const { body } = ruleData
		try {
			const result = await temp(body)
		} catch (error) {
			console.error(reporter(error))
		}
	})
})
