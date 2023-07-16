import { Grid, Input } from "@nextui-org/react";
import React from "react";

export default function SalaryInput() {
  return (
    <Grid>
      <Input
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
