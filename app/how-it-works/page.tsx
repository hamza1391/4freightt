import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Lift, Reveal } from "@/components/motion";
import { quotes, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description: "How a truck joins the 4 Freight Dispatch board. No contract to sign, no setup fee, and no load you did not approve.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How a truck joins"
        title="From the first call to a load with your name on it."
        lede="You do not sign a contract, pay a setup fee, or accept a load you did not approve. The truck joins the board only if the lanes fit."
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article>
                <span className="font-mono text-gold-deep">0{index + 1}</span>
                <h2 className="mt-3 font-serif text-3xl tracking-tight">{step.title}</h2>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
          <h2 className="font-serif text-4xl tracking-tight">From the board</h2>
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
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-paper no-underline">
            Request a dispatch call
          </Link>
        </div>
      </section>
    </>
  );
}
