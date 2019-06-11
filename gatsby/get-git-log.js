/**
 * Note:
 * Borrowed and slightly modified from `https://gist.github.com/sergey-shpak/40fe8d2534c5e5941b9db9e28132ca0b#file-git-log-to-json-js`
 */
const { exec } = require('child_process')

const command = (params, file) =>
	`git log --pretty=format:"${params.join(command.format.param)}${
		command.format.line
	}" --follow -- ${file}`

const hash = 451436388.16325235 //Math.random()*10e8;
command.format = {
	line: hash.toString(36),
	param: +hash.toString(36),
}

const getGitLog = options =>
	new Promise((resolve, reject) => {
		const { schema, file } = options

		const keys = Object.keys(schema)
		const params = keys.map(key => schema[key])

		exec(command(params, file), (err, stdout) => {
			if (err) {
				reject(err)
			}
			const result = stdout
				.split(command.format.line)
				.filter(line => line.length)
				.map(line =>
					line.split(command.format.param).reduce((obj, value, idx) => {
						const key = keys[idx]
						const val = value.trim()
						obj[key] = val
						return obj
					}, {})
				)
			resolve(result)
		})
	})

module.exports = getGitLog

/**
 * Usage:
 * 
 * 	const changelogOptions = {
		file: `./_rules/aria-attr-valid-5f99a7.md`,
		schema: {
			commit: "%H",
			msg: "%s"
		}
	}
	const ruleChangelog = await getGitLog(changelogOptions, (key, value) => value.replace(/\s\s/g, ''))
	console.log(ruleChangelog);

 */
