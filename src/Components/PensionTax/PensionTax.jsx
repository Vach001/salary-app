import React from "react";
import { Card, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectSalaryPensionTax } from "../../features/pensionTax/pensionTaxSlice";

export default function PensionTax() {
  const selectPensionTax = useSelector(selectSalaryPensionTax)

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
      rounded 
      label="Սոցիալական վճար" 
      value={selectPensionTax} 
      color="primary" 
      />
    </Card>
  );
}
