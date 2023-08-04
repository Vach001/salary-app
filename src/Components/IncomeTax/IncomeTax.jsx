import React, { useEffect, useState } from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState }  from "../../constants/initialState.constants";
import calculateSalary from "../../helpers/calculateSalary"
import SalaryInput from "../SalaryInput/SalaryInput";
import { selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { useDispatch, useSelector } from "react-redux";

let incomeTax  = initialState.incomeTax;

export default function IncomeTax() {
  // <SalaryInput />

  // const [income, setIncome] = useState(incomeTax);

  // function handleIncome (e) {
  //   calculateSalary()
  //   setIncome(income)

  //   console.log(initialState)
  // }
  const incomeTax = useSelector(selectSalaryIncomeTax)
  const dispatch = useDispatch()

  


  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
      rounded 
      label="Եկամտային հարկ 20% / ՏՏ 10%" 
      value={incomeTax} 
      color="primary" />
    </Card>
  );
}
