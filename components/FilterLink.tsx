"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import type { Equipment } from "@/lib/types";
import { useDispatchStore } from "@/store/useDispatchStore";

export function FilterLink({ equipment, children }: { equipment: Equipment; children: ReactNode }) {
  const router = useRouter();
  const setEquipment = useDispatchStore((state) => state.setEquipment);

  return (
    <button
      type="button"
      className="font-medium text-gold-deep"
      onClick={() => {
        setEquipment(equipment);
        router.push("/fleet");
      }}
    >
      {children}
    </button>
  );
}
