# Architecture & controls

## Governance
Aim for an **ISMS-ready** posture, even if you are not building a full certification program yet.

Keep at least:

- policy
- scope
- responsibilities
- risk register
- procedures
- evidence retention

## Auth
For aviation-facing products, auth should be stricter than in a typical lightweight SaaS:

- MFA for admins/support/staff
- session visibility and revocation
- strong password reset controls
- clear separation of platform admin vs tenant admin vs end-user roles
- SSO readiness for enterprise customers

## Access control
Use strong RBAC at minimum, with room for more contextual checks later.

Watch especially for:

- support users seeing the wrong tenant
- privileged write access where read-only would do
- data export actions without traceability
- shared admin accounts

## Tenant isolation
This is usually one of the most important architecture concerns.

Protect against:

- cross-tenant search leakage
- wrong-tenant exports
- reporting aggregation mistakes
- background-job leakage
- admin tooling bypasses

## Logging and audit
Keep logs for:

- authentication events
- role changes
- admin actions
- configuration changes
- exports/downloads
- incident timelines

Make sure logs are:

- access-controlled
- retained intentionally
- useful for reconstruction
- not easily tampered with

## Incidents
Have playbooks for at least:

- account compromise
- privilege abuse
- tenant data exposure
- provider outage or compromise
- vulnerability emergency
- service recovery after disruption

## Suppliers
Track and review suppliers that affect security or trust, such as:

- hosting/cloud
- auth providers
- email/SMS vendors
- monitoring/telemetry vendors
- external support or contractors
- managed databases or infrastructure

Clarify:

- who does what
- what they notify you about
- what access they have
- what happens if they fail

## Change management
Assess security impact before major changes to:

- auth
- permissions
- tenant model
- integrations
- infrastructure
- monitoring/logging

Aviation customers will care whether security changes are deliberate and reviewable, not improvised.

## Record-keeping
Retain evidence for:

- risk decisions
- incidents
- access approvals
- supplier reviews
- training and role assignments
- security-relevant change approvals

## Final practical rule
Build so you can answer these questions well:

- What are our important assets and interfaces?
- Who can access what?
- How are customers isolated?
- How do we detect and handle incidents?
- Which suppliers affect our security posture?
- What evidence can we show afterwards?
