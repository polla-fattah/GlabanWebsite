import { Building2, Droplets, Flame, Fuel, Gauge, Factory, Landmark, Truck, Warehouse } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export interface Industry {
  icon: LucideIcon;
  name: string;
  desc: string;
  problems: string[];
  recs: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    icon: Droplets,
    name: 'Oil Companies',
    desc: 'Secure, centralised systems for multi-branch operations needing full visibility.',
    problems: ['Fragmented branch reporting', 'Weak cybersecurity posture', 'Manual reconciliation'],
    recs: ['Fuel ERP Platform', 'Business Intelligence Dashboard', 'Cybersecurity Services'],
    image: '/images/industries/oil company .jpg'
  },
  {
    icon: Factory,
    name: 'Refineries',
    desc: 'Industrial-grade security and maintenance tracking for critical infrastructure.',
    problems: ['Untracked maintenance', 'OT and network exposure', 'Limited site security'],
    recs: ['Asset & Maintenance Management', 'Industrial & OT Cybersecurity', 'CCTV & Physical Security'],
    image: '/images/industries/Refineries.jpeg'
  },
  {
    icon: Fuel,
    name: 'Gas Stations',
    desc: 'Reliable POS and surveillance for high-volume forecourt environments.',
    problems: ['Cashier discrepancies', 'No forecourt visibility', 'Weak station security'],
    recs: ['Gas Station POS', 'CCTV & Surveillance'],
    image: '/images/industries/gas station pos.jpeg'
  },
  {
    icon: Truck,
    name: 'Fuel Distribution Companies',
    desc: 'Logistics solutions to track fuel movement from depots to customer sites.',
    problems: ['Poor delivery visibility', 'Manual invoicing', 'Driver accountability'],
    recs: ['Delivery Dispatch & Route Optimisation', 'Fleet & Vehicle Tracking', 'Fuel ERP Platform'],
    image: '/images/industries/Delivery Dispatch & Route Optimisation System.webp'
  },
  {
    icon: Flame,
    name: 'Propane Cylinder Companies',
    desc: 'Specialised tracking for cylinder deposits, returns, and home deliveries.',
    problems: ['Lost or unreturned cylinders', 'Manual order taking', 'Poor delivery accountability'],
    recs: ['Propane Cylinder Management', 'Customer Portal & Mobile App', 'Delivery Dispatch'],
    image: '/images/industries/Propane Cylinder Management.webp'
  },
  {
    icon: Truck,
    name: 'Bulk Gas Delivery Companies',
    desc: 'Contract management and scheduling for tonnage-based industrial gas sales.',
    problems: ['Contract tracking gaps', 'Manual consumption reports', 'Delivery confirmation delays'],
    recs: ['Bulk Gas Delivery System', 'Business Intelligence Dashboard', 'Fleet & Vehicle Tracking'],
    image: '/images/industries/Bulk Gas Delivery System.png'
  },
  {
    icon: Warehouse,
    name: 'Fuel Depots',
    desc: 'Strict inventory control and perimeter security for large storage sites.',
    problems: ['Stock discrepancies', 'Limited perimeter security', 'Manual stock transfers'],
    recs: ['Fuel ERP Platform', 'CCTV & Physical Security', 'Access Control & Attendance'],
    image: '/images/industries/Fuel ERP Platform.jpg'
  },
  {
    icon: Building2,
    name: 'Industrial Gas Customers',
    desc: 'Consumption tracking and automated billing for high-volume users.',
    problems: ['No consumption tracking', 'Manual billing disputes', 'Delivery scheduling gaps'],
    recs: ['Bulk Gas Delivery System', 'Customer Portal & Mobile App', 'Business Intelligence Dashboard'],
    image: '/images/industries/Business Intelligence Dashboard.webp'
  },
  {
    icon: Gauge,
    name: 'Companies with Fuel Limits',
    desc: 'Automated enforcement of fuel quotas for staff and company vehicles.',
    problems: ['Uncontrolled fuel spending', 'No approval workflow', 'Limited usage reporting'],
    recs: ['Employee Fuel Limit & Quota System', 'Fuel Card & Fleet Card System', 'Business Intelligence Dashboard'],
    image: '/images/industries/Eliminate Internal Fuel Waste.jpeg'
  },
  {
    icon: Landmark,
    name: 'Government & Regulated Operations',
    desc: 'Compliance-first solutions with strict audit trails and security standards.',
    problems: ['Audit and compliance gaps', 'Weak access control', 'Limited reporting transparency'],
    recs: ['Fuel ERP Platform', 'Access Control & Attendance', 'Cybersecurity Services'],
    image: '/images/industries/Government & Regulated Operations.jpeg'
  },
];
