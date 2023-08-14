import React from "react";
import { Card, Input } from "@nextui-org/react";
import { selectFinalSalary } from "../../features/finalSalary/finalSalarySlice";
import { useSelector } from "react-redux";

export default function FinalSalary() {
  const finalSalary = useSelector(selectFinalSalary)

  return (
    <>
      <Card
        css={{
          bgColor: "rgb(226, 246, 180, 0.5)",
        }}
      >
        <Input 
        rounded label="ԱՇԽԱՏԱՎԱՐՁ" 
        value={finalSalary} 
        color="primary" />
      </Card>
    </>
  );
}