/**
 * Get meta data of all WCAG success criteria
 * -> Output file: -> `./_data/sc-urls.json`
 * -> This is later used for hyperlinking SC of rules to respective specifications
 */
const path = require('path');
const axios = require('axios');
const createFile = require('./create-file');
const pkg = require('./../package.json');
const outputFile = path.join(__dirname, '..', '_data', 'sc-urls.json');

const isScWcag20 = sc => {
	const is20 = !(
		sc.versions &&
		sc.versions.length === 1 &&
		sc.versions.includes('2.1')
	);
	return is20;
};

const getMetaData = sc => {
	const urlPrefix = `https://www.w3.org/TR/WCAG`;
	const is20 = isScWcag20(sc);
	const wcagSuffix = is20 ? '20' : '21';
	const path = is20 ? sc.alt_id[0] : sc.id.split(':').reverse()[0];
	const url = `${urlPrefix}${wcagSuffix}/#${path}`;
	const howToMeetUrl = `${
		is20
			? 'http://www.w3.org/WAI/WCAG20/quickref/#qr-'
			: 'https://www.w3.org/WAI/WCAG21/quickref/#'
	}${path}`;
	const understandingUrl = `${
		is20
			? 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/'
			: 'https://www.w3.org/WAI/WCAG21/Understanding/'
	}/${path}.html`;
	return {
		num: sc.num,
		url,
		scId: sc.id,
		howToMeetUrl,
		understandingUrl,
		handle: sc.handle,
		level: sc.level,
		wcagType: wcagSuffix.split('').join('.'),
	};
};

const getScMetaData = async url => {
	const { data } = await axios.get(url);
	const scMetaData = {};
	const { principles } = data;
	principles.forEach(p =>
		p.guidelines.forEach(g =>
			g.successcriteria.forEach(sc => {
				scMetaData[sc.num] = getMetaData(sc);
			})
		)
	);
	return scMetaData;
};

(async () => {
	const wcagReferenceUrl = pkg.config.references.wcag21;
	if (!wcagReferenceUrl) {
		throw new Error('No reference URL for WCAG21 is specified in config.');
	}
	const data = await getScMetaData(wcagReferenceUrl);
	createFile(outputFile, JSON.stringify(data, undefined, 2));
	console.log('DONE!!! Generated WCAG Success Criterion Data.');
})();
