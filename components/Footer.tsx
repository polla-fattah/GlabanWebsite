import Link from "next/link";

const social = [
  { label: "in", href: "#" },
  { label: "FB", href: "#" },
  { label: "X", href: "#" },
];

const productLinks = [
  { label: "Fuel ERP Platform", href: "/products/fuel-erp" },
  { label: "Gas Station POS", href: "/products/gas-station-pos" },
  {
    label: "Fuel Card & Fleet System",
    href: "/products/fuel-card-fleet-card-system",
  },
  {
    label: "Propane Cylinder Mgmt",
    href: "/products/propane-cylinder-management",
  },
  {
    label: "Location-Based Task Mgmt",
    href: "/products/location-based-task-management",
  },
  { label: "View all products", href: "/products" },
];

const serviceLinks = [
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "CCTV & Physical Security", href: "/cctv-physical-security" },
  { label: "ERP Implementation", href: "/services/erp-implementation" },
  {
    label: "Hosting & Backup",
    href: "/services/hosting-backup-disaster-recovery",
  },
  { label: "Training & Support", href: "/services/training-support" },
  { label: "View all services", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Support", href: "/support" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-[13.5px] text-ash hover:text-mist transition-colors no-underline"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-void border-t border-graphite w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/logo-light.png" alt="Glaban" className="h-10 w-auto object-contain dark:hidden" />
            <img src="/logo.png" alt="Glaban" className="h-10 w-auto object-contain hidden dark:block" />
          </div>
          <p className="text-[13.5px] leading-[1.65] text-fog max-w-full mb-5 break-words">
            Complete digital, cybersecurity, and physical security solutions for
            fuel, oil, gas, refinery, and energy companies across KRG and the
            wider region.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-8 h-8 rounded-md bg-carbon border border-graphite flex items-center justify-center no-underline text-fog hover:text-orange hover:border-orange/40 text-xs font-medium transition-colors shadow-none"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-medium text-[12px] text-fog tracking-[0.08em] uppercase mb-4">
            Products
          </div>
          <div className="flex flex-col gap-2.5">
            {productLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-medium text-[12px] text-fog tracking-[0.08em] uppercase mb-4">
            Services
          </div>
          <div className="flex flex-col gap-2.5">
            {serviceLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <div className="font-medium text-[12px] text-fog tracking-[0.08em] uppercase mb-4">
            Company
          </div>
          <div className="flex flex-col gap-2.5 mb-5">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </div>
          <div className="text-[13.5px] text-fog leading-[1.75] mt-3 break-words">
            <div className="text-white font-medium mb-1">info@glaban.com</div>
            <div className="mb-2 text-mist">+964 750 6611033</div>
            <div className="text-ash">Glaban Office, Makhmur Road,</div>
            <div className="text-ash">
              Erbil, Kurdistan Region (KRG), Iraq
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-graphite py-6 px-8 max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-3">
        <span className="text-[13px] text-ash">
          © 2026 Glaban. All rights reserved.
        </span>
        <span className="text-[13px] text-ash">
          Software · Cybersecurity · Physical Security for the Energy Sector
        </span>
      </div>
    </footer>
  );
}
