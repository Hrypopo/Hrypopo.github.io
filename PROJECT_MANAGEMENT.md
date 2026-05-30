# Project Management & Issue Tracking

## Overview
Chevza Enterprise uses Paperclip for issue tracking and project management, integrated with GitHub for version control and collaboration.

## Issue Tracking System

### Issue Types
We use the following issue types to categorize work:

1. **Feature** - New functionality or capabilities
   - Prefix: `feat:`
   - Label: `type: feature`
   - Example: "Add user authentication system"

2. **Bug** - Something isn't working as expected
   - Prefix: `fix:`
   - Label: `type: bug`
   - Example: "Fix login redirect loop"

3. **Enhancement** - Improvement to existing functionality
   - Prefix: `feat:` or `perf:`
   - Label: `type: enhancement`
   - Example: "Improve API response time"

4. **Documentation** - Documentation updates or additions
   - Prefix: `docs:`
   - Label: `type: docs`
   - Example: "Update API documentation"

5. **Technical Debt** - Code quality, refactoring, infrastructure
   - Prefix: `refactor:` or `chore:`
   - Label: `type: tech-debt`
   - Example: "Refactor authentication service"

6. **Security** - Security vulnerabilities or improvements
   - Prefix: `fix:` or `feat:`
   - Label: `priority: critical`, `type: security`
   - Example: "Fix XSS vulnerability in comment system"

### Issue Priorities

- **Critical** - Security issues, production outages, data loss
  - Response time: Immediate
  - Label: `priority: critical`

- **High** - Important features, significant bugs affecting users
  - Response time: Within 24 hours
  - Label: `priority: high`

- **Medium** - Standard features and bugs
  - Response time: Within 1 week
  - Label: `priority: medium`

- **Low** - Nice to have features, minor improvements
  - Response time: As capacity allows
  - Label: `priority: low`

### Issue States

1. **Backlog** - Not yet prioritized or scheduled
2. **In Progress** - Currently being worked on
3. **In Review** - PR submitted, awaiting review
4. **Blocked** - Cannot proceed due to dependencies
5. **Done** - Completed and merged
6. **Cancelled** - Will not be implemented

## Issue Workflow

### Creating an Issue

1. **Search first** - Check if similar issue exists
2. **Use templates** - Select appropriate issue template
3. **Provide details** - Clear description, steps to reproduce (for bugs)
4. **Add labels** - Type, priority, component
5. **Assign** - Self-assign if you'll work on it

### Issue Template Examples

#### Bug Report Template
```markdown
**Description**
A clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser/OS:
- Version:

**Screenshots**
If applicable

**Additional Context**
Any other relevant information
```

#### Feature Request Template
```markdown
**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should we solve it?

**Alternatives Considered**
Other approaches you've thought about

**Success Criteria**
How will we know it's successful?

**Additional Context**
Mockups, examples, etc.
```

### Working on Issues

1. **Assign yourself** - Claim the issue
2. **Move to "In Progress"** - Update status
3. **Create branch** - Follow naming convention
4. **Link commits** - Reference issue number
5. **Update progress** - Add comments with updates
6. **Create PR** - Link to original issue
7. **Move to "In Review"** - Update status

### Branch Naming Convention

Format: `<type>/<issue-number>-<brief-description>`

Examples:
- `feature/CHE-123-user-authentication`
- `bugfix/CHE-456-login-redirect`
- `docs/CHE-789-api-documentation`

## Project Boards

### Sprint Board
Track current sprint work (2-week iterations)

**Columns:**
- **To Do** - Planned for current sprint
- **In Progress** - Being worked on
- **In Review** - PR submitted
- **Done** - Completed this sprint

### Roadmap Board
Long-term planning and feature tracking

**Columns:**
- **Backlog** - Future ideas
- **Next** - Prioritized for upcoming sprint
- **Now** - Current sprint
- **Shipped** - Completed features

## Agile Practices

### Sprint Cadence
- **Sprint length**: 2 weeks
- **Sprint planning**: Monday (first day of sprint)
- **Daily standups**: Async updates in chat
- **Sprint review**: Friday (last day of sprint)
- **Retrospective**: After sprint review

### Sprint Planning Process

1. **Review backlog** - Prioritize issues
2. **Set sprint goals** - What will we achieve?
3. **Estimate work** - T-shirt sizes (S/M/L/XL)
4. **Assign issues** - Who does what?
5. **Commit to scope** - Team agrees on sprint scope

### Story Point Estimation

We use T-shirt sizing for simplicity:
- **XS** (1 point) - < 2 hours
- **S** (2 points) - 2-4 hours
- **M** (3 points) - 4-8 hours (half day to full day)
- **L** (5 points) - 1-2 days
- **XL** (8 points) - 2-3 days
- **XXL** (13 points) - 3-5 days (break into smaller tasks)

### Definition of Done

A task is "done" when:
- [ ] Code is written and committed
- [ ] All tests pass (unit, integration, e2e as applicable)
- [ ] Code review completed and approved
- [ ] Documentation updated
- [ ] PR merged to appropriate branch
- [ ] Issue closed and linked to PR
- [ ] No known bugs or regressions
- [ ] Deployed to staging (for features)

### Definition of Ready

An issue is "ready" for development when:
- [ ] Clear acceptance criteria defined
- [ ] Dependencies identified and resolved
- [ ] Design approved (if applicable)
- [ ] Estimated and sized
- [ ] Assigned to sprint
- [ ] All questions answered

## Communication

### Issue Comments
- Use comments for updates and questions
- Tag relevant people with @mentions
- Link related issues and PRs
- Keep discussion focused

### Status Updates
Provide regular updates on assigned issues:
- Progress made
- Blockers encountered
- Help needed
- Expected completion

### Blocker Protocol

If blocked:
1. **Document blocker** - Add comment explaining issue
2. **Tag stakeholders** - Notify relevant people
3. **Propose solutions** - Suggest ways to unblock
4. **Update status** - Move issue to "Blocked"
5. **Work on other tasks** - Don't sit idle

## Metrics & Reporting

### Key Metrics
- **Velocity** - Points completed per sprint
- **Cycle time** - Time from start to done
- **Lead time** - Time from created to done
- **Bug rate** - Bugs found vs. features shipped
- **PR review time** - Time to first review

### Sprint Reports
Generated automatically:
- Burndown chart
- Velocity trend
- Sprint completion rate
- Bug vs. feature ratio

## Tools Integration

### GitHub Integration
- Issues sync with GitHub
- PRs automatically linked
- Commits reference issues
- Status updates from CI/CD

### Automation
- Auto-assign reviewers based on file paths
- Auto-label based on file changes
- Auto-close issues when PR merged
- Slack notifications for important events

## Best Practices

### For All Team Members
1. **Keep issues updated** - Current status should be clear
2. **Use templates** - Ensures consistency
3. **Link everything** - Issues, PRs, commits
4. **Be responsive** - Reply to comments within 24h
5. **Ask questions** - Better to clarify than assume

### For Issue Authors
1. **Be specific** - Clear, detailed descriptions
2. **Provide context** - Why is this important?
3. **Include examples** - Screenshots, code samples
4. **Define success** - What does "done" look like?
5. **Stay engaged** - Answer questions from assignee

### For Assignees
1. **Claim quickly** - Self-assign within 24h
2. **Ask early** - Don't spin wheels, ask for help
3. **Update often** - Keep stakeholders informed
4. **Link work** - Reference issue in commits/PRs
5. **Close properly** - Verify all criteria met

## Issue Labels Reference

### Type Labels
- `type: feature` - New functionality
- `type: bug` - Something broken
- `type: enhancement` - Improvement
- `type: docs` - Documentation
- `type: tech-debt` - Refactoring, cleanup
- `type: security` - Security related

### Priority Labels
- `priority: critical` - Immediate attention
- `priority: high` - Important, soon
- `priority: medium` - Normal priority
- `priority: low` - Nice to have

### Component Labels
- `component: api` - API/backend
- `component: ui` - User interface
- `component: db` - Database
- `component: auth` - Authentication
- `component: infra` - Infrastructure
- `component: docs` - Documentation

### Status Labels
- `status: blocked` - Cannot proceed
- `status: needs-review` - Awaiting review
- `status: needs-testing` - Requires testing
- `status: needs-design` - Design needed

## Getting Help

- Check documentation first
- Search existing issues
- Ask in team chat
- Create discussion issue if needed
- Tag relevant experts

---

This project management system helps us stay organized, move quickly, and deliver high-quality work. Follow these practices to contribute effectively to Chevza Enterprise.
