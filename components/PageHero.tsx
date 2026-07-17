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
    <section className={cn("bg-[#08090a] border-b border-[#23252a]", centered ? "py-[76px] pb-[68px]" : "py-[76px] pb-[60px]")}>
      <div
        className={cn("max-w-[1280px] mx-auto px-8", centered ? "text-center" : "text-left")}
      >
        <div
          className="text-[12px] font-medium tracking-[0.08em] uppercase mb-3 text-[#8a8f98]"
          style={eyebrowColor ? { color: eyebrowColor } : undefined}
        >
          {eyebrow}
        </div>
        <h1
          className={cn(
            "font-medium text-[40px] md:text-[48px] text-white tracking-[-0.022em] leading-[1.08]",
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
              "text-[16px] text-[#8a8f98] leading-[1.65] m-0",
              centered ? "mx-auto max-w-[680px]" : "max-w-[640px]"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
