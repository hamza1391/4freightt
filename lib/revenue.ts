export const months = [
  { label: "Jan", name: "January", trucks: 28, freight: 800_000, fee: 64_000, week: 6_600 },
  { label: "Feb", name: "February", trucks: 30, freight: 870_000, fee: 69_600, week: 6_700 },
  { label: "Mar", name: "March", trucks: 32, freight: 956_000, fee: 76_480, week: 6_900 },
  { label: "Apr", name: "April", trucks: 33, freight: 972_000, fee: 77_760, week: 6_800 },
  { label: "May", name: "May", trucks: 36, freight: 1_107_000, fee: 88_560, week: 7_100 },
  { label: "Jun", name: "June", trucks: 38, freight: 1_201_000, fee: 96_080, week: 7_300 },
  { label: "Jul", name: "July", trucks: 40, freight: 1_247_000, fee: 99_760, week: 7_200 },
  { label: "Aug", name: "August", trucks: 43, freight: 1_378_000, fee: 110_240, week: 7_400 },
  { label: "Sep", name: "September", trucks: 46, freight: 1_494_000, fee: 119_520, week: 7_500 },
  { label: "Oct", name: "October", trucks: 48, freight: 1_548_000, fee: 123_840, week: 7_450 },
] as const;

export const yearFreight = months.reduce((sum, month) => sum + month.freight, 0);
export const yearFee = months.reduce((sum, month) => sum + month.fee, 0);

export const equipmentMix = [
  { label: "Dry van", share: 36, amount: 557_280 },
  { label: "Box truck", share: 8, amount: 123_840 },
  { label: "Reefer", share: 27, amount: 417_960 },
  { label: "Flatbed", share: 19, amount: 294_120 },
  { label: "Specialized", share: 10, amount: 154_800 },
] as const;

export const laneGroups = [
  { label: "Texas triangle", trucks: 9, gross: 67_500 },
  { label: "Midwest to East Coast", trucks: 8, gross: 57_600 },
  { label: "California reefer", trucks: 7, gross: 56_000 },
  { label: "Southeast regional", trucks: 5, gross: 35_000 },
  { label: "Mountain and heavy haul", trucks: 5, gross: 42_500 },
  { label: "South Central flatbed", trucks: 8, gross: 56_400 },
  { label: "Box truck, city and regional", trucks: 6, gross: 42_600 },
] as const;

export const kpis = [
  { label: "Gross freight booked", value: yearFreight, note: "Paid to carriers · Jan–Oct 2026" },
  { label: "4 Freight Dispatch revenue", value: yearFee, note: "8% service fee on that gross" },
  { label: "October company revenue", value: 123_840, note: "From $1,548,000 gross · 48 trucks" },
  { label: "This week’s fee", value: 28_608, note: "From $357,600 gross on the board" },
] as const;
