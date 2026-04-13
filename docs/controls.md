# Architecture & controls

## Governance first

Part-IS lands hardest on teams that treat security as a side activity.

You want a lightweight but real operating model covering:

- policy
- scope and boundaries
- responsibilities and deputies
- risk assessment and treatment
- incident and vulnerability handling
- supplier oversight
- record-keeping
- change management
- periodic review and improvement

The point is to make security explainable, repeatable, and reviewable.

## Scope, assets, and interfaces

Do not scope only the customer-facing app.

Include the systems and dependencies that matter to operation and trust, for example:

- identity provider
- cloud platform and network edges
- CI/CD and release tooling
- admin/support tooling
- customer integrations and data import/export paths
- monitoring, alerting, and log storage
- contractors and managed-service providers

Map interfaces where data or administrative influence crosses organisational boundaries. That is where shared risk often hides.

## Risk model

Your risk model should be able to describe:

- the asset or service at risk
- the threat scenario
- the relevant vulnerability or weakness
- the possible operational or safety effect
- the interface or supplier involved, if any
- the current risk level
- the treatment decision and owner

If you use ISO, NIST, or another framework, fine. Part-IS does not force one. But the result needs to make sense in an aviation-safety context.

## Auth and privilege

For aviation-facing products, auth should usually be stricter than in a generic SMB SaaS.

Baseline expectations:

- MFA for admins, support, and other privileged users
- no shared admin accounts
- clear separation between platform admin, tenant admin, and end-user roles
- session visibility and revocation where feasible
- strong password reset and recovery controls
- controlled break-glass access with logging and review
- SSO readiness if enterprise customers are likely

## Tenant isolation and data separation

This is one of the easiest places to lose credibility.

Protect against:

- wrong-tenant queries and search results
- export/report leakage
- admin-tool bypasses
- job queue or background worker leakage
- cross-tenant file/object storage mistakes
- test/support access that bypasses normal controls

If you are multi-tenant, isolation should be visible in design reviews, tests, and audit trails.

## Logging, events, and evidence

Keep logs and records that support both operations and later reconstruction.

At minimum, capture:

- authentication events
- role and permission changes
- privileged actions
- configuration changes
- data exports and important downloads
- security alerts and escalations
- incident timeline decisions

The EASA material also leans on keeping security-event data long enough to reassess it later if needed. So think beyond app logs:

- alert history
- retained evidence for investigations
- vulnerability notifications and decisions
- supplier incident communications
- key risk and change records

Protect those records from tampering and casual access.

## Detection and vulnerability management

Detection is broader than SIEM alerts.

A sensible practical setup combines:

- baseline operational monitoring
- auth and privilege anomaly detection
- centralised log review where proportionate
- vulnerability intake from scanners, vendors, OSS sources, and researchers
- triage rules for safety-relevant systems
- clear warning/escalation thresholds

The key question is whether you can spot conditions that may become a serious incident early enough to act.

## Incident response and recovery

Have playbooks that cover at least:

- account compromise
- privilege misuse
- tenant data exposure
- malicious or mistaken configuration change
- supplier outage or supplier compromise
- serious vulnerability requiring urgent mitigation
- recovery of critical systems to a safe state

For each, define:

- who leads
- who must be informed
- containment options
- operational/safety trade-offs
- evidence preservation steps
- recovery priorities and target times

Aviation customers care whether you can fail in a controlled way, not just whether you can fail fast.

## Suppliers and contracted activities

Part-IS is blunt here: outsourcing work does not outsource accountability.

For important suppliers, know:

- what service they provide
- what data or systems they can access
- whether they administer anything sensitive
- how they notify you about incidents and vulnerabilities
- what evidence they can give you
- what happens if they are degraded or unavailable

If a supplier helps run security activities for you, expect stronger scrutiny from aviation customers.

## Personnel and access trust

Security posture is partly an org design problem.

Aim for:

- clear ownership for security, incident response, and compliance monitoring
- enough people on duty for the commitments you make
- training and competence evidence for relevant roles
- explicit acknowledgement of privileged responsibilities
- stronger trust checks for highly privileged or unsupervised access where justified

Lean teams can still do this well. Sloppy access habits are the real problem, not company size.

## Change management

Assess security impact before major changes to:

- auth and identity flows
- authorisation model
- tenant architecture
- infrastructure and network design
- logging/monitoring coverage
- key integrations and APIs
- outsourced or managed security activities
- recovery procedures

Record what changed, why, how it was reviewed, and what follow-up is required.

## Continuous improvement

Do not stop at “controls implemented”.

Track whether the system is getting better using indicators such as:

- overdue treatment actions
- time to triage and contain incidents
- privileged access review completion
- repeated control failures
- supplier issue closure time
- backup/restore test success
- training completion for key roles

Then use incidents, audits, reviews, and metrics to improve the system deliberately.

## Final practical rule

Build so you can answer these questions without hand-waving:

- What is in scope and why?
- Which interfaces and suppliers create shared risk?
- Who can access what, and how do we know?
- How do we detect and escalate incidents and vulnerabilities?
- How do we recover critical capabilities safely?
- What evidence can we show afterwards?
- How do we know the system is improving over time?
