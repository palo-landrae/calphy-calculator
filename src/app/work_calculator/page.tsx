"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import InputItem from "@/components/custom/InputItem";
import Image from "next/image";
import { MeterUnit, metersConversionRates } from "@/types/Meters";
import WorkDescription from "@/components/custom/WorkDescription";

export default function WorkCalculator() {
  const [work, setWork] = useState("");
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");
  const [answer, setAnswer] = useState("");

  const [workUnit, setWorkUnit] = useState("J");
  const [forceUnit, setForceUnit] = useState("N");
  const [distanceUnit, setDistanceUnit] = useState("m");

  const calculate = () => {
    const arrLength = [distance, work, force].filter(
      (item) => item !== "",
    ).length;
    if (arrLength < 2) {
      setAnswer("Please add more inputs to continue.");
      return;
    }

    if (
      isNaN(parseFloat(work)) ||
      isNaN(parseFloat(force)) ||
      isNaN(parseFloat(distance))
    ) {
      setAnswer("Please enter numerical values.");
      return;
    }

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
    <div className="flex gap-2 flex-col max-w-3xl mx-auto">
      <Label className="text-3xl">Work Calculator</Label>
      <div className="flex items-center justify-center">
        <Image
          src="/work.png"
          alt="boy pushing a square box"
          width={400}
          height={400}
        />
      </div>
      <WorkDescription />
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
