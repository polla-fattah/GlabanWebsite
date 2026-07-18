import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTABand({
  heading,
  subtitle,
  buttonLabel = "Contact Us",
  href = "/contact",
  onDark = false,
}: {
  heading: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  onDark?: boolean;
}) {
  return (
    <section
      className={cn(
        onDark
          ? "bg-void border-t border-graphite"
          : "bg-carbon border-y border-graphite",
      )}
    >
      <div className="max-w-[1280px] mx-auto py-[80px] px-8 text-center">
        <h2 className="font-medium text-[32px] md:text-[36px] text-white tracking-[-0.022em] mb-3 max-w-[700px] mx-auto">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-[16px] text-fog mb-8 max-w-[580px] mx-auto leading-[1.6]">
            {subtitle}
          </p>
        )}
        <Button
          asChild
          className={cn(
            "bg-orange hover:bg-orangeDark text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md no-underline shadow-none transition-all",
            !subtitle && "mt-4",
          )}
        >
          <Link href={href}>{buttonLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
