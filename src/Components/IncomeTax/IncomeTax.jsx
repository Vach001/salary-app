import React, { useEffect, useState } from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState }  from "../../constants/initialState.constants";
import calculateSalary from "../../helpers/calculateNetSalaryWithIT"
import SalaryInput from "../SalaryInput/SalaryInput";
import { selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";

// let { incomeTax } = initialState;

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

  // useEffect(()=>{
  //   if(salaryType === "GROSS") {
  //     dispatch(calculateGrossSalary());
  //   }
  //   if (salaryType === "NET") {
  //     if(iTCheckType) {
  //       dispatch(calculateNetSalaryWithIT())
  //     } else {
  //       dispatch(calculateNetSalaryDisIT());
  //     }      
  //   }
  // })

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
