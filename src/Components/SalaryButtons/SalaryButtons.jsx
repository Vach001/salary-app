import React from "react";
import styles from "./SalaryButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { grossSalary, netSalary, selectSalaryButtons } from "../../features/salaryButtons/salaryButtonsSlice";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { salaryAction } from "../../constants/salaryAction.constants";

export default function SalaryButtons() {
  const gross = "Իմացեք մաքուր աշխատավարձը";
  const net = " Իմացեք գրանցվածը";
  const selectSalary = useSelector(selectSalaryButtons)
  const dispatch = useDispatch()

  return (
    <>
      <ToggleButtonGroup 
      className={styles.buttons}
      color="primary"
      value = {selectSalary}
      exclusive
      aria-label="Platform"
      >
        <ToggleButton
          value={salaryAction.GROSS}
          onClick={
            (e)=>{
              e.preventDefault();
              dispatch(grossSalary())
            }
          }
        >
          {gross}
        </ToggleButton >
        <ToggleButton 
          value={salaryAction.NET}
          onClick={
            (e)=>{
              e.preventDefault();
              dispatch(netSalary())
            }
          }
        >
          {net}
        </ToggleButton >
      </ToggleButtonGroup>
    </>
  );
}
