import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/motion";
import { principles } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "4 Freight Dispatch is the desk behind owner-operators and small fleets. The truck and the authority stay with the carrier.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About the company"
        title="The desk behind the truck."
        lede="4 Freight Dispatch runs one desk for carriers who want freight chosen on rate, miles, and how the truck actually lives. No upfront fee, no forced dispatch, and no contract."
      />
      <section className="py-16">
        <Reveal>
        <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-serif text-3xl leading-snug tracking-tight">
            From January through October 2026 the board grew from 28 trucks to 48.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              We work with carriers who are tired of a dispatcher grabbing the first load that fills a hole. 4 Freight searches the lane, calls the broker, and sends the rate only when the miles, the appointments, and the money make sense for that truck.
            </p>
            <p>
              The carriers on our board are owner-operators and small fleets, running semis and 16- to 26-foot box trucks. The truck stays in their name. The authority stays theirs. We do not lease the equipment, we do not take a cut of the fuel card, and we do not charge anything before the first load. Our revenue is a written percentage of gross freight.
            </p>
            <p>
              Gross freight booked for those carriers reached $11,573,000. 4 Freight Dispatch revenue on the standard fee was $925,840.
            </p>
            <div className="mt-6 space-y-3">
              {principles.map((item, index) => (
                <Reveal key={item} delay={index * 0.06}>
                  <p className="border-l-2 border-gold-deep pl-4">{item}</p>
                </Reveal>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/fleet" className="font-medium text-gold-deep no-underline">See the trucks →</Link>
              <Link href="/revenue" className="font-medium text-gold-deep no-underline">See the revenue →</Link>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
