"use client";

import { useEffect, useState } from "react";
import { Rise } from "@/components/motion";
import { money, statusLabel } from "@/lib/format";
import { boardUnits, trucksByUnits } from "@/lib/trucks";
import type { TruckStatus } from "@/lib/types";

const dot: Record<TruckStatus, string> = {
  "on-load": "bg-emerald-700",
  available: "bg-gold-deep",
  "at-receiver": "bg-ink",
};

export function BoardCard() {
  const rows = trucksByUnits(boardUnits);
  const [clock, setClock] = useState("Central desk · 6:00–22:00");

  useEffect(() => {
    const tick = () => {
      setClock(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Chicago",
          timeZoneName: "short",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Rise delay={0.28} className="h-full">
    <aside className="rounded-[22px] bg-card p-4 text-ink shadow-2xl" aria-label="This week on the 4 Freight board">
      <header className="flex items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.14em] text-gold-deep uppercase">4 Freight board</p>
          <p className="mt-1 font-semibold">Current week · gross to truck</p>
        </div>
        <p className="max-w-40 text-right font-mono text-[0.72rem] text-muted">{clock}</p>
      </header>
      <ol className="mt-3">
        {rows.map((truck) => (
          <li key={truck.unit} className="grid grid-cols-[10px_72px_minmax(0,1fr)_auto] items-center gap-2 border-t border-ink/10 py-2.5 text-sm">
            <span className={`size-2 rounded-full ${dot[truck.status]}`} title={statusLabel[truck.status]} />
            <span className="font-mono text-xs">{truck.unit}</span>
            <span className="truncate">{truck.lane}</span>
            <strong className="font-serif text-base font-medium tabular-nums">{money(truck.weeklyGross)}</strong>
          </li>
        ))}
      </ol>
      <footer className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-ink pt-3 text-sm">
        <span>48 trucks rolling with 4 Freight</span>
        <strong className="font-serif text-base tabular-nums">$357,600 this week</strong>
      </footer>
    </aside>
    </Rise>
  );
}
