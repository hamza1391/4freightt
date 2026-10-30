import Link from "next/link";
import { Reveal } from "@/components/motion";

export default function NotFound() {
  return (
    <Reveal>
    <section className="mx-auto w-[min(1140px,calc(100%-2.5rem))] py-24">
      <p className="font-mono text-xs tracking-[0.14em] text-gold-deep uppercase">Off the board</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">That page is not on the desk.</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">The link may be old, or the truck number is not one of the featured units.</p>
      <Link href="/fleet" className="mt-6 inline-flex font-medium text-gold-deep no-underline">Back to the trucks →</Link>
    </section>
    </Reveal>
  );
}
