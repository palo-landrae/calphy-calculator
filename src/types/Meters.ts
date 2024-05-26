export const metersUnits = ["m", "in", "ft", "mi", "km", "cm"] as const;
export type MeterUnit = (typeof metersUnits)[number];

export const metersConversionRates: Record<MeterUnit, number> = {
  m: 1,
  in: 0.0254,
  ft: 0.3048,
  mi: 1609.34,
  km: 1000,
  cm: 0.01,
};
