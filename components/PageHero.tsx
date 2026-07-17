import { cn } from '@/lib/utils';

export default function PageHero({
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  centered = false,
  maxWidth = 720,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: number;
}) {
  return (
    <section className={cn("bg-navy px-8", centered ? "py-[72px] pb-[64px]" : "py-[72px] pb-[56px]")}>
      <div
        className={cn("max-w-[1280px] mx-auto", centered ? "text-center" : "text-left")}
      >
        <div
          className="text-[13px] font-semibold tracking-[0.06em] uppercase mb-3.5"
          style={{ color: eyebrowColor || 'var(--color-orangeLight)' }}
        >
          {eyebrow}
        </div>
        <h1
          className={cn(
            "font-['Plus_Jakarta_Sans'] font-bold text-[40px] text-white leading-[1.2]",
            subtitle ? "mb-4" : "mb-0",
            centered && "mx-auto"
          )}
          style={{ maxWidth: centered ? undefined : maxWidth }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-[17px] text-white/65 leading-[1.6] m-0",
              centered ? "mx-auto" : "max-w-[640px]"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
