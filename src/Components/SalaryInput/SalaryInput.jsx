import { Grid, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { initialState } from "../../constants/initialState.constants";

let sal = initialState.sal;

export default function SalaryInput() {
  const [salary, setSalary] = useState('')

  const handleChange = (e) => {
    setSalary(e.target.value)
  }
  sal = salary
  
  return (
    <Grid>
      <Input
        value={salary}
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
