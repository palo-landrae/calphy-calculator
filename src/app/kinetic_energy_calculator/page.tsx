"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import InputItem from "@/components/custom/InputItem";
import Image from "next/image";
export default function KineticEnergyCalculator() {
  const [work, setWork] = useState("");
  const [force, setForce] = useState("");
  const [distance, setDistance] = useState("");
  const [answer, setAnswer] = useState(0);

  const calculate = () => {
    setAnswer(parseFloat(force) * parseFloat(distance));
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
      />
      <InputItem
        value={force}
        setValue={setForce}
        labelText="Force (F)"
        defaultUnit="N"
      />
      <InputItem
        value={distance}
        setValue={setDistance}
        labelText="Distance (s)"
        defaultUnit="m"
      />
      <Button onClick={calculate}>Calculate</Button>
      <div className="bg-secondary rounded h-20 justify-center items-center flex">
        <Label className="text-xl">W = {answer} J</Label>
      </div>
    </div>
  );
}
