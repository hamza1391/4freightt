import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FilterLink } from "@/components/FilterLink";
import { Reveal } from "@/components/motion";
import { money, statusLabel } from "@/lib/format";
import { getTruck, trucks } from "@/lib/trucks";

type TruckPageProps = {
  params: Promise<{ unit: string }>;
};

export function generateStaticParams() {
  return trucks.map((truck) => ({ unit: truck.unit }));
}

export async function generateMetadata({ params }: TruckPageProps): Promise<Metadata> {
  const { unit } = await params;
  const truck = getTruck(unit);
  if (!truck) return { title: "Truck" };
  return {
    title: truck.unit,
    description: `${truck.year} ${truck.model} dispatched by 4 Freight for ${truck.partner}. ${truck.lane}.`,
  };
}

export default function TruckPage({ params }: TruckPageProps) {
  return (
    <Suspense fallback={<div className="mx-auto w-[min(1140px,calc(100%-2.5rem))] py-24 text-muted">Loading this truck…</div>}>
      <TruckDetail params={params} />
    </Suspense>
  );
}

async function TruckDetail({ params }: TruckPageProps) {
  const { unit } = await params;
  const truck = getTruck(unit);
  if (!truck) notFound();

  const facts = [
    ["Partner", truck.partner],
    ["Base", truck.base],
    ["Lane", `${truck.origin} → ${truck.destination}`],
    ["Equipment", `${truck.equipmentLabel} · ${truck.detail}`],
    ["Status", statusLabel[truck.status]],
    ["Last full week", money(truck.weeklyGross)],
  ];

  return (
    <article>
      <div className="relative isolate min-h-[420px] bg-ink text-paper">
        <Image src={truck.image} alt={truck.imageAlt} fill priority className={`object-cover ${truck.equipment === "box-truck" ? "object-center" : "object-left"}`} sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/10" />
        <div className="relative mx-auto flex min-h-[420px] w-[min(1140px,calc(100%-2.5rem))] flex-col justify-end py-12">
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">{truck.unit}</p>
          <h1 className="mt-3 max-w-[14ch] font-serif text-5xl tracking-tight sm:text-6xl">
            {truck.year} {truck.model}
          </h1>
          <p className="mt-3 text-[#d9d1c3]">{truck.partner} · {truck.lane}</p>
        </div>
      </div>
      <Reveal>
      <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-lg">{truck.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/fleet" className="font-medium text-gold-deep no-underline">Back to the board →</Link>
            <FilterLink equipment={truck.equipment}>Show every {truck.equipmentLabel.toLowerCase()}</FilterLink>
          </div>
        </div>
        <dl className="rounded-[18px] border border-ink/10 bg-card">
          {facts.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-ink/10 px-4 py-3 last:border-b-0">
              <dt className="text-muted">{label}</dt>
              <dd className="text-right font-medium tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      </Reveal>
    </article>
  );
}
