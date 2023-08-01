import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./InputButtons.module.css";
import { salaryAction } from "../../constants/salaryAction.constants";
import selectedTypes from "../../helpers/selectedTypes";

let salaryType = selectedTypes.salaryType;
const { GROSS, NET } = salaryAction;

export default function InputButtons() {
  const gross = "Իմացեք մաքուր աշխատավարձը";
  const net = " Իմացեք գրանցվածը";

  const handleGross = () => {
    salaryType = GROSS;

  };
  const handleNET = () => {
    salaryType = NET;

  };

  

  return (
    <>
      <Button.Group 
      className={styles.buttons} 
      autoFocus
      >
        <Button
          onPress={handleGross}
          ghost
          
        >
          {gross}
        </Button>

        <Button
          onPress={handleNET}
          ghost
        >
          {net}
        </Button>
      </Button.Group>
    </>
  );
}
