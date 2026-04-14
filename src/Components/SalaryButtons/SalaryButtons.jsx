import { useEffect } from "react";
import styles from "./SalaryButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSalaryType, selectSalaryButtons } from "../../features/salaryButtons/salaryButtonsSlice";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTaxCalculations } from "../../hooks/useTaxCalculations";

export default function SalaryButtons() {
  const gross = "Իմացեք մաքուր աշխատավարձը";
  const net = "Իմացեք գրանցվածը";
  const selectSalary = useSelector(selectSalaryButtons);
  const dispatch = useDispatch();
  const { recalculateAll } = useTaxCalculations();
  const salary = useSelector((state) => state.salaryInput?.salary || 0);

  // Երբ salaryType-ը փոխվում է, վերահաշվարկել
  useEffect(() => {
    if (salary > 0) {
      recalculateAll();
    }
  }, [selectSalary, salary, recalculateAll]);

  const handleSalaryChange = (value) => {
    dispatch(setSalaryType(value));
  };

  return (
    <>
      <ToggleButtonGroup className={styles.buttons} color="primary" value={selectSalary} exclusive>
        <ToggleButton value="GROSS" onClick={() => handleSalaryChange("GROSS")}>
          {gross}
        </ToggleButton>
        <ToggleButton value="NET" onClick={() => handleSalaryChange("NET")}>
          {net}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}