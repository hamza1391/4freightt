import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Put a semi or a box truck on the 4 Freight Dispatch board. Send the authority, the truck, and the lanes.",
};

const points = [
  ["Email", "desk@4freightdispatch.com"],
  ["Desk hours", "Mon–Sat, 6:00 a.m.–10:00 p.m. Central"],
  ["Sunday", "On call for trucks already under a load"],
  ["Coverage", "Carriers running in the United States"],
];

export default function ContactPage() {
  return (
    <section className="bg-paper-deep py-16 text-[#f6f1e6] lg:py-20">
      <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-10 lg:grid-cols-2">
        <Reveal>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">Start dispatch</p>
          <h1 className="mt-4 max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-none tracking-tight">
            Put a truck on the 4 Freight board.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#d9d1c3]">
            Tell us the authority, whether it is a semi or a 16- to 26-foot box truck, and where it needs to be on Friday. There is no upfront fee, no forced dispatch, and no contract. If the lanes fit, we call before a single load is booked.
          </p>
          <ul className="mt-8">
            {points.map(([label, value]) => (
              <li key={label} className="grid gap-1 border-t border-white/15 py-3 sm:grid-cols-[140px_1fr] sm:gap-3">
                <span className="font-mono text-xs tracking-[0.1em] text-gold uppercase">{label}</span>
                {label === "Email" ? (
                  <a className="text-[#f6f1e6]" href="mailto:desk@4freightdispatch.com">{value}</a>
                ) : (
                  <strong className="font-medium">{value}</strong>
                )}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
        <Reveal delay={0.12}>
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
