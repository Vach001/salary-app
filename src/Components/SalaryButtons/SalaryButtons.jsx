import { Button } from "@nextui-org/react";
import React from "react";
import styles from "./SalaryButtons.module.css";
// import { salaryAction } from "../../constants/salaryAction.constants";
// import selectedTypes from "../../helpers/selectedTypes";
import { useDispatch, useSelector } from "react-redux";
import { grossSalary, netSalary, selectSalaryButtons } from "../../features/salaryButtons/salaryButtonsSlice";

export default function SalaryButtons() {
  const gross = "Իմացեք մաքուր աշխատավարձը";
  const net = " Իմացեք գրանցվածը";

  const selectSalary = useSelector(selectSalaryButtons)
  const dispatch = useDispatch()

  // const handleGross = () => {
  //   salaryType = GROSS;

  // };
  // const handleNET = () => {
  //   salaryType = NET;

  // };

  

  return (
    <>
      <Button.Group 
      className={styles.buttons} 
      autoFocus
      >
        <Button
          onPress={()=> dispatch(grossSalary())}
          ghost
          
        >
          {gross}
        </Button>

        <Button
          onPress={()=> dispatch(netSalary())}
          ghost
        >
          {net}
        </Button>
      </Button.Group>
    </>
  );
}
