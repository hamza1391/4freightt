"use client";

import { Rise } from "@/components/motion";

export function PageIntro({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  const eyebrowClass = light ? "text-gold" : "text-gold-deep";
  const ledeClass = light ? "text-[#d9d1c3]" : "text-ink-soft";

  return (
    <header className={light ? "" : "border-b border-ink/10"}>
      <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))] py-16 lg:py-20">
        <Rise>
          <p className={`font-mono text-xs tracking-[0.14em] uppercase ${eyebrowClass}`}>{eyebrow}</p>
        </Rise>
        <Rise delay={0.1}>
          <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-none tracking-tight">{title}</h1>
        </Rise>
        {lede ? (
          <Rise delay={0.18}>
            <p className={`mt-5 max-w-2xl text-lg ${ledeClass}`}>{lede}</p>
          </Rise>
        ) : null}
      </div>
    </header>
  );
}
