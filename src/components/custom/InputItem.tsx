"use client";
import { SetStateAction } from "react";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  labelText: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  defaultUnit: string;
  unit: string;
  setUnit: React.Dispatch<SetStateAction<string>>;
  units: string[];
  isDisabled?: boolean;
};

export default function InputItem({ ...props }: Props) {
  return (
    <div className="flex flex-row items-center gap-2">
      <Label htmlFor="email" className="w-40 spacing-2 tracking-wider">
        {props.labelText}
      </Label>
      <Input
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <Select
        onValueChange={(v) => props.setUnit(v)}
        disabled={props.isDisabled}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={props.defaultUnit} />
        </SelectTrigger>
        <SelectContent className="flex">
          {props.units.map((unit) => (
            <SelectItem value={unit} key={unit}>
              {unit}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
