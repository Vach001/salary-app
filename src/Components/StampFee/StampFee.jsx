import { useSelector } from "react-redux";
import { selectSalaryStampFee } from "../../features/stampFee/stampFeeSlice";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function StampFee() {
  const stampFee = useSelector(selectSalaryStampFee);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } =
    useCopy();

  const displayValue = salary > 0 ? stampFee : 0;

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Դրոշմանիշային վճար</span>
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
