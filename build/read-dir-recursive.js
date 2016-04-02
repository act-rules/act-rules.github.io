var fs = require('fs');
var path = require('path');

function readRecursively(dir) {
	var files = fs.readdirSync(dir);
	return files.reduce(function (allFiles, file) {

		if (!fs.statSync(path.join(dir, file)).isDirectory()) {
			allFiles.push(path.join(dir, file));

		} else {
			var files = readRecursively(path.join(dir, file));
			allFiles = allFiles.concat(files);
		}
		return allFiles;
	}, []);
}

module.exports = readRecursively;