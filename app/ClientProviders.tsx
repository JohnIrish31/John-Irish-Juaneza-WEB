"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "./lib/gtag";

function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
