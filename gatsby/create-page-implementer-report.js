const implementers = require('../_data/implementers.json');
const getTemplate = require('./get-template')

const createPageImplementerReport = (options) => {
  const { actions } = options
  const { createPage } = actions

  // Your component that should be rendered for every item in JSON.

  // Create pages for each JSON entry.
  implementers.forEach(implementer => {
    const { tool, organisation } = implementer

    const filename = tool
      .split(' ')
      .join('-')
      .toLowerCase()

    const slug = `implementation/${filename}`;

    createPage({
      path: slug,
      component: getTemplate('implementer'),
      context: {
        slug,
        filename,
        title: `Implementation Report of ${tool} (${organisation})`,
        data: JSON.stringify(implementer)
      }
    });
  });
}

module.exports = createPageImplementerReport