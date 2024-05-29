import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const PotentialEnergyDescription = () => {
  return (
    <div>
      <p>
        Potential Energy is the stored energy of an object given its position
        relative to a body.
      </p>
      <p>
        Gravitational potential energy is one type of potential energy and is
        equal to the product of the object&#39;s mass (m), the acceleration
        caused by gravity (g), and the object&#39;s height (h) as distance from
        the surface of the ground (the body).
      </p>
      <p>The formula for gravitational potential energy (PE) is:</p>
      <BlockMath math="\text{PE} = mgh" />
      <p>where:</p>
      <ul>
        <li>m is the mass of the object,</li>
        <li>g is the acceleration due to gravity,</li>
        <li>and h is the height or distance from the surface of the ground.</li>
      </ul>
    </div>
  );
};

export default PotentialEnergyDescription;
