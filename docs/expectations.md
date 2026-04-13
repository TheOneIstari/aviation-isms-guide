# What Part-IS expects in practice

This is the practical reading for software teams.

## 1. Scope is not just your app

Part-IS starts with identifying:

- activities
- facilities
- resources
- services you provide, receive, operate, or maintain
- equipment, systems, data, and information that support them
- interfaces with other organisations

For a software company, that usually means your scope is wider than the product codebase. It can include:

- cloud platforms and managed services
- support tooling and admin backends
- CI/CD and deployment paths
- logging, monitoring, and alerting systems
- customer data flows and integrations
- contractors or suppliers with meaningful access

If you cannot explain the system boundary and the important interfaces, your Part-IS story is weak.

## 2. Safety impact is the lens

Part-IS is not generic corporate cyber.

The core question is: **could this information security issue affect aviation safety, directly or through a chain of dependencies?**

For software builders, that means you should be able to explain:

- what operational outcome your system influences
- what happens if data is wrong, delayed, unavailable, or exposed
- which downstream organisations depend on you
- where a compromise could create an unsafe condition or materially support one

You do not need to cosplay as an airline or MRO. But you do need to understand how your system could contribute to someone else’s safety problem.

## 3. Risk assessment must cover assets, interfaces, and shared risk

A decent Part-IS-style risk assessment should link each risk to:

- the relevant asset or service
- the relevant interface or supplier relationship
- a threat scenario
- a risk level based on defined criteria
- an owner
- a decision: acceptable, treated, or avoided

Two things stand out in the EASA text:

- the method should be **documented, repeatable, and comparable over time**
- interfacing organisations should share enough information to manage **mutual exposure**

In plain English: your risk register should not be a vague list of generic cyber fears. It should describe real systems, real dependencies, and real decisions.

## 4. Risk treatment needs a plan, owners, and timelines

Part-IS is explicit that unacceptable risks need measures that are implemented in time and checked for continued effectiveness.

So your treatment plan should show:

- what measure is being implemented
- which risk it addresses
- who owns it
- when it will be done
- whether compensating controls exist if it is delayed
- how you will know it is still effective later

That is more disciplined than “we intend to harden this soon”.

## 5. Detection includes vulnerabilities, not just attacks

A first skim can make this sound like an incident-response requirement. It is broader than that.

Part-IS treats both of these as detection inputs:

- events and anomalies
- discovered vulnerabilities

So in practice you want a mechanism to collect and evaluate:

- auth and privilege anomalies
- operational deviations from expected baselines
- security alerts
- supplier notifications
- researcher reports
- OSS and dependency disclosures
- internal staff reports

If you only think in terms of malware alerts, you are missing a chunk of what the regulation is getting at.

## 6. Internal reporting should be easy and connected to action

The internal reporting scheme is not paperwork theatre. It is supposed to let the organisation:

- collect events and vulnerabilities
- evaluate which ones are incidents or safety-relevant vulnerabilities
- identify causes and contributing factors
- distribute the information internally to the people who need to act

For a software team, that means your reporting path should not stop at a ticket queue nobody reads. It should feed risk review, incident response, engineering work, and where needed customer or authority reporting.

## 7. External reporting timelines are real

Where a significant aviation safety risk exists, Part-IS expects:

- notification as soon as known
- a report within **72 hours** unless exceptional circumstances prevent it
- a follow-up report on recovery and prevention actions

You may not be the directly regulated reporter, but your customer may depend on your speed and evidence to meet that obligation.

That means contracts, escalation paths, and incident handling should be designed with this clock in mind.

## 8. Supplier oversight is stronger than normal vendor management

If information security management activities are contracted out, the regulated organisation keeps responsibility and must oversee the contracted party.

The useful software-builder takeaway is simple:

- do not present critical security work as a black box
- be able to explain who does what
- define reporting obligations and contacts
- support audit and evidence requests
- manage remote/admin access tightly
- treat supply-chain and managed-service risk as part of the product risk picture

Aviation customers may expect more structure here than a standard SaaS security page provides.

## 9. Roles, competence, and trustworthiness matter

Part-IS is unusually explicit about:

- accountable management ownership
- named persons for compliance and monitoring
- sufficient staffing
- competence and training
- personnel acknowledging responsibilities
- identity and trustworthiness for people with access to sensitive systems and data

For a lean software company, this does **not** mean building a giant org chart.

It does mean you should be able to show that key responsibilities are clear, people are competent for the work, and highly privileged access is not handed out casually.

## 10. Documentation is part of the control system

The regulation expects an information security management manual plus supporting procedures.

You do not have to call it an ISMM internally, but you should have one coherent place that explains:

- policy
- scope
- roles and responsibilities
- reporting paths
- key procedures
- supplier control approach
- change handling approach
- alternative or compensating arrangements where relevant

If your security operating model only exists in scattered chats and tribal knowledge, it will not travel well in aviation.

## 11. Change management is not optional

Security-relevant changes to scope, interfaces, policy, risk method, reporting process, outsourced activities, and recovery arrangements are a big deal in Part-IS.

Practical translation:

Review security impact before major changes to:

- authentication or authorisation
- tenant model or data segregation
- infra topology
- logging and monitoring coverage
- key integrations
- supplier arrangements
- incident reporting or escalation process

The point is not bureaucracy. The point is to avoid quietly breaking the assumptions your risk picture depends on.

## 12. Continuous improvement means more than yearly review

Part-IS explicitly calls for effectiveness and maturity assessment using indicators, on a planned basis and after incidents.

That pushes teams toward questions like:

- are controls actually working?
- are incidents being detected in time?
- do reviews find the same weaknesses repeatedly?
- are suppliers improving or drifting?
- is the organisation more capable than six months ago, or just busier?

This is one of the clearer signals that Part-IS is a living management system, not a document set.

## Bottom line

For aviation software builders, the practical standard is:

**run security as an accountable, documented, evidence-producing operating system tied to safety-relevant risk — not as an informal collection of best efforts.**
