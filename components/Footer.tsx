import Link from 'next/link';

const social = [
  { label: 'in', href: '#' },
  { label: 'FB', href: '#' },
  { label: 'X', href: '#' },
];

const productLinks = [
  { label: 'Fuel ERP Platform', href: '/products/fuel-erp' },
  { label: 'Gas Station POS', href: '/products/gas-station-pos' },
  { label: 'Fuel Card & Fleet System', href: '/products/fuel-card-fleet-card-system' },
  { label: 'Propane Cylinder Mgmt', href: '/products/propane-cylinder-management' },
  { label: 'Location-Based Task Mgmt', href: '/products/location-based-task-management' },
  { label: 'View all products', href: '/products' },
];

const serviceLinks = [
  { label: 'Cybersecurity', href: '/cybersecurity' },
  { label: 'CCTV & Physical Security', href: '/cctv-physical-security' },
  { label: 'ERP Implementation', href: '/services/erp-implementation' },
  { label: 'Hosting & Backup', href: '/services/hosting-backup-disaster-recovery' },
  { label: 'Training & Support', href: '/services/training-support' },
  { label: 'View all services', href: '/services' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Support', href: '/support' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-['Inter'] text-sm text-white/55 hover:text-white transition-colors no-underline"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navyDeep border-t border-white/10 w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 pt-14 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-[30px] h-[30px] rounded-md bg-gradient-to-br from-orange to-orangeDark flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-navy text-[15px]">
              G
            </div>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-white">GLABAN</span>
          </div>
          <p className="font-['Inter'] text-sm leading-[1.7] text-white/55 max-w-full mb-5 break-words">
            Complete digital, cybersecurity, and physical security solutions for fuel, oil, gas, refinery, and energy companies across KRG and the wider region.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center no-underline text-white/60 hover:text-white font-['Inter'] text-xs font-semibold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-white tracking-[0.05em] uppercase mb-4">
            Products
          </div>
          <div className="flex flex-col gap-[11px]">
            {productLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-white tracking-[0.05em] uppercase mb-4">
            Services
          </div>
          <div className="flex flex-col gap-[11px]">
            {serviceLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] text-white tracking-[0.05em] uppercase mb-4">
            Company
          </div>
          <div className="flex flex-col gap-[11px] mb-5">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
          <div className="font-['Inter'] text-sm text-white/55 leading-[1.8] mt-3 break-words">
            <div className="text-orangeLight font-semibold mb-1">info@glaban.com</div>
            <div className="mb-3">+964 750 6611033</div>
            <div>Glaban Office, Makhmur Road,</div>
            <div>Erbil, Kurdistan Region (KRG), Iraq</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 px-8 max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-2.5">
        <span className="font-['Inter'] text-[13px] text-white/40">© 2026 Glaban. All rights reserved.</span>
        <span className="font-['Inter'] text-[13px] text-white/40">Software · Cybersecurity · Physical Security for the Energy Sector</span>
      </div>
    </footer>
  );
}
