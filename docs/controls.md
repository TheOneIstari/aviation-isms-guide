# Architecture & controls

This page turns the regulation into product and engineering implications.

## Governance first

Security cannot be a side activity.

A lightweight but real operating model should cover:

- policy
- scope and boundaries
- responsibilities and deputies
- risk assessment and treatment
- incident and vulnerability handling
- supplier oversight
- record-keeping
- change management
- periodic review and improvement

See Part-IS.I.OR.200, .245, .250, .255 and .260.

## Scope, assets, and interfaces

Do not scope only the customer-facing app.

Include the systems and dependencies that matter to operation and trust, for example:

- identity provider
- cloud platform and network edges
- CI/CD and release tooling
- admin and support tooling
- customer integrations and data import/export paths
- monitoring, alerting, and log storage
- contractors and managed-service providers

Map interfaces where data or administrative influence crosses organisational boundaries.

See Part-IS.I.OR.200 and .205.

## Risk model

The risk model should describe:

- the asset or service at risk
- the threat scenario
- the relevant vulnerability or weakness
- the possible operational or safety effect
- the interface or supplier involved, if any
- the current risk level
- the treatment decision and owner

If ISO, NIST, or another framework is used internally, fine. The result still has to make sense in an aviation-safety context.

See Part-IS.I.OR.205 and .210.

## Auth and privilege

For aviation-facing products, auth should usually be stricter than in a generic SMB SaaS.

Baseline expectations:

- MFA for admins, support, and other privileged users
- no shared admin accounts
- clear separation between platform admin, tenant admin, and end-user roles
- session visibility and revocation where feasible
- strong password reset and recovery controls
- controlled break-glass access with logging and review
- SSO readiness where enterprise customers are likely

See Part-IS.I.OR.200 and .240.

## Tenant isolation and data separation

This is one of the easiest places to lose credibility.

Protect against:

- wrong-tenant queries and search results
- export and report leakage
- admin-tool bypasses
- job queue or background worker leakage
- cross-tenant file or object storage mistakes
- test or support access that bypasses normal controls

If the product is multi-tenant, isolation should be visible in design reviews, tests, and audit trails.

See Article 3 and Part-IS.I.OR.205.

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

Also retain:

- alert history
- investigation evidence
- vulnerability notifications and decisions
- supplier incident communications
- key risk and change records

See Part-IS.I.OR.215, .220 and .245.

## Detection and vulnerability management

Detection is broader than SIEM alerts.

A practical setup combines:

- baseline operational monitoring
- auth and privilege anomaly detection
- centralised log review where proportionate
- vulnerability intake from scanners, vendors, OSS sources, and researchers
- triage rules for safety-relevant systems
- clear warning and escalation thresholds

Reference: Part-IS.I.OR.215 and .220.

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
- operational and safety trade-offs
- evidence preservation steps
- recovery priorities and target times

See Part-IS.I.OR.220 and .230.

## Suppliers and contracted activities

Outsourcing work does not outsource accountability.

For important suppliers, know:

- what service they provide
- what data or systems they can access
- whether they administer anything sensitive
- how they notify you about incidents and vulnerabilities
- what evidence they can give you
- what happens if they are degraded or unavailable

See Part-IS.I.OR.235.

## Personnel and access trust

Security posture is partly an organisation design problem.

Aim for:

- clear ownership for security, incident response, and compliance monitoring
- enough people on duty for the commitments you make
- training and competence evidence for relevant roles
- explicit acknowledgement of privileged responsibilities
- stronger trust checks for highly privileged or unsupervised access where justified

See Part-IS.I.OR.240.

## Change management

Assess security impact before major changes to:

- auth and identity flows
- authorisation model
- tenant architecture
- infrastructure and network design
- logging and monitoring coverage
- key integrations and APIs
- outsourced or managed security activities
- recovery procedures

Record what changed, why, how it was reviewed, and what follow-up is required.

See Part-IS.I.OR.255.

## Continuous improvement

Do not stop at “controls implemented”.

Track whether the system is getting better using indicators such as:

- overdue treatment actions
- time to triage and contain incidents
- privileged access review completion
- repeated control failures
- supplier issue closure time
- backup and restore test success
- training completion for key roles

Then use incidents, audits, reviews, and metrics to improve the system deliberately.

See Part-IS.I.OR.260.
