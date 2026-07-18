import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

export default function DetailHero({
  icon: Icon,
  iconBg,
  iconColor,
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  ctaLabel,
}: {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-void border-b border-graphite py-[76px] pb-[68px]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-carbon border border-graphite shadow-none"
              style={{ color: (iconColor === "legacy-orange" || iconColor === "legacy-teal") ? "var(--color-orange)" : (iconColor || "var(--color-orange)") }}
            >
              <Icon />
            </div>
            <div
              className="text-[12px] font-medium tracking-[0.08em] uppercase text-fog"
              style={
                eyebrowColor && eyebrowColor !== "legacy-orange"
                  ? { color: eyebrowColor }
                  : undefined
              }
            >
              {eyebrow}
            </div>
          </div>
          <h1 className="font-medium text-[38px] md:text-[46px] text-white tracking-[-0.022em] leading-[1.1] mb-4 max-w-[680px]">
            {title}
          </h1>
          <p className="text-[16px] text-fog max-w-[620px] leading-[1.65] m-0">
            {subtitle}
          </p>
        </div>
        <Button
          asChild
          className="bg-orange hover:bg-orangeDark text-white font-medium text-[14px] px-6 py-3.5 h-auto rounded-md whitespace-nowrap no-underline shadow-none"
        >
          <Link href="/contact">{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
