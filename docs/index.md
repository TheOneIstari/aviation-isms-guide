# Aviation ISMS Guide

A practical guide to **EASA Part-IS thinking** for people building aviation software.

This is **not legal advice** and not a restatement of the regulation. It is a builder-focused interpretation of what aviation customers, auditors, and regulated organisations are likely to expect from you in practice.

## Read this if you build

- operational aviation software
- maintenance, engineering, or planning tools
- training platforms used in regulated environments
- dashboards, portals, and admin systems used by aviation organisations
- SaaS or managed services that sit in an aviation supplier chain

## The shortest useful summary

Part-IS is not just “have some security controls”. It expects organisations to run a **managed security system** tied to **aviation safety impact**.

For software builders, that usually means customers will care about whether you can show:

- what is in scope and why
- which assets, data flows, and interfaces matter
- how risks are identified, classified, treated, and revisited
- how incidents and vulnerabilities are detected, escalated, contained, and recovered
- how supplier risk is governed
- how responsibilities, competence, and evidence are maintained
- how security-relevant changes are assessed before rollout
- how the whole system is reviewed and improved over time

## What aviation customers are really buying from you

They are not only buying features. They are buying confidence that your product will not quietly become part of a safety-impacting failure chain.

That is why the regulation keeps coming back to:

- **interfaces** with other organisations
- **functional chains** across systems and suppliers
- **shared risk** between connected parties
- **traceable evidence** after the fact
- **management accountability**, not just engineering effort

If your product touches operational workflows, aircraft data, maintenance planning, crew activity, dispatch, training, or any system another aviation organisation depends on, expect these questions.

## What to do first

1. Map your product scope, assets, key data flows, and external interfaces.
2. Identify where compromise could affect an aviation customer’s operations or safety case.
3. Put named owners, a risk register, incident handling, logging, supplier oversight, and change review in place.
4. Document how this all works in one coherent operating manual.
5. Keep evidence and review the system regularly instead of treating security as a one-off setup.

## What this guide covers

- [What Part-IS expects in practice](./expectations)
- [Practical checklist](./checklist)
- [Architecture & controls](./controls)

## Practical interpretation notes

A second pass over the EASA material makes a few things clear that are easy to underplay on a first skim:

- Part-IS is strongly about **management system discipline**, not only technical controls.
- **Vulnerabilities** matter alongside incidents; detection is not just SOC-style intrusion spotting.
- **Interfaces and supplier chains** are central because risk propagates across organisations.
- **Continuous improvement and maturity assessment** are explicit expectations, not nice-to-haves.
- The real test is whether you can explain your security decisions and produce evidence afterwards.

If you build for aviation, the safest assumption is: **be ready to operate like a security-managed supplier even if you are not the directly regulated entity.**
