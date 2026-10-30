import { Lift, Reveal } from "@/components/motion";
import { promises } from "@/lib/site";

export function PromiseBoard() {
  return (
    <section className="bg-paper py-16 lg:py-20" aria-label="No upfront fee, no forced dispatch, and no contract">
      <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.14em] text-gold-deep uppercase">Why the desk is easy to try</p>
          <h2 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-none tracking-tight">
            Nothing upfront. Nothing forced. Nothing signed.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Carriers get nervous about dispatch for three good reasons. 4 Freight is built so those three do not apply. You pay when freight you approved actually moves, and you can stop when those loads are delivered.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {promises.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Lift className="h-full">
                <article className="flex h-full flex-col rounded-[18px] border border-ink/10 bg-card p-6">
                  <p className="font-mono text-sm text-gold-deep">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-3xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-ink-soft">{item.body}</p>
                </article>
              </Lift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
