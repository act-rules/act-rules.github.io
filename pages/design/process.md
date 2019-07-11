---
title: Process (DRAFT)
---

## [DRAFT]: Overview of process/workflow in ACT Rules Community Group:

- Ideas looking for initial approvals
- To Do
- In Progress
- Needs Reviews
- Final Call
- Done
- Rejected

(see workflow on the board here: https://github.com/auto-wcag/auto-wcag/projects/5)

## Ideas looking for initial approvals
Short description: Initial review of the general concept and validity of the rule.

### Enters this stage when: 
- A new rule is first proposed.

### Passes this stage and moves on to "To Do" when: 
- Currently no explicit criteria for passing this stage, but 3 intial approvals from different organisations is recommended. This should give an indication on whether the rule can get 3 final approving reviews and get through Final Call later.

### Fails this stage and becomes "Rejected" when: 
- There is general disagreement that the rule is a valid test for the accessibility requirement it supposedly maps to.

### Instructions for this stage

#### Rule author's job for this stage: 
- Creating the pull request (PR) for the rule already at this stage is recommended, but for content of the rule it should be enough to have e.g. a title, a description and success criteria listed, for reviewers to be able to evaluate the idea for the rule. Creating the rule as a pull request already here allows for keeping the discussion of the rule in one place. However, if a rule writer prefers using issues at this stage, this is also allowed.

#### Reviewer's job for this stage: 
- Focus on whether the rule is a valid test for the accessibility requirements (WCAG success criteria) that it lists.
- Focus on whether you can agree to the general concept of the rule, or if the idea needs to be tweaked or rejected all together.
- Be honest about your concerns, since rejecting a rule at this point will save a lot of resources compared to rejecting it at the Final Call later.

### Background 
The purpose of this stage is to avoid that people spend a huge amount of time on writing rules and reviewing details in them to then see the whole concept of the rule rejected when looking for a final review. 

## To do
Short description: Rules waiting to be picked up and worked on.

### Enters this stage when: 
- Rule ideas: Rules that have passed the "Ideas looking for initial approvals" stage, or
- Published rules: Bugs that have been reported in for published rules.

### Passes this stage and moves on to "In Progress" when: 

### Fails this stage and moves back a stage to "Ideas looking for initial approvals" when: 
- ??? 

### Instructions for this stage

#### Rule author's job for this stage: 

#### Reviewer's job for this stage: 

## In Progress / Changes Requested
Short description: Rule writing

### Enters this stage when: 
- Work on a "To do" item is being picked up by someone.

### Passes this stage when: 
- There are no open comments from reviewers. 

### Fails this stage and moves back a stage to "To Do" when: 

### Instructions for this stage

#### Rule author's job for this stage: 
- Write and refine rule.
- Resolve all comments from reviewers.

#### Reviewer's job for this stage: 
- ???

## Needs Reviews

### Enters this stage when: 
- All open comments have been resolved, and all "Changes requested" reviews dismissed.

### Passes this stage when: 
- 3 approvals from different organisations have been given.

### Fails this stage and moves back a stage to "In Progress / Changes requested" when: 
- "Changes requested" reviews comes in, which moves it back to "In progress / Changes Requested"

### Instructions for this stage

#### Rule author's job for this stage:

#### Reviewer's job for this stage: 

## Final Call (aka Call for Consensus (CFC))

### Enters this stage when:
- Rule has 3 approvals from other organisations.
- Rule author considers the rule to be in its final form.
- Rule is either a new rule or an already published rule where substantial changes have been made.

#### Changes that does require a "Final call"
Substantial changes, that require a "Final call", are in general changes that can affect the outcome of a rule.
This includes, but might not be limited to changes that changes, extends or limits the scope of what is considered for these sections:

- Accessibility Requirements (success criteria)
- Applicability
- Expectations
- Test cases (Passed/Failed/Inapplicable)

#### Changes that does not require a "Final call"
These changes are considered non-substantial and will not require a "Final call" before being published:

- Editorial changes, that does not change the meaning of a rule (also if it's in the Applicability or Expectations)
- Changes to the Assumptions, Background, Accessibility Support. If changes to these sections seem to impact the possible outcomes of a rule, probably these sections have been misused.

### Passes this stage when:
- No changes or only changes that do not require a final call is made to the rule after Final Call is launched.

### Fails this stage and moves back two stages to "In Progress" when: 
- Changes that do require a final call is made to the rule after Final Call is launched.

If this happens, a new final call should be launched after the first one. It is recommended to let the first final call expire first, before launching a new one, to get a broad range of reviewers on board already in the first round to hopefully avoid multiple rounds of final calls for the same pull request.

### Instructions for this stage

#### Rule author's job for this stage: 
- Send email out to all of ACT Rules Community Group that rule is in Final Call for the next 2 weeks.
- ...

#### Reviewer's job for this stage: 
- Thorough reviews, take time to dive into the rule.
- When commenting, please note whether you consider the suggested changes to be substantial or not (whether the change falls into the category of changes that do require a final call, or the ones the do not require a final call).
- For tool vendors and testing methodology owners: Implement rule in tools and methodologies 
   - At this stage, the rule should be quite stable, minimising the risk of doing a too-early implementation, that has to be re-done from scratch later due to changes in the rule.
   - Implementations are important at this stage, since we often find things that needs to be changed in rules as soon as we start implementing them, e.g. issues with test cases, ambiguities in applicability or expectations, missing definitions etc.
- Be aware that this is last chance to object to the rule, on everything from spelling and grammar to accessibility requirements mapping and use of definitions.
- Keep up to date on Final Calls using this list: https://github.com/act-rules/act-rules.github.io/labels/Final%20call

### Background
We encourage initial implementations BEFORE publishing the rule, so that all the feedback from the implementation can get included in the original pull request, instead of being raised as new issues for already published rules - making even published rules quite unstable.

### Done

### Enters this stage when: 
- A rule has received 3 approvals from 3 different organisations and successfully survived its 2 week Final Call (if applicable), and has been merged and is now shown on rules overview on the website: https://act-rules.github.io/rules/ (might take a few minutes to update after merge).

### Rejected

### Enters this stage when: 
- Initial rules don't get the backing they need to move on through the process.
- When a rule at any stage is dropped because it lacks backing in the Community Group.
