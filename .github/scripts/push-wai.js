#!/usr/bin/env zx
import 'zx/globals'
import { config, commitAndPush } from './commons.mjs'

const commitMessage = (await $`git log -1 --pretty=%B`).stdout
await commitAndPush(config, commitMessage)
