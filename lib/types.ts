export type Equipment = "dry-van" | "box-truck" | "reefer" | "flatbed" | "specialized";

export type EquipmentFilter = "all" | Equipment;

export type TruckStatus = "on-load" | "available" | "at-receiver";

export type Truck = {
  unit: string;
  year: number;
  model: string;
  equipment: Equipment;
  equipmentLabel: string;
  detail: string;
  loads: number;
  partner: string;
  base: string;
  origin: string;
  destination: string;
  lane: string;
  weeklyGross: number;
  status: TruckStatus;
  image: string;
  imageAlt: string;
  blurb: string;
};

export type Inquiry = {
  name: string;
  phone: string;
  email: string;
  mc: string;
  equipment: string;
  base: string;
  note: string;
};
