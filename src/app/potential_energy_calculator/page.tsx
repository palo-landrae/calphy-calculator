"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import InputItem from "@/components/custom/InputItem";
import { MassUnit, massConversionRates, massUnits } from "@/types/Mass";
import {
  GravityUnit,
  gravityConversionRates,
  gravityUnits,
} from "@/types/Gravity";
import { MeterUnit, metersConversionRates } from "@/types/Meters";
import PotentialEnergyDescription from "@/components/custom/PotentialEnergyDescription";
import Image from "next/image";

export default function PotentialEnergyCalculator() {
  const [potentialEnergy, setPotentialEnergy] = useState("");
  const [mass, setMass] = useState("");
  const [gravity, setGravity] = useState("9.81");
  const [height, setHeight] = useState("");
  const [answer, setAnswer] = useState("");

  const [potentialEnergyUnit, setPotentialEnergyUnit] = useState("J");
  const [massUnit, setMassUnit] = useState("kg");
  const [gravityUnit, setGravityUnit] = useState("m/s2");
  const [heightUnit, setHeightUnit] = useState("m");

  const calculate = () => {
    const arrLength = [potentialEnergy, mass, gravity, height].filter(
      (item) => item !== "",
    ).length;
    if (arrLength < 3) {
      setAnswer("Please add more inputs to continue.");
      return;
    }

    if (
      isNaN(parseFloat(potentialEnergy)) ||
      isNaN(parseFloat(mass)) ||
      isNaN(parseFloat(gravity)) ||
      isNaN(parseFloat(height))
    ) {
      setAnswer("Please enter numerical values.");
      return;
    }

    if (potentialEnergy && mass && gravity && height) {
      setAnswer("Please remove one input to calculate.");
      return;
    }

    const convertedMass =
      parseFloat(mass) * massConversionRates[massUnit as MassUnit];
    const convertedGravity =
      parseFloat(gravity) * gravityConversionRates[gravityUnit as GravityUnit];
    const convertedHeight =
      parseFloat(height) * metersConversionRates[heightUnit as MeterUnit];

    if (!potentialEnergy) {
      const answer = convertedMass * convertedGravity * convertedHeight;
      setAnswer(`PE = ${answer.toPrecision(2)} J`);
      return;
    }

    if (!mass) {
      const convertedPotentialEnergy = parseFloat(potentialEnergy);
      const answer =
        convertedPotentialEnergy / (convertedGravity * convertedHeight);
      setAnswer(`m = ${answer.toPrecision(2)} kg`);
      return;
    }

    if (!gravity) {
      const convertedPotentialEnergy = parseFloat(potentialEnergy);
      const answer =
        convertedPotentialEnergy / (convertedMass * convertedHeight);
      setAnswer(`g = ${answer.toPrecision(2)} m/s²`);
      return;
    }

    if (!height) {
      const convertedPotentialEnergy = parseFloat(potentialEnergy);
      const answer =
        convertedPotentialEnergy / (convertedMass * convertedGravity);
      setAnswer(`h = ${answer.toPrecision(2)} m`);
      return;
    }
  };

  return (
    <div className="flex gap-2 flex-col max-w-3xl mx-auto">
      <Label className="text-3xl">Potential Energy Calculator</Label>
      <div className="flex items-center justify-center">
        <Image
          src="/potential.png"
          alt="boy climbing stairs"
          width={400}
          height={400}
        />
      </div>
      <PotentialEnergyDescription />
      <InputItem
        value={potentialEnergy}
        setValue={setPotentialEnergy}
        labelText="Potential Energy (U)"
        defaultUnit="J"
        units={["J"]}
        setUnit={setPotentialEnergyUnit}
        unit={potentialEnergyUnit}
        isDisabled={true}
      />
      <InputItem
        value={mass}
        setValue={setMass}
        labelText="Mass (m)"
        defaultUnit="kg"
        units={massUnits.map((m) => m)}
        setUnit={setMassUnit}
        unit={massUnit}
      />
      <InputItem
        value={gravity}
        setValue={setGravity}
        labelText="Gravity (g)"
        defaultUnit="m/s2"
        units={gravityUnits.map((m) => m)}
        setUnit={setGravityUnit}
        unit={gravityUnit}
      />
      <InputItem
        value={height}
        setValue={setHeight}
        labelText="Height (h)"
        defaultUnit="m"
        units={massUnits.map((m) => m)}
        setUnit={setHeightUnit}
        unit={heightUnit}
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
