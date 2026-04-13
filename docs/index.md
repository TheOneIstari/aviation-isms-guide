# Aviation ISMS Guide

A straight-to-the-point summary of **EASA Part-IS thinking** for people building aviation software.

This is **not legal advice** and not a copy of the regulation. It is a practical interpretation for software builders, architects, founders, and technical leads who want to understand what aviation customers are likely to expect.

## Who this is for

This guide is useful if you are building:

- training platforms
- operational aviation software
- maintenance or engineering tools
- planning or scheduling tools
- portals, dashboards, or admin systems used by aviation organisations
- SaaS products that may become part of an operator's supplier chain

## Core idea

Even if your product is not directly regulated today, aviation customers may still expect you to behave like a **security-managed supplier**.

That means being able to show, in practical terms:

- who can access what
- how customer data is separated
- how risks are identified and treated
- how incidents are detected and handled
- how suppliers are governed
- how evidence is kept
- how changes are assessed before release

## What matters most

### 1. ISMS-ready posture
You do not necessarily need a full formal ISMS on day one, but you should be able to show:

- a security policy
- defined scope
- named responsibilities
- a risk register
- documented operating/security procedures

### 2. Strong identity and access control
At minimum:

- MFA for admins and privileged users
- least privilege
- tenant-aware authorization
- auditable privileged actions
- clean onboarding/offboarding

### 3. Tenant isolation
If you are multi-tenant, treat isolation as a first-class design concern:

- strict tenant scoping in authz checks
- no cross-tenant leakage in exports, search, reporting, or admin tools
- careful environment separation

### 4. Logging and auditability
You should be able to answer:

- who did what
- when it happened
- what changed
- what was exported or downloaded
- how an incident unfolded

### 5. Incident response
Have a defined path for:

- detection
- triage
- containment
- recovery
- customer communication
- evidence preservation

### 6. Supplier management
Cloud providers, auth vendors, observability tools, email/SMS providers, MSPs, and contractors all affect your risk posture.

Treat them as real dependencies, not background noise.

## Quick read next

- [Practical checklist](./checklist)
- [Architecture & controls](./controls)
