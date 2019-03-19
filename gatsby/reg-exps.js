const regexps = {
	testcaseTitle: /^#### (.*)/m,
	testcaseCodeSnippetTypeIsSvg: /```svg/gm,
	glossaryReferenceInRules: /\s\[[^(]*?\]\(#.*?\)/g,
	glossaryKey: /\(([^)]+)\)/,
}

module.exports = regexps
