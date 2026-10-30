import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#100e0c] px-0 pt-12 pb-7 text-paper">
      <div className="mx-auto grid w-[min(1140px,calc(100%-2.5rem))] gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-md text-[#cfc6b8]">
            Truck dispatch for owner-operators and small fleets. The truck stays yours. The rate gets a desk that will argue for it.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">Board</p>
          <Link className="mt-2 block py-1 text-paper no-underline" href="/fleet">Trucks working with us</Link>
          <Link className="block py-1 text-paper no-underline" href="/revenue">Revenue snapshot</Link>
          <Link className="block py-1 text-paper no-underline" href="/services">Services</Link>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">Desk</p>
          {nav.filter((item) => item.href !== "/fleet" && item.href !== "/revenue" && item.href !== "/services").map((item) => (
            <Link key={item.href} className="mt-2 block py-1 text-paper no-underline" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="block py-1 text-paper no-underline" href="/contact">Request a call</Link>
        </div>
        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-gold uppercase">Contact</p>
          <a className="mt-2 block py-1 text-paper no-underline" href="mailto:desk@4freightdispatch.com">
            desk@4freightdispatch.com
          </a>
          <p className="py-1 text-[#cfc6b8]">Mon–Sat, 6:00 a.m.–10:00 p.m. CT</p>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-[min(1140px,calc(100%-2.5rem))] flex-col gap-2 border-t border-white/10 pt-4 text-sm text-[#b7ad9f] sm:flex-row sm:justify-between">
        <p>© 2026 4 Freight Dispatch. All rights reserved.</p>
        <p>No upfront fee. No forced dispatch. No contract.</p>
      </div>
    </footer>
  );
}
