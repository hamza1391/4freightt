"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BoardCard } from "@/components/BoardCard";
import { Rise, ease } from "@/components/motion";

const stats = [
  { label: "Trucks on the board", value: "48" },
  { label: "Gross freight, 2026 YTD", value: "$11.57M" },
  { label: "4 Freight revenue, 2026 YTD", value: "$925,840" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-ink text-[#f6f1e6]">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src="/images/hero-highway.jpg"
          alt="A semi-truck with a dry van rolling toward the camera on a dark highway at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/88 to-ink/25" />
      <div className="relative mx-auto grid w-[min(1140px,calc(100%-2.5rem))] items-end gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <Rise>
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-gold uppercase">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_6px_rgba(110,231,183,0.18)]" />
            Dispatch desk · United States
          </p>
          </Rise>
          <Rise delay={0.12}>
          <h1 className="max-w-[11ch] font-serif text-[clamp(3.2rem,6vw,5.4rem)] leading-[0.98] tracking-tight text-[#f7f2e8]">
            The trucks work. The desk protects <em className="text-gold italic">the rate.</em>
          </h1>
          </Rise>
          <Rise delay={0.22}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d9d1c3]">
            4 Freight Dispatch finds freight and negotiates the rate for owner-operators and small fleets, semis and box trucks. You keep the truck and the authority. There is no upfront fee, no forced dispatch, and no contract.
          </p>
          </Rise>
          <Rise delay={0.32}>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-gold px-5 font-medium text-ink no-underline hover:bg-[#f3e7cb]">
              Request a dispatch call
            </Link>
            <Link href="/revenue" className="inline-flex min-h-12 items-center rounded-full border border-white/35 px-5 text-[#f6f1e6] no-underline hover:border-white">
              See the revenue
            </Link>
          </div>
          </Rise>
          <div className="mt-10 grid gap-4 border-t border-white/15 pt-5 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Rise key={stat.label} delay={0.4 + index * 0.08}>
                <p className="text-sm text-[#c9c0b2]">{stat.label}</p>
                <p className="mt-1 font-serif text-3xl tracking-tight tabular-nums">{stat.value}</p>
              </Rise>
            ))}
          </div>
        </div>
        <BoardCard />
      </div>
    </section>
  );
}
