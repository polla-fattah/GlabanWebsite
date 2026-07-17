'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 bg-navy border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[76px]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[34px] h-[34px] rounded-[7px] bg-gradient-to-br from-orange to-orangeDark flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-navy text-[17px]">
            G
          </div>
          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-white tracking-[0.2px]">
            GLABAN
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-['Inter'] text-[14.5px] no-underline pb-1 border-b-2 whitespace-nowrap transition-colors",
                  active
                    ? "font-semibold text-white border-orange"
                    : "font-medium text-white/65 border-transparent hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden lg:inline-flex bg-orange hover:bg-orangeDark text-navy font-['Inter'] font-semibold text-[14.5px] px-[22px] py-[11px] h-auto rounded-[7px]"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="flex lg:hidden bg-transparent hover:bg-white/10 text-white w-10 h-10 border-0 cursor-pointer"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="w-[22px] h-[2px] bg-white block" />
              <span className="w-[22px] h-[2px] bg-white block" />
              <span className="w-[22px] h-[2px] bg-white block" />
            </div>
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden animate-[glbMenuIn_.15s_ease] bg-navy border-t border-white/10 px-6 pt-2 pb-5 flex flex-col gap-0.5">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-['Inter'] text-[15.5px] no-underline py-3 px-1 border-b border-white/5",
                  active ? "font-semibold text-orange" : "font-medium text-white/80"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="mt-3 bg-orange hover:bg-orangeDark text-navy font-['Inter'] font-semibold text-[15px] px-[22px] py-3 h-auto rounded-[7px] w-full"
          >
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
