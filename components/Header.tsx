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
    <header className="sticky top-0 z-100 bg-[#08090a]/85 backdrop-blur-md border-b border-[#23252a]">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[28px] h-[28px] rounded-[6px] bg-[#0f1011] border border-[#23252a] flex items-center justify-center font-bold text-white text-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
            G
          </div>
          <span className="font-medium text-[16px] text-white tracking-[-0.022em]">
            GLABAN
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] no-underline px-3 py-1.5 rounded-md transition-colors",
                  active
                    ? "font-medium text-white bg-white/6"
                    : "font-normal text-[#d0d6e0] hover:text-white hover:bg-white/3"
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
            className="hidden lg:inline-flex bg-white hover:bg-white/90 text-[#08090a] font-medium text-[13px] px-4 py-2 h-auto rounded-full shadow-none transition-all"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="flex lg:hidden bg-transparent hover:bg-white/8 text-white w-9 h-9 border border-[#23252a] rounded-md cursor-pointer"
          >
            <div className="flex flex-col gap-[4px] items-center justify-center">
              <span className="w-[18px] h-[1.5px] bg-white block" />
              <span className="w-[18px] h-[1.5px] bg-white block" />
              <span className="w-[18px] h-[1.5px] bg-white block" />
            </div>
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden animate-[glbMenuIn_.15s_ease] bg-[#0f1011] border-t border-[#23252a] px-6 pt-3 pb-6 flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-[14px] no-underline py-2.5 px-3 rounded-md border-b border-[#23252a]/50",
                  active ? "font-medium text-white bg-white/6" : "font-normal text-[#d0d6e0]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="mt-4 bg-white hover:bg-white/90 text-[#08090a] font-medium text-[14px] px-4 py-2.5 h-auto rounded-full w-full shadow-none"
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
