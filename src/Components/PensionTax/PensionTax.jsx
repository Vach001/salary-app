import { useSelector } from "react-redux";
import { selectSalaryPensionTax } from "../../features/pensionTax/pensionTaxSlice";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function PensionTax() {
  const pensionTax = useSelector(selectSalaryPensionTax);
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } = useCopy();

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Սոցիալական վճար</span>
      </div>

      <div
        onClick={() => handleCopy(pensionTax)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>{pensionTax.toLocaleString()}</span>
        {!copied && isHovered && <span className={styles.copyTooltip}>Պատճենել</span>}
        {copied && isHovered && <span className={styles.copyTooltip}>Պատճենված է</span>}
      </div>
    </div>
  );
}