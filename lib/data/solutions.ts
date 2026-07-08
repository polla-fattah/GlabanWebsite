export interface SolutionItem {
  problem: string;
  solution: string;
  benefits: string[];
  href: string;
}

export const solutionItems: SolutionItem[] = [
  { problem: 'I need to control gas station sales.', solution: 'Gas Station POS gives cashiers a fast, accurate sales interface with shift management and daily closing.', benefits: ['Faster checkout', 'Fewer discrepancies'], href: '/products/gas-station-pos' },
  { problem: 'I need to manage employee fuel limits.', solution: 'The Fuel Limit & Quota System sets daily, weekly, or custom allowances by employee, vehicle, or department.', benefits: ['Controlled spending', 'Approval workflows'], href: '/products/fuel-limit-quota-system' },
  { problem: 'I need to track propane cylinders.', solution: 'Propane Cylinder Management tracks inventory, deposits, returns, and missing cylinders in real time.', benefits: ['Zero lost cylinders', 'Clear deposit tracking'], href: '/products/propane-cylinder-management' },
  { problem: 'I need to manage gas delivery to homes.', solution: 'Delivery Dispatch and the Customer Portal handle home orders, driver assignment, and delivery confirmation.', benefits: ['Live delivery status', 'Happier customers'], href: '/products/delivery-dispatch-route-optimisation' },
  { problem: 'I need to manage gas delivery by tonnes.', solution: 'The Bulk Gas Delivery System manages contracts, scheduling, and invoicing for tonnage-based customers.', benefits: ['Contract visibility', 'Accurate invoicing'], href: '/products/bulk-gas-delivery' },
  { problem: 'I need ERP for my fuel company.', solution: 'The Fuel ERP Platform unifies customers, suppliers, stock, sales, and reporting across every branch.', benefits: ['Central reporting', 'Multi-branch control'], href: '/products/fuel-erp' },
  { problem: 'I need to protect my website and business systems.', solution: 'Cybersecurity Services harden your servers, admin panels, and ERP against modern threats.', benefits: ['Reduced risk', 'Incident response'], href: '/cybersecurity' },
  { problem: 'I need CCTV and physical security.', solution: 'CCTV & Physical Security covers camera installation, monitoring, and control-room setup for every site.', benefits: ['24/7 coverage', 'Central monitoring'], href: '/cctv-physical-security' },
  { problem: 'I need to track field staff and tasks by location.', solution: 'Location-Based Task Management assigns and verifies tasks using GPS check-ins and photo evidence.', benefits: ['Full field visibility', 'Verified visits'], href: '/products/location-based-task-management' },
  { problem: 'I need maintenance tracking for equipment.', solution: 'Asset & Maintenance Management schedules preventive maintenance and tracks work orders and spare parts.', benefits: ['Less downtime', 'Lower repair cost'], href: '/products/asset-maintenance-management' },
  { problem: 'I need dashboards for owners and managers.', solution: 'The Business Intelligence Dashboard brings sales, delivery, security, and maintenance data into one view.', benefits: ['Faster decisions', 'One source of truth'], href: '/products/business-intelligence-dashboard' },
];
