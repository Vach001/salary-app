import { Grid, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSalary, selectSalaryInput } from "../../../src/features/salaryInput/salaryInputSlice";
import { initialState } from "../../../src/constants/initialState.constants";
import { incomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { finalSalary } from "../../features/finalSalary/finalSalarySlice";
import { pensionTax } from "../../features/pensionTax/pensionTaxSlice";
import { sumFee } from "../../features/sumFee/sumFeeSlice";
import { stampFee } from "../../features/stampFee/stampFeeSlice";

export default function SalaryInput() {

  const salary = useSelector(selectSalaryInput)
  const dispatch = useDispatch()
  initialState.salary = salary

  useEffect(()=>{
    calculateGrossSalary();
    calculateNetSalaryWithIT();
    calculateNetSalaryDisIT();
    dispatch(incomeTax())
    dispatch(pensionTax())
    dispatch(stampFee())
    dispatch(sumFee())
    dispatch(finalSalary())
  }, [salary])

  return (
    <Grid>
      <Input
        value={salary}
        onChange={(evt) => {
          dispatch(inputSalary(evt.target.value))
        }}
        type="number"
        bordered
        labelPlaceholder="Մուտքագրե՛ք Ձեր աշխատավարձի չափը"
        color="primary"
        css={{
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "100%",
        }}
      />
    </Grid>
  );
}
