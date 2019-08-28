const path = require('path')

const getTemplate = (type, slug) => {
	const map = {
		glossary: './src/templates/glossary.js',
		rules: './src/templates/rule.js',
		implementer: './src/templates/implementer.js',
		changelog: './src/templates/changelog.js'
	}

	if (Object.keys(map).includes(type)) {
		return path.resolve(map[type])
	}

	if (type === 'implementations' && slug.includes('overview')) {
		return path.resolve('./src/templates/implementations.js')
	}

	return path.resolve('./src/templates/default.js')
}

module.exports = getTemplate
