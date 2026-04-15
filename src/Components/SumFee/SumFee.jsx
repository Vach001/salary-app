import { useSelector } from "react-redux";
import { selectSalarySumFee } from "../../features/sumFee/sumFeeSlice";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function SumFee() {
  const sumFee = useSelector(selectSalarySumFee);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } = useCopy();

  const displayValue = salary > 0 ? sumFee : 0;

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Ընդամենը հարկեր</span>
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
