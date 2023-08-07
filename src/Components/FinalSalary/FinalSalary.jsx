import React from "react";
import { Card, Input, Button } from "@nextui-org/react";
import { selectFinalSalary } from "../../features/finalSalary/finalSalarySlice";
import { useDispatch, useSelector } from "react-redux";
// import { initialState } from "../../constants/initialState.constants";

// const { finalSalary } = initialState;

export default function FinalSalary() {
  const finalSalary = useSelector(selectFinalSalary)
  const dispatch = useDispatch()

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