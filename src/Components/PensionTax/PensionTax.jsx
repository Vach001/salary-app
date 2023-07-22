import React from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

const { soc } = initialState;

export default function PensionTax() {
  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Սոցիալական վճար" value={soc} color="primary" />
    </Card>
  );
}
