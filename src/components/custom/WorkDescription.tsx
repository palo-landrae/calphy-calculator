import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const WorkDescription = () => {
  return (
    <div>
      <p>
        Work (W) is a measure of energy transfer that occurs when a force (F) is
        applied to an object and causes it to move a distance (s) in the
        direction of the force.
      </p>
      <p>The formula for calculating work is:</p>
      <BlockMath math="\text{Work (W)} = \text{Force (F)} \times \text{Displacement (s)}" />
      <p>where:</p>
      <ul>
        <li>W is the work done,</li>
        <li>F is the applied force,</li>
        <li>
          and s is the displacement or distance moved in the direction of the
          force.
        </li>
      </ul>
      <p>
        Work is expressed in joules (J) in the International System of Units
        (SI).
      </p>
    </div>
  );
};

export default WorkDescription;
