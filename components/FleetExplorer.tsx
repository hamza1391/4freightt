"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ease } from "@/components/motion";
import { equipmentLabel, money, statusLabel } from "@/lib/format";
import { trucks } from "@/lib/trucks";
import type { EquipmentFilter, TruckStatus } from "@/lib/types";
import { useDispatchStore } from "@/store/useDispatchStore";

const filters: EquipmentFilter[] = ["all", "dry-van", "box-truck", "reefer", "flatbed", "specialized"];

const statusClass: Record<TruckStatus, string> = {
  "on-load": "bg-emerald-100 text-emerald-800",
  available: "bg-amber-100 text-gold-deep",
  "at-receiver": "bg-stone-200 text-ink",
};

export function FleetExplorer() {
  const equipment = useDispatchStore((state) => state.equipment);
  const setEquipment = useDispatchStore((state) => state.setEquipment);
  const visible = trucks.filter((truck) => equipment === "all" || truck.equipment === equipment);
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter trucks by equipment">
          {filters.map((filter) => {
            const active = equipment === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={active}
                onClick={() => setEquipment(filter)}
                className={`rounded-full border px-3.5 py-2 ${active ? "border-ink bg-ink text-paper" : "border-ink/20 bg-transparent"}`}
              >
                {equipmentLabel[filter]}
              </button>
            );
          })}
        </div>
        <p className="font-mono text-xs tracking-[0.08em] text-gold-deep uppercase">
          Showing {visible.length} {visible.length === 1 ? "truck" : "trucks"}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 text-muted">No trucks in that group are in the featured set. The wider board still covers this equipment.</p>
      ) : (
        <div className="mt-5 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {visible.map((truck, index) => (
            <motion.article
              layout
              key={truck.unit}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.4, ease, delay: reduce ? 0 : index * 0.04 }}
              className="flex flex-col gap-2 rounded-[18px] border border-ink/10 bg-card p-4"
            >
              <header className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs">{truck.unit}</span>
                <span className={`rounded-full px-2 py-1 font-mono text-[0.68rem] tracking-wide uppercase ${statusClass[truck.status]}`}>
                  {statusLabel[truck.status]}
                </span>
              </header>
              <h2 className="font-serif text-2xl leading-tight tracking-tight">
                <Link href={`/fleet/${truck.unit}`} className="text-ink no-underline">
                  {truck.year} {truck.model}
                </Link>
              </h2>
              <p className="text-sm text-muted">{truck.equipmentLabel} · {truck.detail}</p>
              <p className="flex justify-between gap-2 font-semibold">
                {truck.partner}
                <span className="font-normal text-muted">{truck.base}</span>
              </p>
              <p className="text-muted">{truck.origin} → {truck.destination}</p>
              <p className="mt-auto flex items-baseline justify-between border-t border-ink/10 pt-2.5">
                <span className="text-sm text-muted">Last full week</span>
                <strong className="font-serif text-2xl tabular-nums">{money(truck.weeklyGross)}</strong>
              </p>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
