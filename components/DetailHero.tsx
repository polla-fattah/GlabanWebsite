import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DetailHero({
  icon,
  iconBg,
  iconColor,
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  ctaLabel,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-[#08090a] border-b border-[#23252a] py-[76px] pb-[68px]">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-[#0f1011] border border-[#23252a] shadow-none"
              style={{ color: iconColor === '#F0A85B' ? '#02b8cc' : iconColor }}
            >
              <i className={icon} />
            </div>
            <div
              className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#8a8f98]"
              style={eyebrowColor && eyebrowColor !== '#F0A85B' ? { color: eyebrowColor } : undefined}
            >
              {eyebrow}
            </div>
          </div>
          <h1 className="font-medium text-[38px] md:text-[46px] text-white tracking-[-0.022em] leading-[1.1] mb-4 max-w-[680px]">
            {title}
          </h1>
          <p className="text-[16px] text-[#8a8f98] max-w-[620px] leading-[1.65] m-0">
            {subtitle}
          </p>
        </div>
        <Button
          asChild
          className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[14px] px-6 py-3.5 h-auto rounded-md whitespace-nowrap no-underline shadow-none"
        >
          <Link href="/contact">{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
