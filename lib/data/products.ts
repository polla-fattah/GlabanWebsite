export interface Product {
  slug: string;
  name: string;
  category: string;
  listingIcon: string;
  listingDesc: string;
  homeBenefit?: string;
  detail: {
    icon: string;
    iconBg: string;
    iconColor: string;
    eyebrow: string;
    heroSubtitle: string;
    sectionHeading: string;
    sectionBody: string;
    customers: string[];
    features: string[];
    closingHeading: string;
    closingSubtitle?: string;
    ctaLabel: string;
  };
}

const iconBg = 'rgba(226,134,27,.18)';
const iconColor = '#F0A85B';

export const products: Product[] = [
  {
    slug: 'fuel-erp',
    name: 'Fuel ERP Platform',
    category: 'ERP',
    listingIcon: '🧮',
    listingDesc: 'Customers, suppliers, stock, sales, purchasing, invoicing, and reporting for fuel businesses.',
    homeBenefit: 'Central control across branches',
    detail: {
      icon: 'fa-solid fa-calculator',
      iconBg,
      iconColor,
      eyebrow: 'Product · ERP',
      heroSubtitle: 'A single system for customers, suppliers, stock, sales, purchasing, invoicing, and reporting — built for fuel, oil, gas, and distribution companies.',
      sectionHeading: 'Built for multi-branch fuel operations',
      sectionBody: 'Fuel businesses run on thin margins and tight stock control. The Fuel ERP Platform brings every branch, product, and transaction into one system, with role-based access and full audit trails.',
      customers: ['Oil companies', 'Fuel distributors', 'Refineries', 'Multi-branch stations', 'Fuel depots'],
      features: [
        'Customer management', 'Supplier management', 'Product management', 'Stock and inventory management',
        'Sales management', 'Purchase management', 'Invoicing', 'Payment tracking', 'Branch management',
        'Employee and role permissions', 'Reports and dashboards', 'Accounting integration direction',
        'Stock transfer tracking', 'Company settings', 'Audit logs',
      ],
      closingHeading: 'See the Fuel ERP Platform on your data',
      closingSubtitle: 'Request a walkthrough tailored to your branches and products.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'gas-station-pos',
    name: 'Gas Station POS System',
    category: 'Point of Sale',
    listingIcon: '🖥️',
    listingDesc: 'Fast sales, shift management, and reporting for forecourt cashiers and managers.',
    homeBenefit: 'Faster, more accurate sales',
    detail: {
      icon: 'fa-solid fa-desktop',
      iconBg,
      iconColor,
      eyebrow: 'Product · Point of Sale',
      heroSubtitle: 'A fast, reliable sales interface for forecourt cashiers, with shift management and manager-level reporting.',
      sectionHeading: 'Built for the pace of the forecourt',
      sectionBody: 'Cashiers need speed and accuracy under pressure. The Gas Station POS keeps sales fast, closes shifts cleanly, and gives managers a clear view of every branch.',
      customers: ['Gas stations', 'Station networks', 'Franchise operators', 'Fuel retailers'],
      features: [
        'Fast sales interface', 'Shift management', 'Cashier control', 'Daily closing', 'Payment methods',
        'Customer accounts', 'Fuel product management', 'Receipt printing', 'Branch-level reporting',
        'Manager dashboard', 'Offline / low-connectivity support', 'Role-based access',
      ],
      closingHeading: 'See the POS system in action',
      closingSubtitle: 'Request a live walkthrough for your cashiers and managers.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'fuel-card-fleet-card-system',
    name: 'Fuel Card & Fleet Card Management System',
    category: 'Fuel Cards',
    listingIcon: '💳',
    listingDesc: 'Cards for customers, drivers, vehicles, and company fleets with usage limits.',
    homeBenefit: 'Controlled fuel spending',
    detail: {
      icon: 'fa-solid fa-credit-card',
      iconBg,
      iconColor,
      eyebrow: 'Product · Fuel Cards',
      heroSubtitle: 'Cards for customers, drivers, vehicles, and company fleets — with limits, restrictions, and full usage history.',
      sectionHeading: 'Control who fuels, where, and how much',
      sectionBody: 'Fuel and fleet cards let you set daily, weekly, or custom limits by driver, vehicle, or company, with product and station restrictions enforced automatically at the pump.',
      customers: ['Fleet operators', 'Fuel distributors', 'Companies with vehicle fleets', 'Delivery companies'],
      features: [
        'Customer fuel cards', 'Driver cards', 'Vehicle cards', 'Company fleet accounts',
        'Daily, weekly, monthly, or custom limits', 'Product restrictions', 'Station restrictions',
        'Card blocking and unblocking', 'Usage history', 'Integration with POS', 'Integration with ERP',
        'Reports by driver, vehicle, company, or station',
      ],
      closingHeading: 'Put fuel spending back under control',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'fuel-limit-quota-system',
    name: 'Employee Fuel Limit & Quota System',
    category: 'Fuel Quota',
    listingIcon: '📐',
    listingDesc: 'Employee, vehicle, department, and branch fuel limits with approvals.',
    detail: {
      icon: 'fa-solid fa-gauge-high',
      iconBg,
      iconColor,
      eyebrow: 'Product · Fuel Quota',
      heroSubtitle: 'Set and enforce fuel allowances by employee, vehicle, department, or branch, with approvals and full usage history.',
      sectionHeading: 'Predictable fuel spending, every month',
      sectionBody: 'Uncontrolled employee fuel usage is one of the most common sources of loss. This system enforces limits automatically, with clear approval workflows when exceptions are needed.',
      customers: ['Companies with vehicle fleets', 'Government agencies', 'Industrial operators', 'Delivery companies'],
      features: [
        'Employee fuel limits', 'Vehicle fuel limits', 'Department-based limits', 'Branch-based limits',
        'Custom quota periods', 'Approval workflows', 'Limit balance tracking', 'Fuel usage history',
        'Notifications', 'Reports', 'POS integration', 'ERP integration',
      ],
      closingHeading: 'Take control of fuel allowances',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'propane-cylinder-management',
    name: 'Propane Cylinder Management',
    category: 'Propane',
    listingIcon: '🛢️',
    listingDesc: 'Cylinder inventory, deposits, returns, and home or business delivery.',
    homeBenefit: 'Zero lost cylinders',
    detail: {
      icon: 'fa-solid fa-fire-flame-simple',
      iconBg,
      iconColor,
      eyebrow: 'Product · Propane',
      heroSubtitle: 'Track cylinder inventory, deposits, returns, and deliveries for home and business customers.',
      sectionHeading: 'Never lose track of a cylinder again',
      sectionBody: 'From order to delivery to return, every cylinder is tracked against a customer, driver, and deposit — closing the gaps that lead to missing stock and disputed balances.',
      customers: ['Propane distributors', 'Home delivery services', 'Business gas suppliers'],
      features: [
        'Cylinder inventory tracking', 'Cylinder serial or tag support', 'Customer order management',
        'Driver assignment', 'Delivery status tracking', 'Cylinder deposit management', 'Returned cylinder tracking',
        'Missing cylinder reports', 'Home delivery management', 'Business delivery management',
        'Payment and balance tracking', 'Customer history', 'Delivery route support',
      ],
      closingHeading: 'Stop losing cylinders and revenue',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'bulk-gas-delivery',
    name: 'Bulk Gas Delivery System',
    category: 'Bulk Delivery',
    listingIcon: '🚚',
    listingDesc: 'Contracts, scheduling, and invoicing for tonnage-based gas delivery.',
    detail: {
      icon: 'fa-solid fa-truck',
      iconBg,
      iconColor,
      eyebrow: 'Product · Bulk Delivery',
      heroSubtitle: 'Manage contracts, scheduling, and invoicing for tonnage-based gas delivery to industrial and business customers.',
      sectionHeading: 'Contract-based delivery, fully accounted for',
      sectionBody: 'Bulk gas customers expect precise scheduling and clear invoicing. This system connects contracts, deliveries, and payments so nothing falls through the cracks.',
      customers: ['Industrial gas customers', 'Bulk gas distributors', 'Manufacturing plants'],
      features: [
        'Business customer management', 'Contract management', 'Delivery scheduling', 'Sales by tonnes',
        'Truck or tanker workflow direction', 'Delivery confirmation', 'Invoicing', 'Payment tracking',
        'Customer balance', 'Driver assignment', 'Delivery reports', 'Customer consumption reports',
      ],
      closingHeading: 'Simplify tonnage-based delivery',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'delivery-dispatch-route-optimisation',
    name: 'Delivery Dispatch & Route Optimisation System',
    category: 'Dispatch',
    listingIcon: '🗺️',
    listingDesc: 'Route planning, driver assignment, and live delivery tracking.',
    detail: {
      icon: 'fa-solid fa-route',
      iconBg,
      iconColor,
      eyebrow: 'Product · Dispatch',
      heroSubtitle: 'Plan routes, assign drivers, and track deliveries live — from dispatch to confirmation.',
      sectionHeading: 'Know where every delivery is, in real time',
      sectionBody: 'Dispatch integrates with propane and bulk gas delivery to give planners and customers live visibility from route assignment through to confirmed delivery.',
      customers: ['Propane distributors', 'Bulk gas companies', 'Fuel delivery fleets'],
      features: [
        'Delivery route planning', 'Driver assignment', 'Live driver location', 'Delivery status',
        'Estimated arrival time direction', 'Failed delivery reasons', 'Emergency delivery handling',
        'Driver mobile app direction', 'Customer notifications', 'Route performance reports',
        'Integration with propane and bulk gas systems',
      ],
      closingHeading: 'Get delivery visibility end to end',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'location-based-task-management',
    name: 'Location-Based Task Management',
    category: 'Field Operations',
    listingIcon: '📍',
    listingDesc: 'Assign, track, and verify field tasks by GPS location and site visits.',
    homeBenefit: 'Full field visibility',
    detail: {
      icon: 'fa-solid fa-location-dot',
      iconBg,
      iconColor,
      eyebrow: 'Product · Field Operations',
      heroSubtitle: 'Assign, monitor, and verify tasks based on staff location and operational sites — from station inspections to security patrols.',
      sectionHeading: 'Full visibility over field work',
      sectionBody: 'Field teams are hard to supervise once they leave the office. Location-Based Task Management gives supervisors real-time confirmation that work was actually done — where and when it was supposed to happen.',
      customers: ['Station networks', 'Fuel depots', 'Security teams', 'Field service operators'],
      features: [
        'Task creation', 'Task assignment to field employees', 'Location-based check-in', 'GPS-based task verification',
        'Site visit tracking', 'Photo attachment', 'Task completion status', 'Supervisor approval',
        'Route and visit history', 'Employee performance reports', 'Mobile app', 'Integration with ERP, support, maintenance, or delivery systems',
      ],
      closingHeading: 'See it running on your operation',
      closingSubtitle: 'Request a walkthrough tailored to your field teams and sites.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'asset-maintenance-management',
    name: 'Asset & Maintenance Management System',
    category: 'Maintenance',
    listingIcon: '🛠️',
    listingDesc: 'Asset registers, preventive maintenance, work orders, and spare parts.',
    detail: {
      icon: 'fa-solid fa-screwdriver-wrench',
      iconBg,
      iconColor,
      eyebrow: 'Product · Maintenance',
      heroSubtitle: 'Track equipment, schedule preventive maintenance, and manage work orders across every site.',
      sectionHeading: 'Less downtime, lower repair cost',
      sectionBody: 'Equipment failures at a fuel site are expensive and risky. This system keeps a full asset register with preventive schedules, work orders, and spare parts tracking.',
      customers: ['Refineries', 'Fuel depots', 'Gas station networks', 'Industrial operators'],
      features: [
        'Asset register', 'Equipment history', 'Preventive maintenance scheduling', 'Work orders',
        'Technician assignment', 'Spare parts tracking', 'Maintenance cost reports', 'QR/RFID asset tagging direction',
        'Warranty records', 'Service records', 'Breakdown reports', 'Integration with location-based tasks',
      ],
      closingHeading: 'Get ahead of equipment failures',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'customer-portal-mobile-app',
    name: 'Customer Portal & Mobile App',
    category: 'Customer Experience',
    listingIcon: '📱',
    listingDesc: 'Order requests, invoices, balances, and support for your customers.',
    detail: {
      icon: 'fa-solid fa-mobile-screen-button',
      iconBg,
      iconColor,
      eyebrow: 'Product · Customer Experience',
      heroSubtitle: 'Let customers order, track deliveries, view invoices, and get support — without picking up the phone.',
      sectionHeading: 'A self-service front door for your customers',
      sectionBody: 'Reduce inbound calls and give business and household customers a place to order, pay, and track their account directly.',
      customers: ['Propane distributors', 'Bulk gas companies', 'Fuel retailers with account customers'],
      features: [
        'Customer login', 'Gas cylinder order request', 'Bulk gas delivery request', 'Previous orders', 'Invoices',
        'Account balance', 'Delivery status', 'Complaint submission', 'Support request', 'Notifications',
        'Business customer dashboard', 'Contract and consumption reports',
      ],
      closingHeading: 'Give your customers a self-service portal',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    category: 'Analytics',
    listingIcon: '📊',
    listingDesc: 'Executive dashboards across sales, delivery, security, and maintenance.',
    homeBenefit: 'Decisions backed by data',
    detail: {
      icon: 'fa-solid fa-chart-line',
      iconBg,
      iconColor,
      eyebrow: 'Product · Analytics',
      heroSubtitle: 'One view across sales, delivery, security, and maintenance — for owners and managers who need answers fast.',
      sectionHeading: 'One source of truth for decision-makers',
      sectionBody: 'Pulls data from ERP, POS, delivery, security, and maintenance systems into dashboards built for owners and managers — not analysts.',
      customers: ['Company owners', 'Regional managers', 'Multi-branch operators'],
      features: [
        'Daily sales dashboard', 'Branch comparison', 'Product performance', 'Stock movement',
        'Delivery performance', 'Employee performance', 'Customer balances', 'Fuel limit usage',
        'Maintenance reports', 'Security incident reports', 'Owner dashboard', 'Management reports',
      ],
      closingHeading: 'See your whole business in one dashboard',
      ctaLabel: 'Request a Demo',
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
