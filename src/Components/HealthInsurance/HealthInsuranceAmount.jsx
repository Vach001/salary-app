import { useSelector } from "react-redux";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function HealthInsuranceAmount() {
  const healthValue = useSelector(
    (state) => state.healthInsurance?.healthInsurance || 0,
  );
  const year = useSelector(
    (state) => state.year?.year || new Date().getFullYear(),
  );
  const salary = useSelector((state) => state.salaryInput?.salary || 0);
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } =
    useCopy();

  const displayValue = salary > 0 ? healthValue : 0;

  if (year < 2026) return null;

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Առողջապահության ապահովագրություն</span>
      </div>

      <div
        onClick={() => handleCopy(displayValue)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>
          {displayValue.toLocaleString()}
        </span>
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
