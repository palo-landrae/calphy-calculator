import Link from "next/link";
export default function NavigationBar() {
  return (
    <nav className="flex justify-between py-10 items-center bg-white px-3">
      <Link href={"/"} className="text-xl text-gray-800 font-bold">
        CalphyCalculator
      </Link>
      <div className="items-center gap-6 hidden lg:flex">
        <Link href={"/"} className="font-semibold text-gray-700">
          Home
        </Link>
        <Link href={"/work_calculator"} className="font-semibold text-gray-700">
          Work
        </Link>
        <Link
          href={"/kinetic_energy_calculator"}
          className="font-semibold text-gray-700"
        >
          Kinetic Energy
        </Link>
        <Link
          href={"/potential_energy_calculator"}
          className="font-semibold text-gray-700"
        >
          Potential Energy
        </Link>
      </div>
    </nav>
  );
}
