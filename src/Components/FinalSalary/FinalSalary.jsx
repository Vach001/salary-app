import React from "react";
import { Card, Input, Button } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

const { finalSalary } = initialState;

export default function FinalSalary() {
  return (
    <>
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="ԱՇԽԱՏԱՎԱՐՁ" value={finalSalary} color="primary" />
    </Card>
    <Button>Հաշվել աշխատավարձը</Button>
    </>
  );
}