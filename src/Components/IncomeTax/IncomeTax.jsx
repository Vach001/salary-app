import React from "react";
import { Card, Input } from "@nextui-org/react";
import { selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { useSelector } from "react-redux";

export default function IncomeTax() {

  const selectIncomeTax = useSelector(selectSalaryIncomeTax)

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
        rounded 
        label="Եկամտային հարկ 20% / ՏՏ 10%" 
        value={selectIncomeTax}
        color="primary" 
      />
    </Card>
  );
}