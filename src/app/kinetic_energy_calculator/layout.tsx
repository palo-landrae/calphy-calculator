import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinetic Energy Calculator",
  description:
    "The Kinetic Energy Calculator finds the unknown variable in the physics equation for kinetic energy of a rigid body.",
};

export default function KineticEnergyCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
