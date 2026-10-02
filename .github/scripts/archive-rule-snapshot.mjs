import assert from 'node:assert'

const frontmatterPattern = /^---\r?\n[\s\S]*?\r?\n---(\r?\n|$)/

/**
 * Point the frontmatter of an archived rule snapshot at its dated URL and file,
 * leaving the rest of the page (including `last_modified` and the footer date)
 * as it was when the rule was approved.
 */
export function rewriteArchivedFrontmatter({ text, ruleId, isoDate }) {
	assert(/^[0-9a-z]{6}$/.test(ruleId), `Expected a 6 character rule id, got "${ruleId}"`)
	assert(/^\d{4}-\d{2}-\d{2}$/.test(isoDate), `Expected an ISO 8601 date, got "${isoDate}"`)

	const frontmatter = text.match(frontmatterPattern)?.[0]
	assert(frontmatter, `Expected the ${ruleId} snapshot to start with YAML frontmatter`)

	let rewritten = replaceLines(frontmatter, {
		pattern: new RegExp(`^(permalink|ref): (/standards-guidelines/act/rules/${ruleId}/)$`, 'gm'),
		replacement: `$1: $2${isoDate}/`,
		expected: 2,
		description: `permalink and ref of ${ruleId}/index.md`,
	})
	rewritten = replaceLines(rewritten, {
		pattern: new RegExp(`^(\\s*path: content/rules/${ruleId}/)index\\.md$`, 'gm'),
		replacement: `$1${isoDate}.md`,
		expected: 1,
		description: `github path of ${ruleId}/index.md`,
	})

	return rewritten + text.slice(frontmatter.length)
}

function replaceLines(text, { pattern, replacement, expected, description }) {
	const matches = text.match(pattern) ?? []
	assert(matches.length === expected, `Expected ${expected} lines with the ${description}, found ${matches.length}`)
	return text.replace(pattern, replacement)
}
