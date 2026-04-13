# Practical checklist

Use this as a pragmatic baseline for an aviation-facing software product.

## Must have early

- [ ] Written information security policy with clear management backing
- [ ] Defined scope covering key services, assets, data flows, and external interfaces
- [ ] Named accountable owner for security plus named incident/compliance leads
- [ ] Risk register that links risks to assets, interfaces, owners, treatment, and status
- [ ] Risk treatment plan with priorities, timelines, and compensating controls for delays
- [ ] MFA for admins and other privileged roles
- [ ] Strong role design with least privilege and clean joiner/mover/leaver handling
- [ ] Clear tenant isolation rules and tests if the product is multi-tenant
- [ ] Audit logging for auth, admin actions, role changes, config changes, and exports
- [ ] Practical incident and vulnerability handling process
- [ ] Internal reporting path for staff, suppliers, customers, researchers, and automated alerts
- [ ] Supplier register including who has access, what they do, and how they report incidents
- [ ] Backup and recovery approach with defined priorities for critical systems
- [ ] Security review before major auth, infra, integration, or supplier changes
- [ ] Retention approach for risk, incident, access, supplier, and change evidence

## Should have soon

- [ ] One coherent security operating manual or handbook
- [ ] Asset and interface inventory with functional-chain thinking, not just server lists
- [ ] Logging and security-data retention rules
- [ ] Customer and regulator escalation path aligned to possible 72-hour reporting needs
- [ ] Security training and competence evidence for relevant staff
- [ ] Trustworthiness / screening approach for highly privileged roles where justified
- [ ] Supplier review template and audit/evidence request process
- [ ] Security KPIs or effectiveness indicators
- [ ] Scheduled review cadence for risks, incidents, supplier issues, and control effectiveness
- [ ] Defined recovery objectives for important systems and dependencies

## Usually later, but plan for it

- [ ] Enterprise SSO / federation where customer context makes it relevant
- [ ] More formal ISMS program and stronger internal assurance
- [ ] More mature detection capability across logs, alerts, vulnerabilities, and supplier intel
- [ ] Stronger contractual security clauses and right-to-audit language
- [ ] Maturity assessments that go beyond pass/fail compliance
- [ ] External assurance path if customers push for it

## Questions worth asking now

- Can we clearly explain our scope, boundaries, and important interfaces?
- Do we know which suppliers or integrations can expose us or our customers to shared risk?
- Can we show which risks are accepted, which are treated, and who signed off?
- Can we reconstruct an incident or major vulnerability decision afterwards?
- Do we know how quickly we would escalate something that could trigger a customer’s authority reporting?
- Are privileged roles clear, justified, and reviewable?
- Do major changes go through security review before release, not after damage?
- Are we getting measurably better over time, or just reacting ad hoc?
