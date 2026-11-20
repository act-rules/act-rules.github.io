import assert from 'node:assert/strict'
import test from 'node:test'

import { rewriteArchivedFrontmatter } from './archive-rule-snapshot.mjs'

const indexText = `---
title: "Element with lang attribute has valid language tag"
permalink: /standards-guidelines/act/rules/de46e4/
ref: /standards-guidelines/act/rules/de46e4/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/de46e4/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> de46e4</p>
  <p><strong>Date:</strong> Updated 20 December 2023</p>
proposed: false
rule_meta:
  id: de46e4
  last_modified: 20 December 2023
---

## Applicability

This rule applies to any element with a \`lang\` attribute.

See [rules](/standards-guidelines/act/rules/de46e4/) for the latest version.
`

test('rewrites permalink, ref and github path of the archived snapshot', () => {
	const archived = rewriteArchivedFrontmatter({ text: indexText, ruleId: 'de46e4', isoDate: '2023-12-20' })

	assert.match(archived, /^permalink: \/standards-guidelines\/act\/rules\/de46e4\/2023-12-20\/$/m)
	assert.match(archived, /^ref: \/standards-guidelines\/act\/rules\/de46e4\/2023-12-20\/$/m)
	assert.match(archived, /^ {2}path: content\/rules\/de46e4\/2023-12-20\.md$/m)
})

test('leaves the last_modified, footer date and body untouched', () => {
	const archived = rewriteArchivedFrontmatter({ text: indexText, ruleId: 'de46e4', isoDate: '2023-12-20' })
	const body = text => text.slice(text.lastIndexOf('\n---\n'))

	assert.match(archived, /^ {2}last_modified: 20 December 2023$/m)
	assert.match(archived, /<strong>Date:<\/strong> Updated 20 December 2023/)
	assert.equal(body(archived), body(indexText))
})

test('only changes the three frontmatter lines', () => {
	const archived = rewriteArchivedFrontmatter({ text: indexText, ruleId: 'de46e4', isoDate: '2023-12-20' })
	const originalLines = indexText.split('\n')

	const changedKeys = archived
		.split('\n')
		.filter((line, index) => line !== originalLines[index])
		.map(line => line.trim().split(':')[0])

	assert.deepEqual(changedKeys, ['permalink', 'ref', 'path'])
})

test('throws when the snapshot has no frontmatter', () => {
	assert.throws(
		() => rewriteArchivedFrontmatter({ text: '## Applicability\n', ruleId: 'de46e4', isoDate: '2023-12-20' }),
		/start with YAML frontmatter/
	)
})

test('throws when the frontmatter does not have the expected rule URLs', () => {
	const otherRule = indexText.replaceAll('de46e4', 'abc123')

	assert.throws(
		() => rewriteArchivedFrontmatter({ text: otherRule, ruleId: 'de46e4', isoDate: '2023-12-20' }),
		/Expected 2 lines with the permalink and ref/
	)
})
