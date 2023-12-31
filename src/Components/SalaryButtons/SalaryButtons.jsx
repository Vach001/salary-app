import React, { useEffect } from "react";
import styles from "./SalaryButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { grossSalary, netSalary, selectSalaryButtons } from "../../features/salaryButtons/salaryButtonsSlice";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { salaryAction } from "../../constants/salaryAction.constants";
import selectedTypes from "../../helpers/selectedTypes";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";
import { incomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { pensionTax } from "../../features/pensionTax/pensionTaxSlice";
import { stampFee } from "../../features/stampFee/stampFeeSlice";
import { sumFee } from "../../features/sumFee/sumFeeSlice";
import { finalSalary } from "../../features/finalSalary/finalSalarySlice";

export default function SalaryButtons() {
  const gross = "Իմացեք մաքուր աշխատավարձը";
  const net = " Իմացեք գրանցվածը";
  const selectSalary = useSelector(selectSalaryButtons)
  const dispatch = useDispatch()
  selectedTypes.salaryType = selectSalary;

  useEffect(()=>{
    calculateGrossSalary()
    calculateNetSalaryDisIT()
    calculateNetSalaryWithIT()
    dispatch(incomeTax())
    dispatch(pensionTax())
    dispatch(stampFee())
    dispatch(sumFee())
    dispatch(finalSalary())
  }, [selectSalary])

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
