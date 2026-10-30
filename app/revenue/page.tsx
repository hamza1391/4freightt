import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/motion";
import { RevenueReport } from "@/components/RevenueReport";

export const metadata: Metadata = {
  title: "Revenue",
  description: "4 Freight Dispatch keeps gross freight and company revenue separate. See the 2026 dispatch snapshot.",
};

export default function RevenuePage() {
  return (
    <div className="bg-ink text-[#f6f1e6]">
      <div className="border-b border-white/10">
        <PageIntro
          light
          eyebrow="Revenue"
          title="Two numbers, kept separate on purpose."
          lede="Gross freight is what the trucks bill. 4 Freight Dispatch revenue is the service fee on that gross. Mixing them together is how dispatch companies make a week look bigger than it is. We publish both."
        />
      </div>
      <section className="py-12">
        <Reveal>
          <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
            <RevenueReport />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
