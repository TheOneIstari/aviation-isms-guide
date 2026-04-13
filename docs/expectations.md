# What Part-IS expects in practice

This page focuses on the practical implications for software teams.

Source reference:
- [Easy Access Rules for Information Security (EASA, Dec 2025)](https://www.easa.europa.eu/en/downloads/137507/en)

## 1. Scope is wider than the app

Part-IS starts with identifying activities, resources, services, systems, data, and interfaces.

For a software company, that usually means the scope is wider than the codebase. It can include:

- cloud platforms and managed services
- support tooling and admin backends
- CI/CD and deployment paths
- logging, monitoring, and alerting systems
- customer data flows and integrations
- contractors or suppliers with meaningful access

If you cannot explain the system boundary and the important interfaces, the security story is weak.

Reference: Part-IS.I.OR.200 and Part-IS.I.OR.205.

## 2. Safety impact is the lens

Part-IS is not generic corporate cyber.

The key question is whether an information security issue could affect aviation safety, directly or through a chain of dependencies.

For software builders, that means being able to explain:

- what operational outcome the system influences
- what happens if data is wrong, delayed, unavailable, or exposed
- which downstream organisations depend on the system
- where compromise could create an unsafe condition or materially support one

Reference: Article 3 definitions and Part-IS.I.OR.205.

## 3. Risk assessment has to cover assets, interfaces, and shared risk

A useful risk assessment should link each risk to:

- the relevant asset or service
- the relevant interface or supplier relationship
- a threat scenario
- a defined risk level
- an owner
- a decision: accepted, treated, or avoided

The method should be documented and repeatable. Interfacing organisations should share enough information to manage mutual exposure.

That means the risk register should describe real systems, real dependencies, and real decisions.

Reference: Part-IS.I.OR.205.

## 4. Risk treatment needs owners and timelines

Unacceptable risks need measures that are implemented in time and checked later for effectiveness.

Treatment plans should show:

- which measure is being implemented
- which risk it addresses
- who owns it
- when it will be done
- whether compensating controls exist if it is delayed
- how effectiveness will be checked later

Reference: Part-IS.I.OR.210.

## 5. Detection includes vulnerabilities, not just attacks

Part-IS does not limit detection to active incidents.

It also expects organisations to take discovered vulnerabilities seriously.

In practice that means collecting and evaluating:

- auth and privilege anomalies
- operational deviations from expected baselines
- security alerts
- supplier notifications
- researcher reports
- open-source and dependency disclosures
- internal staff reports

Reference: Part-IS.I.OR.215 and Part-IS.I.OR.220.

## 6. Internal reporting needs to lead to action

The internal reporting scheme is supposed to help the organisation:

- collect events and vulnerabilities
- decide which ones are incidents or safety-relevant vulnerabilities
- identify causes and contributing factors
- distribute the information to the people who need to act

For a software team, that means the reporting path cannot end in a dead ticket queue. It should feed risk review, incident response, engineering work, and when needed customer or authority reporting.

Reference: Part-IS.I.OR.215.

## 7. External reporting timelines are real

Where a significant aviation safety risk exists, Part-IS expects:

- notification as soon as known
- a report within 72 hours unless exceptional circumstances prevent it
- a follow-up report on recovery and prevention actions

You may not be the directly regulated reporter, but a customer may depend on your speed and evidence to meet that obligation.

Reference: Part-IS.I.OR.230.

## 8. Supplier oversight is stronger than standard vendor management

If information security management activities are contracted out, responsibility stays with the regulated organisation.

For software builders, that means:

- do not treat critical security work as a black box
- be able to explain who does what
- define reporting obligations and contacts
- support audit and evidence requests
- manage remote and administrative access tightly
- treat supply-chain and managed-service risk as part of product risk

Reference: Part-IS.I.OR.235.

## 9. Roles, competence, and trustworthiness matter

Part-IS is explicit about:

- accountable management ownership
- named persons for compliance and monitoring
- sufficient staffing
- competence and training
- personnel acknowledging responsibilities
- identity and trustworthiness for people with access to sensitive systems and data

For a lean software company, this does not mean building a giant org chart. It does mean being able to show that responsibilities are clear, people are competent for the work, and highly privileged access is not handed out casually.

Reference: Part-IS.I.OR.240.

## 10. Documentation is part of the control system

The regulation expects an information security management manual plus supporting procedures.

You do not need to call it an ISMM internally, but there should be one coherent place that explains:

- policy
- scope
- roles and responsibilities
- reporting paths
- key procedures
- supplier control approach
- change handling approach
- alternative or compensating arrangements where relevant

If the operating model only exists in scattered chats and tribal knowledge, it will not stand up well in aviation.

Reference: Part-IS.I.OR.250.

## 11. Change management is not optional

Security-relevant changes to scope, interfaces, policy, risk method, reporting process, outsourced activities, and recovery arrangements are a big deal in Part-IS.

Review security impact before major changes to:

- authentication or authorisation
- tenant model or data segregation
- infrastructure topology
- logging and monitoring coverage
- key integrations
- supplier arrangements
- incident reporting or escalation process

Reference: Part-IS.I.OR.255.

## 12. Continuous improvement has to be visible

Part-IS calls for effectiveness and maturity assessment using indicators, on a planned basis and after incidents.

That pushes teams toward questions like:

- are controls actually working?
- are incidents being detected in time?
- do reviews find the same weaknesses repeatedly?
- are suppliers improving or drifting?
- is the organisation more capable than six months ago?

Reference: Part-IS.I.OR.260.

## Bottom line

For aviation software builders, the practical standard is simple:

Run security as an accountable, documented, evidence-producing operating system tied to safety-relevant risk.
