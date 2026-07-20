"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9 border border-graphite rounded-full flex items-center justify-center text-mist bg-transparent shadow-none"
      >
        <span className="w-4 h-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle Theme"
      className="w-9 h-9 border border-graphite rounded-full flex items-center justify-center text-mist hover:text-white hover:bg-white/5 transition-colors bg-transparent shadow-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="text-[18px]" />
      ) : (
        <Moon className="text-[18px]" />
      )}
    </Button>
  );
}
