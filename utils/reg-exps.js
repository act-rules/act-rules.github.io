const regexps = {
	testcaseTitle: /^#### (.*)/m,
	testcaseCodeSnippetTypeIsSvg: /```svg/gm,
	/*
	  Detecting glossary usages in rules.
		1. Classical usage => "the element has an [accessible name](#accessible-name)"
		\[[^(]*?\] => any number of non-'(' within square brackets
		\(#.*?\) => a '#' followed by any number of character, within parenthesis
		2. Internal reference => '[refname]: key "title"'
		\[[^\]]+\]: +[^ ]* + => one or more non-']' within square brackets, a ': ', one or more non-' ' characters, ' '
	*/
	glossaryReferenceInRules: /\s\[[^(]*?\]\r?\n?\(#.*?\)/g,
	glossaryDefinitionInRules: /\[[^\]]+\]: +[^ ]* +/g,
	/*
		Detecting and remembering glossary keys
		1. Classical usage => 'this is a link [link](key)'
		\(([^)]+)\) => one or more non-'(' within parenthesis and remember the content of the parenthesis as first group.
		2. Internal reference => '[refname]: key "title"'
		/.*:\s+(.*)\s+/ => drop everything before the ':', remember the space separated first word after it.
	*/
	glossaryKey: /\(([^)]+)\)/,
	glossaryKeyInDefinition: /.*:\s+(.*)\s+/,
}

module.exports = regexps
