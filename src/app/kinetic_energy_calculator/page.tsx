"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import InputItem from "@/components/custom/InputItem";
import { MassUnit, massConversionRates, massUnits } from "@/types/Mass";
import {
  VelocityUnit,
  velocityConversionRates,
  velocityUnits,
} from "@/types/Velocity";
import { BlockMath } from "react-katex";
import KineticEnergyDescription from "@/components/custom/KineticEnergyDescription";
import Image from "next/image";

export default function KineticEnergyCalculator() {
  const [kineticEnergy, setKineticEnergy] = useState("");
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [answer, setAnswer] = useState("");

  const [kineticEnergyUnit, setKineticEnergyUnit] = useState("J");
  const [massUnit, setMassUnit] = useState("kg");
  const [velocityUnit, setVelocityUnit] = useState("m/s");

  const calculateKineticEnergy = () => {
    const arrLength = [kineticEnergy, mass, velocity].filter(
      (item) => item !== "",
    ).length;
    if (arrLength < 2) {
      setAnswer("Please add more inputs to continue.");
      return;
    }

    if (
      isNaN(parseFloat(kineticEnergy)) ||
      isNaN(parseFloat(mass)) ||
      isNaN(parseFloat(velocity))
    ) {
      setAnswer("Please enter numerical values.");
      return;
    }

    if (kineticEnergy && mass && velocity) {
      setAnswer("Please remove one input to calculate.");
      return;
    }

    if (!kineticEnergy) {
      const convertedMass =
        parseFloat(mass) * massConversionRates[massUnit as MassUnit];
      const convertedVelocity =
        parseFloat(velocity) *
        velocityConversionRates[velocityUnit as VelocityUnit];
      const answer = 0.5 * convertedMass * Math.pow(convertedVelocity, 2);
      setAnswer(`KE = ${answer.toPrecision(2)} J`);
      return;
    }

    if (!mass) {
      const convertedKineticEnergy = parseFloat(kineticEnergy);
      const convertedVelocity =
        parseFloat(velocity) *
        velocityConversionRates[velocityUnit as VelocityUnit];
      const answer =
        (2 * convertedKineticEnergy) / Math.pow(convertedVelocity, 2);
      setAnswer(`m = ${answer.toPrecision(2)} kg`);
      return;
    }

    if (!velocity) {
      const convertedKineticEnergy = parseFloat(kineticEnergy);
      const convertedMass =
        parseFloat(mass) * massConversionRates[massUnit as MassUnit];
      const answer = Math.sqrt((2 * convertedKineticEnergy) / convertedMass);
      setAnswer(`v = ${answer.toPrecision(2)} m/s`);
      return;
    }
  };

  return (
    <div className="flex gap-2 flex-col max-w-3xl mx-auto">
      <Label className="text-3xl">Kinetic Energy Calculator</Label>
      <div className="flex items-center justify-center">
        <Image
          src="/kinetic.png"
          alt="boy riding a skateboard"
          width={400}
          height={400}
        />
      </div>
      <KineticEnergyDescription />
      <InputItem
        value={kineticEnergy}
        setValue={setKineticEnergy}
        labelText="Kinetic Energy (KE)"
        defaultUnit="J"
        isDisabled={true}
        unit={kineticEnergyUnit}
        setUnit={setKineticEnergyUnit}
        units={["J"]}
      />
      <InputItem
        value={mass}
        setValue={setMass}
        labelText="Mass (m)"
        defaultUnit="kg"
        unit={massUnit}
        setUnit={setMassUnit}
        units={massUnits.map((i) => i)}
        isDisabled={false}
      />
      <InputItem
        value={velocity}
        setValue={setVelocity}
        unit={velocityUnit}
        setUnit={setVelocityUnit}
        labelText="Velocity (v)"
        defaultUnit="m"
        units={velocityUnits.map((e) => e)}
      />
      <Button onClick={calculateKineticEnergy}>Calculate</Button>
      {answer && (
        <div className="bg-secondary rounded h-20 justify-center items-center flex">
          <Label className="text-xl">{answer}</Label>
        </div>
      )}
    </div>
  );
}
