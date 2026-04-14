import { Card, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./YearSelector.module.css";

const selectYear = (state) => state.year?.year || 2026;

export default function YearSelector() {
  const dispatch = useDispatch();
  const selectedYear = useSelector(selectYear);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value, 10);
    dispatch({ type: "SET_YEAR", payload: year });
    console.log("🔵 YearSelector: selected year =", year, "type:", typeof year);

    // Վերահաշվարկել բոլոր հարկերը նոր տարեթվի համար
    dispatch({ type: "SET_STAMP_FEE", payload: { salary: salary, year: year } });
    dispatch({ type: "SET_SALARY", payload: { salary: salary, year: year } });
  };

  return (
    <Card className={styles.yearSelectorContainer}>
      <div className={styles.yearSelectorInner}>
        <div className={styles.yearLabel}>
          <span className={styles.yearIcon}>📅</span>
          <Text className={styles.yearText}>
            Հաշվարկի տարեթիվ
          </Text>
        </div>
        
        <div className={styles.yearSelect}>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className={styles.yearSelectInput}
          >
            <option value={2024}>2024 </option>
            <option value={2025}>2025 </option>
            <option value={2026}>2026 </option>
          </select>
        </div>
      </div>
      
      <div className={styles.yearHint}>
        * Փոխելով տարեթիվը՝ հաշվարկը կկատարվի համապատասխան տարվա օրենքներով
      </div>
    </Card>
  );
}