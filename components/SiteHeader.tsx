"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ease } from "@/components/motion";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";
import { useDispatchStore } from "@/store/useDispatchStore";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const menuOpen = useDispatchStore((state) => state.menuOpen);
  const setMenuOpen = useDispatchStore((state) => state.setMenuOpen);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/92 backdrop-blur-md">
      <motion.div
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-linear-to-r from-gold-deep via-gold to-gold-deep"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease }}
      />
      <div className="mx-auto flex h-[76px] w-[min(1140px,calc(100%-2.5rem))] items-center justify-between gap-5">
        <Logo />
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-2 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="grid gap-1" aria-hidden="true">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </span>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id="site-menu"
          aria-label="Primary"
          className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-ink/10 bg-paper px-5 py-4 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-2.5 text-[0.95rem] no-underline lg:py-0 ${isCurrent(pathname, item.href) ? "text-ink" : "text-ink-soft"}`}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-ink px-4 py-2.5 text-center text-paper no-underline lg:mt-0"
          >
            Put a truck on the board
          </Link>
        </nav>
      </div>
    </header>
  );
}
