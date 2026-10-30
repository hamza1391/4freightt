"use client";

import { motion, useReducedMotion } from "framer-motion";
import { money } from "@/lib/format";
import { ease } from "@/components/motion";
import { equipmentMix, kpis, laneGroups, months, yearFee, yearFreight } from "@/lib/revenue";

const maxFreight = Math.max(...months.map((month) => month.freight));

export function RevenueReport() {
  const reduce = useReducedMotion();

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="rounded-[18px] border border-white/15 bg-white/4 p-4">
            <p className="font-mono text-xs tracking-[0.12em] text-gold uppercase">{kpi.label}</p>
            <strong className="mt-3 block font-serif text-3xl tracking-tight tabular-nums">{money(kpi.value)}</strong>
            <span className="mt-2 block text-sm text-[#cfc6b8]">{kpi.note}</span>
          </article>
        ))}
      </div>

      <div className="mt-3.5 grid gap-3.5 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-[18px] border border-white/15 bg-[#1c1a16] p-4">
          <h2 className="font-serif text-2xl tracking-tight">Monthly gross freight</h2>
          <p className="mt-1 text-sm text-[#cfc6b8]">Bar height is freight billed by the trucks. 4 Freight’s fee is 8% of each bar.</p>
          <div className="mt-6 grid h-64 grid-cols-10 items-end gap-1.5" role="img" aria-label="Monthly gross freight, January through October 2026">
            {months.map((month) => (
              <div key={month.label} className="flex h-full flex-col justify-end">
                <motion.div
                  className={`w-full origin-bottom rounded-t-lg bg-linear-to-t from-gold-deep to-gold ${month.label === "Oct" ? "from-gold to-[#fff6e4]" : ""}`}
                  initial={reduce ? false : { height: 0 }}
                  whileInView={{ height: `${(month.freight / maxFreight) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease, delay: months.indexOf(month) * 0.05 }}
                  title={`${month.name}: ${money(month.freight)} gross, ${money(month.fee)} fee`}
                />
                <span className="mt-2 text-center font-mono text-[0.68rem] text-[#cfc6b8]">{month.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#cfc6b8]">
            Company revenue rose from $64,000 in January to $123,840 in October because the board grew from 28 trucks to 48, while average weekly gross stayed in a tight band.
          </p>
        </div>

        <aside className="rounded-[18px] border border-white/15 bg-[#1c1a16] p-4">
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">October, one truck</p>
          <h2 className="mt-2 font-serif text-2xl tracking-tight">Where a $7,450 week goes</h2>
          <p className="mt-2 text-sm text-[#cfc6b8]">
            Fleet average gross to the truck in October, before fuel, insurance, maintenance, and the truck note.
          </p>
          <dl className="mt-4">
            {[
              ["Gross to the truck", "$7,450"],
              ["4 Freight fee, 8%", "$596"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-3 border-t border-white/10 py-3">
                <dt className="text-[#d9d1c3]">{label}</dt>
                <dd className="font-serif text-2xl tabular-nums">{value}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-3 border-t border-white/10 py-3 text-gold">
              <dt>Back to the carrier</dt>
              <dd className="font-serif text-2xl tabular-nums">$6,854</dd>
            </div>
          </dl>
          <p className="text-sm text-[#cfc6b8]">Fuel and operating costs come out of the $6,854. They are not part of 4 Freight’s revenue.</p>
        </aside>
      </div>

      <div className="mt-3.5 overflow-x-auto rounded-[18px] border border-white/15">
        <table className="w-full min-w-[680px] border-collapse text-sm">
          <caption className="caption-bottom px-4 py-3 text-left text-[#cfc6b8]">
            2026 dispatch snapshot, January through October. Year-to-date gross is {money(yearFreight)}. 4 Freight revenue is {money(yearFee)}.
          </caption>
          <thead>
            <tr className="font-mono text-xs tracking-[0.08em] text-gold uppercase">
              <th className="px-4 py-3 text-left font-medium">Month</th>
              <th className="px-4 py-3 text-right font-medium">Trucks</th>
              <th className="px-4 py-3 text-right font-medium">Gross freight</th>
              <th className="px-4 py-3 text-right font-medium">4 Freight revenue</th>
              <th className="px-4 py-3 text-right font-medium">Avg week / truck</th>
            </tr>
          </thead>
          <tbody>
            {months.map((month) => (
              <tr key={month.name} className="border-t border-white/10">
                <td className="px-4 py-3">{month.name}</td>
                <td className="px-4 py-3 text-right tabular-nums">{month.trucks}</td>
                <td className="px-4 py-3 text-right tabular-nums">{money(month.freight)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{money(month.fee)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{money(month.week)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-white/10 text-gold">
              <th className="px-4 py-3 text-left font-medium">Year to date</th>
              <td className="px-4 py-3 text-right tabular-nums">48</td>
              <td className="px-4 py-3 text-right tabular-nums">{money(yearFreight)}</td>
              <td className="px-4 py-3 text-right tabular-nums">{money(yearFee)}</td>
              <td className="px-4 py-3 text-right">—</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-3.5 grid gap-3.5 lg:grid-cols-2">
        <article className="rounded-[18px] border border-white/15 p-4">
          <h2 className="font-serif text-2xl tracking-tight">October gross by equipment</h2>
          <p className="mt-1 mb-4 text-sm text-[#cfc6b8]">Share of the $1,548,000 billed by the 48 trucks.</p>
          <ul className="space-y-3.5">
            {equipmentMix.map((item) => (
              <li key={item.label}>
                <div className="flex justify-between gap-3 text-sm">
                  <span>{item.label}</span>
                  <span className="tabular-nums">{item.share}% · {money(item.amount)}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.span
                    className="block h-full rounded-full bg-linear-to-r from-gold-deep to-gold"
                    initial={reduce ? false : { width: 0 }}
                    whileInView={{ width: `${item.share}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[18px] border border-white/15 p-4">
          <h2 className="font-serif text-2xl tracking-tight">This week by lane group</h2>
          <p className="mt-1 mb-4 text-sm text-[#cfc6b8]">Gross to trucks on the current board. 48 trucks, $357,600.</p>
          <ul>
            {laneGroups.map((lane) => (
              <li key={lane.label} className="flex items-baseline justify-between gap-3 border-b border-white/10 py-2.5">
                <span>
                  {lane.label}
                  <small className="block text-[#cfc6b8]">{lane.trucks} trucks</small>
                </span>
                <strong className="font-medium tabular-nums">{money(lane.gross)}</strong>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-3.5 grid gap-3.5 md:grid-cols-2">
        <article className="rounded-[18px] border border-white/15 p-5">
          <p className="font-mono text-xs tracking-[0.12em] text-gold uppercase">Standard desk</p>
          <p className="mt-2 font-serif text-5xl tracking-tight">8% <span className="text-3xl">of gross</span></p>
          <p className="mt-3 max-w-xl text-[#d9d1c3]">
            One semi or one box truck, or a few of either. The percentage covers search, negotiation, paperwork, load support, and the weekly sheet. No upfront fee, no forced dispatch, and no contract. You can leave when the current loads are delivered.
          </p>
        </article>
        <article className="rounded-[18px] border border-gold/40 bg-gold/10 p-5">
          <p className="font-mono text-xs tracking-[0.12em] text-gold uppercase">Small fleet</p>
          <p className="mt-2 font-serif text-5xl tracking-tight">6% <span className="text-3xl">of gross</span></p>
          <p className="mt-3 max-w-xl text-[#d9d1c3]">
            Five or more trucks under the same authority. Same desk and the same three rules: nothing due up front, no load forced on a truck, and no contract to sign.
          </p>
        </article>
      </div>
      <p className="mt-4 text-sm text-[#cfc6b8]">
        Snapshot through October 2026. Weekly averages are rounded from monthly gross divided across the trucks on the board that month. These are operating figures for the desk, not an audited financial statement.
      </p>
    </div>
  );
}
