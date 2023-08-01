import React, { useState } from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState }  from "../../constants/initialState.constants";
import calculateSalary from "../../helpers/calculateSalary"
import SalaryInput from "../SalaryInput/SalaryInput";

let incomeTax  = initialState.incomeTax;

export default function IncomeTax() {
  <SalaryInput />

  const [income, setIncome] = useState(incomeTax);

  function handleIncome (e) {
    calculateSalary()
    setIncome(income)

    console.log(initialState)
  }

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
      rounded 
      label="Եկամտային հարկ 20% / ՏՏ 10%" 
      value={income} 
      onChange={handleIncome}
      color="primary" />
    </Card>
  );
}
