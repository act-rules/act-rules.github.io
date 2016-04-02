
// var readRecursively = require('fs-readdir-recursive');
var marked = require('marked');

var fs = require('fs-extra');
var path = require('path');

var specDir = path.resolve(__dirname, '../specs/');
var outDir = path.resolve(__dirname, '../dist/');
var templatePath = path.resolve(__dirname, './spec-template.html');
var template = fs.readFileSync(templatePath, 'utf-8');

// var specFiles = readRecursively(specDir);
var specFiles = [
	'/SC1-1-1-aria-describedby.md',
	'/SC1-1-1-css-image.md',
];

specFiles.forEach(function (fileName) {
	var specMd = fs.readFileSync(specDir + fileName, 'utf-8');
	var specHtml = marked(specMd);

	var html = template
	.replace('<!-- title -->', fileName)
	.replace('<!-- spec -->', specHtml);

	var htmlPath = path.join(outDir, fileName.replace('.md', '.html'));
	fs.outputFileSync(htmlPath, html);
	console.log('created file at', htmlPath);

});