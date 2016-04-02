
var readDir = require('./read-dir-recursive');
var marked = require('marked');
var Handlebars = require('handlebars');

var fs = require('fs-extra');
var path = require('path');

var pagesDir = path.resolve(__dirname, '../pages/');
var rulesDir = path.resolve(__dirname, '../rules/');
var outDir = path.resolve(__dirname, '../dist/');
var templatePath = path.resolve(__dirname, './spec-template.html');
var tmpRuleDir = path.join(pagesDir, './rules/');

// Empty the output directory
fs.emptydirSync(outDir);

// Copy rules to the pages dir. We'll remove them again below
fs.copySync(rulesDir, tmpRuleDir);

// Load the handlebars template
var template = fs.readFileSync(templatePath, 'utf-8');

var pages = readDir(pagesDir);
pages.forEach(function (pagePath) {
	var markdownText = fs.readFileSync(pagePath, 'utf-8');
	var htmlText = marked(markdownText);

	var html = template.replace('{{content}}', htmlText);
	var compiledTemplate = Handlebars.compile(html);
	html = compiledTemplate({
		'title': path.basename(pagePath, '.md')
	});

	var outPath = pagePath.replace(pagesDir, outDir).replace('.md', '.html');
	fs.outputFileSync(outPath, html);
	console.log('created file at', outPath);
});

// And remove the tmp rule directory
fs.removeSync(tmpRuleDir);