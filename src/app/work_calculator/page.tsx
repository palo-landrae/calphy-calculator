"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import InputItem from "@/components/custom/InputItem";
import Image from "next/image";
import { MeterUnit, metersConversionRates } from "@/types/Meters";

export default function WorkCalculator() {
  const [work, setWork] = useState("");
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");
  const [answer, setAnswer] = useState("");

  const [workUnit, setWorkUnit] = useState("J");
  const [forceUnit, setForceUnit] = useState("N");
  const [distanceUnit, setDistanceUnit] = useState("m");

  const calculate = () => {
    if (distance && work && force) {
      setAnswer("Please remove one input to calculate.");
      return;
    }

    if (!distance) {
      const answer = parseFloat(work) / parseFloat(force);
      setAnswer(`s = ${answer.toPrecision(2)} m`);
      return;
    }

    const convertedDistance =
      parseFloat(distance) * metersConversionRates[distanceUnit as MeterUnit];

    if (!work) {
      const answer = parseFloat(force) * convertedDistance;
      setAnswer(`W = ${answer.toPrecision(2)} J`);
    } else if (!force) {
      const answer = parseFloat(work) / convertedDistance;
      setAnswer(`F = ${answer.toPrecision(2)} N`);
    }
  };

  return (
    <div className="flex gap-2 flex-col max-w-xl mx-auto">
      <Label className="text-3xl">Work Calculator</Label>
      <p>
        The energy of Work (W) is the Force (F) multiplied by the displacement
        (s).
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/work.png"
          alt="boy pushing a square box"
          width={400}
          height={400}
        />
      </div>
      <InputItem
        value={work}
        setValue={setWork}
        labelText="Work (W)"
        defaultUnit="J"
        unit={workUnit}
        setUnit={setWorkUnit}
        units={["J", "MJ"]}
        isDisabled={true}
      />
      <InputItem
        value={force}
        setValue={setForce}
        labelText="Force (F)"
        defaultUnit="N"
        unit={forceUnit}
        setUnit={setForceUnit}
        units={["N"]}
        isDisabled={true}
      />
      <InputItem
        value={distance}
        setValue={setDistance}
        labelText="Distance (s)"
        defaultUnit="m"
        unit={distanceUnit}
        setUnit={setDistanceUnit}
        units={["m", "in", "ft", "cm", "km", "mi"]}
      />
      <Button onClick={calculate}>Calculate</Button>
      {answer && (
        <div className="bg-secondary rounded h-20 justify-center items-center flex">
          <Label className="text-xl">{answer}</Label>
        </div>
      )}
    </div>
  );
}
