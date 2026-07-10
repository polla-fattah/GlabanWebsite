export type ServiceLayout = 'grid' | 'steps' | 'checklist' | 'training';

export interface Service {
  slug: string;
  name: string;
  listingIcon: string;
  listingDesc: string;
  detail: {
    icon: string;
    iconBg: string;
    iconColor: string;
    eyebrow: string;
    heroSubtitle: string;
    ctaLabel: string;
    layout: ServiceLayout;
    sectionHeading: string;
    items?: string[];
    steps?: string[];
    roles?: string[];
    disclaimer?: string;
    closingHeading: string;
  };
}

const orangeBg = 'rgba(226,134,27,.18)';
const orangeColor = '#F0A85B';

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    listingIcon: 'fa-solid fa-code',
    listingDesc: 'Tailored web, mobile, and desktop applications built to solve your specific operational challenges.',
    detail: {
      icon: 'fa-solid fa-code',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Development',
      heroSubtitle: "When ready-made products aren't enough, we build web, mobile, and desktop applications tailored to your operation.",
      ctaLabel: 'Discuss a Project',
      layout: 'grid',
      sectionHeading: 'What we build',
      items: ['Web applications', 'Mobile applications', 'Desktop applications', 'Admin panels', 'Customer portals', 'Driver applications', 'Management dashboards', 'API development', 'Integration with existing systems', 'Reporting systems'],
      closingHeading: 'Have a custom requirement in mind?',
    },
  },
  {
    slug: 'erp-implementation',
    name: 'ERP Implementation',
    listingIcon: 'fa-solid fa-gear',
    listingDesc: 'Professional rollout of the Fuel ERP Platform, from business analysis to final staff training.',
    detail: {
      icon: 'fa-solid fa-gear',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Implementation',
      heroSubtitle: 'From business analysis to go-live — a structured rollout of the Fuel ERP Platform across your branches.',
      ctaLabel: 'Request Consultation',
      layout: 'steps',
      sectionHeading: 'Implementation steps',
      steps: ['Business analysis', 'Workflow mapping', 'System configuration', 'Data preparation', 'User roles', 'Branch setup', 'Product setup', 'Staff training', 'Deployment', 'Post-launch support'],
      closingHeading: 'Plan your ERP rollout',
    },
  },
  {
    slug: 'pos-forecourt-deployment',
    name: 'POS & Forecourt Deployment',
    listingIcon: 'fa-solid fa-desktop',
    listingDesc: 'Complete station setup, including POS installation, cashier training, and manager reporting.',
    detail: {
      icon: 'fa-solid fa-desktop',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Deployment',
      heroSubtitle: 'Installation, configuration, and hands-on training to get your stations live and running smoothly.',
      ctaLabel: 'Request Consultation',
      layout: 'steps',
      sectionHeading: "What's included",
      steps: ['POS installation', 'User setup', 'Product setup', 'Printer setup direction', 'Shift workflow configuration', 'Cashier training', 'Manager training', 'Reporting setup', 'Pump/forecourt integration direction', 'Ongoing support'],
      closingHeading: 'Get your station live faster',
    },
  },
  {
    slug: 'delivery-system-implementation',
    name: 'Delivery System Implementation',
    listingIcon: 'fa-solid fa-truck',
    listingDesc: 'Modernise your logistics with integrated dispatch and tonnage-based delivery workflows.',
    detail: {
      icon: 'fa-solid fa-truck',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Implementation',
      heroSubtitle: 'We roll out dispatch, propane, and bulk gas delivery workflows so your drivers and planners adopt them from day one.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      sectionHeading: "What's included",
      items: ['Delivery workflow setup', 'Driver mobile app rollout', 'Route planning configuration', 'Customer notification setup', 'Dispatch team training', 'Driver training', 'Reporting setup', 'Go-live support'],
      closingHeading: 'Roll out delivery tracking across your fleet',
    },
  },
  {
    slug: 'industrial-ot-cybersecurity',
    name: 'Industrial & OT Cybersecurity Assessment',
    listingIcon: 'fa-solid fa-industry',
    listingDesc: 'Protect your critical infrastructure, including pumps, tanks, and industrial control networks.',
    detail: {
      icon: 'fa-solid fa-industry',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Industrial Security',
      heroSubtitle: 'A dedicated assessment covering the operational technology unique to fuel and energy sites — pumps, tanks, and CCTV networks.',
      ctaLabel: 'Request an Assessment',
      layout: 'checklist',
      sectionHeading: 'Assessment scope',
      items: ['Industrial network review', 'Remote access security review', 'Pump and tank system exposure review', 'CCTV/NVR network security review', 'Network segmentation guidance', 'Backup and recovery review', 'Access control review', 'Security documentation', 'Risk assessment', 'Recommendations report'],
      disclaimer: 'This is an assessment and protection service; it does not include industrial engineering or control-system reconfiguration unless separately scoped.',
      closingHeading: 'Assess your industrial network exposure',
    },
  },
  {
    slug: 'access-control-attendance',
    name: 'Access Control & Attendance Systems',
    listingIcon: 'fa-solid fa-id-badge',
    listingDesc: 'Secure your premises with biometric access control, staff ID cards, and automated attendance.',
    detail: {
      icon: 'fa-solid fa-id-badge',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Physical Security',
      heroSubtitle: 'Control who enters your sites and when, and turn attendance tracking into an automatic byproduct.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      sectionHeading: 'Coverage',
      items: ['Staff access cards', 'Biometric attendance', 'Door access control', 'Gate access control', 'Restricted area permissions', 'Visitor logs', 'Shift attendance', 'HR or ERP integration direction', 'Reports by branch or site', 'Security alerts'],
      closingHeading: 'Secure entry points across every site',
    },
  },
  {
    slug: 'fleet-vehicle-tracking',
    name: 'Fleet & Vehicle Tracking',
    listingIcon: 'fa-solid fa-truck-fast',
    listingDesc: 'Real-time GPS tracking and performance monitoring for your delivery and service vehicles.',
    detail: {
      icon: 'fa-solid fa-truck-fast',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Fleet',
      heroSubtitle: 'Live location, trip history, and performance reporting for delivery and service vehicles.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      sectionHeading: 'Coverage',
      items: ['Vehicle live location', 'Driver assignment', 'Trip history', 'Route deviation alerts', 'Delivery confirmation', 'Fuel consumption tracking direction', 'Maintenance reminders', 'Vehicle documents', 'Driver performance reports', 'Integration with delivery orders'],
      closingHeading: 'Know where every vehicle is',
    },
  },
  {
    slug: 'hosting-backup-disaster-recovery',
    name: 'Hosting, Backup & Disaster Recovery',
    listingIcon: 'fa-solid fa-cloud',
    listingDesc: 'Secure cloud hosting with automated daily backups and comprehensive disaster recovery plans.',
    detail: {
      icon: 'fa-solid fa-cloud',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Infrastructure',
      heroSubtitle: 'Reliable infrastructure with automated backups and a clear recovery plan if something goes wrong.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      sectionHeading: "What's included",
      items: ['VPS setup', 'Cloud hosting direction', 'Domain setup', 'SSL setup', 'Daily backup', 'Offsite backup direction', 'Server snapshot direction', 'Restore testing', 'Emergency recovery plan', 'Backup monitoring', 'Update management', 'Performance optimisation'],
      closingHeading: 'Make your infrastructure resilient',
    },
  },
  {
    slug: 'training-support',
    name: 'Training & Support',
    listingIcon: 'fa-solid fa-chalkboard-user',
    listingDesc: 'Hands-on training for owners, managers, and field staff to ensure smooth system adoption.',
    detail: {
      icon: 'fa-solid fa-chalkboard-user',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Enablement',
      heroSubtitle: 'Role-based training for every user, from owners to drivers, on-site or remote.',
      ctaLabel: 'Request Consultation',
      layout: 'training',
      sectionHeading: 'Who we train',
      roles: ['Owners', 'Managers', 'Accountants', 'Cashiers', 'Drivers', 'Field employees', 'Security staff', 'IT staff', 'Admin users'],
      items: ['User training', 'Admin training', 'On-site support direction', 'Remote support direction', 'Maintenance packages', 'Support request process', 'Emergency support direction'],
      closingHeading: 'Get your team confident on day one',
    },
  },
  {
    slug: 'maintenance-long-term-support',
    name: 'Maintenance & Long-Term Support',
    listingIcon: 'fa-solid fa-wrench',
    listingDesc: 'Keep your systems secure and up-to-date with our dedicated maintenance and support packages.',
    detail: {
      icon: 'fa-solid fa-wrench',
      iconBg: orangeBg,
      iconColor: orangeColor,
      eyebrow: 'Service · Long-Term Support',
      heroSubtitle: 'Ongoing updates, monitoring, and dedicated support packages so your systems keep running long after launch.',
      ctaLabel: 'Request Consultation',
      layout: 'grid',
      sectionHeading: 'Support packages include',
      items: ['Regular software updates', 'Server and security monitoring', 'Bug fixes', 'Performance tuning', 'Priority support tiers', 'Scheduled maintenance windows', 'Change requests', 'Annual system review'],
      closingHeading: 'Talk to us about a support plan',
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
