const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-implementer-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/implementer.js"))),
  "component---src-templates-rule-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/rule.js"))),
  "component---src-templates-changelog-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/changelog.js"))),
  "component---src-templates-default-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/default.js"))),
  "component---src-templates-implementations-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/implementations.js"))),
  "component---src-templates-glossary-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/templates/glossary.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/pages/404.js"))),
  "component---src-pages-glossary-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/pages/glossary.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/pages/index.js"))),
  "component---src-pages-rules-js": hot(preferDefault(require("/Users/jey/Documents/work/deque/act-rules.github.io/src/pages/rules.js")))
}

