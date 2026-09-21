import assert from 'node:assert'
import fs from 'node:fs'
import yaml from 'js-yaml'

export function parseChanges({ change, changesFile } = {}) {
	const cliChanges = change === undefined ? [] : Array.isArray(change) ? change : [change]
	let fileChanges = []

	if (changesFile !== undefined) {
		assert(typeof changesFile === 'string', 'Expected --changesFile to be a path')
		fileChanges = yaml.load(fs.readFileSync(changesFile, 'utf8'))
		assert(Array.isArray(fileChanges), `Expected ${changesFile} to contain a YAML list of changes`)
	}

	const changes = [...fileChanges, ...cliChanges]
	assert(
		changes.every(changeEntry => typeof changeEntry === 'string' && changeEntry.trim().length > 0),
		'Each changelog entry must be a non-empty string'
	)
	return changes
}

export function updateRuleVersions({ ruleVersions, ruleId, proposedDate, w3cDate, isoDate, changes = [] }) {
	const existingVersions = ruleVersions[ruleId] ?? []
	const currentIndex = existingVersions.find(version => version.file === 'index.md')
	const proposedVersion = existingVersions.find(version => version.file === 'proposed.md') ?? {
		file: 'proposed.md',
		url: `${ruleId}/proposed/`,
		w3cDate: proposedDate.w3cDate,
		isoDate: proposedDate.isoDate,
	}

	const newIndex = {
		file: 'index.md',
		url: `${ruleId}/`,
		w3cDate,
		isoDate,
	}

	if (!currentIndex) {
		ruleVersions[ruleId] = [
			proposedVersion,
			newIndex,
			...existingVersions.filter(version => version !== proposedVersion),
		]
		return { isReapproval: false }
	}

	assert(changes.length > 0, `Re-approval of ${ruleId} requires at least one changelog entry`)
	assert(currentIndex.isoDate, `Existing index.md version for ${ruleId} must have an isoDate`)

	newIndex.changes = changes
	const archivedIndex = {
		...currentIndex,
		file: `${currentIndex.isoDate}.md`,
		url: `${ruleId}/${currentIndex.isoDate}/`,
	}
	const otherVersions = existingVersions.filter(version => version !== proposedVersion && version !== currentIndex)
	ruleVersions[ruleId] = [proposedVersion, newIndex, archivedIndex, ...otherVersions]

	return { isReapproval: true, previousIsoDate: currentIndex.isoDate }
}
