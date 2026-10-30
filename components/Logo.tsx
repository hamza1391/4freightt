import Link from "next/link";

const stem = "M19 6.2h4.2V26H19z";
const arm = "M7.6 17.8 15.6 6.2H19V13.2h4.2v4.6H7.6z";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const plate = tone === "dark" ? "#16140f" : "#e7d7b1";
  const mark = tone === "dark" ? "#e7d7b1" : "#16140f";
  const word = tone === "dark" ? "text-ink" : "text-paper";

  return (
    <Link href="/" className="flex min-w-max items-center gap-2.5 no-underline" aria-label="4 Freight Dispatch home">
      <svg className="size-10" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={plate} />
        <path d={stem} fill={mark} />
        <path d={arm} fill={mark} />
      </svg>
      <span className={`flex flex-col leading-none ${word}`}>
        <span className="font-serif text-[1.2rem] font-semibold tracking-tight">4 Freight</span>
        <span className={`mt-1 font-mono text-[0.68rem] tracking-[0.16em] uppercase ${tone === "dark" ? "text-gold-deep" : "text-gold"}`}>
          Dispatch
        </span>
      </span>
    </Link>
  );
}
