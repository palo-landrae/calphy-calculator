import Link from "next/link";
export default function NavigationBar() {
  return (
    <nav className="flex justify-between py-10 items-center bg-white">
      <h1 className="text-xl text-gray-800 font-bold">CalphyCalculator</h1>
      <div className="flex items-center">
        <Link href={"/"} className="font-semibold text-gray-700">
          Home
        </Link>
        <Link href={"/"} className="font-semibold text-gray-700">
          Calculators
        </Link>
      </div>
    </nav>
  );
}
