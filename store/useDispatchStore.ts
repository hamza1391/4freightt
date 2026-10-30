import { create } from "zustand";
import { emptyInquiry } from "@/lib/site";
import type { EquipmentFilter, Inquiry } from "@/lib/types";

type DispatchState = {
  equipment: EquipmentFilter;
  setEquipment: (equipment: EquipmentFilter) => void;
  slide: number;
  setSlide: (slide: number) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  inquiry: Inquiry;
  updateInquiry: (patch: Partial<Inquiry>) => void;
  resetInquiry: () => void;
  submitted: boolean;
  markSubmitted: () => void;
};

export const useDispatchStore = create<DispatchState>((set) => ({
  equipment: "all",
  setEquipment: (equipment) => set({ equipment }),
  slide: 0,
  setSlide: (slide) => set({ slide }),
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  inquiry: emptyInquiry,
  updateInquiry: (patch) =>
    set((state) => ({ inquiry: { ...state.inquiry, ...patch }, submitted: false })),
  resetInquiry: () => set({ inquiry: emptyInquiry, submitted: false }),
  submitted: false,
  markSubmitted: () => set({ submitted: true }),
}));
