import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

import { parseChanges, updateRuleVersions } from './update-rule-versions.mjs'

const dates = {
	proposedDate: { w3cDate: '1 January 2024', isoDate: '2024-01-01' },
	w3cDate: '21 September 2026',
	isoDate: '2026-09-21',
}

test('adds first-time proposed and index versions without changes', () => {
	const ruleVersions = {}

	const result = updateRuleVersions({ ruleVersions, ruleId: 'abc123', ...dates })

	assert.deepEqual(result, { isReapproval: false })
	assert.deepEqual(ruleVersions.abc123, [
		{
			file: 'proposed.md',
			url: 'abc123/proposed/',
			w3cDate: '1 January 2024',
			isoDate: '2024-01-01',
		},
		{
			file: 'index.md',
			url: 'abc123/',
			w3cDate: '21 September 2026',
			isoDate: '2026-09-21',
		},
	])
})

test('keeps an existing proposed version on first-time approval', () => {
	const proposed = {
		file: 'proposed.md',
		url: 'abc123/proposed/',
		w3cDate: '2 February 2024',
		isoDate: '2024-02-02',
	}
	const ruleVersions = { abc123: [proposed] }

	updateRuleVersions({ ruleVersions, ruleId: 'abc123', ...dates })

	assert.equal(ruleVersions.abc123[0], proposed)
	assert.equal(ruleVersions.abc123[1].file, 'index.md')
})

test('re-approval archives the current index and records explicit changes', () => {
	const proposed = {
		file: 'proposed.md',
		url: 'abc123/proposed/',
		w3cDate: '1 January 2024',
		isoDate: '2024-01-01',
	}
	const current = {
		file: 'index.md',
		url: 'abc123/',
		w3cDate: '3 March 2025',
		isoDate: '2025-03-03',
		changes: ['Old change'],
	}
	const older = {
		file: '2024-04-04.md',
		url: 'abc123/2024-04-04/',
		w3cDate: '4 April 2024',
		isoDate: '2024-04-04',
	}
	const ruleVersions = { abc123: [proposed, current, older] }

	const result = updateRuleVersions({
		ruleVersions,
		ruleId: 'abc123',
		changes: ['Clarify applicability', 'Add an example'],
		...dates,
	})

	assert.deepEqual(result, { isReapproval: true, previousIsoDate: '2025-03-03' })
	assert.deepEqual(ruleVersions.abc123, [
		proposed,
		{
			file: 'index.md',
			url: 'abc123/',
			w3cDate: '21 September 2026',
			isoDate: '2026-09-21',
			changes: ['Clarify applicability', 'Add an example'],
		},
		{
			...current,
			file: '2025-03-03.md',
			url: 'abc123/2025-03-03/',
		},
		older,
	])
})

test('re-approval rejects an empty changelog', () => {
	const ruleVersions = {
		abc123: [{ file: 'index.md', isoDate: '2025-03-03', w3cDate: '3 March 2025' }],
	}

	assert.throws(
		() => updateRuleVersions({ ruleVersions, ruleId: 'abc123', ...dates }),
		/requires at least one changelog entry/
	)
})

test('combines a YAML changes file with repeated change flags', () => {
	const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'approve-rule-changes-'))
	const changesFile = path.join(directory, 'changes.yml')
	fs.writeFileSync(changesFile, '- Change from file one\n- Change from file two\n')

	try {
		assert.deepEqual(
			parseChanges({
				changesFile,
				change: ['Change from flag one', 'Change from flag two'],
			}),
			['Change from file one', 'Change from file two', 'Change from flag one', 'Change from flag two']
		)
	} finally {
		fs.rmSync(directory, { recursive: true })
	}
})
