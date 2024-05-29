import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const KineticEnergyDescription = () => {
  return (
    <div>
      <p>The Kinetic Energy Calculator employs the formula:</p>
      <BlockMath math="\text{KE} = \frac{1}{2}mv^2" />
      <p>
        where kinetic energy (KE) is equal to one half of the mass (m)
        multiplied by the square of the velocity (v²). This versatile tool
        allows you to input any two known values to determine the third. Simply
        enter the units for each value, and the calculator will automatically
        handle the unit conversions.
      </p>
    </div>
  );
};

export default KineticEnergyDescription;
