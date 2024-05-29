export const massUnits = ["kg", "g", "lb", "oz"] as const;
export type MassUnit = (typeof massUnits)[number];

export const massConversionRates: Record<MassUnit, number> = {
  kg: 1,
  g: 1000,
  lb: 0.453592,
  oz: 0.0283495,
};
