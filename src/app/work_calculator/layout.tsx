import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Calculator",
  description:
    "This calculator will find the missing variable in the physics equation for Work, when two of the variables are known.",
};

export default function KineticEnergyCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
