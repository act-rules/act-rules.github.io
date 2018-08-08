// https://github.com/w3c/wai-wcag-quickref/blob/gh-pages/_data/wcag21.json
const wcagData = require('./_data/wcag21-en.json') // Note: perhaps can fetch this dynamically to allow to keep up with changes to this json
const fs = require('fs')
const outputFile = './_data/sc-urls.json'
const urlPrefix = `https://www.w3.org/TR/WCAG`
const urls = {}

wcagData['principles'].forEach((p) => {
	p.guidelines.forEach((g) => {
		g.successcriteria.forEach((sc) => {
			const is20 = !(sc.versions && sc.versions.length === 1 && sc.versions.includes('2.1'));
			const wcagSuffix = is20 ? '20' : '21';
			const path = is20
				? sc.alt_id[0] 
				: sc.id.split(':').reverse()[0]
			const url = `${urlPrefix}${wcagSuffix}/#${path}`
			const howToMeetUrl = `${is20 ? 'http://www.w3.org/WAI/WCAG20/quickref/#qr-' : 'https://www.w3.org/WAI/WCAG21/quickref/#'}${path}`
			const understandingUrl = `${is20 ? 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/' : 'https://www.w3.org/WAI/WCAG21/Understanding/'}/${path}.html`
			urls[sc.num] = {
				num: sc.num,
				url,
				howToMeetUrl,
				understandingUrl,
				handle: sc.handle,
				level: sc.level,
				wcagType: wcagSuffix.split('').join('.')
			}
		})
	})
})

fs.writeFile(
	outputFile, 
	JSON.stringify(urls), 
	function(err) {
	if(err) {
		return console.error(err)
	}
	console.log(`${outputFile} file generated!`)
})