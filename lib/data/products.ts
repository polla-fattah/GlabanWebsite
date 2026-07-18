import { Calculator, TrendingUp, CreditCard, Monitor, Flame, Gauge, MapPin, Smartphone, Route, Wrench, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
export interface Product {
  slug: string;
  name: string;
  category: string;
  listingIcon: LucideIcon;
  image: string;
  listingDesc: string;
  homeBenefit?: string;
  detail: {
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
    eyebrow: string;
    heroSubtitle: string;
    sectionHeading: string;
    sectionBody: string;
    customers: string[];
    features: string[];
    benefits: string[];
    howItWorks: string[];
    closingHeading: string;
    closingSubtitle?: string;
    ctaLabel: string;
  };
}

const iconBg = '#0f1011';
const iconColor = '#02b8cc';

export const products: Product[] = [
  {
    slug: 'fuel-erp',
    name: 'Fuel ERP Platform',
    category: 'ERP',
    listingIcon: Calculator,
    image: '/images/products/Fuel ERP Platform.jpg',
    listingDesc: 'Manage your entire fuel operation from one platform—customers, stock, sales, and detailed financial reporting.',
    homeBenefit: 'Unified control across all branches',
    detail: {
      icon: Calculator,
      iconBg,
      iconColor,
      eyebrow: 'Product · ERP',
      heroSubtitle: 'A comprehensive management system designed specifically for the unique demands of the fuel and energy distribution industry.',
      sectionHeading: 'Complete Visibility for Multi-Branch Fuel Operations',
      sectionBody: 'Fuel businesses operate on thin margins and require absolute precision in stock control and financial tracking. Our Fuel ERP Platform unifies every aspect of your business—from procurement and depot storage to branch sales and customer invoicing—into a single, secure cloud environment. It eliminates the data silos that lead to stock leakages and financial discrepancies, providing a real-time "single source of truth" for management. The system is built to handle the high volume of transactions typical in the energy sector while maintaining a high level of auditability.',
      customers: ['Oil & Gas Companies', 'Fuel Distributors', 'Refineries', 'Multi-branch Station Networks', 'Fuel Storage Depots'],
      features: [
        'Advanced Customer & Supplier Management with credit limit tracking',
        'Real-time Multi-depot Stock & Inventory Tracking (Litre & Tonne accuracy)',
        'Fuel-specific Sales & Purchase Management with automatic VAT calculation',
        'Automated Invoicing & Multi-currency Payment Tracking (IQD, USD, etc.)',
        'Comprehensive Branch & Depot Management with hierarchical access',
        'Granular Employee Roles & Security Permissions (Manager, Cashier, Accountant)',
        'Automated Tax & Regulatory Reporting tailored for regional requirements',
        'Internal Stock Transfer & Reconciliation Workflows with digital signatures',
        'Detailed Audit Logs recording every modification and transaction',
        'Integrated Accounting Direction & automated export to external systems',
        'Supplier Price Tracking and Historical Cost Analysis',
        'Customizable Financial Period Closings and P&L Statements'
      ],
      benefits: [
        'Eliminate manual data reconciliation between branches and headquarters',
        'Reduce stock leakages and unauthorized transfers through tight control',
        'Improve cash flow with automated invoice aging and payment tracking',
        'Ensure 100% regulatory compliance with built-in audit trails and logs'
      ],
      howItWorks: [
        'Centralize all branch and depot data into a secure, encrypted cloud instance',
        'Map your organizational structure, branches, and staff user roles',
        'Migrate existing customer, supplier, and inventory data into the system',
        'Execute daily sales, purchasing, and stock movements through standardized workflows'
      ],
      closingHeading: 'Ready to Unify Your Fuel Business?',
      closingSubtitle: 'Schedule a tailored walkthrough to see how our ERP fits your specific operation.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'gas-station-pos',
    name: 'Gas Station POS System',
    category: 'Point of Sale',
    listingIcon: Monitor,
    image: '/images/products/gas station pos.jpeg',
    listingDesc: 'Fast, reliable sales interface designed specifically for forecourt cashiers and station managers.',
    homeBenefit: 'Faster, more accurate transactions',
    detail: {
      icon: Monitor,
      iconBg,
      iconColor,
      eyebrow: 'Product · Point of Sale',
      heroSubtitle: 'A high-speed, durable sales interface built to handle the heavy traffic and unique requirements of modern gas station forecourts.',
      sectionHeading: 'Engineered for Forecourt Speed and Accuracy',
      sectionBody: 'During peak hours, your cashiers need a system that is both fast and foolproof. Our Gas Station POS simplifies complex transactions, manages shift changes with precision, and provides managers with instant branch-level reporting. It integrates directly with forecourt hardware to ensure that every litre pumped is a litre paid for, significantly reducing human error and unauthorized fuel dispensing. The interface is designed for high-glare environments and can be operated with minimal training.',
      customers: ['Independent Gas Stations', 'Station Franchisees', 'Retail Fuel Networks', 'Truck Stops'],
      features: [
        'High-speed, Touch-optimized Sales Interface for fast checkout',
        'Automated Shift Management & Secure Cashier Handover',
        'Real-time Forecourt & Pump Controller Integration (IFSF/Lon supported)',
        'Support for Multiple Payment Methods: Cash, Card, and Digital Quota',
        'Customer Account Management & Loyalty Identification at the Pump',
        'Daily Closing & Automated Reconciliation Reporting per Shift',
        'Offline Mode ensuring operations continue during internet outages',
        'Manager Dashboard for Real-time Station Monitoring and Alerts',
        'Integrated Thermal Receipt & Label Printing with custom logos',
        'Remote Configuration management & automated software updates',
        'Inventory Alerts for low fuel levels in underground tanks',
        'Cash Drawer integration with secure opening triggers'
      ],
      benefits: [
        'Drastically reduce customer wait times at checkout during peak periods',
        'Eliminate shift-change discrepancies and unauthorized cash withdrawals',
        'Prevent fuel theft with direct hardware-level pump control',
        'Access live sales data and inventory levels from your phone or office'
      ],
      howItWorks: [
        'Deploy dedicated, ruggedized POS terminals at your station kiosks',
        'Connect the POS system to your local pump controller via secure cabling',
        'Assign secure login credentials and RFID cards to all station staff',
        'Monitor individual station performance via the central manager portal'
      ],
      closingHeading: 'Optimize Your Forecourt Sales',
      closingSubtitle: 'See why station owners prefer our fast, reliable, and secure POS solution.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'fuel-card-fleet-card-system',
    name: 'Fuel Card & Fleet Card Management System',
    category: 'Fuel Cards',
    listingIcon: CreditCard,
    image: '/images/products/fleet amgnemnt .jpeg',
    listingDesc: 'Issue and manage fuel cards for customers, drivers, and fleets with automated spending limits.',
    homeBenefit: 'Eliminate unauthorised fuel spend',
    detail: {
      icon: CreditCard,
      iconBg,
      iconColor,
      eyebrow: 'Product · Fuel Cards',
      heroSubtitle: 'A powerful card-based ecosystem that gives you total control over who fuels, when they fuel, and where they fuel.',
      sectionHeading: 'Total Control Over Commercial Fueling',
      sectionBody: 'Managing commercial fuel accounts often involves significant administrative overhead and high fraud risk. Our Fuel Card & Fleet Card System automates this entire process. Whether you are issuing cards to your own drivers or managing accounts for large corporate clients, you can set granular limits and restrictions that are enforced instantly at the POS, ensuring total accountability for every drop of fuel. The system supports both prepaid and postpaid models, giving you the flexibility to serve different types of customers.',
      customers: ['Fleet Operators', 'Logistics Companies', 'Corporate Fuel Accounts', 'Fuel Retail Networks'],
      features: [
        'NFC, QR, & Magnetic Stripe Card Issuance and Management',
        'Granular Daily, Weekly, & Monthly Spending and Volume Limits',
        'Product-specific Restrictions (e.g., restricted to Diesel or Super only)',
        'Station-specific & Time-of-day Fueling Restrictions (e.g., 8 AM - 5 PM)',
        'Instant Card Blocking & Unblocking via the Management Portal',
        'Full Usage History & Transaction Location Tracking for Every Card',
        'Automated Monthly Invoicing & Statement generation for Accounts',
        'Self-service Portal for Fleet Managers to view driver activity',
        'Direct Integration with Gas Station POS for instant limit validation',
        'Anti-fraud Alerts for Unusual Fueling Behavior or Velocity',
        'Post-paid Credit Limit enforcement and Prepaid Balance management',
        'Support for Vehicle-only, Driver-only, or Driver+Vehicle card modes'
      ],
      benefits: [
        'Prevent fuel fraud and unauthorized driver or staff spend',
        'Attract large corporate clients with professional digital billing',
        'Reduce administrative work with automated limit enforcement',
        'Gain deep insight into fleet-wide fuel consumption and efficiency'
      ],
      howItWorks: [
        'Issue secure, encrypted fuel cards to your drivers or corporate clients',
        'Configure individual or group limits in the central web portal',
        'Cards are scanned and validated instantly at any station in your network',
        'View consolidated usage reports and generate automated client invoices'
      ],
      closingHeading: 'Secure Your Fuel Revenue',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'fuel-limit-quota-system',
    name: 'Employee Fuel Limit & Quota System',
    category: 'Fuel Quota',
    listingIcon: Gauge,
    image: '/images/products/Eliminate Internal Fuel Waste.jpeg',
    listingDesc: 'Set precise fuel allowances by employee, vehicle, or department with automated approval workflows.',
    detail: {
      icon: Gauge,
      iconBg,
      iconColor,
      eyebrow: 'Product · Fuel Quota',
      heroSubtitle: 'Manage internal company fuel consumption with the same precision as your external sales.',
      sectionHeading: 'Eliminate Internal Fuel Waste',
      sectionBody: 'For companies with large vehicle fleets, internal fuel usage is often a major, unmanaged expense. Our Employee Fuel Limit & Quota System brings structure to internal fueling. By setting digital allowances for every staff member and vehicle, you ensure that fuel is used strictly for business purposes. The system handles the entire lifecycle, from quota assignment to manager approval and final reconciliation. It helps you identify high-consumption departments and enforces company policy automatically at the pump.',
      customers: ['Government Departments', 'Industrial Operators', 'Construction Companies', 'Private Corporations'],
      features: [
        'Individual Employee & Vehicle Quota Profiles with specific fuel types',
        'Departmental & Branch-based Fuel Budgeting and Allocation',
        'Automated Balance Tracking & Quota Resetting (Monthly/Weekly)',
        'Digital Approval Workflows for Extra Fuel Requests with comments',
        'Real-time Consumption History per Employee with GPS location data',
        'Automated Email & Push Notifications for low balance and approval alerts',
        'Support for Multiple Fuel Types per profile (e.g. 50L Gas + 10L Diesel)',
        'Integrated with Fuel Cards or Mobile ID Verification for security',
        'Comprehensive Reporting for HR and Accounting departments',
        'Audit-ready Records of All Internal Fueling for financial reviews',
        'Historical Trend Analysis to identify vehicle maintenance issues',
        'Exportable records for payroll or departmental cost center billing'
      ],
      benefits: [
        'Significantly lower internal fuel costs within the first three months',
        'Transparent and fair fuel allocation for all staff members',
        'Eliminate manual spreadsheets and error-prone paper fuel slips',
        'Instantly identify high-consumption vehicles or departments needing review'
      ],
      howItWorks: [
        'Sync your employee and vehicle lists with the central cloud portal',
        'Assign recurring fuel quotas based on specific job requirements',
        'Employees fuel at company pumps using digital IDs or NFC cards',
        'Review consumption trends and approval requests through detailed dashboards'
      ],
      closingHeading: 'Control Your Company Fuel Spend',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'propane-cylinder-management',
    name: 'Propane Cylinder Management',
    category: 'Propane',
    listingIcon: Flame,
    image: '/images/products/Propane Cylinder Management.webp',
    listingDesc: 'Track your cylinder inventory, deposits, and returns in real-time to prevent stock loss.',
    homeBenefit: 'End-to-end cylinder tracking',
    detail: {
      icon: Flame,
      iconBg,
      iconColor,
      eyebrow: 'Product · Propane',
      heroSubtitle: 'A specialized logistics and inventory system for the propane distribution and home delivery market.',
      sectionHeading: 'Never Lose Track of a Propane Cylinder Again',
      sectionBody: 'Propane businesses lose thousands every year in missing cylinders and disputed deposit balances. Our system solves this by tracking every single cylinder from the moment it leaves your depot until it is returned by the customer. By combining inventory management with mobile driver tools, we ensure that every exchange is documented and every deposit is accurately recorded in real-time. This system is essential for companies managing a large fleet of reusable cylinders across multiple distribution routes.',
      customers: ['Propane Distributors', 'Home Gas Delivery Services', 'Industrial Gas Suppliers'],
      features: [
        'Unique Cylinder Identification using durable QR codes or Barcodes',
        'Real-time Depot & Truck Inventory Tracking (Stock on Hand)',
        'Customer Deposit & Return Management with digital signatures',
        'Mobile App for Delivery Drivers for on-site exchange logging',
        'Customer Order Management & full transaction history',
        'Disputed Balance & Missing Cylinder Reporting for fast resolution',
        'Home Delivery Route Support & Geographic Distribution view',
        'Automated Customer Notifications upon successful delivery',
        'Detailed Driver Performance, load sheets, and route summaries',
        'Stock Reconciliation between Multiple Depots and Warehouses',
        'Serial Number tracking for safety and maintenance cycles',
        'Automated calculation of deposit refunds for returning customers'
      ],
      benefits: [
        'Drastically reduce the number of lost or unreturned cylinders',
        'Speed up the delivery and exchange process for your drivers',
        'Improve customer trust with clear digital receipts and balance views',
        'Maintain 100% accurate stock levels across all locations and trucks'
      ],
      howItWorks: [
        'Tag your entire cylinder fleet with unique, durable QR or Barcodes',
        'Assign a load of cylinders to a driver via the management portal',
        'Driver scans exchanges and returns at each customer location via mobile',
        'System updates customer account and depot stock balances instantly'
      ],
      closingHeading: 'Protect Your Propane Inventory',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'bulk-gas-delivery',
    name: 'Bulk Gas Delivery System',
    category: 'Bulk Delivery',
    listingIcon: Truck,
    image: '/images/products/Bulk Gas Delivery System.png',
    listingDesc: 'Specialised management for tonnage-based gas delivery, including contract tracking and invoicing.',
    detail: {
      icon: Truck,
      iconBg,
      iconColor,
      eyebrow: 'Product · Bulk Delivery',
      heroSubtitle: 'A contract-centric management system for tonnage-based gas and fuel logistics.',
      sectionHeading: 'Precision Management for Tonnage Logistics',
      sectionBody: 'Bulk gas delivery to industrial and business customers requires a different approach than retail sales. Our system is built around high-volume contracts, scheduling, and verified weight-based billing. It ensures that complex contract terms are respected and that every tonne delivered is accurately accounted for, from the loading bay to the final industrial tank. The system is designed to handle the complexities of bulk energy logistics where precision is measured in tonnes.',
      customers: ['Industrial Gas Distributors', 'Refineries', 'Large Manufacturing Plants', 'Bulk Fuel Suppliers'],
      features: [
        'Contract Management with Tonnage-based Pricing & Expiry alerts',
        'Advanced Logistics Scheduling & Multi-truck Dispatch dashboard',
        'Truck & Tanker Workflow Optimization for industrial routes',
        'Weight-based Delivery Confirmation with digital flow meter data',
        'Customer Consumption & Balance Portals for business clients',
        'Driver Assignment & Multi-leg Trip Management with load tracking',
        'Regulatory Transportation Documentation & Waybill generation',
        'Automated Invoicing against complex Bulk Industrial Contracts',
        'Real-time Tank Level Integration direction for predictive ordering',
        'Compliance & Safety Reporting for hazardous bulk logistics',
        'Historical Tonnage Consumption Analytics per customer site',
        'Support for weight reconciliation between loading and discharge'
      ],
      benefits: [
        'Simplify complex tonnage-based pricing and billing structures',
        'Optimize tanker routes for maximum delivery efficiency and fuel savings',
        'Ensure 100% accuracy in bulk volume reconciliation and invoicing',
        'Strengthen relationships with high-value industrial clients through transparency'
      ],
      howItWorks: [
        'Input your long-term industrial supply contracts and pricing tiers',
        'Schedule tanker deliveries based on customer demand or tank sensors',
        'Drivers confirm delivery volume and weight via the mobile interface',
        'System generates accurate invoices based on contract rates and volume'
      ],
      closingHeading: 'Simplify Your Bulk Logistics',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'delivery-dispatch-route-optimisation',
    name: 'Delivery Dispatch & Route Optimisation System',
    category: 'Dispatch',
    listingIcon: Route,
    image: '/images/products/Delivery Dispatch & Route Optimisation System.webp',
    listingDesc: 'Optimise delivery routes and track your fleet live to improve efficiency and customer service.',
    detail: {
      icon: Route,
      iconBg,
      iconColor,
      eyebrow: 'Product · Dispatch',
      heroSubtitle: 'Modernize your delivery operations with intelligent routing and real-time fleet visibility.',
      sectionHeading: 'Smarter Dispatching for Faster Deliveries',
      sectionBody: 'Managing a fleet of delivery vehicles shouldn\'t rely on phone calls and manual maps. Our Dispatch & Route Optimisation System gives your planners a powerful bird\'s-eye view of your entire operation. By intelligently grouping orders and optimizing routes, we help you reduce fuel costs and increase the number of deliveries your team can complete every day, all while keeping your customers informed of their delivery status. The system adapts to traffic, site availability, and driver capacity in real-time.',
      customers: ['Propane Distributors', 'Fuel Delivery Fleets', 'Logistics & Distribution Teams'],
      features: [
        'Intelligent Order Grouping based on geography and delivery windows',
        'Live GPS Fleet Tracking on a central interactive map',
        'Real-time Driver Status, current task progress, and idle time',
        'Automatic Customer SMS/Email arrival notifications and tracking',
        'Advanced Estimated Time of Arrival (ETA) calculations based on traffic',
        'Failed Delivery Reason Tracking with mandatory photo and note entry',
        'Emergency & On-demand Order Handling with instant driver re-routing',
        'Dedicated Driver Mobile Application for manifest and signature capture',
        'Historical Route Performance Analytics to identify bottleneck areas',
        'Seamless Integration with Propane & Bulk Gas inventory modules',
        'Driver Communication center for secure text-based updates',
        'Vehicle Load Capacity optimization to prevent under-utilized trips'
      ],
      benefits: [
        'Reduce total fleet mileage and daily fuel consumption costs',
        'Maximize the productivity of every driver and vehicle in your fleet',
        'Provide customers with professional, real-time tracking updates',
        'Eliminate communication gaps and errors between office and field'
      ],
      howItWorks: [
        'Import daily delivery orders from your ERP or Customer Portal',
        'System generates optimized routes and loads for your available fleet',
        'Drivers receive digital manifestations and turn-by-turn navigation',
        'Planners monitor live progress on the map and handle exceptions'
      ],
      closingHeading: 'Master Your Delivery Logistics',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'location-based-task-management',
    name: 'Location-Based Task Management',
    category: 'Field Operations',
    listingIcon: MapPin,
    image: '/images/products/Enterprise-Grade Surveillance and Site Protection.jpeg',
    listingDesc: 'Verify field work and site visits using GPS check-ins and real-time photo evidence.',
    homeBenefit: 'Accountability for field teams',
    detail: {
      icon: MapPin,
      iconBg,
      iconColor,
      eyebrow: 'Product · Field Operations',
      heroSubtitle: 'Bridge the gap between your office and your remote field staff with GPS-verified task management.',
      sectionHeading: 'Absolute Proof of Field Work',
      sectionBody: 'Supervising staff at remote stations, depots, or customer sites is inherently difficult. Our Location-Based Task Management system gives you the digital tools to ensure that work is actually performed where and when it was scheduled. By requiring GPS-verified check-ins and photo evidence, you create an indisputable record of site inspections, security patrols, or maintenance visits. This system is designed for high-consequence industries where "checking the box" is not enough—you need proof.',
      customers: ['Station Network Supervisors', 'Safety & Inspection Teams', 'Security Patrol Operators', 'Field Maintenance Crews'],
      features: [
        'Digital Task Creation with specific location requirements',
        'GPS-enforced Site Check-in & Check-out (Geofencing)',
        'Mandatory Photo & Video Evidence collection per task',
        'Site Visit Logs with immutable Timestamp & Location Data',
        'Custom Inspection Checklists & Conditional Logic Forms',
        'Real-time Task Completion Alerts and Exception Reporting',
        'Full Offline Support ensuring data capture in zero-signal areas',
        'Historical Audit Trail for all Field Activities and site history',
        'Field Employee Performance rankings and Visit Frequency stats',
        'Integrated Mobile App with simplified UI for field workers',
        'Voice-to-text notes for fast reporting on the move',
        'QR Code Site Verification for additional layer of presence'
      ],
      benefits: [
        'Ensure 100% compliance with critical safety and inspection schedules',
        'Eliminate "ghost" visits and fraudulent staff time logs',
        'Identify operational delays as they happen in real-time',
        'Create professional, evidence-backed digital reports for stakeholders'
      ],
      howItWorks: [
        'Define the physical sites and specific tasks that require attention',
        'Assign recurring or one-off tasks to field staff via their mobile device',
        'Staff must be within the geofence at the GPS location to begin',
        'Managers review completed tasks, checklists, and photo proof instantly'
      ],
      closingHeading: 'Bring Accountability to the Field',
      closingSubtitle: 'See how our location-based tools can improve your field operations.',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'asset-maintenance-management',
    name: 'Asset & Maintenance Management System',
    category: 'Maintenance',
    listingIcon: Wrench,
    image: '/images/products/Refineries.jpeg',
    listingDesc: 'Stay ahead of equipment failures with preventive maintenance schedules and work order tracking.',
    detail: {
      icon: Wrench,
      iconBg,
      iconColor,
      eyebrow: 'Product · Maintenance',
      heroSubtitle: 'Protect your physical infrastructure with a structured approach to asset care.',
      sectionHeading: 'Extend the Life of Your Critical Infrastructure',
      sectionBody: 'Equipment failures at a fuel station or depot are more than just an inconvenience—they are a safety risk and a major source of lost revenue. Our system helps you move from reactive "firefighting" to proactive preventive maintenance. By tracking every piece of equipment, its service history, and its maintenance schedule, you can catch issues before they lead to expensive emergency repairs or operational downtime. This systematic approach is vital for refineries, depots, and station networks.',
      customers: ['Refinery Operators', 'Depot Managers', 'Station Maintenance Teams', 'Facility Managers'],
      features: [
        'Central Asset Register with Serial, Warranty, & Model Data',
        'Automated Preventive Maintenance Scheduling (Time or Usage based)',
        'Digital Work Order Creation & Technician Skills-based Assignment',
        'Spare Parts Inventory Management & Low-stock Alerts',
        'Detailed Maintenance Cost Tracking & Repair History per Asset',
        'QR/RFID Asset Tagging for instant ID and history lookup on-site',
        'Service Level Agreement (SLA) tracking for external service vendors',
        'Compliance & Safety Certificate management and expiry reminders',
        'Equipment Breakdown Frequency & Root Cause Analytics',
        'Integrated with Location-Based Tasks for visual maintenance proof',
        'Mobile Work Order interface for on-site technician updates',
        'Vendor Portal for third-party maintenance contractors'
      ],
      benefits: [
        'Significantly reduce equipment downtime and unexpected failures',
        'Lower total maintenance costs through proactive preventive care',
        'Better manage your inventory of expensive, energy-specific spare parts',
        'Ensure 100% compliance with safety and environmental standards'
      ],
      howItWorks: [
        'Catalog all your equipment, critical assets, and their locations',
        'Set up recurring preventive maintenance cycles for each item',
        'Technicians receive automated work orders on their mobile device',
        'Managers track repair status, vendor performance, and lifecycle costs'
      ],
      closingHeading: 'Maximize Asset Uptime',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'customer-portal-mobile-app',
    name: 'Customer Portal & Mobile App',
    category: 'Customer Experience',
    listingIcon: Smartphone,
    image: '/images/products/Customer Portal & Mobile App.jpeg',
    listingDesc: 'Provide your customers with a self-service app to place orders, view invoices, and track accounts.',
    detail: {
      icon: Smartphone,
      iconBg,
      iconColor,
      eyebrow: 'Product · Customer Experience',
      heroSubtitle: 'A modern self-service experience for your gas, fuel, and service customers.',
      sectionHeading: 'The Digital Front Door for Your Customers',
      sectionBody: 'In a digital-first world, your customers shouldn\'t have to call your office to place an order or check a balance. Our Customer Portal & Mobile App gives your residential and business clients 24/7 access to their accounts. They can request gas deliveries, download invoices, pay balances, and track their delivery status—all from their own smartphone. This reduces the pressure on your customer service team and provides a professional, modern image for your brand, fostering long-term loyalty.',
      customers: ['Propane Delivery Customers', 'Industrial Gas Clients', 'Corporate Fuel Accounts', 'Residential Energy Users'],
      features: [
        'Secure Multi-factor Customer Login (Phone/Email/Password)',
        'One-tap Gas Cylinder Delivery Requests with address pinning',
        'Bulk Fuel Manifest & Delivery Schedule viewing for businesses',
        'Real-time Access to Historical Invoices & payment confirmations',
        'Account Balance viewing & PDF Statement downloads',
        'Live Delivery Status Tracking & Map View of driver location',
        'Digital Complaint submission & Support Ticket management',
        'Automated Notification Center for new invoices and order updates',
        'Business Dashboard for Large Corporate Clients with multi-site views',
        'Contract and Multi-site Consumption Reports for energy managers',
        'Support for Multiple Delivery addresses per customer profile',
        'Integrated Payment gateway direction for digital transactions'
      ],
      benefits: [
        'Reduce inbound call volume and manual clerical overhead',
        'Speed up your payment cycles with instant digital invoice access',
        'Differentiate your brand from traditional competitors with technology',
        'Improve data accuracy by letting customers input their own orders'
      ],
      howItWorks: [
        'Deploy the branded app on the App Store or via a secure Web link',
        'Customers log in using their verified credentials or social IDs',
        'Order requests sync instantly with your internal Glaban dispatch module',
        'Customers receive push updates on their order and delivery status'
      ],
      closingHeading: 'Modernize Your Customer Experience',
      ctaLabel: 'Request a Demo',
    },
  },
  {
    slug: 'business-intelligence-dashboard',
    name: 'Business Intelligence Dashboard',
    category: 'Analytics',
    listingIcon: TrendingUp,
    image: '/images/products/Business Intelligence Dashboard.webp',
    listingDesc: 'Get a clear, real-time overview of sales, security, and operations through intuitive executive dashboards.',
    homeBenefit: 'Data-driven business decisions',
    detail: {
      icon: TrendingUp,
      iconBg,
      iconColor,
      eyebrow: 'Product · Analytics',
      heroSubtitle: 'Executive-level insights that turn your operational data into a competitive advantage.',
      sectionHeading: 'Decision-Ready Data for Energy Executives',
      sectionBody: 'Fuel and energy businesses generate massive amounts of data every day, but much of it is often trapped in spreadsheets or individual branch systems. Our Business Intelligence Dashboard pulls data from your ERP, POS, and logistics systems into a single, intuitive interface. It is designed for owners and regional managers who need answers fast—not analysts who spend hours cleaning data. See your most profitable branches, monitor stock movements, and identify operational risks at a glance. It provides the clarity needed to lead in a fast-moving energy market.',
      customers: ['Business Owners', 'Regional Operations Managers', 'Financial Controllers', 'Safety & Security Directors'],
      features: [
        'Consolidated Daily Sales, Revenue, & Profit Margin Dashboard',
        'Branch-by-branch Performance Comparisons & KPI Benchmarking',
        'Real-time Stock Movement & Leakage Analytics (Theft detection)',
        'Fleet Efficiency & Driver Productivity Metrics (Deliveries per hour)',
        'Customer Credit Risk & Balance Aging Reports with alerts',
        'Fuel Quota Usage & Exceptional Consumption flagging for groups',
        'Maintenance Cost & Asset Performance Tracking across all sites',
        'Security Incident & CCTV Uptime Reporting per branch',
        'Customizable KPI Cards & High-impact Visual Trend Charts',
        'Automated Executive Email Summaries (Daily/Weekly/Monthly)',
        'Data Filtering by Region, Branch, Product, or Date range',
        'Interactive Drill-down capability from high-level charts to data'
      ],
      benefits: [
        'Identify profitable trends and hidden losses instantly across the company',
        'Make faster, more confident decisions backed by real-time facts',
        'Spend less time chasing manual reports and more time leading your team',
        'A unified view of your entire multi-branch enterprise from one screen'
      ],
      howItWorks: [
        'Connect the dashboard securely to your Glaban ERP and POS modules',
        'System data is cleaned, aggregated, and visualized automatically',
        'Access the dashboard from any smartphone, tablet, or computer',
        'Schedule key performance reports for your management meetings'
      ],
      closingHeading: 'See Your Business Clearly',
      ctaLabel: 'Request a Demo',
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
