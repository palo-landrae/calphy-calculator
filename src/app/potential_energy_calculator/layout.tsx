import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Potential Energy Calculator",
  description:
    "This GPE calculator will find the missing variable in the physics equation for gravitational potential energy, when three of the variables are known.",
};

export default function KineticEnergyCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
