import React, { useState } from "react";
import { Card, Input } from "@nextui-org/react";
import { initialState } from "../../constants/initialState.constants";

let incomeTax  = initialState.incomeTax;
const sal = initialState.sal;

export default function IncomeTax() {
  const [incom, setIncom] = useState;

  function handleIncome (e) {
    setIncom(e.target.value)

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
      value={incomeTax} 
      onChange={handleIncome}
      color="primary" />
    </Card>
  );
}
