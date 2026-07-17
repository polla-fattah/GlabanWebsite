'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { products } from '@/lib/data/products';
import { services } from '@/lib/data/services';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
];

function isActive(pathname: string, href: string) {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const cleanHref = href.replace(/\/$/, '') || '/';
  if (cleanHref === '/') return cleanPath === '/';
  return cleanPath.startsWith(cleanHref);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  const isProductsActive = cleanPath === '/products' || cleanPath.startsWith('/products/');
  const isServicesActive = cleanPath === '/services' || cleanPath.startsWith('/services/') || cleanPath === '/cybersecurity' || cleanPath === '/cctv-physical-security';

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

        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "text-[13px] no-underline px-3.5 py-2 rounded-sm transition-colors inline-flex items-center",
                      isActive(cleanPath, '/')
                        ? "font-medium text-white bg-white/10 border border-[#23252a] shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                        : "font-normal text-[#d0d6e0] hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-[13px] px-3.5 py-2 h-auto rounded-sm transition-colors shadow-none font-normal text-[#d0d6e0] hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 data-[state=open]:text-white border border-transparent data-[state=open]:border-[#23252a]",
                    isProductsActive && "font-medium text-white bg-white/10 border-[#23252a] shadow-[0_0_12px_rgba(255,255,255,0.05)] data-[active=true]:bg-white/10 data-[active=true]:text-white"
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[640px] grid-cols-2 gap-2 p-3.5 bg-[#0f1011]">
                    {products.map((product) => {
                      const itemHref = `/products/${product.slug}`;
                      const isItemActive = cleanPath === itemHref;
                      return (
                        <NavigationMenuLink asChild active={isItemActive} key={product.slug}>
                          <Link
                            href={itemHref}
                            className={cn(
                              "group block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors border",
                              isItemActive
                                ? "bg-white/10 border-[#02b8cc]/80 shadow-[0_0_12px_rgba(2,184,204,0.15)] data-[active=true]:bg-white/10 data-[active=true]:border-[#02b8cc]/80 data-[active=true]:shadow-[0_0_12px_rgba(2,184,204,0.15)]"
                                : "hover:bg-white/5 border-transparent hover:border-[#23252a]"
                            )}
                          >
                            <div className="flex items-center gap-2 font-medium text-[13px] text-white leading-none">
                              <i className={cn(product.listingIcon, "text-[12px] w-4 text-center", isItemActive ? "text-[#e4f222]" : "text-[#02b8cc]")} />
                              <span className={cn("truncate", isItemActive && "text-[#e4f222] font-semibold data-[active=true]:text-[#e4f222]")}>{product.name}</span>
                            </div>
                            <p className={cn("line-clamp-1 text-[11.5px] leading-snug font-normal pt-1.5 pl-6", isItemActive ? "text-[#d0d6e0]" : "text-[#8a8f98]")}>
                              {product.listingDesc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                    <div className="col-span-2 pt-2 border-t border-[#23252a] mt-1">
                      <NavigationMenuLink asChild active={cleanPath === '/products'}>
                        <Link
                          href="/products"
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-[12.5px] font-medium transition-colors no-underline group border",
                            cleanPath === '/products'
                              ? "bg-white/10 border-[#02b8cc]/80 text-[#e4f222] shadow-[0_0_12px_rgba(2,184,204,0.15)] data-[active=true]:bg-white/10 data-[active=true]:border-[#02b8cc]/80 data-[active=true]:text-[#e4f222]"
                              : "text-[#e4f222] hover:bg-white/5 border-transparent"
                          )}
                        >
                          <span>View All Products & Software Modules</span>
                          <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-[13px] px-3.5 py-2 h-auto rounded-sm transition-colors shadow-none font-normal text-[#d0d6e0] hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 data-[state=open]:text-white border border-transparent data-[state=open]:border-[#23252a]",
                    isServicesActive && "font-medium text-white bg-white/10 border-[#23252a] shadow-[0_0_12px_rgba(255,255,255,0.05)] data-[active=true]:bg-white/10 data-[active=true]:text-white"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[640px] grid-cols-2 gap-2 p-3.5 bg-[#0f1011]">
                    {services.map((service) => {
                      const itemHref =
                        service.slug === 'cybersecurity' || service.slug === 'cctv-physical-security'
                          ? `/${service.slug}`
                          : `/services/${service.slug}`;
                      const isItemActive = cleanPath === itemHref;
                      return (
                        <NavigationMenuLink asChild active={isItemActive} key={service.slug}>
                          <Link
                            href={itemHref}
                            className={cn(
                              "group block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors border",
                              isItemActive
                                ? "bg-white/10 border-[#02b8cc]/80 shadow-[0_0_12px_rgba(2,184,204,0.15)] data-[active=true]:bg-white/10 data-[active=true]:border-[#02b8cc]/80 data-[active=true]:shadow-[0_0_12px_rgba(2,184,204,0.15)]"
                                : "hover:bg-white/5 border-transparent hover:border-[#23252a]"
                            )}
                          >
                            <div className="flex items-center gap-2 font-medium text-[13px] text-white leading-none">
                              <i className={cn(service.listingIcon, "text-[12px] w-4 text-center", isItemActive ? "text-[#e4f222]" : "text-[#02b8cc]")} />
                              <span className={cn("truncate", isItemActive && "text-[#e4f222] font-semibold data-[active=true]:text-[#e4f222]")}>{service.name}</span>
                            </div>
                            <p className={cn("line-clamp-1 text-[11.5px] leading-snug font-normal pt-1.5 pl-6", isItemActive ? "text-[#d0d6e0]" : "text-[#8a8f98]")}>
                              {service.listingDesc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                    <div className="col-span-2 pt-2 border-t border-[#23252a] mt-1">
                      <NavigationMenuLink asChild active={cleanPath === '/services'}>
                        <Link
                          href="/services"
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-[12.5px] font-medium transition-colors no-underline group border",
                            cleanPath === '/services'
                              ? "bg-white/10 border-[#02b8cc]/80 text-[#e4f222] shadow-[0_0_12px_rgba(2,184,204,0.15)] data-[active=true]:bg-white/10 data-[active=true]:border-[#02b8cc]/80 data-[active=true]:text-[#e4f222]"
                              : "text-[#e4f222] hover:bg-white/5 border-transparent"
                          )}
                        >
                          <span>View All Engineering Services & Deployment Models</span>
                          <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/industries"
                    className={cn(
                      "text-[13px] no-underline px-3.5 py-2 rounded-sm transition-colors inline-flex items-center",
                      isActive(cleanPath, '/industries')
                        ? "font-medium text-white bg-white/10 border border-[#23252a] shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                        : "font-normal text-[#d0d6e0] hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    Industries
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "text-[13px] no-underline px-3.5 py-2 rounded-sm transition-colors inline-flex items-center",
                      isActive(cleanPath, '/about')
                        ? "font-medium text-white bg-white/10 border border-[#23252a] shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                        : "font-normal text-[#d0d6e0] hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden lg:inline-flex bg-white hover:bg-white/90 text-[#08090a] font-medium text-[13px] px-4 py-2 h-auto rounded-full shadow-none transition-all"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="flex lg:hidden bg-transparent hover:bg-white/8 text-white w-9 h-9 border border-[#23252a] rounded-md cursor-pointer"
              >
                <div className="flex flex-col gap-[4px] items-center justify-center">
                  <span className="w-[18px] h-[1.5px] bg-white block" />
                  <span className="w-[18px] h-[1.5px] bg-white block" />
                  <span className="w-[18px] h-[1.5px] bg-white block" />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#0f1011] border-l border-[#23252a] text-white p-6 sm:max-w-xs flex flex-col justify-between z-[200]"
            >
              <div>
                <SheetHeader className="p-0 mb-6 text-left border-b border-[#23252a] pb-4.5">
                  <SheetTitle asChild>
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 no-underline w-fit"
                    >
                      <div className="w-[28px] h-[28px] rounded-[6px] bg-[#161718] border border-[#23252a] flex items-center justify-center font-bold text-white text-[14px]">
                        G
                      </div>
                      <span className="font-medium text-[16px] text-white tracking-[-0.022em]">
                        GLABAN
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const active = isActive(cleanPath, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "text-[15px] no-underline py-3 px-3.5 rounded-lg border border-transparent transition-colors flex items-center justify-between",
                          active
                            ? "font-medium text-white bg-white/8 border-[#23252a]"
                            : "font-normal text-[#d0d6e0] hover:text-white hover:bg-white/4"
                        )}
                      >
                        <span>{item.label}</span>
                        <i className="fa-solid fa-chevron-right text-[11px] text-[#525866]" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-[#23252a]">
                <Button
                  asChild
                  className="bg-[#e4f222] hover:bg-[#d0dd1f] text-[#08090a] font-medium text-[14px] px-4 py-3 h-auto rounded-full w-full shadow-none flex items-center justify-center gap-2"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <span>Contact Us</span>
                    <i className="fa-solid fa-arrow-right text-[12px]" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
