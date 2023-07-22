import React from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

const { sumFee } = initialState;

export default function SumFee() {
  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Ընդամենը հարկեր" value={sumFee} color="primary" />
    </Card>
  );
}