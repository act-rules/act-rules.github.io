var fs = require('fs-extra');
var path = require('path');
var wcag2Json = require('./wcag2-en.json');

var filePath = path.resolve(__dirname, '../pages/rules.md');
var rulesPath = path.resolve(__dirname, '../rules');


function url(c) {
	return c.id.replace('WCAG2:', 'https://www.w3.org/TR/WCAG20/#');
}



function createRulesMdFile() {
	var ruleFiles = fs.readdirSync(rulesPath);
	var rulesMap = ruleFiles.reduce(function (rulesMap, filePath) {
		if (path.extname(filePath) === '.md') {
			var fileName = path.basename(filePath, '.md');
			(fileName.match(/SC\d-\d-\d/gi) || []).forEach(function (sc) {
				sc = sc.replace(/-/g, '.').replace(/sc/i, '');
				if (!rulesMap[sc]) {
					rulesMap[sc] = [];
				}
				rulesMap[sc].push(fileName);
			});
		}

		return rulesMap;
	}, {});

	var out = wcag2Json.principles
	.map(function (p) {
		var txt = '## Principle ' + p.num + ' ' + p.handle;

		var body = p.guidelines
		.map(function (g) {
			var txt = '### ' + g.num + ' ' + g.handle;
			var body = g.successcriteria
			.map(function (c) {
				var txt = '- [' + c.num + ' ' + c.handle + '](' + url(c) + ')';
				var body = '';
				if (rulesMap[c.num]) {
					body += rulesMap[c.num].map(function (rule) {
						return '  - [' + rule + '](rules/' + rule + '.html)';
					}).join('\n');
				}

				return txt + '\n' + body;
			}).join('\n\n');

			return txt + '\n' + body;
		}).join('\n\n');

		return txt + '\n' + body;
	}).join('\n\n');

	fs.outputFileSync(filePath, '# WCAG 2.0 \n\n' + out);
}


if(require.main === module) {
	createRulesMdFile();
} else {
	module.exports = createRulesMdFile;
}