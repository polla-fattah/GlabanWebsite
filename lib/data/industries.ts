export interface Industry {
  icon: string;
  name: string;
  desc: string;
  problems: string[];
  recs: string[];
}

export const industries: Industry[] = [
  { icon: '🛢️', name: 'Oil Companies', desc: 'Multi-branch operations needing central visibility and secure systems.', problems: ['Fragmented branch reporting', 'Weak cybersecurity posture', 'Manual reconciliation'], recs: ['Fuel ERP Platform', 'Business Intelligence Dashboard', 'Cybersecurity Services'] },
  { icon: '🏭', name: 'Refineries', desc: 'Large industrial sites with critical infrastructure and OT exposure.', problems: ['Untracked maintenance', 'OT and network exposure', 'Limited site security'], recs: ['Asset & Maintenance Management', 'Industrial & OT Cybersecurity', 'CCTV & Physical Security'] },
  { icon: '⛽', name: 'Gas Stations', desc: 'High-volume forecourt sales needing fast, reliable POS and monitoring.', problems: ['Cashier discrepancies', 'No forecourt visibility', 'Weak station security'], recs: ['Gas Station POS', 'CCTV & Surveillance'] },
  { icon: '🚛', name: 'Fuel Distribution Companies', desc: 'Companies moving fuel across branches, depots, and customer sites.', problems: ['Poor delivery visibility', 'Manual invoicing', 'Driver accountability'], recs: ['Delivery Dispatch & Route Optimisation', 'Fleet & Vehicle Tracking', 'Fuel ERP Platform'] },
  { icon: '🛢️', name: 'Propane Cylinder Companies', desc: 'Home and business cylinder delivery with deposit and return tracking.', problems: ['Lost or unreturned cylinders', 'Manual order taking', 'Poor delivery accountability'], recs: ['Propane Cylinder Management', 'Customer Portal & Mobile App', 'Delivery Dispatch'] },
  { icon: '🚚', name: 'Bulk Gas Delivery Companies', desc: 'Contract-based delivery by tonnage to industrial and business customers.', problems: ['Contract tracking gaps', 'Manual consumption reports', 'Delivery confirmation delays'], recs: ['Bulk Gas Delivery System', 'Business Intelligence Dashboard', 'Fleet & Vehicle Tracking'] },
  { icon: '🏗️', name: 'Fuel Depots', desc: 'Storage and transfer sites requiring strict stock and security control.', problems: ['Stock discrepancies', 'Limited perimeter security', 'Manual stock transfers'], recs: ['Fuel ERP Platform', 'CCTV & Physical Security', 'Access Control & Attendance'] },
  { icon: '🏢', name: 'Industrial Gas Customers', desc: 'Businesses consuming gas at scale needing consumption visibility.', problems: ['No consumption tracking', 'Manual billing disputes', 'Delivery scheduling gaps'], recs: ['Bulk Gas Delivery System', 'Customer Portal & Mobile App', 'Business Intelligence Dashboard'] },
  { icon: '📐', name: 'Companies with Employee Fuel Limits', desc: 'Organisations managing fuel allowances across staff, vehicles, or departments.', problems: ['Uncontrolled fuel spending', 'No approval workflow', 'Limited usage reporting'], recs: ['Employee Fuel Limit & Quota System', 'Fuel Card & Fleet Card System', 'Business Intelligence Dashboard'] },
  { icon: '🏛️', name: 'Government / Regulated Fuel Operations', desc: 'Operations subject to strict compliance, audit, and security requirements.', problems: ['Audit and compliance gaps', 'Weak access control', 'Limited reporting transparency'], recs: ['Fuel ERP Platform', 'Access Control & Attendance', 'Cybersecurity Services'] },
];
