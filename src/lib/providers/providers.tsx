import { Toaster } from "sonner";
import { ThemeProvider } from "./theme-provider";
import { LenisProvider } from "./lenis-provider";
import type { JSX } from "react";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster richColors position="top-right" />
      <LenisProvider />
      {children}
    </ThemeProvider>
  );
}
