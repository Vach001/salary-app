import { Grid, Input } from "@nextui-org/react";
import React from "react";
// import { initialState } from "../../constants/initialState.constants";
// import calculateSalary from "../../helpers/calculateSalary";
import { useDispatch, useSelector } from "react-redux";
import { editSalaryinput, initialSalary, inputSalary, selectSalaryInput } from "../../features/salaryInput/salaryInputSlice";
import { initialState } from "../../constants/initialState.constants";
// import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
// import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
// import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";
// import selectedTypes from "../../helpers/selectedTypes";

// const { salaryType, pensionType, iTCheckType } = selectedTypes;

export default function SalaryInput() {

  const salary = useSelector(selectSalaryInput)
  const dispatch = useDispatch()

  initialState.salary = salary

  // useEffect(()=>{
  //   if(salaryType === "GROSS") {
  //     calculateGrossSalary();
  //   }
  //   if (salaryType === "NET") {
  //     if(iTCheckType) {
  //       calculateNetSalaryWithIT();
  //     } else {
  //       calculateNetSalaryDisIT();
  //     }      
  //   }
  //   console.log(initialState)
  // })
  // console.log(initialState)

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
