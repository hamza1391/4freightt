import type { Metadata } from "next";
import Link from "next/link";
import { BoxTruckDesk } from "@/components/BoxTruckDesk";
import { PageIntro } from "@/components/PageIntro";
import { Lift, Reveal } from "@/components/motion";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Lane search, rate negotiation, paperwork, load support, accessorials, and a weekly sheet. That is what the 4 Freight Dispatch fee pays for.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="What the desk does"
        title="From the first call to the weekly sheet."
        lede="Six jobs, done every day the truck is on the board, for semis and for 16- to 26-foot box trucks. The percentage pays for the work. There is no upfront fee, no forced dispatch, and no contract."
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-x-10 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 2) * 0.08}>
              <article className="grid grid-cols-[auto_1fr] gap-4 border-t border-ink/10 py-7">
                <span className="font-mono text-gold-deep">0{index + 1}</span>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight">{service.title}</h2>
                  <p className="mt-2 text-ink-soft">{service.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-4 grid w-[min(1140px,calc(100%-2.5rem))] gap-4 md:grid-cols-2">
          <Lift>
          <article className="h-full rounded-[18px] bg-ink p-6 text-paper">
            <p className="font-mono text-xs tracking-[0.12em] text-gold uppercase">Standard desk</p>
            <p className="mt-2 font-serif text-5xl">8%</p>
            <p className="mt-3 text-[#d9d1c3]">One semi or one box truck, or a few of either. No setup fee and no contract. You can leave the board when the current loads are delivered.</p>
          </article>
          </Lift>
          <Lift>
          <article className="h-full rounded-[18px] border border-gold-deep bg-gold/30 p-6">
            <p className="font-mono text-xs tracking-[0.12em] text-gold-deep uppercase">Small fleet</p>
            <p className="mt-2 font-serif text-5xl">6%</p>
            <p className="mt-3 text-ink-soft">Five or more trucks under the same authority. Same rules: no upfront fee, no forced dispatch, and no contract.</p>
          </article>
          </Lift>
        </div>
        <BoxTruckDesk />
        <p className="mx-auto mt-8 w-[min(1140px,calc(100%-2.5rem))]">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-paper no-underline">
            Put a truck on the board
          </Link>
        </p>
      </section>
    </>
  );
}
