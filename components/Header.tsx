'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/colors';

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
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: colors.navy,
        borderBottom: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 7,
              background: `linear-gradient(135deg, ${colors.orange}, ${colors.orangeDark})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: colors.navy,
              fontSize: 17,
            }}
          >
            G
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '.2px' }}>
            GLABAN
          </span>
        </Link>

        <nav className="glb-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 14.5,
                  fontWeight: active ? 600 : 500,
                  color: active ? '#fff' : 'rgba(255,255,255,.65)',
                  textDecoration: 'none',
                  paddingBottom: 4,
                  borderBottom: `2px solid ${active ? colors.orange : 'transparent'}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link
            href="/contact"
            className="glb-desktop-nav"
            style={{
              background: colors.orange,
              color: colors.navy,
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: 14.5,
              padding: '11px 22px',
              borderRadius: 7,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="glb-mobile-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
              <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
              <span style={{ width: 22, height: 2, background: '#fff', display: 'block' }} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          style={{
            animation: 'glbMenuIn .15s ease',
            background: colors.navy,
            borderTop: '1px solid rgba(255,255,255,.08)',
            padding: '8px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: 15.5,
                  fontWeight: active ? 600 : 500,
                  color: active ? colors.orange : 'rgba(255,255,255,.8)',
                  textDecoration: 'none',
                  padding: '12px 4px',
                  borderBottom: '1px solid rgba(255,255,255,.06)',
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 12,
              background: colors.orange,
              color: colors.navy,
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              padding: '12px 22px',
              borderRadius: 7,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
