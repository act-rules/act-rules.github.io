function getComponent(type, slug) {
	const map = {
		glossary: './src/templates/glossary.js',
		rules: './src/templates/rule.js',
	};

	if (Object.keys(map).includes(type)) {
		return map[type];
	}

	if (type === 'implementations' && slug.includes('reporting')) {
		return './src/templates/coverage.js';
	}

	return './src/templates/default.js';
}

module.exports = getComponent;
