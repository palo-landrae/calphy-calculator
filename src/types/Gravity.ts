export const gravityUnits = ["m/s2", "cm/s2", "ft/s2", "in/s2"] as const;
export type GravityUnit = (typeof gravityUnits)[number];

export const gravityConversionRates: Record<GravityUnit, number> = {
  "m/s2": 1,
  "cm/s2": 0.01,
  "ft/s2": 0.3048,
  "in/s2": 0.0254,
};
