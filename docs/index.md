# Aviation ISMS Guide

A practical summary of EASA Part-IS for people building aviation software.

This is not legal advice. It is a working summary for builders, architects, founders, and technical leads who want a clearer view of what aviation customers are likely to expect in practice.

## Relevant for

- operational aviation software
- maintenance, engineering, and planning tools
- training platforms used in regulated environments
- dashboards, portals, and admin systems used by aviation organisations
- SaaS or managed services that sit in an aviation supplier chain

## Short version

Part-IS is not just about having security controls. It expects organisations to run security as a managed system tied to aviation safety impact.

For software builders, that usually means customers will care whether you can show:

- what is in scope and why
- which assets, data flows, and interfaces matter
- how risks are identified, classified, treated, and reviewed
- how incidents and vulnerabilities are detected, escalated, contained, and recovered
- how supplier risk is governed
- how responsibilities, competence, and evidence are maintained
- how security-relevant changes are assessed before rollout
- how the whole system is reviewed and improved over time

## What customers are really buying

They are not only buying features. They are buying confidence that your product will not quietly become part of a safety-impacting failure chain.

That is why Part-IS keeps coming back to:

- interfaces with other organisations
- functional chains across systems and suppliers
- shared risk between connected parties
- traceable evidence afterwards
- management accountability

If your product touches operational workflows, aircraft data, maintenance planning, crew activity, dispatch, training, or any system another aviation organisation depends on, expect those questions.

## Start here

1. Map product scope, key assets, data flows, and external interfaces.
2. Identify where compromise could affect a customer’s operations or safety case.
3. Put named ownership, a risk register, incident handling, logging, supplier oversight, and change review in place.
4. Document how it works in one coherent operating manual.
5. Keep evidence and review the system regularly.

## In this guide

- [What Part-IS expects in practice](./expectations)
- [Practical checklist](./checklist)
- [Architecture & controls](./controls)

## Read the source

Official EASA document:
- [Easy Access Rules for Information Security (Dec 2025 PDF)](https://www.easa.europa.eu/en/downloads/137507/en)

## Bottom line

If you build for aviation, assume you may need to operate like a security-managed supplier even when you are not the directly regulated entity.
