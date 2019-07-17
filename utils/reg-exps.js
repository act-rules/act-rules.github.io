const regexps = {
	testcaseTitle: /^#### (.*)/m,
	testcaseCodeSnippetTypeIsSvg: /```svg/gm,
	glossaryReferenceInRules: /\s\[[^(]*?\]\r?\n?\(#.*?\)/g,
	glossaryKey: /\(([^)]+)\)/,
}

module.exports = regexps
