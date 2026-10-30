import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PromiseBoard } from "@/components/PromiseBoard";
import { Lift, Reveal } from "@/components/motion";
import { BoxTruckDesk } from "@/components/BoxTruckDesk";
import { TruckCarousel } from "@/components/TruckCarousel";
import { money } from "@/lib/format";
import { kpis } from "@/lib/revenue";
import { quotes, services } from "@/lib/site";

const proof = [
  ["48", "active trucks"],
  ["$11,573,000", "gross freight booked YTD"],
  ["$925,840", "4 Freight Dispatch revenue YTD"],
  ["8%", "of gross. Nothing due up front"],
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseBoard />
      <section className="bg-paper-deep text-[#f6f1e6]" aria-label="Company snapshot">
        <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.08}>
              <p className="flex flex-col">
                <strong className="font-serif text-2xl text-gold tabular-nums">{value}</strong>
                <span className="text-[#d2c9bb]">{label}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <TruckCarousel />
      <BoxTruckDesk />
      <section className="py-8 pb-20">
        <Reveal>
        <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-gold-deep uppercase">About the company</p>
            <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
              4 Freight Dispatch is the desk behind the truck.
            </h2>
          </div>
          <div className="text-lg">
            <p>
              We work with carriers who are tired of a dispatcher grabbing the first load that fills a hole. The truck stays in their name. The authority stays theirs. Our revenue is a written percentage of gross freight.
            </p>
            <Link href="/about" className="mt-5 inline-flex font-medium text-gold-deep no-underline">
              Read about the desk →
            </Link>
          </div>
        </div>
        </Reveal>
      </section>
      <section className="pb-20">
        <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-none tracking-tight">What the fee pays for</h2>
            <Link href="/services" className="font-medium text-gold-deep no-underline">All six services →</Link>
          </div>
          <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="h-full bg-paper p-5">
                  <span className="font-mono text-sm text-gold-deep">0{index + 1}</span>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-ink-soft">{service.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 text-[#f6f1e6]">
        <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">Revenue</p>
              <h2 className="mt-3 max-w-[14ch] font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
                Gross for the trucks. Fee for the desk.
              </h2>
            </div>
            <Link href="/revenue" className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 font-medium text-ink no-underline">
              Open the snapshot
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi, index) => (
              <Reveal key={kpi.label} delay={index * 0.08}>
                <article className="rounded-2xl border border-white/15 p-4">
                  <p className="font-mono text-xs tracking-[0.12em] text-gold uppercase">{kpi.label}</p>
                  <strong className="mt-3 block font-serif text-3xl tabular-nums">{money(kpi.value)}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-none tracking-tight">What the partners notice.</h2>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {quotes.map((quote, index) => (
              <Reveal key={quote.name} delay={index * 0.08}>
                <Lift className="h-full">
                  <figure className="flex h-full flex-col rounded-[18px] border border-ink/10 bg-card p-5">
                    <blockquote className="font-serif text-2xl leading-snug tracking-tight">{quote.quote}</blockquote>
                    <figcaption className="mt-6">
                      <strong>{quote.name}</strong>
                      <span className="mt-1 block font-mono text-xs text-muted">{quote.detail}</span>
                    </figcaption>
                  </figure>
                </Lift>
              </Reveal>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-6 inline-flex font-medium text-gold-deep no-underline">
            How a truck joins →
          </Link>
        </div>
      </section>
    </>
  );
}
