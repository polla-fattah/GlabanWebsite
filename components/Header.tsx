"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

function isActive(pathname: string, href: string) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const cleanHref = href.replace(/\/$/, "") || "/";
  if (cleanHref === "/") return cleanPath === "/";
  return cleanPath.startsWith(cleanHref);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const isProductsActive =
    cleanPath === "/products" || cleanPath.startsWith("/products/");
  const isServicesActive =
    cleanPath === "/services" ||
    cleanPath.startsWith("/services/") ||
    cleanPath === "/cybersecurity" ||
    cleanPath === "/cctv-physical-security";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-100 bg-void/85 backdrop-blur-md border-b transition-colors duration-300",
        scrolled ? "border-graphite" : "border-transparent",
      )}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[68px]">
        {/* Logo moved to Hero section */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "text-[13px] no-underline px-3.5 py-2 rounded-lg transition-colors inline-flex items-center",
                      isActive(cleanPath, "/")
                        ? "font-medium text-white bg-white/10 border border-graphite shadow-none"
                        : "font-normal text-mist hover:text-white hover:bg-white/5 border border-transparent",
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-[13px] px-3.5 py-2 h-auto rounded-lg transition-colors shadow-none font-normal text-mist hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 data-[state=open]:text-white border border-transparent data-[state=open]:border-graphite",
                    isProductsActive &&
                      "font-medium text-white bg-white/10 border-graphite shadow-none data-[active=true]:bg-white/10 data-[active=true]:text-white",
                  )}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[640px] grid-cols-2 gap-2 p-3.5 bg-carbon">
                    {products.map((product) => {
                      const itemHref = `/products/${product.slug}`;
                      const isItemActive = cleanPath === itemHref;
                      return (
                        <NavigationMenuLink
                          asChild
                          active={isItemActive}
                          key={product.slug}
                        >
                          <Link
                            href={itemHref}
                            className={cn(
                              "group block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors border",
                              isItemActive
                                ? "bg-white/10 border-graphite shadow-none data-[active=true]:bg-white/10 data-[active=true]:border-graphite data-[active=true]:shadow-none"
                                : "hover:bg-white/5 border-transparent hover:border-graphite",
                            )}
                          >
                            <div className="flex items-center gap-2 font-medium text-[13px] text-white leading-none">
                              <i
                                className={cn(
                                  product.listingIcon,
                                  "text-[12px] w-4 text-center",
                                  isItemActive
                                    ? "text-orange"
                                    : "text-fog group-hover:text-white",
                                )}
                              />
                              <span
                                className={cn(
                                  "truncate",
                                  isItemActive &&
                                    "text-orange font-semibold data-[active=true]:text-orange",
                                )}
                              >
                                {product.name}
                              </span>
                            </div>
                            <p
                              className={cn(
                                "line-clamp-1 text-[11.5px] leading-snug font-normal pt-1.5 pl-6",
                                isItemActive ? "text-mist" : "text-fog",
                              )}
                            >
                              {product.listingDesc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                    <div className="col-span-2 pt-2 border-t border-graphite mt-1">
                      <NavigationMenuLink
                        asChild
                        active={cleanPath === "/products"}
                      >
                        <Link
                          href="/products"
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-[12.5px] font-medium transition-colors no-underline group border",
                            cleanPath === "/products"
                              ? "bg-white/10 border-graphite text-orange shadow-none data-[active=true]:bg-white/10 data-[active=true]:border-graphite data-[active=true]:text-orange"
                              : "text-orange hover:bg-white/5 border-transparent",
                          )}
                        >
                          <span>Explore Full Product Ecosystem</span>
                          <ArrowRight className="text-[11px]" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-[13px] px-3.5 py-2 h-auto rounded-lg transition-colors shadow-none font-normal text-mist hover:text-white hover:bg-white/5 data-[state=open]:bg-white/10 data-[state=open]:text-white border border-transparent data-[state=open]:border-graphite",
                    isServicesActive &&
                      "font-medium text-white bg-white/10 border-graphite shadow-none data-[active=true]:bg-white/10 data-[active=true]:text-white",
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[640px] grid-cols-2 gap-2 p-3.5 bg-carbon">
                    {services.map((service) => {
                      const itemHref =
                        service.slug === "cybersecurity" ||
                        service.slug === "cctv-physical-security"
                          ? `/${service.slug}`
                          : `/services/${service.slug}`;
                      const isItemActive = cleanPath === itemHref;
                      return (
                        <NavigationMenuLink
                          asChild
                          active={isItemActive}
                          key={service.slug}
                        >
                          <Link
                            href={itemHref}
                            className={cn(
                              "group block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors border",
                              isItemActive
                                ? "bg-white/10 border-graphite shadow-none data-[active=true]:bg-white/10 data-[active=true]:border-graphite data-[active=true]:shadow-none"
                                : "hover:bg-white/5 border-transparent hover:border-graphite",
                            )}
                          >
                            <div className="flex items-center gap-2 font-medium text-[13px] text-white leading-none">
                              <i
                                className={cn(
                                  service.listingIcon,
                                  "text-[12px] w-4 text-center",
                                  isItemActive
                                    ? "text-orange"
                                    : "text-fog group-hover:text-white",
                                )}
                              />
                              <span
                                className={cn(
                                  "truncate",
                                  isItemActive &&
                                    "text-orange font-semibold data-[active=true]:text-orange",
                                )}
                              >
                                {service.name}
                              </span>
                            </div>
                            <p
                              className={cn(
                                "line-clamp-1 text-[11.5px] leading-snug font-normal pt-1.5 pl-6",
                                isItemActive ? "text-mist" : "text-fog",
                              )}
                            >
                              {service.listingDesc}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                    <div className="col-span-2 pt-2 border-t border-graphite mt-1">
                      <NavigationMenuLink
                        asChild
                        active={cleanPath === "/services"}
                      >
                        <Link
                          href="/services"
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-[12.5px] font-medium transition-colors no-underline group border",
                            cleanPath === "/services"
                              ? "bg-white/10 border-graphite text-orange shadow-none data-[active=true]:bg-white/10 data-[active=true]:border-graphite data-[active=true]:text-orange"
                              : "text-orange hover:bg-white/5 border-transparent",
                          )}
                        >
                          <span>
                            View All Engineering Services & Deployment Models
                          </span>
                          <ArrowRight className="text-[11px]" />
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
                      "text-[13px] no-underline px-3.5 py-2 rounded-lg transition-colors inline-flex items-center",
                      isActive(cleanPath, "/industries")
                        ? "font-medium text-white bg-white/10 border border-graphite shadow-none"
                        : "font-normal text-mist hover:text-white hover:bg-white/5 border border-transparent",
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
                      "text-[13px] no-underline px-3.5 py-2 rounded-lg transition-colors inline-flex items-center",
                      isActive(cleanPath, "/about")
                        ? "font-medium text-white bg-white/10 border border-graphite shadow-none"
                        : "font-normal text-mist hover:text-white hover:bg-white/5 border border-transparent",
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
          {false && <ThemeToggle />}
          <Button
            asChild
            className="hidden lg:inline-flex bg-white hover:bg-white/80 text-black font-medium text-[13px] px-4 py-2 h-auto rounded-full shadow-none transition-all"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="flex lg:hidden bg-transparent hover:bg-white/8 text-white w-9 h-9 border border-graphite rounded-full cursor-pointer text-[18px]"
              >
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-6 pb-8 pt-2">
              <nav className="flex flex-col gap-2 mt-5 mb-6">
                {navItems.map((item) => {
                  const active = isActive(cleanPath, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-[15.5px] no-underline py-3.5 px-4 rounded-lg border transition-colors flex items-center justify-between",
                        active
                          ? "font-medium text-white bg-white/10 border-graphite shadow-none"
                          : "font-normal text-mist hover:text-white hover:bg-white/5 border-transparent hover:border-graphite",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="text-[11px] text-steel" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-graphite">
                <Button
                  asChild
                  className="bg-orange hover:bg-orangeDark text-white font-medium text-[15px] px-6 py-4 h-auto rounded-lg w-full shadow-none flex items-center justify-center gap-2"
                >
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <span>Contact Us</span>
                    <ArrowRight className="text-[12px]" />
                  </Link>
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
