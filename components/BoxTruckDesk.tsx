import Image from "next/image";
import Link from "next/link";
import { FilterLink } from "@/components/FilterLink";
import { Reveal } from "@/components/motion";

export function BoxTruckDesk() {
  return (
    <section className="bg-paper py-16 lg:py-20" aria-labelledby="box-truck-heading">
      <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-ink">
            <Image
              src="/images/truck-box.jpg"
              alt="White box truck parked on a city street"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-mono text-xs tracking-[0.14em] text-gold-deep uppercase">Box trucks</p>
          <h2 id="box-truck-heading" className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
            16 to 26 foot box trucks, on the same desk.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Carriers asked for this, and the board covers it. Local and regional box freight is booked around the box length, the liftgate, the pallet count, and the city you need to finish in. A 26-foot truck is not offered a 53-foot load.
          </p>
          <p className="mt-3 text-lg text-ink-soft">
            The rules do not change with the truck. No upfront fee, no forced dispatch, and no contract. The fee is still a percentage of the gross you approve.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-paper no-underline">
              Put a box truck on the board
            </Link>
            <FilterLink equipment="box-truck">See the box trucks</FilterLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
