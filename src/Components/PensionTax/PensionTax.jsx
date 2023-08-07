import React from "react";
import { Card, Input } from "@nextui-org/react";
// import { initialState } from "../../constants/initialState.constants";
import { useDispatch, useSelector } from "react-redux";
import { selectSalaryPensionTax } from "../../features/pensionTax/pensionTaxSlice";



export default function PensionTax() {
  const pensionTax = useSelector(selectSalaryPensionTax)
  const dispatch = useDispatch()


  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Սոցիալական վճար" value={pensionTax} color="primary" />
    </Card>
  );
}
