export const velocityUnits = [
  "m/s",
  "cm/s",
  "ft/h",
  "ft/s",
  "in/s",
  "km/h",
  "m/h",
  "mi/h",
] as const;

export type VelocityUnit = (typeof velocityUnits)[number];

export const velocityConversionRates: Record<VelocityUnit, number> = {
  "m/s": 1,
  "cm/s": 0.01,
  "ft/h": 0.0000846667,
  "ft/s": 0.3048,
  "in/s": 0.0254,
  "km/h": 0.277778,
  "m/h": 0.000277778,
  "mi/h": 0.44704,
};
