"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ease } from "@/components/motion";
import { money } from "@/lib/format";
import { carouselUnits, trucksByUnits } from "@/lib/trucks";
import { useDispatchStore } from "@/store/useDispatchStore";

const slides = trucksByUnits(carouselUnits);

export function TruckCarousel() {
  const slide = useDispatchStore((state) => state.slide);
  const setSlide = useDispatchStore((state) => state.setSlide);
  const setEquipment = useDispatchStore((state) => state.setEquipment);
  const index = ((slide % slides.length) + slides.length) % slides.length;
  const truck = slides[index];
  const reduce = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setSlide((useDispatchStore.getState().slide + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [setSlide]);

  if (!truck) return null;

  return (
    <section className="bg-paper py-20" aria-roledescription="carousel" aria-label="Trucks working with 4 Freight">
      <div className="mx-auto w-[min(1140px,calc(100%-2.5rem))]">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-gold-deep uppercase">On the road</p>
            <h2 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-tight">
              Trucks working with the desk.
            </h2>
          </div>
          <p className="font-mono text-xs tracking-[0.08em] text-gold-deep uppercase">
            {index + 1} / {slides.length}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-ink">
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-video">
            <AnimatePresence mode="sync">
              <motion.div
                key={truck.unit}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                <Image
                  src={truck.image}
                  alt={truck.imageAlt}
                  fill
                  className={`object-cover ${truck.equipment === "box-truck" ? "object-center" : "object-left"}`}
                  sizes="(min-width: 1140px) 1140px, 100vw"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-paper sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={truck.unit}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
              >
              <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">{truck.unit} · {truck.equipmentLabel}</p>
              <h3 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
                {truck.year} {truck.model}
              </h3>
              <p className="mt-2 text-[#d9d1c3]">
                {truck.partner} · {truck.lane} · {money(truck.weeklyGross)} last week
              </p>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-3">
              <Link href={`/fleet/${truck.unit}`} className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-ink no-underline">
                Open this truck
              </Link>
              <Link
                href="/fleet"
                onClick={() => setEquipment(truck.equipment)}
                className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-4 text-sm text-paper no-underline"
              >
                Show {truck.equipmentLabel.toLowerCase()} trucks
              </Link>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              type="button"
              className="size-11 rounded-full bg-paper/90 text-ink"
              aria-label="Previous truck"
              onClick={() => setSlide(index - 1)}
            >
              ←
            </button>
            <button
              type="button"
              className="size-11 rounded-full bg-paper/90 text-ink"
              aria-label="Next truck"
              onClick={() => setSlide(index + 1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {slides.map((item, itemIndex) => (
            <button
              key={item.unit}
              type="button"
              aria-label={`Show ${item.unit}`}
              aria-current={itemIndex === index}
              onClick={() => setSlide(itemIndex)}
              className={`overflow-hidden rounded-2xl border text-left ${itemIndex === index ? "border-gold-deep" : "border-ink/10"}`}
            >
              <span className="relative block aspect-video">
                <Image src={item.image} alt="" fill className={`object-cover ${item.equipment === "box-truck" ? "object-center" : "object-left"}`} sizes="280px" />
              </span>
              <span className="block px-3 py-2">
                <span className="block font-mono text-xs">{item.unit}</span>
                <span className="block text-sm">{item.equipmentLabel}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
