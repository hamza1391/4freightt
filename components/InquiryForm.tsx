"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useDispatchStore } from "@/store/useDispatchStore";

const fieldClass = "w-full rounded-xl border border-ink/20 bg-white px-3 py-3 outline-none focus:border-gold-deep focus:ring-4 focus:ring-gold/40";

export function InquiryForm() {
  const inquiry = useDispatchStore((state) => state.inquiry);
  const updateInquiry = useDispatchStore((state) => state.updateInquiry);
  const submitted = useDispatchStore((state) => state.submitted);
  const markSubmitted = useDispatchStore((state) => state.markSubmitted);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Name: ${inquiry.name}`,
      `Phone: ${inquiry.phone}`,
      `Email: ${inquiry.email}`,
      `MC: ${inquiry.mc}`,
      `Truck: ${inquiry.equipment}`,
      `Lanes: ${inquiry.base}`,
      "",
      inquiry.note,
    ];
    markSubmitted();
    window.location.href = `mailto:desk@4freightdispatch.com?subject=${encodeURIComponent("Dispatch request for 4 Freight")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-[22px] bg-card p-5 text-ink"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <label className="grid gap-1.5 text-sm font-semibold">
        Name
        <input className={fieldClass} required autoComplete="name" value={inquiry.name} onChange={(event) => updateInquiry({ name: event.target.value })} />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Phone
          <input className={fieldClass} required type="tel" autoComplete="tel" value={inquiry.phone} onChange={(event) => updateInquiry({ phone: event.target.value })} />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Email
          <input className={fieldClass} required type="email" autoComplete="email" value={inquiry.email} onChange={(event) => updateInquiry({ email: event.target.value })} />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          MC number
          <input className={fieldClass} required inputMode="numeric" placeholder="MC-000000" value={inquiry.mc} onChange={(event) => updateInquiry({ mc: event.target.value })} />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Truck
          <select className={fieldClass} required value={inquiry.equipment} onChange={(event) => updateInquiry({ equipment: event.target.value })}>
            <option value="">Select</option>
            <option>Box truck, 16 ft</option>
            <option>Box truck, 20 ft</option>
            <option>Box truck, 24 ft</option>
            <option>Box truck, 26 ft</option>
            <option>Dry van</option>
            <option>Reefer</option>
            <option>Flatbed</option>
            <option>Step deck</option>
            <option>Heavy haul</option>
            <option>Power only</option>
            <option>More than one truck</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        Home base and preferred lanes
        <input className={fieldClass} required placeholder="Dallas, TX · Midwest and Southeast" value={inquiry.base} onChange={(event) => updateInquiry({ base: event.target.value })} />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Anything the desk should know
        <textarea className={`${fieldClass} min-h-28 resize-y`} rows={4} placeholder="Team or solo, home time, rate floor." value={inquiry.note} onChange={(event) => updateInquiry({ note: event.target.value })} />
      </label>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 font-medium text-ink">
        Request a dispatch call
      </button>
      <p className={`text-sm ${submitted ? "text-emerald-800" : "text-muted"}`}>
        {submitted
          ? "Your email app should open with this request addressed to the 4 Freight desk. The note stays on this page if you need to edit it."
          : "Sending opens your email to desk@4freightdispatch.com with this note filled in."}
      </p>
    </motion.form>
  );
}
