import React, { useEffect, useState } from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState }  from "../../constants/initialState.constants";
import calculateSalary, { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT"
import SalaryInput from "../SalaryInput/SalaryInput";
import { incomeTax, selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { useDispatch, useSelector } from "react-redux";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { inputSalary } from "../../features/salaryInput/salaryInputSlice";
// import { initialState } from "../../constants/initialState.constants";
// import { salaryAction } from "../../constants/salaryAction.constants";

export default function IncomeTax() {
  const [incomeTax, setIncomeTax] = useState(0)

  useEffect(()=>{
    setIncomeTax(initialState.incomeTax)
  })
  // const selectIncomeTax = useSelector(selectSalaryIncomeTax)
  // const dispatch = useDispatch()
  
  // // dispatch(incomeTax())
  
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
        color="primary" 
        // placeholder={selectIncomeTax}
      />
    </Card>
  );
}
