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
    <section className="bg-navy py-[72px] px-8 pb-[64px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <div className="flex items-center gap-3.5 mb-5">
            <div className="text-2xl" style={{ color: iconColor }}>
              <i className={icon} />
            </div>
            <div
              className="text-[13px] font-semibold tracking-[0.06em] uppercase"
              style={{ color: eyebrowColor }}
            >
              {eyebrow}
            </div>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[38px] text-white mb-4 max-w-[680px] leading-[1.2]">
            {title}
          </h1>
          <p className="text-[16.5px] text-white/65 max-w-[620px] leading-[1.65] m-0">
            {subtitle}
          </p>
        </div>
        <Button
          asChild
          className="bg-orange hover:bg-orangeDark text-navy font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg whitespace-nowrap no-underline"
        >
          <Link href="/contact">{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
