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
    <section className={cn(onDark ? "bg-[#08090a] border-t border-[#23252a]" : "bg-[#0f1011] border-y border-[#23252a]")}>
      <div className="max-w-[1280px] mx-auto py-[80px] px-8 text-center">
        <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] mb-3 max-w-[700px] mx-auto">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-[16px] text-[#8a8f98] mb-8 max-w-[580px] mx-auto leading-[1.6]">
            {subtitle}
          </p>
        )}
        <Button
          asChild
          className={cn(
            "bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all",
            !subtitle && "mt-4"
          )}
        >
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
