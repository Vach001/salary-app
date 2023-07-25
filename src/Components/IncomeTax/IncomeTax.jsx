import React from "react";
import { Button } from "@nextui-org/react";
import { Card, Input } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

const { incomeTax } = initialState;

export default function IncomeTax() {
  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Եկամտային հարկ 20% / ՏՏ 10%" value={incomeTax} color="primary" />
    </Card>
  );
}
