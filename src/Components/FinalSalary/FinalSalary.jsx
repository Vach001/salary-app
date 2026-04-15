import { useSelector } from "react-redux";
import { selectFinalSalary } from "../../features/finalSalary/finalSalarySlice";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function FinalSalary() {
  const finalSalary = useSelector(selectFinalSalary);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);
  const salaryType = useSelector((state) => state.salaryType?.salaryType || "GROSS");
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } = useCopy();

  const displayValue = salary > 0 ? finalSalary : 0;

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>
          {salaryType === "GROSS" ? "ՄԱՔՈՒՐ ԱՇԽԱՏԱՎԱՐՁ" : "ԳՐԱՆՑՎԱԾ ԱՇԽԱՏԱՎԱՐՁ"}
        </span>
      </div>

      <div
        onClick={() => handleCopy(displayValue)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>{displayValue.toLocaleString()}</span>
        {!copied && isHovered && (
          <span className={styles.copyTooltip}>Պատճենել</span>
        )}
        {copied && isHovered && (
          <span className={styles.copyTooltip}>Պատճենված է</span>
        )}
      </div>
    </div>
  );
}