import { Grid, Input } from "@nextui-org/react";
import React, { useState } from "react";
// import { initialState } from "../../constants/initialState.constants";
// import calculateSalary from "../../helpers/calculateSalary";
import { useDispatch, useSelector } from "react-redux";
import { editSalaryinput, initialSalary, selectSalaryInput } from "../../features/salaryInput/salaryInputSlice";
import { initialState } from "../../constants/initialState.constants";

export default function SalaryInput() {

  const salary = useSelector(selectSalaryInput)
  const dispatch = useDispatch()
  initialState.salary = salary

  console.log(initialState)

  return (
    <Grid>
      <Input
        value={salary}
        onChange={(evt) => {
          dispatch(editSalaryinput(evt.target.value))
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
