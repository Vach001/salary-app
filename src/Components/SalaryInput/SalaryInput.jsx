import { Grid, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { initialState } from "../../constants/initialState.constants";
import calculateSalary from "../../helpers/calculateSalary";

export default function SalaryInput() {
  const [newSalary, setNewSalary] = useState('')

  const handleChange = (e) => {
    setNewSalary(e.target.value)
    calculateSalary();
  }
  initialState.salary = Number(newSalary);

  return (
    <Grid>
      <Input
        value={newSalary}
        onChange={handleChange}
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
