export interface Industry {
  icon: string;
  name: string;
  desc: string;
  problems: string[];
  recs: string[];
}

export const industries: Industry[] = [
  { icon: 'fa-solid fa-droplet', name: 'Oil Companies', desc: 'Secure, centralised systems for multi-branch operations needing full visibility.', problems: ['Fragmented branch reporting', 'Weak cybersecurity posture', 'Manual reconciliation'], recs: ['Fuel ERP Platform', 'Business Intelligence Dashboard', 'Cybersecurity Services'] },
  { icon: 'fa-solid fa-industry', name: 'Refineries', desc: 'Industrial-grade security and maintenance tracking for critical infrastructure.', problems: ['Untracked maintenance', 'OT and network exposure', 'Limited site security'], recs: ['Asset & Maintenance Management', 'Industrial & OT Cybersecurity', 'CCTV & Physical Security'] },
  { icon: 'fa-solid fa-gas-pump', name: 'Gas Stations', desc: 'Reliable POS and surveillance for high-volume forecourt environments.', problems: ['Cashier discrepancies', 'No forecourt visibility', 'Weak station security'], recs: ['Gas Station POS', 'CCTV & Surveillance'] },
  { icon: 'fa-solid fa-truck-moving', name: 'Fuel Distribution Companies', desc: 'Logistics solutions to track fuel movement from depots to customer sites.', problems: ['Poor delivery visibility', 'Manual invoicing', 'Driver accountability'], recs: ['Delivery Dispatch & Route Optimisation', 'Fleet & Vehicle Tracking', 'Fuel ERP Platform'] },
  { icon: 'fa-solid fa-fire-flame-simple', name: 'Propane Cylinder Companies', desc: 'Specialised tracking for cylinder deposits, returns, and home deliveries.', problems: ['Lost or unreturned cylinders', 'Manual order taking', 'Poor delivery accountability'], recs: ['Propane Cylinder Management', 'Customer Portal & Mobile App', 'Delivery Dispatch'] },
  { icon: 'fa-solid fa-truck', name: 'Bulk Gas Delivery Companies', desc: 'Contract management and scheduling for tonnage-based industrial gas sales.', problems: ['Contract tracking gaps', 'Manual consumption reports', 'Delivery confirmation delays'], recs: ['Bulk Gas Delivery System', 'Business Intelligence Dashboard', 'Fleet & Vehicle Tracking'] },
  { icon: 'fa-solid fa-warehouse', name: 'Fuel Depots', desc: 'Strict inventory control and perimeter security for large storage sites.', problems: ['Stock discrepancies', 'Limited perimeter security', 'Manual stock transfers'], recs: ['Fuel ERP Platform', 'CCTV & Physical Security', 'Access Control & Attendance'] },
  { icon: 'fa-solid fa-building', name: 'Industrial Gas Customers', desc: 'Consumption tracking and automated billing for high-volume users.', problems: ['No consumption tracking', 'Manual billing disputes', 'Delivery scheduling gaps'], recs: ['Bulk Gas Delivery System', 'Customer Portal & Mobile App', 'Business Intelligence Dashboard'] },
  { icon: 'fa-solid fa-gauge-high', name: 'Companies with Fuel Limits', desc: 'Automated enforcement of fuel quotas for staff and company vehicles.', problems: ['Uncontrolled fuel spending', 'No approval workflow', 'Limited usage reporting'], recs: ['Employee Fuel Limit & Quota System', 'Fuel Card & Fleet Card System', 'Business Intelligence Dashboard'] },
  { icon: 'fa-solid fa-landmark', name: 'Government & Regulated Operations', desc: 'Compliance-first solutions with strict audit trails and security standards.', problems: ['Audit and compliance gaps', 'Weak access control', 'Limited reporting transparency'], recs: ['Fuel ERP Platform', 'Access Control & Attendance', 'Cybersecurity Services'] },
];
