export type ServiceLayout = 'grid' | 'steps' | 'checklist' | 'training';

export interface Service {
  slug: string;
  name: string;
  listingIcon: string;
  listingDesc: string;
  image: string;
  detail: {
    icon: string;
    iconBg: string;
    iconColor: string;
    eyebrow: string;
    heroSubtitle: string;
    sectionHeading: string;
    sectionBody: string;
    ctaLabel: string;
    layout: ServiceLayout;
    items?: string[];
    steps?: string[];
    roles?: string[];
    disclaimer?: string;
    closingHeading: string;
    benefits: string[];
    howItWorks: string[];
  };
}

const orangeBg = '#0f1011';
const orangeColor = '#02b8cc';

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    listingIcon: 'fa-solid fa-code',
    image: '/images/services/Custom Software Development.jpeg',
    listingDesc: 'Tailored web, mobile, and desktop applications built to solve your specific operational challenges.',
    detail: {
      icon: 'fa-solid fa-code',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Development',
      heroSubtitle: "When ready-made products aren't enough, we build web, mobile, and desktop applications tailored to your operation.",
      sectionHeading: 'Bespoke Software Solutions for the Energy Sector',
      sectionBody: 'Every fuel business has unique operational nuances that off-the-shelf software sometimes cannot address. Our custom development service focuses on creating proprietary tools that fit your exact workflow. From complex admin panels and driver applications to specialized API integrations and custom reporting engines, we build robust, scalable software that you own entirely. We use modern tech stacks to ensure high performance, security, and a seamless user experience for your staff and customers.',
      ctaLabel: 'Discuss a Project',
      layout: 'grid',
      items: ['Web applications', 'Mobile applications', 'Desktop applications', 'Admin panels', 'Customer portals', 'Driver applications', 'Management dashboards', 'API development', 'Integration with existing systems', 'Reporting systems'],
      closingHeading: 'Have a custom requirement in mind?',
      benefits: [
        'Proprietary solutions owned 100% by your business',
        'Direct alignment with your existing internal workflows',
        'Scalable architecture designed for high transaction volumes',
        'Modern user interfaces focused on staff efficiency'
      ],
      howItWorks: [
        'Discovery phase to document your technical requirements',
        'Prototyping and UI/UX design for stakeholder approval',
        'Agile development with regular progress updates',
        'Deployment to secure infrastructure and ongoing support'
      ]
    },
  },
  {
    slug: 'erp-implementation',
    name: 'ERP Implementation',
    listingIcon: 'fa-solid fa-gear',
    image: '/images/products/Fuel ERP Platform.jpg',
    listingDesc: 'Professional rollout of the Fuel ERP Platform, from business analysis to final staff training.',
    detail: {
      icon: 'fa-solid fa-gear',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Implementation',
      heroSubtitle: 'From business analysis to go-live — a structured rollout of the Fuel ERP Platform across your branches.',
      sectionHeading: 'Structured Rollout for Multi-Branch Fuel ERP',
      sectionBody: 'Implementing an ERP is a major milestone for any energy company. Our implementation service ensures that the transition from manual or legacy systems to the Glaban Fuel ERP is smooth and successful. We don’t just "install" software; we analyze your current business processes, map them to the ERP, migrate your data with 100% accuracy, and provide hands-on training to your team. Our goal is to ensure high staff adoption and immediate operational benefits from day one of go-live.',
      ctaLabel: 'Request Consultation',
      layout: 'steps',
      steps: ['Business analysis', 'Workflow mapping', 'System configuration', 'Data preparation', 'User roles', 'Branch setup', 'Product setup', 'Staff training', 'Deployment', 'Post-launch support'],
      closingHeading: 'Plan your ERP rollout',
      benefits: [
        'Expert guidance from consultants who know the fuel sector',
        'Clean data migration from manual or legacy systems',
        'Minimized operational downtime during the transition',
        'Standardized workflows across all company branches'
      ],
      howItWorks: [
        'Audit of current station and depot operations',
        'Mapping of existing data structures to Glaban ERP',
        'System configuration and on-site hardware readiness',
        'Hands-on staff training and go-live assistance'
      ]
    },
  },
  {
    slug: 'pos-forecourt-deployment',
    name: 'POS & Forecourt Deployment',
    listingIcon: 'fa-solid fa-desktop',
    image: '/images/products/gas station pos.jpeg',
    listingDesc: 'Complete station setup, including POS installation, cashier training, and manager reporting.',
    detail: {
      icon: 'fa-solid fa-desktop',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Deployment',
      heroSubtitle: 'Installation, configuration, and hands-on training to get your stations live and running smoothly.',
      sectionHeading: 'Forecourt Integration and Hardware Deployment',
      sectionBody: 'A gas station’s POS is only as good as its integration with the forecourt hardware. Our deployment service covers the physical installation and digital synchronization of POS terminals with pump controllers and external devices. We handle the technical complexities of cabling, network setup, and protocol integration (IFSF/Lon), ensuring that your station kiosk is a high-speed command center for your business. We also provide on-site training to cashiers to ensure they can manage shifts and sales with confidence.',
      ctaLabel: 'Request Consultation',
      layout: 'steps',
      steps: ['POS installation', 'User setup', 'Product setup', 'Printer setup direction', 'Shift workflow configuration', 'Cashier training', 'Manager training', 'Reporting setup', 'Pump/forecourt integration direction', 'Ongoing support'],
      closingHeading: 'Get your station live faster',
      benefits: [
        'Verified integration with major forecourt controllers',
        'Reduced human error in high-traffic station environments',
        'Accurate shift handovers and cash reconciliation',
        'Professional installation using ruggedized hardware'
      ],
      howItWorks: [
        'Physical site survey of station kiosks and cabling',
        'Hardware installation and network connectivity setup',
        'Forecourt controller synchronization and testing',
        'Cashier training on shift management and sales'
      ]
    },
  },
  {
    slug: 'delivery-system-implementation',
    name: 'Delivery System Implementation',
    listingIcon: 'fa-solid fa-truck',
    image: '/images/services/Delivery Dispatch & Route Optimisation System.webp',
    listingDesc: 'Modernise your logistics with integrated dispatch and tonnage-based delivery workflows.',
    detail: {
      icon: 'fa-solid fa-truck',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Implementation',
      heroSubtitle: 'We roll out dispatch, propane, and bulk gas delivery workflows so your drivers and planners adopt them from day one.',
      sectionHeading: 'Modernizing Fuel and Gas Logistics',
      sectionBody: 'Moving from paper-based waybills to a digital dispatch system requires a structured implementation. Our team manages the rollout of the Glaban delivery modules, ensuring that planners understand how to optimize routes and drivers are comfortable using the mobile application. We set up your delivery zones, price tiers, and tonnage-based contract rules, transforming your logistics into a high-visibility, data-driven operation. This service is key for companies moving fuel, bulk gas, or propane cylinders at scale.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      items: ['Delivery workflow setup', 'Driver mobile app rollout', 'Route planning configuration', 'Customer notification setup', 'Dispatch team training', 'Driver training', 'Reporting setup', 'Go-live support'],
      closingHeading: 'Roll out delivery tracking across your fleet',
      benefits: [
        'Elimination of paper-based logistics and waybills',
        'Improved driver accountability with mobile tools',
        'Optimized routing reducing total fleet fuel costs',
        'Real-time delivery status for customers and planners'
      ],
      howItWorks: [
        'Configuration of delivery zones and price tiers',
        'Onboarding of drivers to the mobile application',
        'Setup of automated customer arrival notifications',
        'Review of fleet performance through central portal'
      ]
    },
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity Services',
    listingIcon: 'fa-solid fa-shield-halved',
    image: '/images/services/Cybersecurity Services.jpeg',
    listingDesc: 'Secure your web applications, servers, ERP platforms, and business networks.',
    detail: {
      icon: 'fa-solid fa-shield-halved',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Cybersecurity',
      heroSubtitle: 'Protect the systems your fuel business runs on — from your website to your ERP and POS access controls.',
      sectionHeading: 'Comprehensive Digital Protection for Energy Systems',
      sectionBody: 'In the energy sector, digital security is non-negotiable. A breach in your ERP or POS can lead to massive financial loss and operational shutdown. Our cybersecurity service is focused on hardening the specific systems you rely on. We audit your server infrastructure, review staff access permissions, and secure your administrative panels against modern threats. We provide a layered defense strategy that includes network isolation, database redundancy, and incident response planning, ensuring your business data remains secure and accessible.',
      ctaLabel: 'Request a Security Review',
      layout: 'grid',
      items: ['Website security review', 'Server hardening', 'Admin panel protection', 'ERP and POS access control', 'Database backup strategy', 'Access control review', 'Network security guidance', 'Email security', 'Incident response', 'Security awareness training', 'Security monitoring', 'Vulnerability review'],
      closingHeading: 'Get a security review of your systems',
      benefits: [
        'Identification of hidden risks in your business software',
        'Prevention of unauthorized access to critical financial data',
        'Reduced risk of downtime due to cyber attacks',
        'Compliance with modern data protection standards'
      ],
      howItWorks: [
        'Initial audit of your servers and software access',
        'Identification of security gaps and potential entry points',
        'Implementation of hardening measures and firewall rules',
        'Ongoing monitoring and security awareness training'
      ]
    },
  },
  {
    slug: 'industrial-ot-cybersecurity',
    name: 'Industrial & OT Cybersecurity Assessment',
    listingIcon: 'fa-solid fa-industry',
    image: '/images/services/Protecting Critical Operational Technology (OT).png',
    listingDesc: 'Protect your critical infrastructure, including pumps, tanks, and industrial control networks.',
    detail: {
      icon: 'fa-solid fa-industry',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Industrial Security',
      heroSubtitle: 'A dedicated assessment covering the operational technology unique to fuel and energy sites — pumps, tanks, and CCTV networks.',
      sectionHeading: 'Protecting Critical Operational Technology (OT)',
      sectionBody: 'Industrial networks at refineries and fuel depots are often overlooked by traditional IT security. Our Industrial & OT Cybersecurity Assessment is designed specifically for these high-risk environments. We review the security of your pump controllers, tank monitoring systems, and CCTV networks, which are often the weakest entry points for intruders. Our assessment identifies insecure remote access points and legacy hardware vulnerabilities, providing you with a technical remediation plan to air-gap and secure your critical operational assets.',
      ctaLabel: 'Request an Assessment',
      layout: 'checklist',
      items: ['Industrial network review', 'Remote access security review', 'Pump and tank system exposure review', 'CCTV/NVR network security review', 'Network segmentation guidance', 'Backup and recovery review', 'Access control review', 'Security documentation', 'Risk assessment', 'Recommendations report'],
      disclaimer: 'This is an assessment and protection service; it does not include industrial engineering or control-system reconfiguration unless separately scoped.',
      closingHeading: 'Assess your industrial network exposure',
      benefits: [
        'Identification of hidden risks in your station networks',
        'Prevention of unauthorized remote access to pump controllers',
        'Secure isolation of industrial and business traffic',
        'Protection of high-value business data and systems'
      ],
      howItWorks: [
        'Physical on-site review of controllers and network cabling',
        'Scanning for unauthorized access points or insecure protocols',
        'Comprehensive review of user access levels and password policies',
        'Delivery of a prioritized remediation roadmap'
      ]
    },
  },
  {
    slug: 'cctv-physical-security',
    name: 'CCTV, Surveillance & Physical Security',
    listingIcon: 'fa-solid fa-video',
    image: '/images/services/Enterprise-Grade Surveillance and Site Protection.jpeg',
    listingDesc: 'Professional camera installation, monitoring, and control-room setup for every site.',
    detail: {
      icon: 'fa-solid fa-video',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Physical Security',
      heroSubtitle: 'Coverage designed around fuel operations — pump areas, warehouses, tanks, and perimeters.',
      sectionHeading: 'Enterprise-Grade Surveillance and Site Protection',
      sectionBody: 'Fuel stations and depots are high-value targets that require specialized physical protection. Our CCTV and physical security service moves beyond simple camera installation. We design comprehensive surveillance ecosystems tailored to the energy sector, focusing on critical zones like loading bays, pump islands, and perimeter gates. Our solutions include high-definition IP camera networks, centralized control rooms, and vehicle identification systems, giving you 24/7 visibility over your entire multi-branch operation from any location.',
      ctaLabel: 'Request a Site Survey',
      layout: 'grid',
      items: ['CCTV camera installation', 'IP camera systems', 'NVR/DVR setup', 'Remote viewing configuration', 'Camera coverage planning', 'Gate monitoring', 'Entrance and exit monitoring', 'Fuel pump area monitoring', 'Cashier and counter monitoring', 'Warehouse and tank area monitoring', 'Alarm integration', 'Access control integration', 'Maintenance and support'],
      closingHeading: 'Get a coverage plan for your site',
      benefits: [
        '24/7 high-definition visibility of your remote sites',
        'Deterrence of theft and unauthorized fuel dispensing',
        'Improved safety monitoring for hazardous areas',
        'Centralized control room setup for multi-branch monitoring'
      ],
      howItWorks: [
        'Physical on-site survey and blind-spot identification',
        'Design of optimal camera placement and network path',
        'Professional hardware installation and NVR setup',
        'Configuration of remote viewing on mobile and desktop'
      ]
    },
  },
  {
    slug: 'access-control-attendance',
    name: 'Access Control & Attendance Systems',
    listingIcon: 'fa-solid fa-id-badge',
    image: '/images/services/Access Control & Attendance Systems.jpeg',
    listingDesc: 'Secure your premises with biometric access control, staff ID cards, and automated attendance.',
    detail: {
      icon: 'fa-solid fa-id-badge',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Physical Security',
      heroSubtitle: 'Control who enters your sites and when, and turn attendance tracking into an automatic byproduct.',
      sectionHeading: 'Automated Site Access and Staff Accountability',
      sectionBody: 'Managing staff movements and area access at fuel sites is critical for security and safety. Our access control systems replace manual logs with secure biometric and RFID technology. We secure your entry points and restricted zones, ensuring only authorized personnel can enter. Simultaneously, the system generates automated attendance reports for HR, eliminating payroll discrepancies and providing real-time visibility into who is on-site at any given time, which is essential for emergency evacuations and general security management.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      items: ['Staff access cards', 'Biometric attendance', 'Door access control', 'Gate access control', 'Restricted area permissions', 'Visitor logs', 'Shift attendance', 'HR or ERP integration direction', 'Reports by branch or site', 'Security alerts'],
      closingHeading: 'Secure entry points across every site',
      benefits: [
        'Elimination of payroll fraud and manual attendance logs',
        'Restriction of unauthorized staff to sensitive areas',
        'Real-time overview of staff presence at remote branches',
        'Automated reporting for HR and management reviews'
      ],
      howItWorks: [
        'Physical site evaluation for entry and exit points',
        'Installation of biometric or RFID hardware readers',
        'Enrollment of staff members and issuance of IDs',
        'Syncing of hardware with the central Glaban portal'
      ]
    },
  },
  {
    slug: 'fleet-vehicle-tracking',
    name: 'Fleet & Vehicle Tracking',
    listingIcon: 'fa-solid fa-truck-fast',
    image: '/images/products/fleet amgnemnt .jpeg',
    listingDesc: 'Real-time GPS tracking and performance monitoring for your delivery and service vehicles.',
    detail: {
      icon: 'fa-solid fa-truck-fast',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Fleet',
      heroSubtitle: 'Live location, trip history, and performance reporting for delivery and service vehicles.',
      sectionHeading: 'High-Precision Fleet Visibility and Driver Monitoring',
      sectionBody: 'For fuel distributors, the fleet is the core of the business. Our vehicle tracking service provides live GPS data, trip history, and driver behavior analytics to help you manage your mobile assets effectively. We install hidden tracking hardware that reports directly to your central office, allowing you to monitor route adherence, unauthorized detours, and excessive idling. By integrating tracking with your delivery schedules, you gain absolute certainty over where your tankers and delivery trucks are, improving both security and operational efficiency.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      items: ['Vehicle live location', 'Driver assignment', 'Trip history', 'Route deviation alerts', 'Delivery confirmation', 'Fuel consumption tracking direction', 'Maintenance reminders', 'Vehicle documents', 'Driver performance reports', 'Integration with delivery orders'],
      closingHeading: 'Know where every vehicle is',
      benefits: [
        'Reduced unauthorized private use of company vehicles',
        'Improved driver safety through behavioral monitoring',
        'Lower fuel costs through route adherence and idle alerts',
        'Accurate maintenance cycles based on actual mileage'
      ],
      howItWorks: [
        'Installation of hidden GPS tracking hardware in fleet',
        'Activation of driver profiles and vehicle manifests',
        'Configuration of geofences around stations and depots',
        'Live monitoring via the central dispatcher map'
      ]
    },
  },
  {
    slug: 'hosting-backup-disaster-recovery',
    name: 'Hosting, Backup & Disaster Recovery',
    listingIcon: 'fa-solid fa-cloud',
    image: '/images/services/Hosting, Backup & Disaster Recovery.jpg',
    listingDesc: 'Secure cloud hosting with automated daily backups and comprehensive disaster recovery plans.',
    detail: {
      icon: 'fa-solid fa-cloud',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Infrastructure',
      heroSubtitle: 'Reliable infrastructure with automated backups and a clear recovery plan if something goes wrong.',
      sectionHeading: 'High-Availability Infrastructure for Energy Software',
      sectionBody: 'Your business software is mission-critical; it cannot afford to be offline. Our hosting and disaster recovery service provides a secure, professionally managed cloud environment for your Glaban ERP and other energy systems. We move beyond simple hosting by implementing automated nightly backups to offsite locations and maintaining a rigorous disaster recovery plan. This ensures that even in the event of a hardware failure or data breach, your systems can be restored quickly with zero data loss, keeping your depots and stations running 24/7.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      items: ['VPS setup', 'Cloud hosting direction', 'Domain setup', 'SSL setup', 'Daily backup', 'Offsite backup direction', 'Server snapshot direction', 'Restore testing', 'Emergency recovery plan', 'Backup monitoring', 'Update management', 'Performance optimisation'],
      closingHeading: 'Make your infrastructure resilient',
      benefits: [
        'High system availability (99.9% uptime targets)',
        'Peace of mind with offsite data redundancy',
        'Fast system restoration during hardware failures',
        'Professional management of security certificates'
      ],
      howItWorks: [
        'Deployment of your systems to a secure, partitioned VPS',
        'Setup of automated nightly database and file backups',
        'Implementation of 24/7 server health monitoring',
        'Regular restore tests to verify recovery procedures'
      ]
    },
  },
  {
    slug: 'training-support',
    name: 'Training & Support',
    listingIcon: 'fa-solid fa-chalkboard-user',
    image: '/images/services/training and support .jpeg',
    listingDesc: 'Hands-on training for owners, managers, and field staff to ensure smooth system adoption.',
    detail: {
      icon: 'fa-solid fa-chalkboard-user',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Enablement',
      heroSubtitle: 'Role-based training for every user, from owners to drivers, on-site or remote.',
      sectionHeading: 'Comprehensive Staff Enablement Program',
      sectionBody: 'Technical systems are only effective if your staff knows how to use them. Our training and support service is designed to ensure 100% user adoption across all levels of your organization. We provide role-specific training sessions for owners, managers, cashiers, and drivers, ensuring that each person understands their specific responsibilities within the Glaban ecosystem. Beyond the initial training, our support team provides ongoing technical assistance, ensuring that your operation never slows down due to user confusion or technical hurdles.',
      ctaLabel: 'Request Consultation',
      layout: 'training',
      roles: ['Owners', 'Managers', 'Accountants', 'Cashiers', 'Drivers', 'Field employees', 'Security staff', 'IT staff', 'Admin users'],
      items: ['User training', 'Admin training', 'On-site support direction', 'Remote support direction', 'Maintenance packages', 'Support request process', 'Emergency support direction'],
      closingHeading: 'Get your team confident on day one',
      benefits: [
        'Higher staff productivity through proper system usage',
        'Lower help-desk volume due to educated users',
        'Clear accountability for different system roles',
        'Ongoing access to technical documentation and experts'
      ],
      howItWorks: [
        'Assessment of user roles and required learning paths',
        'On-site or remote hands-on training sessions',
        'Delivery of user manuals and standard operating procedures',
        'Activation of the priority technical support channel'
      ]
    },
  },
  {
    slug: 'maintenance-long-term-support',
    name: 'Maintenance & Long-Term Support',
    listingIcon: 'fa-solid fa-wrench',
    image: '/images/services/Refineries.jpeg',
    listingDesc: 'Keep your systems secure and up-to-date with our dedicated maintenance and support packages.',
    detail: {
      icon: 'fa-solid fa-wrench',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Long-Term Support',
      heroSubtitle: 'Ongoing updates, monitoring, and dedicated support packages so your systems keep running long after launch.',
      sectionHeading: 'Long-Term Reliability and Technical Partnership',
      sectionBody: 'Modern software requires ongoing attention to remain secure and performant. Our long-term maintenance service is a technical partnership designed to protect your investment. We handle regular software updates, apply security patches, and monitor your server health proactively to identify and fix issues before they affect your operations. This service ensures that your ERP and POS systems grow and adapt as your business expands, providing you with a reliable technical foundation for years to come.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      items: ['Regular software updates', 'Server and security monitoring', 'Bug fixes', 'Performance tuning', 'Priority support tiers', 'Scheduled maintenance windows', 'Change requests', 'Annual system review'],
      closingHeading: 'Talk to us about a support plan',
      benefits: [
        'Priority response for mission-critical software issues',
        'Always running the latest secure software versions',
        'Proactive monitoring to prevent issues before they occur',
        'Predictable annual budgeting for technical support'
      ],
      howItWorks: [
        'Selection of a maintenance tier based on business size',
        'Setup of automated monitoring and alert systems',
        'Monthly or quarterly system health and performance checks',
        'Rapid response based on agreed Service Level Agreements'
      ]
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
