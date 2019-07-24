const { copy } = require('fs-extra')
const onCreateNode = require('./gatsby/on-create-node')
const createPages = require('./gatsby/create-pages')

exports.onPreBootstrap = async () => {
	/**
	 * copy `testcases` and relevant `assets` to `public` directory (these are created via npm script `createTestcases`)
	 * Note:
	 * `gatsby build` cleans all `html` and `css` files within the destination directory, hence the need to copy these during `bootstrap` step
	 */
	await copy('./_data/rules-testcases', 'public')
}
exports.onCreateNode = onCreateNode
exports.createPages = createPages
