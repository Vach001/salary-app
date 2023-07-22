import React from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

const { droshmanishayin } = initialState;

export default function StampFee() {
  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Դրոշմանիշային վճար" value={droshmanishayin} color="primary" />
    </Card>
  );
}
