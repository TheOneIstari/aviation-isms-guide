# Practical checklist

Use this as a pragmatic baseline for an aviation-facing software product.

## Must have early

- [ ] Written security policy
- [ ] Defined system/security scope
- [ ] Named owners for security and incident response
- [ ] Risk register with owners and treatment actions
- [ ] MFA for admins and privileged users
- [ ] Role-based access control with least privilege
- [ ] Strong tenant isolation rules
- [ ] Audit logging for auth, admin actions, config changes, exports, and role changes
- [ ] Incident response baseline and severity model
- [ ] Vulnerability handling process
- [ ] Supplier register
- [ ] Onboarding/offboarding process
- [ ] Access review process
- [ ] Backup and recovery approach
- [ ] Change management for security-relevant releases

## Should have soon

- [ ] Security manual / operating handbook
- [ ] Formal asset and interface inventory
- [ ] Logging retention rules
- [ ] Customer communication playbook for incidents
- [ ] Security training evidence for staff
- [ ] Supplier review template
- [ ] Security metrics / KPIs
- [ ] Review cadence for risks and incidents
- [ ] Security architecture notes for auth, logging, and tenant boundaries

## Usually later, but plan for it

- [ ] Enterprise SSO / federation
- [ ] More formal ISMS program
- [ ] Stronger supplier audit clauses
- [ ] More mature detection/monitoring stack
- [ ] External assurance / certification path if customers demand it
- [ ] More detailed staff vetting for highly privileged roles

## Questions to ask yourself

- Can we explain our tenant isolation clearly?
- Can we reconstruct a security incident afterwards?
- Can we show who had privileged access at any point in time?
- Do we know which suppliers could affect customer trust or safety?
- Do we review security impact before major auth, infra, or integration changes?
- Can we prove that a serious issue was identified, tracked, treated, and closed?
