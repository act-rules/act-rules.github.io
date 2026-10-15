# Examples: WAI changelog voice

Bullets below are copied from published `changes:` entries in `wcag-act-rules` `_data/wcag-act-rules/rule-versions.yml`. They show the voice. They are not a draft for a new diff.

## Published bullets

**de46e4**, archived `2022-06-23` (three effects, including a definition change as it hits this rule):

- Account for whitespace in the applicability
- Add assumption about text containing human language
- Account for focus redirects in "focusable" definition

**e086e5**, current `index.md` (substantive spec and examples, plus editorial background):

- Update to reference ARIA 1.2
- Remove outdated accessibility support info
- Editorial clarifications of the background
- New examples using menuitemcheckbox role

**e086e5**, archived `2022-06-23` (definition-only effects on this rule; YAML wraps the long line, it is one string):

- Account for focus redirects in "focusable" definition
- Let hidden attribute be handled by display:none in "programmatically hidden" definition

**9e45ec** and **24afc2**, current `index.md`:

- Update the rule's description
- Ignore style attributes which do not actually impact text
- Add assumption on text nodes being human language

**46ca7f**, current `index.md` (a single effect is enough):

- Update to reference ARIA 1.2

**2779a5**, current `index.md`:

- Replace Web Page definition with HTML-specific definition
- Add higher-level protocol assumption

**akn7bn**, current `index.md`:

- Added inapplicable example 5 and 6

**m6b1q3**, current `index.md` (editorial section only):

- Updated accessibility support section

**9e45ec**, archived `2022-06-23`:

- Simplify accessibility support paragraph

**73f2c2**, current `index.md`:

- Update to allow webauthn token
- Add several more examples

## What to do with commit subjects

Snapshot `changes[].subject` might look like:

- `prettier`
- `Update last_modified`
- `fix focusable (#1234)`
- `glossary: programmatically hidden`

The diff of the rendered approved page against `index.md` on `main` for the same history shows whitespace handling in Applicability, a new human-language assumption, and inlined glossary edits for "focusable" and "programmatically hidden".

Publish the effects, collapsed:

```yaml
- Account for whitespace in the applicability
- Add assumption about text containing human language
- Account for focus redirects in "focusable" definition
- Let hidden attribute be handled by display:none in "programmatically hidden" definition
```

Leave `prettier` and `last_modified` out. A definition commit that does not change the rendered approved page versus `index.md` on `main` does not get a bullet.

Labels for the confirm message (they stay out of the YAML):

| Bullet                                                                                  | Class                                                                                                                                                |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account for whitespace in the applicability                                             | substantive                                                                                                                                          |
| Add assumption about text containing human language                                     | editorial                                                                                                                                            |
| Account for focus redirects in "focusable" definition                                   | from the page diff: substantive if Applicability, Expectations, or example outcomes change; editorial if only the inlined definition wording changes |
| Let hidden attribute be handled by display:none in "programmatically hidden" definition | same rule as the focusable bullet                                                                                                                    |

Paragraph for that re-approval, if the definition edits change how the rule treats targets:

> This pull request updates the approved version of rule abcd12 (Example rule name). Substantive changes account for whitespace in the applicability and for focus redirects in the "focusable" definition, and let the hidden attribute be handled by display:none in the "programmatically hidden" definition. Editorial changes add an assumption that text contains human language.

`abcd12` and "Example rule name" are placeholders. Use the real id and frontmatter `name`.

## First-time approval

No `index.md` in `rule-versions.yml` for `abcd12`. Do not draft `changes:`, even if the Community Group history is long.

Paragraph:

> This pull request approves rule abcd12 (Example rule name) for the first time. There is no previous approved snapshot, so the version list has no changelog.

Command after acceptance, from `act-rules.github.io`:

```bash
npx zx .github/scripts/approve-rule.mjs --ruleId abcd12 --branch approve-abcd12
```

## Re-approval command

After the user accepts the four bullets above, write them to `/tmp/abcd12-changes.yml` as a YAML list and run:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --changesFile /tmp/abcd12-changes.yml
```

Equivalent flag form:

```bash
npx zx .github/scripts/approve-rule.mjs \
  --ruleId abcd12 \
  --branch approve-abcd12 \
  --change "Account for whitespace in the applicability" \
  --change "Add assumption about text containing human language" \
  --change "Account for focus redirects in \"focusable\" definition" \
  --change "Let hidden attribute be handled by display:none in \"programmatically hidden\" definition"
```

These examples are documentation. Do not run them while reading the skill, and do not run them against a real rule until the confirm gate for that rule has been accepted. After that command pushes the branch, the draft pull request body is the accepted paragraph plus `## Changes` and `## Preview`, as specified in `reference.md` (Draft pull request).
