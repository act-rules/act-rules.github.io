#!/usr/bin/env zx
import 'zx/globals'
import assert from 'assert'
import moment from 'moment'

import { config, cloneWcagActRules, createOrCheckoutBranch, commitAndPush } from './commons.mjs'
import { parseChanges, updateRuleVersions } from './update-rule-versions.mjs'

const w3cDataFormat = 'D MMMM YYYY'
const isoDateFormat = 'YYYY-MM-DD'

assert(typeof argv.ruleId === 'string', 'Expected --ruleId to be set')
assert(argv.ruleId.length === 6, 'Expected --ruleId to be 6 characters long')
assert(typeof argv.branch === 'string', 'Expected --branch to be set')
const changes = parseChanges(argv)

if (!argv['skip-clone']) {
	await cloneWcagActRules(config)
}

await createOrCheckoutBranch(config, argv.branch)
const ruleVersionsUpdate = prepareRuleVersionsUpdate(config, argv.ruleId, changes)
await generateApprovedRulePages(config, argv.ruleId)
writeRuleVersionsYaml(ruleVersionsUpdate, argv.ruleId)
await approveexampleJson(config, argv.ruleId)
await commitAndPush(config, `Set ${argv.ruleId} to approved`)

async function generateApprovedRulePages({ tmpDir, rulesDir, glossaryDir, testAssetsDir }, ruleId) {
	await $`node ./node_modules/act-tools/dist/cli/rule-transform.js \
  --rulesDir "${rulesDir}" \
  --glossaryDir "${glossaryDir}" \
  --testAssetsDir "${testAssetsDir}" \
  --outDir "${tmpDir}" \
  --ruleIds "${ruleId}"
  `
}

function prepareRuleVersionsUpdate({ tmpDir }, ruleId, changes) {
	const ruleVersionPath = `${tmpDir}_data/wcag-act-rules/rule-versions.yml`
	const ruleVersions = YAML.parse(fs.readFileSync(ruleVersionPath, 'utf8'))

	const proposedText = fs.readFileSync(`${tmpDir}content/rules/${ruleId}/proposed.md`, 'utf8')
	const proposedW3cDate = proposedText.match(/last_modified:\s+(.*)/)?.[1]
	assert(proposedW3cDate, `Unable to find last_modified data in ${ruleId}/proposed.md`)

	const result = updateRuleVersions({
		ruleVersions,
		ruleId,
		proposedDate: {
			w3cDate: proposedW3cDate,
			isoDate: moment(proposedW3cDate, w3cDataFormat).format(isoDateFormat),
		},
		w3cDate: moment().format(w3cDataFormat),
		isoDate: moment().format(isoDateFormat),
		changes,
	})

	if (result.isReapproval) {
		const ruleDir = `${tmpDir}content/rules/${ruleId}/`
		fs.copyFileSync(`${ruleDir}index.md`, `${ruleDir}${result.previousIsoDate}.md`)
		console.log(`Archived ${ruleId}/index.md as ${result.previousIsoDate}.md`)
	}

	return { ruleVersionPath, ruleVersions }
}

function writeRuleVersionsYaml({ ruleVersionPath, ruleVersions }, ruleId) {
	fs.writeFileSync(ruleVersionPath, YAML.stringify(ruleVersions), 'utf8')
	console.log(`Updated ${ruleId} in rule-versions.yml`)
}

async function approveexampleJson({ tmpDir }, ruleId) {
	let exampleCount = 0
	const exampleJsonPath = `${tmpDir}content-assets/wcag-act-rules/examples.json`
	const exampleJson = JSON.parse(fs.readFileSync(exampleJsonPath, 'utf8'))
	exampleJson.examples.forEach((example, index) => {
		if (example.ruleId === ruleId) {
			// Override rather than update so that `approved` isn't at the bottom
			exampleJson.examples[index] = { ruleId, approved: true, ...example }
			exampleCount++
		}
	})
	console.log(`Set ${exampleCount} examples of rule ${ruleId} to be approved in examples.json`)
	fs.writeFileSync(exampleJsonPath, JSON.stringify(exampleJson, null, 2), 'utf8')
}
