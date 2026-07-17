import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CTABand({
  heading,
  subtitle,
  buttonLabel = 'Contact Us',
  href = '/contact',
  onDark = false,
}: {
  heading: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  onDark?: boolean;
}) {
  return (
    <section className={cn(onDark ? "bg-navyMid" : "bg-grayBg")}>
      <div className="max-w-[1280px] mx-auto py-[72px] px-8 text-center">
        <h2
          className={cn(
            "font-['Plus_Jakarta_Sans'] font-bold text-[28px] mb-3.5",
            onDark ? "text-white" : "text-textDark"
          )}
        >
          {heading}
        </h2>
        {subtitle && (
          <p className={cn("text-[15.5px] mb-6.5", onDark ? "text-white/60" : "text-textBody")}>
            {subtitle}
          </p>
        )}
        <Button
          asChild
          className={cn(
            "bg-orange hover:bg-orangeDark text-navy font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg no-underline",
            !subtitle && "mt-2"
          )}
        >
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
