import RouteCard from "@/components/custom/RouteCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="font-semibold">Physics Calculators</h1>
      <div className="grid grid-cols-3 gap-2 py-2">
        <RouteCard
          title="Work Calculator"
          content="Work is the product of the component of the force in the direction of the displacement and the magnitude of this displacement."
          href="/work_calculator"
          formula={`W = F \\cdot d`}
        />
        <RouteCard
          title="Kinetic Energy Calculator"
          content="Kinetic energy is the energy of motion. An object that has motion - whether it is vertical or horizontal motion - has kinetic energy."
          href="/kinetic_energy_calculator"
          formula={`E_k = \\frac{1}{2}mv^2`}
        />
        <RouteCard
          title="Potential Energy Calculator"
          content="Potential energy is energy stored in an object or system of objects."
          href="/potential_energy_calculator"
          formula={`U = mgh`}
        />
      </div>
    </main>
  );
}
